require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

// Cliente HTTP robusto para Turso
async function queryTurso(sql, args = []) {
    let dbUrl = (process.env.TURSO_DATABASE_URL || '').trim();
    if (dbUrl.startsWith('libsql://')) {
        dbUrl = dbUrl.replace('libsql://', 'https://');
    }
    dbUrl = dbUrl.replace(/\/$/, '');

    const token = (process.env.TURSO_AUTH_TOKEN || '').trim();

    if (!dbUrl || !token) {
        throw new Error("Faltan las variables TURSO_DATABASE_URL o TURSO_AUTH_TOKEN en las variables de entorno de Render.");
    }

    // Formateo seguro de argumentos
    const formattedArgs = args.map(arg => {
        if (typeof arg === 'number') {
            return { type: 'integer', value: String(arg) };
        }
        return { type: 'text', value: String(arg ?? '') };
    });

    const response = await fetch(`${dbUrl}/v2/pipeline`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            requests: [
                {
                    type: 'execute',
                    stmt: {
                        sql: sql,
                        args: formattedArgs
                    }
                },
                { type: 'close' }
            ]
        })
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("❌ Turso HTTP Error Status:", response.status, data);
        throw new Error(`Turso HTTP Error ${response.status}: ${JSON.stringify(data)}`);
    }

    const resObj = data.results?.[0];
    if (!resObj) throw new Error("Respuesta vacía de Turso");

    if (resObj.type === 'error') {
        console.error("❌ Turso SQL Error:", resObj.error);
        throw new Error(resObj.error?.message || "Error ejecutando consulta en Turso");
    }

    const resResult = resObj.response?.result || {};
    const rawCols = resResult.cols || [];
    const rawRows = resResult.rows || [];

    // Mapeo seguro de resultados
    const cols = rawCols.map(c => c.name);
    const rows = rawRows.map(row => {
        const obj = {};
        row.forEach((cell, idx) => {
            obj[cols[idx]] = cell ? cell.value : null;
        });
        return obj;
    });

    return {
        rows,
        lastInsertRowid: resResult.last_insert_rowid ? Number(resResult.last_insert_rowid) : null
    };
}

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en el puerto ${PORT}`);
    initDB();
});

async function initDB() {
    try {
        await queryTurso(`
            CREATE TABLE IF NOT EXISTS trabajos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                integrantes TEXT,
                profesor TEXT,
                materia TEXT DEFAULT 'Taller 1 - Tecnicatura en gestión de políticas públicas',
                problematica TEXT,
                estadoArte TEXT,
                pautas TEXT,
                diagnostico TEXT,
                necesidades TEXT,
                descripcion TEXT,
                fecha DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Base de datos Turso verificada e inicializada correctamente.");
    } catch (error) {
        console.error("❌ Error en initDB:", error.message);
    }
}

// Rutas de la API
app.get('/api/trabajos', async (req, res) => {
    try {
        const result = await queryTurso('SELECT id, titulo, fecha FROM trabajos ORDER BY fecha DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error GET /trabajos:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/trabajo/:id', async (req, res) => {
    try {
        const result = await queryTurso('SELECT * FROM trabajos WHERE id = ?', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Trabajo no encontrado' });
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error GET /trabajo/:id:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/trabajos', async (req, res) => {
    const { titulo, integrantes, profesor, materia } = req.body;
    try {
        const result = await queryTurso(
            `INSERT INTO trabajos (titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion) 
             VALUES (?, ?, ?, ?, '', '', '', '', '', '')`,
            [titulo, integrantes, profesor, materia || 'Taller 1 - Tecnicatura en gestión de políticas públicas']
        );
        res.status(201).json({ id: result.lastInsertRowid });
    } catch (error) {
        console.error('Error POST /trabajos:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/trabajo/:id', async (req, res) => {
    const { titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion } = req.body;
    try {
        await queryTurso(
            `UPDATE trabajos SET 
             titulo = ?, integrantes = ?, profesor = ?, materia = ?, 
             problematica = ?, estadoArte = ?, pautas = ?, diagnostico = ?, necesidades = ?, descripcion = ?
             WHERE id = ?`,
            [
                titulo, 
                integrantes, 
                profesor, 
                materia, 
                problematica, 
                estadoArte, 
                pautas, 
                diagnostico, 
                necesidades, 
                descripcion, 
                req.params.id
            ]
        );
        res.json({ mensaje: 'Trabajo actualizado correctamente' });
    } catch (error) {
        console.error('Error PUT /trabajo/:id:', error.message);
        res.status(500).json({ error: error.message });
    }
});

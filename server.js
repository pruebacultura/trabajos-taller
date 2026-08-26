require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

// Cliente HTTP directo para Turso (sin dependencias problemáticas)
async function queryTurso(sql, args = []) {
    let dbUrl = (process.env.TURSO_DATABASE_URL || '').trim();
    if (dbUrl.startsWith('libsql://')) {
        dbUrl = dbUrl.replace('libsql://', 'https://');
    }
    dbUrl = dbUrl.replace(/\/$/, '');

    const token = (process.env.TURSO_AUTH_TOKEN || '').trim();

    if (!dbUrl || !token) {
        throw new Error("Faltan las variables TURSO_DATABASE_URL o TURSO_AUTH_TOKEN en Render.");
    }

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
                        args: args.map(a => ({ type: 'text', value: String(a ?? '') }))
                    }
                },
                { type: 'close' }
            ]
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Respuesta Servidor: ${JSON.stringify(data)}`);
    }

    const result = data.results[0];
    if (result.type === 'error') {
        throw new Error(result.error.message);
    }

    const cols = result.response.result.cols.map(c => c.name);
    const rows = result.response.result.rows.map(row => {
        const obj = {};
        row.forEach((cell, idx) => {
            obj[cols[idx]] = cell.value;
        });
        return obj;
    });

    return {
        rows,
        lastInsertRowid: result.response.result.last_insert_rowid
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
                materia TEXT DEFAULT 'Taller 1',
                problematica TEXT,
                estadoArte TEXT,
                pautas TEXT,
                diagnostico TEXT,
                necesidades TEXT,
                descripcion TEXT,
                fecha DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Conexión con Turso exitosa y tabla verificada.");
    } catch (error) {
        console.error("❌ ERROR TURSO DETALLADO:", error.message);
    }
}

// Rutas API
app.get('/api/trabajos', async (req, res) => {
    try {
        const result = await queryTurso('SELECT id, titulo, fecha FROM trabajos ORDER BY fecha DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error GET /trabajos:', error.message);
        res.status(500).json({ error: 'Error al obtener lista' });
    }
});

app.get('/api/trabajo/:id', async (req, res) => {
    try {
        const result = await queryTurso('SELECT * FROM trabajos WHERE id = ?', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'No encontrado' });
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el trabajo' });
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
        res.status(201).json({ id: Number(result.lastInsertRowid) });
    } catch (error) {
        console.error('Error POST /trabajos:', error.message);
        res.status(500).json({ error: 'Error al crear trabajo' });
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
            [titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion, req.params.id]
        );
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        console.error('Error PUT /trabajo:', error.message);
        res.status(500).json({ error: 'Error al actualizar trabajo' });
    }
});

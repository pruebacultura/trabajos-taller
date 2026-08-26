require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

// Limpieza de URL
let rawUrl = (process.env.TURSO_DATABASE_URL || '').trim();
// Reemplazar libsql:// por https:// para evitar el modulo de migraciones
if (rawUrl.startsWith('libsql://')) {
    rawUrl = rawUrl.replace('libsql://', 'https://');
}

const db = createClient({
    url: rawUrl,
    authToken: (process.env.TURSO_AUTH_TOKEN || '').trim(),
});

// 1. Iniciar el servidor Express inmediatamente
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en el puerto ${PORT}`);
    initDB();
});

// 2. Inicializar la base de datos sin tumbar el servidor si falla
async function initDB() {
    try {
        await db.execute(`
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
        console.log("✅ Conexión con Turso exitosa y tabla lista.");
    } catch (error) {
        console.error("❌ ERROR DE CONEXIÓN CON TURSO:");
        console.error("Verifica las credenciales en Render. Mensaje:", error.message);
    }
}

// Rutas de la API
app.get('/api/trabajos', async (req, res) => {
    try {
        const result = await db.execute('SELECT id, titulo, fecha FROM trabajos ORDER BY fecha DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener lista' });
    }
});

app.get('/api/trabajo/:id', async (req, res) => {
    try {
        const result = await db.execute({
            sql: 'SELECT * FROM trabajos WHERE id = ?',
            args: [req.params.id]
        });
        if (result.rows.length === 0) return res.status(404).json({ error: 'No encontrado' });
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el trabajo' });
    }
});

app.post('/api/trabajos', async (req, res) => {
    const { titulo, integrantes, profesor, materia } = req.body;
    try {
        const result = await db.execute({
            sql: `INSERT INTO trabajos (titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion) 
                  VALUES (?, ?, ?, ?, '', '', '', '', '', '')`,
            args: [titulo, integrantes, profesor, materia || 'Taller 1 - Tecnicatura en gestión de políticas públicas']
        });
        res.status(201).json({ id: Number(result.lastInsertRowid) });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear trabajo' });
    }
});

app.put('/api/trabajo/:id', async (req, res) => {
    const { titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion } = req.body;
    try {
        await db.execute({
            sql: `UPDATE trabajos SET 
                  titulo = ?, integrantes = ?, profesor = ?, materia = ?, 
                  problematica = ?, estadoArte = ?, pautas = ?, diagnostico = ?, necesidades = ?, descripcion = ?
                  WHERE id = ?`,
            args: [titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion, req.params.id]
        });
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar trabajo' });
    }
});

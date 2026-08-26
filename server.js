require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Inicializar tabla con los nuevos campos
async function initDB() {
    await db.execute(`
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
}
initDB();

// 1. Obtener la lista de todos los trabajos (para el menú lateral)
app.get('/api/trabajos', async (req, res) => {
    try {
        const result = await db.execute('SELECT id, titulo, fecha FROM trabajos ORDER BY fecha DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener lista de trabajos' });
    }
});

// 2. Obtener un trabajo específico por ID
app.get('/api/trabajo/:id', async (req, res) => {
    try {
        const result = await db.execute({
            sql: 'SELECT * FROM trabajos WHERE id = ?',
            args: [req.params.id]
        });
        if (result.rows.length === 0) return res.status(404).json({ error: 'Trabajo no encontrado' });
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el trabajo' });
    }
});

// 3. Crear un nuevo trabajo desde el modal
app.post('/api/trabajos', async (req, res) => {
    const { titulo, integrantes, profesor, materia } = req.body;
    try {
        const result = await db.execute({
            sql: `INSERT INTO trabajos (titulo, integrantes, profesor, materia, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion) 
                  VALUES (?, ?, ?, ?, '', '', '', '', '', '')`,
            args: [titulo, integrantes, profesor, materia || 'Taller 1 - Tecnicatura en gestión de políticas públicas']
        });
        res.status(201).json({ id: Number(result.lastInsertRowid), mensaje: 'Trabajo creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear trabajo' });
    }
});

// 4. Actualizar las secciones de un trabajo existente
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
        res.json({ mensaje: 'Trabajo actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar trabajo' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});

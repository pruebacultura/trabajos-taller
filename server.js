require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración importante para que GitHub Pages pueda comunicarse con Render
app.use(cors({
    origin: '*', // En producción, cambia '*' por 'https://tu-usuario.github.io'
    methods: ['GET', 'POST']
}));
app.use(express.json());

// Conexión a Turso
const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Inicializar tabla si no existe
async function initDB() {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS trabajos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            portada TEXT,
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

// Ruta para guardar un nuevo trabajo
app.post('/api/trabajo', async (req, res) => {
    const { portada, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion } = req.body;
    
    try {
        await db.execute({
            sql: `INSERT INTO trabajos (portada, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)`,
            args: [portada, problematica, estadoArte, pautas, diagnostico, necesidades, descripcion]
        });
        res.status(201).json({ mensaje: 'Trabajo guardado exitosamente' });
    } catch (error) {
        console.error("Error guardando en Turso:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para obtener los trabajos (Opcional, si quieres listarlos después)
app.get('/api/trabajos', async (req, res) => {
    try {
        const result = await db.execute('SELECT * FROM trabajos ORDER BY fecha DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los trabajos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

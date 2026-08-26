// CONFIGURACIÓN DE LA API (Cambiar por tu URL de Render cuando la tengas)
//const API_URL = 'https://backend-trabajos.onrender.com/api/trabajo'; 

// URL DE TU BACKEND EN RENDER (Reemplazar con tu URL)
const API_URL = 'https://backend-trabajos.onrender.com/api';

let trabajoActualId = null;
let datosTrabajoActual = {};

// Elementos del DOM
const listaTrabajosEl = document.getElementById('listaTrabajos');
const modalNuevoEl = document.getElementById('modalNuevo');
const modalPreviewEl = document.getElementById('modalPreview');
const contenedorFormulario = document.getElementById('contenedorFormulario');
const headerAcciones = document.getElementById('headerAcciones');
const vacioState = document.getElementById('vacioState');

// Inicializar la App
document.addEventListener('DOMContentLoaded', () => {
    cargarListaTrabajos();
    registrarEventos();
});

function registrarEventos() {
    // Abrir/Cerrar Modal Nuevo Trabajo
    document.getElementById('btnNuevoTrabajo').addEventListener('click', () => modalNuevoEl.classList.remove('hidden'));
    document.getElementById('btnCancelarModal').addEventListener('click', () => modalNuevoEl.classList.add('hidden'));
    
    // Crear trabajo desde el modal
    document.getElementById('btnCrearModal').addEventListener('click', crearTrabajoDesdeModal);

    // Guardar Cambios
    document.getElementById('btnGuardar').addEventListener('click', guardarTrabajoActual);

    // Previsualización y Temas
    document.getElementById('btnPrevisualizar').addEventListener('click', abrirPrevisualizacion);
    document.getElementById('btnCerrarPreview').addEventListener('click', () => modalPreviewEl.classList.add('hidden'));
    document.getElementById('selectorTema').addEventListener('change', (e) => {
        document.getElementById('hojaA4').className = `documento-a4 ${e.target.value}`;
    });

    // Generar PDF
    document.getElementById('btnGenerarPDF').addEventListener('click', () => window.print());
}

// 1. Cargar lista del menú lateral
async function cargarListaTrabajos() {
    try {
        const res = await fetch(`${API_URL}/trabajos`);
        if (!res.ok) {
            throw new Error(`Error en el servidor: ${res.status}`);
        }
        const trabajos = await res.json();
        
        // Verificar que la respuesta sea un arreglo antes de usar forEach
        if (!Array.isArray(trabajos)) {
            throw new Error('La respuesta recibida no es un arreglo de trabajos.');
        }

        listaTrabajosEl.innerHTML = '';
        trabajos.forEach(t => {
            const li = document.createElement('li');
            li.className = `p-3 rounded-md text-sm cursor-pointer hover:bg-slate-800 transition truncate ${t.id === trabajoActualId ? 'bg-slate-800 font-bold text-blue-400' : 'text-slate-300'}`;
            li.innerText = t.titulo;
            li.onclick = () => seleccionarTrabajo(t.id);
            listaTrabajosEl.appendChild(li);
        });
    } catch (e) {
        console.error('Error cargando lista de trabajos:', e);
    }
}

// 2. Crear un nuevo trabajo
async function crearTrabajoDesdeModal() {
    const titulo = document.getElementById('modal-titulo').value.trim();
    const integrantes = document.getElementById('modal-integrantes').value.trim();
    const profesor = document.getElementById('modal-profesor').value.trim();
    const materia = document.getElementById('modal-materia').value;

    if (!titulo) return alert('El título es obligatorio');

    try {
        const res = await fetch(`${API_URL}/trabajos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, integrantes, profesor, materia })
        });
        const data = await res.json();
        
        modalNuevoEl.classList.add('hidden');
        document.getElementById('modal-titulo').value = '';
        document.getElementById('modal-integrantes').value = '';
        document.getElementById('modal-profesor').value = '';

        await cargarListaTrabajos();
        seleccionarTrabajo(data.id);
    } catch (e) {
        alert('Error al crear el trabajo');
    }
}

// 3. Cargar un trabajo seleccionado en el formulario
async function seleccionarTrabajo(id) {
    trabajoActualId = id;
    try {
        const res = await fetch(`${API_URL}/trabajo/${id}`);
        datosTrabajoActual = await res.json();

        // Rellenar formulario
        document.getElementById('in-titulo').value = datosTrabajoActual.titulo || '';
        document.getElementById('in-integrantes').value = datosTrabajoActual.integrantes || '';
        document.getElementById('in-profesor').value = datosTrabajoActual.profesor || '';
        document.getElementById('in-materia').value = datosTrabajoActual.materia || '';

        const campos = ['problematica', 'estadoArte', 'pautas', 'diagnostico', 'necesidades', 'descripcion'];
        campos.forEach(c => {
            document.getElementById(`in-${c}`).value = datosTrabajoActual[c] || '';
        });

        // Actualizar UI
        document.getElementById('tituloTrabajoActual').innerText = datosTrabajoActual.titulo;
        vacioState.classList.add('hidden');
        headerAcciones.classList.remove('hidden');
        contenedorFormulario.classList.remove('hidden');
        
        cargarListaTrabajos(); // Refrescar selección activa en el sidebar
    } catch (e) {
        alert('Error al cargar el trabajo');
    }
}

// 4. Guardar los cambios del formulario actual
async function guardarTrabajoActual() {
    if (!trabajoActualId) return;

    const bodyData = {
        titulo: document.getElementById('in-titulo').value,
        integrantes: document.getElementById('in-integrantes').value,
        profesor: document.getElementById('in-profesor').value,
        materia: document.getElementById('in-materia').value,
        problematica: document.getElementById('in-problematica').value,
        estadoArte: document.getElementById('in-estadoArte').value,
        pautas: document.getElementById('in-pautas').value,
        diagnostico: document.getElementById('in-diagnostico').value,
        necesidades: document.getElementById('in-necesidades').value,
        descripcion: document.getElementById('in-descripcion').value,
    };

    try {
        await fetch(`${API_URL}/trabajo/${trabajoActualId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        mostrarEstado('¡Guardado con éxito!', 'bg-green-100 text-green-700');
        cargarListaTrabajos();
    } catch (e) {
        mostrarEstado('Error al guardar cambios', 'bg-red-100 text-red-700');
    }
}

// 5. Previsualizar HTML (Llenar Hoja A4)
function abrirPrevisualizacion() {
    document.getElementById('prev-materia').innerText = document.getElementById('in-materia').value;
    document.getElementById('prev-titulo').innerText = document.getElementById('in-titulo').value;
    document.getElementById('prev-integrantes').innerText = document.getElementById('in-integrantes').value || 'Sin especificar';
    document.getElementById('prev-profesor').innerText = document.getElementById('in-profesor').value || 'Sin especificar';

    const campos = ['problematica', 'estadoArte', 'pautas', 'diagnostico', 'necesidades', 'descripcion'];
    campos.forEach(c => {
        const val = document.getElementById(`in-${c}`).value.trim();
        const secEl = document.getElementById(`sec-${c}`);
        const pEl = document.getElementById(`prev-${c}`);

        if (val) {
            pEl.innerText = val;
            secEl.classList.remove('hidden');
        } else {
            secEl.classList.add('hidden');
        }
    });

    modalPreviewEl.classList.remove('hidden');
}

function mostrarEstado(msg, clases) {
    const el = document.getElementById('mensajeEstado');
    el.innerText = msg;
    el.className = `mb-4 p-3 rounded text-sm font-semibold text-center block ${clases}`;
    setTimeout(() => el.classList.add('hidden'), 3000);
}

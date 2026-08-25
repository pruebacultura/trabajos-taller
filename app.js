// CONFIGURACIÓN DE LA API (Cambiar por tu URL de Render cuando la tengas)
const API_URL = 'https://TU-BACKEND.onrender.com/api/trabajo'; 

const campos = ['portada', 'problematica', 'estadoArte', 'pautas', 'diagnostico', 'necesidades', 'descripcion'];

// 1. Lógica para actualizar la vista previa en tiempo real
campos.forEach(campo => {
    const input = document.getElementById(`in-${campo}`);
    const output = document.getElementById(`out-${campo}`);
    
    input.addEventListener('input', (e) => {
        const valor = e.target.value;
        if (campo === 'portada') {
            output.innerText = valor || 'Título del Trabajo';
        } else {
            output.innerText = valor;
            // Ocultar la sección entera si está vacía
            output.parentElement.classList.toggle('hidden', valor.trim() === '');
        }
    });
});

// 2. Cambiar temas
document.getElementById('selectorTema').addEventListener('change', (e) => {
    const doc = document.getElementById('documentoA4');
    doc.className = `documento-a4 ${e.target.value}`;
});

// 3. Exportar a PDF usando la función del navegador
document.getElementById('btnExportar').addEventListener('click', () => {
    window.print();
});

// 4. Guardar datos en la API
document.getElementById('btnGuardar').addEventListener('click', async () => {
    const btn = document.getElementById('btnGuardar');
    const mensaje = document.getElementById('mensajeEstado');
    
    // Recopilar datos
    const datos = {};
    campos.forEach(campo => {
        datos[campo] = document.getElementById(`in-${campo}`).value;
    });

    btn.disabled = true;
    btn.innerText = 'Guardando...';

    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            mostrarMensaje('¡Guardado correctamente!', 'text-green-600');
        } else {
            mostrarMensaje('Error al guardar.', 'text-red-600');
        }
    } catch (error) {
        mostrarMensaje('Error de red. Verifica la API.', 'text-red-600');
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerText = 'Guardar en BD';
    }
});

function mostrarMensaje(texto, claseColor) {
    const msg = document.getElementById('mensajeEstado');
    msg.innerText = texto;
    msg.className = `text-sm text-center font-semibold mt-2 block ${claseColor}`;
    setTimeout(() => { msg.classList.add('hidden'); }, 3000);
}

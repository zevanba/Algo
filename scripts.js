// Array para almacenar los textos
const textos = [];

// Función para agregar un nuevo texto
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const asunto = document.getElementById('asunto').value;
    const contenido = document.getElementById('contenido').value;

    // Crear un objeto para el nuevo texto
    const nuevoTexto = {
        asunto: asunto,
        contenido: contenido,
        fecha: new Date().toLocaleString() // Fecha actual
    };

    // Agregar el texto al array
    textos.push(nuevoTexto);

    // Mostrar los textos
    mostrarTextos();

    // Limpiar el formulario
    document.getElementById('formulario').reset();
});

// Función para mostrar los textos
function mostrarTextos() {
    const contenedor = document.getElementById('textos-publicados');
    contenedor.innerHTML = ''; // Limpiar el contenedor

    textos.forEach((texto, index) => {
        const divTexto = document.createElement('div');
        divTexto.classList.add('texto');
        divTexto.innerHTML = `
            <h3>${texto.asunto}</h3>
            <p>${texto.contenido}</p>
            <small>Publicado el: ${texto.fecha}</small>
        `;
        contenedor.appendChild(divTexto);
    });
}

// Mostrar textos al cargar la página
mostrarTextos();

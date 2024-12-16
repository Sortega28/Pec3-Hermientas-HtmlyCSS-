

function mostrarMensaje() {
    alert("Las fiestas de San Juan en Soria se celebran cada junio, ¡no te las pierdas!");
}

// Obtener el botón del menú y el contenedor de los elementos de la lista
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Añadir evento de clic para alternar la clase 'active' que muestra el menú
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

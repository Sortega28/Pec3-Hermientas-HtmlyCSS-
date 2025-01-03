

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

function loadVideo(element, videoId) {
  const iframe = document.createElement('iframe');
  iframe.width = 560;
  iframe.height = 315;
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Usar el ID dinámico
  iframe.title = "YouTube video player";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerpolicy = "strict-origin-when-cross-origin";
  iframe.allowfullscreen = true;

  // Reemplazar la miniatura con el iframe
  element.innerHTML = ''; 
  element.appendChild(iframe); 
}

document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el carrusel
    var myCarousel = new bootstrap.Carousel(document.getElementById('carrusel-patrocinadores'), {
      interval: 2000, // Cambia el valor según tu preferencia en milisegundos
      wrap: true // Para que el carrusel continúe girando
    });
  });
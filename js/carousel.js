const multipleCardCarousel = document.querySelector("#carousel");

// mediumWindow será true si el ancho de pantalla es como mínimo 768

if (window.matchMedia("(min-width: 768px)").matches) {
  // La pantalla es como mínimo 768px //
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    wrap: false,
  });
  let carouselWidth = $(".carousel-inner")[0].scrollWidth;
  let cardWidth = $(".carousel-item").width();
  let scrollPosition = 0;
  $("#carousel .carousel-control-prev").hide(); // Escondo la flecha de retroceso de movida, ya que arranco en la primera slide //

  $("#carousel .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 5) {
      scrollPosition += cardWidth; // I can multiply cardWidth for an integer, that integer indicates how many cards move when clicking the FW control //
      $("#carousel .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
      if (scrollPosition > 0) $("#carousel .carousel-control-prev").show(); // Vuelvo a mostrar la flecha de retroceso si la posición NO es la 0 //
      if (scrollPosition >= carouselWidth - cardWidth * 5) {
        $("#carousel .carousel-control-next").hide(); // Desaparece la flecha para adelantar si llegué al final del carrusel //
      }
    }
  });

  $("#carousel .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth; // I can multiply cardWidth for an integer, that integer indicates how many cards move when clicking the RV control //
      $("#carousel .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
      if (scrollPosition <= 0) $("#carousel .carousel-control-prev").hide(); // Escondo la flecha de retroceso //
    }
    if (scrollPosition < carouselWidth - cardWidth * 5)
      $("#carousel .carousel-control-next").show(); // Reaparece la flecha para adelantar si se puede ir hacia adelante //
  });
} else {
  // La pantalla es menor a 400px, activo slide automático //
  $(multipleCardCarousel).addClass("slide");
}

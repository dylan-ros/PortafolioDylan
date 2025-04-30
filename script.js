document.addEventListener("DOMContentLoaded", function () {
    const botonDescarga = document.getElementById("descargarCV");
    if (botonDescarga) {
        botonDescarga.addEventListener("click", function () {
            const enlace = document.createElement("a");
            enlace.href = "CV_DylanRosales (1).pdf";
            enlace.download = "CV_DylanRosales.pdf";
            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);
        });
    }
});


  // Animar las barras de habilidades cuando estén en vista
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const barras = document.querySelectorAll(".barra-habilidad .progreso");
            barras.forEach(barra => {
                const valor = barra.querySelector("span").innerText;
                barra.style.width = valor;
            });
        }
    });
}, {
    threshold: 0.4
});

const seccionHabilidades = document.querySelector("#habilidades");
if (seccionHabilidades) {
    observer.observe(seccionHabilidades);
}


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
});
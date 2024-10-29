let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Geht zum letzten Slide, wenn nach links geklickt wird und bei Slide 0
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Zurück zum ersten Slide, wenn nach rechts am letzten Slide
    }
    showSlide(currentSlide);
}

// Startet mit dem ersten Slide
showSlide(currentSlide);

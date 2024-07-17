function toggleSearchForm() {
    const searchSection = document.getElementById('search');
    searchSection.classList.toggle('hidden');
}

let currentSlide = 0;

function moveCarousel(n) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide functionality
setInterval(() => {
    moveCarousel(1);
}, 5000);

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('visible');
}



console.log('carousel.js is connected!');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
    currentPosition -= 33.33;
    if (currentPosition < 33.33 * (carouselItems.length - 3)) {
        currentPosition = 0;
    }
    updateCarousel();
    console.log(currentPosition);
});

prevBtn.addEventListener('click', () => {
    currentPosition += 33.33;
    if (currentPosition > 0) {
        currentPosition = 33.33 * (carouselItems.length - 3);
    }
    updateCarousel();
    console.log(currentPosition);
});

function updateCarousel() {
    carouselWrapper.style.transform = `translateX(${currentPosition}%)`;
}


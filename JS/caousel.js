// console.log("carousel.js loaded");

// const track = document.querySelector(".carousel__track");
// const slides = Array.from(track.children);
// console.log(slides);
// const nextButton = document.querySelector(".arrow--right");
// const prevButton = document.querySelector(".arrow--left");
// const dotsNav = document.querySelector(".carousel__nav");
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;
// // console.log(slideWidth);

// // arrange the slides next to one another
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = "translateX(-" + targetSlide.style.left + ")";
//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");
// };

// prevButton.addEventListener("click", e => {
//   const currentSlide = track.querySelector(".current-slide");
//   const prevSlide = currentSlide.previousElementSibling;
//   moveToSlide(track, currentSlide, prevSlide);
// });

// nextButton.addEventListener("click", e => {
//   const currentSlide = track.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;
//   moveToSlide(track, currentSlide, nextSlide);
// });

// dotsNav.addEventListener("click", e => {

//   const targetDot = e.target.closest("button");
//   console.log(targetDot);

//   if (!targetDot) return;

//   const currentSlide = track.querySelector(".current-slide");
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const targetIndex = dots.findIndex(dot => dot === targetDot);
//   const targetSlide = slides[targetIndex];

//   moveToSlide(track, currentSlide, targetSlide);
//   currentDot.classList.remove("current-slide");
//   targetDot.classList.add("current-slide");
// });

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselWrapper = document.querySelector('.carousel-wrapper');

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
    if (currentPosition > -200) {
        currentPosition -= 33.33; 
        carouselWrapper.style.transform = `translateX(${currentPosition}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += 33.33; 
        carouselWrapper.style.transform = `translateX(${currentPosition}%)`;
    }
});
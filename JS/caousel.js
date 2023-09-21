// This is my first attempt at a carouselWrapper, that kinda worked but ultimatly was a failure.

console.log('carousel.js is connected!');
const prevBtn = document.getElementsByClassName('prev-button');
 const nextBtn = document.getElementsByClassName('next-button');
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

 document.addEventListener('click', function (event) {
     const postDiv = event.target.closest('.carousel-item.post');  
     if (postDiv) {
       event.preventDefault();   
       const postID = postDiv.dataset.postId;
       localStorage.setItem('selectedPostID', postID);    
       window.location.href = `blogArticle.html`;
     }
   });
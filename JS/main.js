const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;
console.log('main.js is connected!');
// Fetching data from API, and render carousel-item 's //
function getPosts() {
  const postContainer = document.querySelector(".carousel-wrapper");

  postContainer.innerHTML = '<div class="loader"></div>';
  fetch(apiBlogs)
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const newestPosts = data.slice(0, 9);

      postContainer.innerHTML = '';

      newestPosts.forEach((post, index) => {
        
        const visibilityClass = index < 3 ? 'visible' : 'hidden';
      
        const html = `<div class='carousel-item ${visibilityClass}'><a class='post-link' href='blogArticle.html?id=${post.id}'><div class="carousel-post">
          <img src="${post.jetpack_featured_media_url}" class="carousel-image">
          <p class="date">${post.date}</p>
          <h3>${post.title.rendered}</h3>    
        </div>
        </a>
        </div>`;
        postContainer.innerHTML += html;        
      });
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
      postContainer.innerHTML = '<p>Error fetching posts. Please refresh or try again later.</p>';
    });
}

getPosts();


//carousel
let visibleIndex = 0;
let carouselItems; 

function updateVisibility() {
  carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach((item, index) => {
    if (index >= visibleIndex && index < visibleIndex + 3) {
      item.classList.add('visible');
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });
}

document.querySelector('.prev-button').addEventListener('click', () => {
  if (visibleIndex > 0) {
    visibleIndex -= 3;
  } else {    
    visibleIndex = carouselItems.length - 3;
  }
  updateVisibility();
});

document.querySelector('.next-button').addEventListener('click', () => {
  if (visibleIndex + 3 < carouselItems.length) {
    visibleIndex += 3;
  } else {
     visibleIndex = 0;
  }
  updateVisibility();
});

updateVisibility();


// `<a class='carousel-item archive' href='blogArticle.html?id=${post.id}'><div class="carousel-post ">
//         <img src="${post.jetpack_featured_media_url}" class="postImg">
//         <p class="date">${post.date}</p>
//         <h3>${post.title.rendered}</h3>    
//       </div>
//       </a>`

// `<div class='carousel-item' ><a class='post-link' href='blogArticle.html?id=${post.id}'><div class="carousel-post ">
//         <img src="${post.jetpack_featured_media_url}" class="carousel-image">
//         <p class="date">${post.date}</p>
//         <h3>${post.title.rendered}</h3>    
//       </div>
//       </a>
//       </div>`
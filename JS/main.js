const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

// Fetching data from API //
function getPosts() {
  const postContainer = document.querySelector(".carousel-wrapper");

  postContainer.innerHTML = '<p>Loading...</p>';
  fetch(apiBlogs)
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const newestPosts = data.slice(0, 6);

      postContainer.innerHTML = '';

      newestPosts.forEach(post => {
        const html = `<div class="carousel-item post" data-post-id="${post.id}">
          <img src="${post.jetpack_featured_media_url}">
          <p class="date">${post.date}</p>
          <h3>${post.title.rendered}</h3>    
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

// Fetch featured post //
function getFeaturedPost() {
  const featuredId = 36;
  const featuredPostUrl = apiBlogs + "/" + featuredId; 
  fetch(featuredPostUrl)
    .then(response => response.json())
    .then(post => {
      const postContainer = document.querySelector(".featured-post");

      const html = `
        <div class="featured">
          <div class="post-image">
            <div class="Featured-image">
              <img src="${post.jetpack_featured_media_url}" alt="Miniature Painting">
            </div>
          </div>
          <div class="post-content" data-post-id="${post.id}">
            <h2>${post.title.rendered}</h2>
            <div class="blogRendered">${post.excerpt.rendered}</div>
            <button class="CTA js-featured">Read More</button>
          </div>
        </div>`;
      postContainer.innerHTML = html;

      const readMoreButton = document.querySelector(".js-featured");

      readMoreButton.addEventListener('click', function (event) {
        event.preventDefault();  
        localStorage.setItem('selectedPostID', post.id);
        window.location.href = `blogArticle.html`;      
      });

    })
    .catch(error => {
      console.error("Error fetching featured blog:", error);
    });
  }
getFeaturedPost();

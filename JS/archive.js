const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

// Fetching data from API //
function getPosts() {
  fetch(apiBlogs)
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const newestPosts = data

      const postContainer = document.querySelector(".post-list");

      // Generate HTML for each post
      newestPosts.forEach(post => {
        const html = `<div class="post archive"><a href="blogArticle.html">
          <img src="${post.jetpack_featured_media_url}">
          <p class="date">${post.date}</p>
          <h3>${post.title.rendered}</h3>    
        </a></div>`;
        postContainer.innerHTML += html;
      });
    });
}

getPosts();
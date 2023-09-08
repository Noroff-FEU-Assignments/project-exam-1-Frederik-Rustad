const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

let postsLoaded = 0;

function getPosts() {
  const postContainer = document.querySelector(".post-list");
  const loadMoreButton = document.querySelector(".js-load-more");

  postContainer.innerHTML = '<p>Loading...</p>';
  postContainer.innerHTML = '';

  // Function to fetch and append posts
  const fetchArchivePosts = () => {
    fetch(apiBlogs + `?offset=${postsLoaded}&per_page=6`) //change to 10 later//
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          const html = `<div class="post archive"${post.id}><a href="blogArticle.html">
            <img src="${post.jetpack_featured_media_url}">
            <p class="date">${post.date}</p>
            <h3>${post.title.rendered}</h3>    
          </a></div>`;
          postContainer.innerHTML += html;
        });

        postsLoaded += 6; //change to 10 later//
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        postContainer.innerHTML = '<p>Error fetching posts. Please refresh or try again later.</p>';
      });
  };
  loadMoreButton.addEventListener('click', fetchArchivePosts);

  fetchArchivePosts();
}

getPosts();

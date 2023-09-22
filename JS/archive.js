const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

function getPosts() {
  const postContainer = document.querySelector(".post-list");
  const loadMoreButton = document.querySelector(".js-load-more");

  let postsLoaded = 0;
  let allPosts = [];

  const fetchPosts = (offset, count) => {
    fetch(apiBlogs + `?offset=${offset}&per_page=${count}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          const html = `<a class='post archive' href='blogArticle.html?id=${post.id}'>
            <img src="${post.jetpack_featured_media_url}" class="postImg">
            <p class="date">${post.date}</p>
            <h3>${post.title.rendered}</h3>    
          </a>`;
          allPosts.push(html);
        });
        postContainer.innerHTML = allPosts.join('');
        postsLoaded += count;
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        postContainer.innerHTML = '<p>Error fetching posts. Please refresh or try again later.</p>';
      });
  };
  loadMoreButton.addEventListener('click', () => {
    fetchPosts(postsLoaded, 10);
  });
  fetchPosts(postsLoaded, 10);
}

getPosts();

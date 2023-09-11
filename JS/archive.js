const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

function getPosts() {
  const postContainer = document.querySelector(".post-list");
  const loadMoreButton = document.querySelector(".js-load-more");

  let postsLoaded = 0;
  let allPosts = [];

  const fetchArchivePosts = () => {
    postContainer.innerHTML = '<p>Loading...</p>';
    fetch(apiBlogs + `?offset=${postsLoaded}&per_page=10`)
      .then(response => response.json())
      .then(data => {
        postContainer.innerHTML = '';
        data.forEach(post => {
          const html = `<div class="post archive" data-post-id="${post.id}">
            <img src="${post.jetpack_featured_media_url}" class="postImg">
            <p class="date">${post.date}</p>
            <h3>${post.title.rendered}</h3>    
          </div>`;
          allPosts.push(html);        
        });      
        postContainer.innerHTML += allPosts.join('');
        postsLoaded += 10;        
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

document.addEventListener('click', function (event) {
  const postDiv = event.target.closest('.post.archive');  
  if (postDiv) {
    event.preventDefault();   
    const postID = postDiv.dataset.postId;
    localStorage.setItem('selectedPostID', postID);    
    window.location.href = `blogArticle.html`;
  }
});
const apibase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";

// Fetching data from API //
function getPosts() {
fetch(apibase + apiEndpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(post => {
      const postContainer = document.querySelector(".carousel-wrapper");
    const html = `<div class="carousel-item post"><a href="blogArticle.html">
    <img
      src="${post.jetpack_featured_media_url}">
      <p>${post.date}</p>
    <h3>${post.title.rendered}</h3>    
  </a> </div>`;
    postContainer.innerHTML += html;
    });
  });
};
getPosts();

  
    
// cta featured post //
function featuredBlog(){
  addEventListener('click', () => {
   window.location.href = "blogArticle.html";
}); 
};
const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;
const postID = localStorage.getItem('selectedPostID');
if (postID) {
  const blogArticle = apiBlogs + `/${postID}`;
  fetch(blogArticle)
    .then(response => response.json())
    .then(data => {
      const htmlContent = 
      `<h2>${data.title.rendered}</h2>
      <p> ${data.content.rendered}</p>
      ${data.date}
      ${data.comment}`;
      const blogArticleDiv = document.querySelector(".blogArticle");
      blogArticleDiv.innerHTML = htmlContent;
    });
} else {
  console.error('Blog unavailable. refresh or try again later.');
};
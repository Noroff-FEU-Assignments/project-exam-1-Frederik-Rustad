const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;
const urlParams = new URLSearchParams(window.location.search);
const postID = urlParams.get('id');

if (!postID) {
  console.error('Post ID not found in URL');
} else {
  const blogArticle = apiBlogs + `/${postID}`;
  const blogArticleDiv = document.querySelector(".blogArticle");

  blogArticleDiv.innerHTML = '<div class="loader"></div>'; 
  
  fetch(blogArticle)
    .then(response => response.json())
    .then(data => {
      const htmlContent = `
        <h2 class="blogSpecificH">${data.title.rendered}</h2>
        <div class="blogImages">
          ${data.content.rendered}
        </div>
        ${data.date}
      `;
      const blogArticleDiv = document.querySelector(".blogArticle");
      blogArticleDiv.innerHTML = htmlContent;
      //modal
const imageElements = document.querySelectorAll('.wp-block-image');
const modalClass = 'modal';

imageElements.forEach(imageElement => {
  imageElement.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('image clicked');
    imageElement.classList.add(modalClass);      
 
    document.addEventListener('click', (e) => {
      if (!isImageInsideModal(e.target)) {            
        imageElement.classList.remove(modalClass);
      }
    });

    imageElement.addEventListener('click', () => {
      imageElement.classList.toggle(modalClass);
    });
  });
});
function isImageInsideModal(element) {
  return element.tagName === 'IMG' && element.closest('figure.modal');
} 
//modal end 
    })
    .catch(error => {
      console.error('Error fetching blog post details:', error);
    });
}
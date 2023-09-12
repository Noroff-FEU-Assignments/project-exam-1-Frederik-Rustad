const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;
const postID = localStorage.getItem('selectedPostID');
console.log('postID:', postID);
if (postID) {
  const blogArticle = apiBlogs + `/${postID}`;
  fetch(blogArticle)
    .then(response => response.json())
    .then(data => {
      const htmlContent = `
      <h2 class="blogSpecificH">${data.title.rendered}</h2>
      <div class="blogImages">
        ${data.content.rendered}
      </div>
      ${data.date}   
     </div>
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

    });

} else {
  console.error('Blog unavailable. refresh or try again later.');
};
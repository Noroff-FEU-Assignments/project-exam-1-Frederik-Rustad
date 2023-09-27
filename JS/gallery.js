      //modal
      const imageElements = document.querySelectorAll('.gallery-image');
      const modalClass = 'gallery-modal';
      
      imageElements.forEach(imageElement => {
        imageElement.addEventListener('click', (event) => {
          event.stopPropagation();
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
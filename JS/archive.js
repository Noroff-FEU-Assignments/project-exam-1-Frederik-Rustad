const apiBase = "https://freddev.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiBlogs = apiBase + apiEndpoint;

const postContainer = document.querySelector(".post-list");
const loadMoreButton = document.querySelector(".js-load-more");
let postsLoaded = 0;
let allPosts = [];

function getPosts() {
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
  }

  loadMoreButton.addEventListener('click', () => {
    fetchPosts(postsLoaded, 10);
    document.querySelector(".js-load-more").style.display = "none"; //for now this will hide the load more button when it's clicked becouse i only have 20 posts total. I'll rework it later if i have time to dissapear only if there is no more posts to fetch.
  });

  fetchPosts(postsLoaded, 10);
}

function sortPostsByDate(order) {
  allPosts.sort((a, b) => {
    const dateA = new Date(getPostDate(a));
    const dateB = new Date(getPostDate(b));

    if (order === 'oldest') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  postContainer.innerHTML = allPosts.join('');
}
function getPostDate(postHTML) {
  const parser = new DOMParser();
  const postDoc = parser.parseFromString(postHTML, 'text/html');
  const dateElement = postDoc.querySelector(".date");
  return dateElement.textContent;
}

const sortButtonNew = document.querySelector(".sort-button-new");
const sortButtonOld = document.querySelector(".sort-button-old");

sortButtonNew.addEventListener('click', () => {
  sortPostsByDate('newest');
});

sortButtonOld.addEventListener('click', () => {
  sortPostsByDate('oldest');
});

getPosts(); 
sortPostsByDate('newest'); 

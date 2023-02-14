const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filer = document.getElementById('filter');

let limit = 5;
let page = 1;

//Fetch post from api
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}

//show posts and DOM
async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
     const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
     <div class="number">${post.id}</div>
     <div class="post-info">
     <h2 class="post-title">${post.title}</h2>
     <p class="post-body">${post.body}</p>
     </div>   
    `;
    
    postsContainer.appendChild(postEl);


    });
}

showPosts();

//show lodaer and fetach more posts
function showLoading() {
    loading.classList.add('show');

    setTimeout(() => {
    page++;
    showPosts();


    }, 300)

    setTimeout(() => {
        loading.classList.remove('show');

    }, 1000);
}

//filter posts by input
function filterPosts(e){
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innertText.toUpperCase();

        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = 
    document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight -5) {
        showLoading();
    }
})

filter.addEventListener('input', filterPosts);
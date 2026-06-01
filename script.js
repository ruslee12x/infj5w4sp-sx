const postsContainer = document.querySelector(".posts");
const posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach(function (post) {
    postsContainer.innerHTML += `
        <a href="#" class="card">
            <img src="${post.image}" alt="Energy">
            <span class="tag">${post.tag}</span>
            <p class="date">${post.date}</p>
            <h3>${post.title}</h3>
            <p>${post.desc}</p>
            </a>
     `;
});

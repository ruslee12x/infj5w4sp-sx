const addBtn = document.querySelector("#addBtn");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const tagInput = document.querySelector("#tag");

addBtn.addEventListener("click", function () {
    const post = {
        title: titleInput.value,
        desc: descInput.value,
        tag: tagInput.value,
        date: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }),
        image: "assets/images/download.webp"
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("Post Added!");

});
import mediumPosts from "../data/medium-post.mjs";

const docRef = document.querySelector("#medium-post-container");

mediumPosts?.map(({ redirectUrl, imageUrl, title }) => {
  docRef.innerHTML += `
    <a target="_blank"
    href="${redirectUrl}"
    class="card blogCard">

    <img src="${imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${title}</p>
    </div>
  </a>
    `;
});

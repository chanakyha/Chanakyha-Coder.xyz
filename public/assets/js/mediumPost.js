const mediumPosts = await (await fetch("/blogs", { method: "POST" })).json();

const docRef = document.querySelector("#medium-post-container");

// docRef.innerHTML = "";
mediumPosts?.map(({ redirectUrl, thumbnail, title }) => {
  docRef.innerHTML += `
    <a target="_blank"
    href="${redirectUrl}"
    class="card blogCard">

    <img src="${thumbnail}" class="card-img-top" alt="...">
    <div class="card-body" style="padding:.4rem">
      <p class="card-text">${title}</p>
    </div>
  </a>
    `;
});

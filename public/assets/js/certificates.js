const certificates = await (
  await fetch("/certificates", { method: "POST" })
).json();

console.log(certificates);

const docRef = document.querySelector("#certificates-wrapper");
const docRef2 = document.querySelector(".carousel-indicators");

certificates.map(({ thumbnail, title, subtitle }, index) => {
  docRef2.innerHTML += `
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${
    index == 0 && "active"
  }"
              aria-current="true" aria-label="Slide ${index + 1}"></button>`;
  docRef.innerHTML += `
    <div class="carousel-item ${index == 0 && "active"}">
    <img src="${thumbnail}" class="d-block w-100" alt="...">
    <div class="text-center py-5 d-none d-md-block">
      <h5>${title}</h5>
      <p>${subtitle}</p>
    </div>
  </div>
        `;
});

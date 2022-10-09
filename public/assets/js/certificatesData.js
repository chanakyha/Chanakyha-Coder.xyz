import "https://code.jquery.com/jquery-3.6.1.min.js";

const certificates = await (
  await fetch("/certificates", { method: "POST" })
).json();

$(() => {
  let html = "";
  certificates?.map(({ certificate_image, title, subtitle }) => {
    html += `
        <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="${certificate_image}" class="testimonial-img" alt="">
          <h3>${title}</h3>
          <h4>${subtitle}</h4>
        </div>
      </div>
        `;
  });

  console.log(html);
  $("#certificates-container").html(html);
});

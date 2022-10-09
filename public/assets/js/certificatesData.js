import "https://code.jquery.com/jquery-3.6.1.min.js";
import "../vendor/swiper/swiper-bundle.min.js";

const certificates = await (
  await fetch("/certificates", { method: "POST" })
).json();

$(document).ready(() => {
  let html = ``;
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
  $("#certificates-container").html(html);
});

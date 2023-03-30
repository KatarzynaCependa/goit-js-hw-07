import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

for (const item of galleryItems) {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  );
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  galleryEl.onclick = () => {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`
    );
    instance.show();
  };
});

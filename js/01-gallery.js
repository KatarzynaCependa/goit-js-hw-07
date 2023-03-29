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

// galleryEl.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// galleryEl.onclick = () => {
//   basicLightbox
//     .create(
//       `<img width="1400" height="900" src="https://placehold.it/1400x900">`
//     )
//     .show();
// };

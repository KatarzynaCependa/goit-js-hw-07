import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

for (const item of galleryItems) {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<li><a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a></li>`
  );
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

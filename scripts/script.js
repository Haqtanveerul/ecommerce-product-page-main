const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const largeImageUrl = thumbnail.getAttribute("data-large");
    mainImage.src = largeImageUrl;
  });
});

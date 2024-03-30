const carousel = document.querySelector('.carousel');
const images = document.querySelector('.carousel-images');
const imageWidth = carousel.offsetWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex === images.children.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(nextSlide, 5000); // Change d'image toutes les 3 secondes

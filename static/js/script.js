const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // 每3秒切换一次
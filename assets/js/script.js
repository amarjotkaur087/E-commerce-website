// Adjust slider functionality to support horizontal layout with scroll snapping

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  let currentIndex = 0;

  function updateActiveSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        slide.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      } else {
        slide.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateActiveSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveSlide(currentIndex);
  });

  // Initialize
  updateActiveSlide(currentIndex);
});

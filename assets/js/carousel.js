// Profile image carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.about-image-container');
  if (!container) return;

  const images = container.querySelectorAll('.carousel-image');
  const tags = container.querySelectorAll('.image-tag');
  const prevBtn = container.querySelector('.carousel-arrow.prev');
  const nextBtn = container.querySelector('.carousel-arrow.next');

  let currentIndex = 0;
  let autoScrollInterval;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    tags.forEach((tag, i) => {
      tag.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function startAutoScroll() {
    stopAutoScroll(); // Always clear any existing interval first
    autoScrollInterval = setInterval(nextImage, 6000);
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevImage();
      startAutoScroll(); // Reset the timer for the new image
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextImage();
      startAutoScroll(); // Reset the timer for the new image
    });
  }

  // Pause auto-scroll on hover
  container.addEventListener('mouseenter', stopAutoScroll);
  container.addEventListener('mouseleave', startAutoScroll);

  // Start auto-scroll
  startAutoScroll();
});

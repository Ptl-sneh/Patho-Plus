const progressBars = document.querySelectorAll(".fill");
const image = document.querySelector(".scroll-image");

function showProgress() {
  progressBars.forEach((bar) => {
    if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("data-value") + "%";
    }
  });
}

function showImage() {
  if (image.getBoundingClientRect().top < window.innerHeight - 100) {
    image.classList.add("visible");
  }
}

function handleScroll() {
  showProgress();
  showImage();
}

// Run the function when the page scrolls
window.addEventListener("scroll", handleScroll);

// Run once in case elements are already visible on load
// handleScroll();

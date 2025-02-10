// Wait for the HTML content to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all progress items (each containing a progress bar)
  const progressItems = document.querySelectorAll(".progress-item");

  // Function to animate the progress bars when they come into view
  function animateProgressBars() {
    progressItems.forEach((item) => {
      const bar = item.querySelector(".fill"); // Get the inner fill bar
      const value = bar.getAttribute("data-value"); // Read percentage value

      // Check if the progress item is visible in the viewport
      if (item.getBoundingClientRect().top < window.innerHeight - 100) {
        bar.style.width = value + "%"; // Set the width dynamically
      }
    });
  }

  // Run the function when the user scrolls
  window.addEventListener("scroll", animateProgressBars);

  // Run the function immediately in case the progress bars are already in view
  animateProgressBars();
});

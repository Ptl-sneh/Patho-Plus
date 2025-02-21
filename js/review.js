let currentReview = 0;
const reviews = document.querySelectorAll(".review");

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove("active");
    if (i === index) review.classList.add("active");
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
}

// Show the first review on load
showReview(currentReview);

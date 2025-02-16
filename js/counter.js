let started = false;
window.addEventListener("scroll", () => {
  const counterSection = document.querySelector(".counter-wrapper");
  const sectionTop = counterSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100; // Adjust trigger point

  if (sectionTop < triggerPoint && !started) {
    started = true; // Ensure it runs only once
    startCounters();
  }
});

function startCounters() {
  const counts = document.querySelectorAll(".count");
  const speed = 97;

  counts.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let increment = Math.ceil(target / speed);

    let updateCounter = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(updateCounter);
      } else {
        counter.innerText = count;
      }
    }, 15);
  });
}

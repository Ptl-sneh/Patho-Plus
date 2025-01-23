const scrollsection = document.querySelectorAll(".container");

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#why-choose-us");
    const image = section.querySelector(".image-container");
    const progressBars = section.querySelectorAll(".progress-bar .fill");

    // Function to check if section is visible
    function checkVisibility() {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight - 100) {
            // Add class to make the image visible
            image.classList.add("visible");

            // Fill progress bars
            progressBars.forEach((bar) => {
                const value = bar.getAttribute("data-value");
                bar.style.width = value + "%";
            });

            // Remove the scroll listener to avoid repeated triggering
            window.removeEventListener("scroll", checkVisibility);
        } else {
            image.classList.remove("visible");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", checkVisibility);
});
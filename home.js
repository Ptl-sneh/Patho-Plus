function openModal() {
    const selectedLocation = document.getElementById('location-link').textContent; 
    if (selectedLocation !== "Select Location") {
        // If a location is already selected, show the modal to re-select
        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        modal.show();
    } else {
        // If no location is selected, just show the modal
        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        modal.show();
    }
}

function updateLocation() {
    const locationSelect = document.getElementById('locationSelect');
    const selectedLocation = locationSelect.value;

    if (selectedLocation) {
        // Update the link text to the selected location and change its color to black
        const locationLink = document.getElementById('location-link');
        locationLink.textContent = selectedLocation;
        locationLink.classList.add('selected-location'); // Add class for black color

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('locationModal'));
        modal.hide();
    }
}

// carousel

const track = document.querySelector('.carousel-inn');
const slides = Array.from(track.children);
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to move the carousel
function moveToSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

// Automatic sliding
function startAutoSlide() {
    return setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    }, 3000);
}

let autoSlideInterval = startAutoSlide();

// Indicators click
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        moveToSlide(index);
        clearInterval(autoSlideInterval);
        autoSlideInterval = startAutoSlide();
    });
});

// Navigation buttons
prevButton.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
    clearInterval(autoSlideInterval);
    autoSlideInterval = startAutoSlide();
});

nextButton.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
    clearInterval(autoSlideInterval);
    autoSlideInterval = startAutoSlide();
});

// scroll effect
const scrollContents = document.querySelectorAll('.scroll-content');

function checkScroll() {
    scrollContents.forEach((content) => {
        const position = content.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (position < viewportHeight - 100) {
            content.classList.add('in-view');
        } else {
            content.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', checkScroll);


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

// Get the button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

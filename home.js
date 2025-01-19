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
let currentIndex = 0;
let interval;

// Function to move the carousel
function moveToSlide(index) {
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update active indicator
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

// Function to start automatic sliding
function startAutoSlide() {
    interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    }, 3000); // Slide every 3 seconds
}

// Add event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        moveToSlide(index);
        clearInterval(interval); // Stop the current interval
        startAutoSlide(); // Restart the auto-slide
    });
});

// Start automatic sliding on page load
startAutoSlide();

// Buttons

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Function to move to the next slide
function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
}

// Function to move to the previous slide
function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    nextSlide();
    clearInterval(interval); // Stop auto-slide
    startAutoSlide(); // Restart auto-slide
});

prevButton.addEventListener('click', () => {
    prevSlide();
    clearInterval(interval); // Stop auto-slide
    startAutoSlide(); // Restart auto-slide
});

// scroll effect
const scrollSections = document.querySelectorAll('.scroll-content');

function checkScroll() {
    scrollSections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight - 100) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
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

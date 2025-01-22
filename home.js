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


const modal1 = document.getElementById("formModal")
const modal2 = document.getElementById('confirmationModal');


const modalContent = modal1.querySelector(".modal_content");
const modalContent2 = modal2.querySelector(".modal_content");

const openModalBtn = document.querySelectorAll(".openModal")
const closeFormModalBtn = document.getElementById('closeFormModal');
const closeConfirmationModalBtn = document.getElementById('closeConfirmationModal');
const okButton = document.getElementById('okButton');


openModalBtn.forEach((button) => {
  button.addEventListener("click", () => {
        modal1.style.display = "block"; // Show the modal
        modal1.classList.remove("hide");
        modalContent.classList.remove("hide");
        modal1.classList.add("show");
        modalContent.classList.add("show");
  });
});

closeFormModalBtn.addEventListener("click", () => {
    // modal1.style.display = "none";
    modal1.classList.remove("show");
    modalContent.classList.remove("show");
    modal1.classList.add("hide");
    modalContent.classList.add("hide");

    setTimeout(() => {
        modal1.style.display = "none";
    }, 500);
})

closeConfirmationModalBtn.addEventListener('click', () => {
    // modal2.style.display = 'none';
    modal2.classList.remove("show");
    modalContent2.classList.remove("show");
    modal2.classList.add("hide");
    modalContent2.classList.add("hide");

    setTimeout(() => {
        modal2.style.display = "none";
    }, 500);
});

// Close Confirmation Modal via OK button
okButton.addEventListener('click', () => {
    // modal2.style.display = 'none';
    modal2.classList.remove("show");
    modalContent2.classList.remove("show");
    modal2.classList.add("hide");
    modalContent2.classList.add("hide");

    setTimeout(() => {
        modal2.style.display = "none";
    }, 500); 
});

document.getElementById('testForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if all fields are valid
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  if (username && email && address && age && gender) {
        // modal1.style.display = 'none';
        // modal1.classList.remove("show")
        // modal2.style.display = 'block';
        // modal2.classList.add("show")
        modal1.style.display = 'none';
        modal1.classList.remove("show");
        modal1.classList.add("hide");

        // Show the confirmation modal
        modal2.style.display = 'block';
        modal2.classList.add("show");
        e.target.reset();
    } else {
    alert('Please fill out all fields.');
  }
});

// faqs

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('span:last-child');

        if (answer.style.maxHeight) {
            // If the answer is already expanded, collapse it
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            // Collapse any other expanded answers
            document.querySelectorAll('.faq-answer').forEach(item => (item.style.maxHeight = null));
            document.querySelectorAll('.faq-question span:last-child').forEach(icon => (icon.textContent = '+'));

            // Expand the selected answer
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = '-';
        }
    });
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

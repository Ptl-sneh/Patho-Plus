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

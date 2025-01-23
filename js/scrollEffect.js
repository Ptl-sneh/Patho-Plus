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
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
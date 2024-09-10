document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing');
    const text = textElement.textContent;
    textElement.textContent = '';

    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); 
        } else {
            textElement.classList.remove('typing-active');
        }
    }

    type();
});
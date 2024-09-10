// Get the button
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls to the About section
window.onscroll = function() {
    var aboutSection = document.getElementById("about");
    if (window.scrollY >= aboutSection.offsetTop) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

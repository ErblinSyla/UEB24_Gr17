document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the menu visibility on click
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

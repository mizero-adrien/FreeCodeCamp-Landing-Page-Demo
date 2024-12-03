// JavaScript for enhancing the landing page functionality

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Email validation feedback
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailValue = emailInput.value;

    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        form.reset(); // Clear the form
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Responsive navigation menu toggle
const navBar = document.getElementById('nav-bar');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.className = 'menu-toggle';

menuToggle.addEventListener('click', function () {
    navBar.classList.toggle('open');
});

document.getElementById('header').prepend(menuToggle);

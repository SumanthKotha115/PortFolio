const nameToAnimate = "Kotha Sumanth"; // Your name
const nameElement = document.getElementById("name-animation");

let index = 0;

function animateName() {
    if (index < nameToAnimate.length) {
        nameElement.textContent += nameToAnimate.charAt(index);
        index++;
        setTimeout(animateName, 300); // Adjust timing (in ms) for speed
    }
}

// Start the name animation
animateName();

// Toggle the navigation menu
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class

    // Add or remove the nav-active class from the body
    document.body.classList.toggle('nav-active', navLinks.classList.contains('active'));
});

// Close the navigation menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');

    // Check if the click was outside the nav links and the toggle button
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    }
});

// JavaScript for smooth scrolling
document.querySelectorAll('.nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the section
        });

        // Close the navigation menu after clicking
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    });
});

// Add event listener to close navigation menu on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    }
});

// Contact form handling
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const mailtoLink = `mailto:sumanthkotha2001@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
};

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.section, .profile-img, .skills-list li, .certification-item, .education-item, .project');
    const observerOptions = {
        threshold: 0.3  // Trigger animation when 30% of the element is visible
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
});

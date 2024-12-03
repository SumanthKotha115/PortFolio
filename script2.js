const nameToAnimate = "Kotha Sumanth"; // Your name
const nameElement = document.getElementById("name-animation");
const fadeOverlay = document.getElementById("fade-out-overlay");

let index = 0;

function animateName() {
    if (index < nameToAnimate.length) {
        nameElement.textContent += nameToAnimate.charAt(index);
        index++;
        setTimeout(animateName, 300); // Adjust timing (in ms) for speed
    } else {
        // Start the fade-out effect and then redirect
        setTimeout(startFadeOut, 2000); // Delay before fade-out
    }
}

function startFadeOut() {
    fadeOverlay.classList.add("fade-out"); // Apply fade-out effect
    setTimeout(redirectToPortfolio, 1000); // Wait for the fade-out to complete
}

function redirectToPortfolio() {
    window.location.href = "index.html"; // Link to the portfolio page in the same folder
}

// Start the name animation
animateName();

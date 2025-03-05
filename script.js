 // Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Show Hidden Message
function showMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
    startHearts();
    let body = document.querySelector(".background");

    // Change background gradient dynamically
    body.style.background = "linear-gradient(-45deg, #6a11cb, #2575fc, #ff758c, #ff7eb3)";
}



// Floating Hearts Animation
function startHearts() {
    let container = document.getElementById("hearts-container");
    
    for (let i = 0; i < 500; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 500 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";  
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 100000);
    }
}
// audio plays//
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Play music after user interacts
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});

function showSurprise() {
    let giftBox = document.getElementById("giftBox");
    
    // Show the gift box when surprise button is clicked
    giftBox.style.display = "block";
}

function openGift() {
    let giftBox = document.getElementById("giftBox");
    let surpriseImage = document.getElementById("surpriseImage");

    // Hide the gift box and show the surprise image
    giftBox.style.display = "none";
    surpriseImage.style.display = "block";
}
 
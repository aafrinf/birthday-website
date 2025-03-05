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
}

// Floating Hearts Animation
function startHearts() {
    let container = document.getElementById("hearts-container");
    
    for (let i = 0; i < 200; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";  
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 30000);
    }
}
 
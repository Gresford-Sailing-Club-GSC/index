// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();

// Navigation responsiveness for small screens
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    let menu = document.querySelector('#menu');
    if (this.classList.contains('active')) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

// "Return to Top" button functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Enhance the "Join Now" button style dynamically
const joinBtn = document.getElementById('joinClubBtn');
joinBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
joinBtn.style.fontSize = '1.2rem';
joinBtn.style.letterSpacing = '1.5px';
joinBtn.style.transition = 'all 0.3s ease-in-out';

joinBtn.addEventListener('mouseover', () => {
    joinBtn.style.transform = 'scale(1.1)';
    joinBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
});

joinBtn.addEventListener('mouseout', () => {
    joinBtn.style.transform = 'scale(1)';
    joinBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

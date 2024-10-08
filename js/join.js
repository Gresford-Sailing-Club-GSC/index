document.getElementById('membershipFormBtn').addEventListener('click', function() {
    window.location.href = 'https://forms.office.com/e/UsKsD3UFdj';
});


document.querySelector('.hamburger').addEventListener('click', function() {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('nav ul');
    
    menu.classList.toggle('active'); 
    
    hamburger.classList.add('hidden'); 
    closeMenu.classList.add('active'); 
});

document.querySelector('.close-menu').addEventListener('click', function() {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('nav ul');

    menu.classList.remove('active'); 
    hamburger.classList.remove('hidden');
    closeMenu.classList.remove('active'); 
});

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

const joinBtn = document.getElementById('membershipFormBtn');
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

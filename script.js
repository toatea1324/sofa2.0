
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item'); 
const totalImages = images.length; 
const gallery = document.querySelector('.gallery');
const galleryContainer = document.querySelector('.gallery-container');



function updateGallery(){
    const offset = -currentIndex * 100; 
    gallery.style.transform = `translateX(${offset}%)`; 
}


function nextImage(){
    
    if(currentIndex < totalImages - 1){
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateGallery(); 
}


function prevImage(){
    
    if(currentIndex > 0){
        currentIndex --;
    } else{
        currentIndex = totalImages - 1; 
    }
    updateGallery(); 
}
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const nameInput = this.querySelector('input[placeholder="Ваше имя"]');
        const emailInput = this.querySelector('input[placeholder="Ваш email"]');
        const messageInput = this.querySelector('textarea');
        
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';
        
        
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        
        alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами.');
        
        
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}


document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('prevButton').addEventListener('click', prevImage);

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


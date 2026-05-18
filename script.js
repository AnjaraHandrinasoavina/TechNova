const toggle = document.querySelector('.menu-tech');
const nav = document.querySelector('.nav-sommaire');

toggle.onclick = () => {
    nav.classList.toggle('active');
}
document.querySelectorAll('.nav-sommaire a')
.forEach(link => {

    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });

});
    
const panels = document.querySelectorAll('.image');

panels.forEach(image => {

    image.addEventListener('click', () => {

        removeActive();

        image.classList.add('active');

    });

});

function removeActive(){

    panels.forEach(image => {

        image.classList.remove('active');

    });

}
let lastUpdateTime = Date.now();
let colorUpdateTime = 0.0;

const config = {
    SIM_RESOLUTION: 128,
    DENSITY_DISSIPATION: 3.5,
    VELOCITY_DISSIPATION: 2,
};

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

const totalCards = cards.length;
const angleStep = 360 / totalCards;
let currentRotation = 0;
cards.forEach((card, index) => {
    const cardAngle = index * angleStep;
    card.style.transform = `rotateY(${cardAngle}deg) translateZ(350px)`;
});

let isDragging = false;
let startX = 0;
let previousX = 0;

window.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    previousX = currentRotation;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    currentRotation = previousX + deltaX * 0.25; 
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});
window.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    previousX = currentRotation;
});

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    currentRotation = previousX + deltaX * 0.25;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});

window.addEventListener('touchend', () => {
    isDragging = false;
});

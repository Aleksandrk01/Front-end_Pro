let currentSlide = 0;
const slides = document.querySelectorAll('.slide img');
const dotsContainer = document.getElementById('dots');

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = () => setSlide(i);
        dotsContainer.appendChild(dot);
    }
}

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        dotsContainer.children[index].classList.remove('active');
    });
    slides[currentSlide].style.display = 'block';
    dotsContainer.children[currentSlide].classList.add('active');
    document.querySelector('.prev').style.visibility = currentSlide === 0 ? 'hidden' : 'visible';
    document.querySelector('.next').style.visibility = currentSlide === slides.length - 1 ? 'hidden' : 'visible';
}

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide();
}

function setSlide(n) {
    currentSlide = n;
    showSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    createDots();
    showSlide();
});

document.addEventListener('DOMContentLoaded', (event) => {
// Get the carousel container element
const carousel = document.querySelector('.carousel');

// Get the carousel items
const carouselItems = carousel.querySelectorAll('.carousel-item');

// Get the dots container element
const dotsContainer = document.querySelector('.dots');

// Create an array to store the dot elements
const dots = [];

// Set the initial active slide index
let activeSlideIndex = 0;

// Function to show the active slide
const showSlide = (index) => {
    // Hide all slides
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show the active slide
    carouselItems[index].classList.add('active');

    // Update the active slide index
    activeSlideIndex = index;

    // Update the active dot
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
};

// Function to handle next slide
const nextSlide = () => {
    const nextIndex = (activeSlideIndex + 1) % carouselItems.length;
    showSlide(nextIndex);
};

// Function to handle previous slide
const prevSlide = () => {
    const prevIndex = (activeSlideIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(prevIndex);
};

// Function to handle dot click
const dotClick = (index) => {
    showSlide(index);
};

// Create dots based on the number of slides
carouselItems.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => dotClick(index));
    dotsContainer.appendChild(dot);
    dots.push(dot);
});

// Show the initial slide
showSlide(activeSlideIndex);

// Set interval to automatically go to the next slide
const interval = setInterval(nextSlide, 5000);

// Pause the carousel on mouseenter
carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// Resume the carousel on mouseleave
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 5000);
});

});
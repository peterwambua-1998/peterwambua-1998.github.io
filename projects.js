document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels on the page
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const indicators = carousel.querySelectorAll('.indicator');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        // Set initial position
        updateCarousel();
        
        // Event listeners for navigation
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        });
        
        // Event listeners for indicators
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentIndex = parseInt(indicator.getAttribute('data-index'));
                updateCarousel();
            });
        });
        
        // Add keyboard navigation
        carousel.tabIndex = 0;
        carousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateCarousel();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }
        });
        
        // Auto-advance the carousel
        let autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }, 5000);
        
        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        // Resume autoplay on mouse leave
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }, 5000);
        });
        
        // Update carousel position and active indicator
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update indicator states
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            
            // Add a "glitch" effect during transition
            track.classList.add('glitch-transition');
            setTimeout(() => {
                track.classList.remove('glitch-transition');
            }, 500);
        }
    });
    
    // Add CRT scan effect when switching between slides
    document.querySelectorAll('.carousel-prev, .carousel-next, .indicator').forEach(button => {
        button.addEventListener('click', () => {
            const screen = document.querySelector('#projects-screen');
            screen.classList.add('scan-effect');
            setTimeout(() => {
                screen.classList.remove('scan-effect');
            }, 300);
        });
    });
});

// Add a random glitch effect to project cards
setInterval(() => {
    const projectCards = document.querySelectorAll('.project-card');
    const randomCard = projectCards[Math.floor(Math.random() * projectCards.length)];
    
    randomCard.classList.add('glitch-effect');
    setTimeout(() => {
        randomCard.classList.remove('glitch-effect');
    }, 200);
}, 8000);
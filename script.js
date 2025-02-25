(() => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const caption = document.querySelector('.caption');

    const captions = [
        "Enjoy the Nature",
        "Enjoy the Nature",
        "Enjoy the Nature",
        "Enjoy the Nature",
        "Enjoy the Nature",
        "Enjoy the Nature",
    ];

    
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            slide.style.display = index === currentIndex ? 'block' : 'none'; 
        });
        caption.textContent = captions[currentIndex]; 
    }

    /**
     * Shows the next slide, looping back to the first if necessary.
     */
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateSlider();
    }

    /**
     * Shows the previous slide, looping back to the last if necessary.
     */
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    /**
     * Selects a specific slide based on thumbnail click.
     * @param {number} index - The index of the slide to display.
     */
    function selectSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Event Listeners
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => selectSlide(index));
    });

    // Auto-slide functionality
    const autoSlide = setInterval(showNextSlide, 5000);

    // Initial setup
    updateSlider();
})();
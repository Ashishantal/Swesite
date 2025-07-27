document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track'); // Note: This element does not exist in your HTML.
    if (sliderTrack) {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const slides = Array.from(sliderTrack.children);
        let currentIndex = 0;
        let slideWidth = 0;

        function calculateSlideWidth() {
            const gap = 10; // The gap in pixels from the CSS
            slideWidth = slides[0].offsetWidth + gap;
        }

        function updateSliderPosition() {
            sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }

        function handleNext() {
            if (currentIndex < slides.length - 3) {
                currentIndex++;
                updateSliderPosition();
            }
        }

        function handlePrev() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        }

        calculateSlideWidth();
        nextButton.addEventListener('click', handleNext);
        prevButton.addEventListener('click', handlePrev);
        window.addEventListener('resize', () => {
            calculateSlideWidth();
            updateSliderPosition();
        });
    }

    // --- Logic for the cinematic video player with thumbnails ---
    const mainVideo = document.getElementById('main-video');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // This check prevents errors on pages that don't have the video player
    if (mainVideo && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video-src');
                // Directly setting the <video> element's src is more robust
                mainVideo.src = videoSrc;
                mainVideo.load();
                mainVideo.play();
            });
        });
    }

    // --- Logic for the split view image comparison ---
    const splitView = document.querySelector('.splitview');
    if (splitView) {
        const topPanel = splitView.querySelector('.top');
        const handle = splitView.querySelector('.handle');
        let skewHack = 0;
        let delta = 0;

        // If the parent has .skewed class, set the skewHack var.
        if (splitView.className.indexOf('skewed') != -1) {
            skewHack = 1000;
        }

        splitView.addEventListener('mousemove', function(event) {
            delta = (event.clientX - window.innerWidth / 2) * 0.5;
            handle.style.left = event.clientX + delta + 'px';
            topPanel.style.width = event.clientX + skewHack + delta + 'px';
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
   
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

    // --- Logic for custom reel video controls ---
    const reelCards = document.querySelectorAll('.reel-card');

    reelCards.forEach(card => {
        const video = card.querySelector('video');

        // Toggle play/pause when the card is clicked
        card.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Add a 'playing' class to the card when the video plays to hide the icon
        video.addEventListener('play', () => card.classList.add('playing'));
        // Remove the 'playing' class when the video is paused to show the icon
    video.addEventListener('pause', () => card.classList.remove('playing'));
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(element => {
    element.classList.add('active');
  });
});

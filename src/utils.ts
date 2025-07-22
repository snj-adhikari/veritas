import imagesLoaded from 'imagesloaded';

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including background images) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

export { preloadImages };

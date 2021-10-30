const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 5px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {

        items.forEach((item) => {

            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
                gsap.from(item.target, { filter: "blur(5rem)", transform: "rotateX(180deg)" });

            }
        });
    }, imageOptions);
    images.forEach((img) => {
        observer.observe(img);

    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });

}
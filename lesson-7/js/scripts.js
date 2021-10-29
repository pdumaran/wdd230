// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getattribute("data-src");
//     if (!src) {
//         return;
    
//     img.src = src;
//     }
// }

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 300px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entries => {
//         if (!entries.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// });


/*-----------------------------------------*/

// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });

/* I copied this code below from Abi Taylor */


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
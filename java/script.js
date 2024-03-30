const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Repetir imágenes en un bucle
function startCarousel() {
  setInterval(nextImage, 3000); // Cambia el valor 3000 por el tiempo en milisegundos que deseas para el intervalo de reproducción automática
}

startCarousel();


//carrusel




//ss



//caruel 2
const carousel2 = document.querySelector('.carousel2');
const images2 = carousel2.querySelectorAll('img');
const prevButton2 = carousel2.querySelector('.prev-button2');
const nextButton2 = carousel2.querySelector('.next-button2');
let currentIndex2 = 0;

// function showImage2(index) {
//   images2.forEach((image2, i) => {
//     if (i === index) {
//       image2.style.transform = `translateX(0%)`;
//       image2.style.opacity = 1;
//       image2.style.zIndex = 1;
//     } else {
//       image2.style.transform = `translateX(-100%)`;
//       image2.style.opacity = 0;
//       image2.style.zIndex = 0;
//     }
//   });
// }

function showImage2(index) {
  images2.forEach((image2, i) => {
    image2.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  showImage2(currentIndex2);
}

function prevImage2() {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  showImage2(currentIndex2);
}

prevButton2.addEventListener('click', prevImage2);
nextButton2.addEventListener('click', nextImage2);

// Repetir imágenes en un bucle
function startCarousel2() {
  setInterval(nextImage2, 3000); // Cambia el valor 3000 por el tiempo en milisegundos que deseas para el intervalo de reproducción automática
}

startCarousel2();


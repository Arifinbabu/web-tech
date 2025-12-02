
const images = [
    "image1.jpg", 
    "image2.jpg",
    "image3.jpg"];

let curtIn = 0; 

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    mainImage.src = images[curtIn];
}


function prevImage() {
    curtIn= (curtIn === 0) ? images.length - 1 : curtIn - 1;
    updateImage();
}

function nextImage() {
    curtIn = (curtIn=== images.length - 1) ? 0 : curtIn + 1;
    updateImage();
}
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
setInterval(nextImage, 3000);
updateImage();

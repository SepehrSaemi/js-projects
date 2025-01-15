const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
const images = document.querySelectorAll(".img");
const sliderEl = document.querySelector("#slider");

let currentImg = 1;
let timeout;

function moveSlider() {
    // Get images size, base on users display size
    let objectWidth = window.getComputedStyle(images[0]).width;
    objectWidth = objectWidth.replace("px", "");

    if (currentImg > images.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = images.length;
    }

    sliderEl.style.transform = `translateX(${(currentImg - 1) * -objectWidth}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        moveSlider();
    }, 5000);
}

moveSlider();

nextBtn.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg++;
    moveSlider();
});
backBtn.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg--;
    moveSlider();
});

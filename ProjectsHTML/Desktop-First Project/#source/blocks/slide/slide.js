"use strict";
let current = 0;
let distance = 0;
let slide_Block = document.querySelector(".slide");
let prev = slide_Block.querySelector(".slide__prev");
let next = slide_Block.querySelector(".slide__next");
let slides = slide_Block.getElementsByClassName("slide__item");





function plusSlides(x) {
    if ((current == 0 && x == 1) || (current == slides.length-2 && x == -1) || (current >= 1 && current < slides.length - 2)) {
        current += x;
        return true;
    }
    return false;
}

prev.addEventListener('click', () => {
    if (plusSlides(1)) {
        distance -= slides[0].clientHeight + 80;
        slides[current - 1].style.animation = "faiding 0.5s";
        slides[current + 1].style.animation = "emerging 0.5s cubic-bezier(1, 0.01, 1, 0)";
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateY(${distance}px)`;
        }
        setTimeout(() => {
            slides[current - 1].style.animation = "";
            slides[current + 1].style.animation = "";
        },
            500);
    }
});

next.addEventListener('click', () => {
    if (plusSlides(-1)) {
        distance += slides[0].clientHeight + 80;
        slides[current + 2].style.animation = "faiding 0.5s";
        slides[current].style.animation = "emerging 0.5s cubic-bezier(1, 0.01, 1, 0)";
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateY(${distance}px)`;
        }
        setTimeout(() => {
            slides[current + 2].style.animation = "";
            slides[current].style.animation = "";
        },
            500);
    }
});


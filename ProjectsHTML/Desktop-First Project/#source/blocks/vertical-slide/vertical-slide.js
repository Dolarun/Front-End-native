let current = 0;
let verticalSlide_Block = document.querySelector(".vertical-slide");
let prev = verticalSlide_Block.querySelector(".vertical-slide__prev");
let next = verticalSlide_Block.querySelector(".vertical-slide__next");
let verticalSlides = verticalSlide_Block.getElementsByClassName("vertical-slide__item");
let distance = 0;
let verticalSlide_Margine = 80;
let verticalSlide_Distance = verticalSlides[0].clientHeight;


function plusSlides(x) {
    if ((current == 0 && x == 1) || (current == verticalSlides.length-2 && x == -1) || (current >= 1 && current < verticalSlides.length - 2)) {
        current += x;
        return true;
    }
    return false;
}

prev.addEventListener('click', () => {
    if (plusSlides(1)) {
        distance -= verticalSlide_Distance + verticalSlide_Margine;
        verticalSlides[current - 1].style.animation = "faiding 0.5s";
        verticalSlides[current + 1].style.animation = "emerging 0.5s cubic-bezier(1, 0.01, 1, 0)";
        for (let i = 0; i < verticalSlides.length; i++) {
            verticalSlides[i].style.transform = `translateY(${distance}px)`;
        }
        setTimeout(() => {
            verticalSlides[current - 1].style.animation = "";
            verticalSlides[current + 1].style.animation = "";
        },
            500);
    }
});

next.addEventListener('click', () => {
    if (plusSlides(-1)) {
        distance += verticalSlide_Distance + verticalSlide_Margine;
        verticalSlides[current + 2].style.animation = "faiding 0.5s";
        verticalSlides[current].style.animation = "emerging 0.5s cubic-bezier(1, 0.01, 1, 0)";
        for (let i = 0; i < verticalSlides.length; i++) {
            verticalSlides[i].style.transform = `translateY(${distance}px)`;
        }
        setTimeout(() => {
            verticalSlides[current + 2].style.animation = "";
            verticalSlides[current].style.animation = "";
        },
            500);
    }
});


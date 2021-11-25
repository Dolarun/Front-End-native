let horizontal_Slide_Block = document.querySelector(".horizontal-slider");
let horizontal_Slides = horizontal_Slide_Block.getElementsByClassName("horizontal-slider__item");
let right_Slide = horizontal_Slide_Block.querySelector(".horizontal-slider__item_small-right");
let left_Slide = horizontal_Slide_Block.querySelector(".horizontal-slider__item_small-left");
let main_Slide;
right_Slide.addEventListener('click', e => {
    switch_appearence(right_Slide);
    switch_Orientation(right_Slide);
    switch_appearence(right_Slide);
}, {once:true});
left_Slide.addEventListener('click', e => {
    switch_appearence(left_Slide);
    switch_Orientation(left_Slide);
    switch_appearence(left_Slide);
}, {once:true});


function switch_appearence(slide) {
    slide.querySelector('.horizontal-slider__name').classList.toggle("horizontal-slider__name_small");
    slide.querySelector('.horizontal-slider__text').classList.toggle("horizontal-slider__text_small");
    slide.querySelector('.horizontal-slider__links').classList.toggle("horizontal-slider__links_small");
    slide.querySelector('.horizontal-slider__img-border').classList.toggle("horizontal-slider__img-border_disable");
    slide.querySelector('.horizontal-slider__img').classList.toggle("horizontal-slider__img_small");
}
function switch_Orientation(slide) {
    for (let i = 0; i < horizontal_Slides.length; i++) {
        if (!horizontal_Slides[i].classList.contains("horizontal-slider__item_small-right") && !horizontal_Slides[i].classList.contains("horizontal-slider__item_small-left")) {
            main_Slide = horizontal_Slides[i];
            break;
        }
    }
    if (slide.classList.contains("horizontal-slider__item_small-right")) {
        slide.classList.toggle("horizontal-slider__item_small-right");
        main_Slide.classList.toggle("horizontal-slider__item_small-right");
        right_Slide = main_Slide;
        right_Slide.addEventListener('click', e => {
            switch_appearence(right_Slide);
            switch_Orientation(right_Slide);
            switch_appearence(right_Slide);
        }, { once: true });
    }
    else if (slide.classList.contains("horizontal-slider__item_small-left")) {
        slide.classList.toggle("horizontal-slider__item_small-left");
        main_Slide.classList.toggle("horizontal-slider__item_small-left");
        left_Slide = main_Slide;
        left_Slide.addEventListener('click', e => {
            switch_appearence(left_Slide);
            switch_Orientation(left_Slide);
            switch_appearence(left_Slide);
        }, { once: true });
    }
}


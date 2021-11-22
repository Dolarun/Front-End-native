let second_Slide_Block = document.querySelector(".second-slide");
let second_Slides = second_Slide_Block.getElementsByClassName("second-slide__item");
let right_Slide = second_Slide_Block.querySelector(".second-slide__item_small-right");
let left_Slide = second_Slide_Block.querySelector(".second-slide__item_small-left");

right_Slide.addEventListener('click', e => {
    switch_Mode(right_Slide);
}, {once:true});
left_Slide.addEventListener('click', e => {
    switch_Mode(left_Slide);
}, {once:true});

function switch_appearence(slide) {
    slide.querySelector('.second-slide__name').classList.toggle("second-slide__name_small");
    slide.querySelector('.second-slide__text').classList.toggle("second-slide__text_small");
    slide.querySelector('.second-slide__links').classList.toggle("second-slide__links_small");
    slide.querySelector('.second-slide__img-border').classList.toggle("second-slide__img-border_disable");
    slide.querySelector('.second-slide__img').classList.toggle("second-slide__img_small");
}
function switch_Orientation(slide) {
    let main_Slide;
    for (let i = 0; i < second_Slides.length; i++) {
        if (!second_Slides[i].classList.contains("second-slide__item_small-right") && !second_Slides[i].classList.contains("second-slide__item_small-left")) {
            main_Slide = second_Slides[i];
            break;
        }
    }
    if (slide.classList.contains("second-slide__item_small-right")) {
        slide.classList.toggle("second-slide__item_small-right");
        main_Slide.classList.toggle("second-slide__item_small-right");
        right_Slide = second_Slide_Block.querySelector(".second-slide__item_small-right");
        main_Slide.addEventListener('click', e => {
            switch_Mode(right_Slide);
        }, { once: true });
        switch_appearence(main_Slide);
    }
    else if (slide.classList.contains("second-slide__item_small-left")) {
        slide.classList.toggle("second-slide__item_small-left");
        main_Slide.classList.toggle("second-slide__item_small-left");
        left_Slide = second_Slide_Block.querySelector(".second-slide__item_small-left");
        main_Slide.addEventListener('click', e => {
            switch_Mode(left_Slide);
        }, { once: true });
        switch_appearence(main_Slide);
    }
}

function switch_Mode(slide) { 
    switch_appearence(slide);
    switch_Orientation(slide);
}
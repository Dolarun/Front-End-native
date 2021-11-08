"use strict";
document.querySelectorAll('.spoiler__title').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode.querySelectorAll('.spoiler__content');
        if (parent[0].classList.contains('spoiler__content_active')) {
            parent[0].classList.remove('spoiler__content_active');
        }
        else {
            document
                .querySelectorAll(".spoiler__content")
                .forEach((child) => {
                    child.classList.remove('spoiler__content_active');
                    child.classList.toggle('spoiler__content_disable');
                })
            parent[0].classList.remove('spoiler__content_disable');
            parent[0].classList.toggle('spoiler__content_active');
        }
    }));


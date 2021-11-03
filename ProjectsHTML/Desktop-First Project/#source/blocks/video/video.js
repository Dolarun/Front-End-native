"use strict";
let video = document.querySelector(".video__video");
let video_Postload = document.querySelector(".video__postload");
let video_Postload_Image = video_Postload.querySelector("source");
video_Postload.addEventListener("click", () => {
    video_Postload.style.display = "none";
    video.setAttribute('controls', 'controls');
    video.play();
});

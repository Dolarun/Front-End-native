"use strict";
let controls = document.querySelector(".video__player-controls");
let video = document.querySelector(".video__video");

let video_Postload = document.querySelector(".video__postload");
video_Postload.addEventListener("click", () => {
    video_Postload.style.display = "none";
    video.play();
});

"use strict";
//趣味ページの動く
const hobby_img = document.querySelector(".hobby-img");
const hobby_hover = document.querySelector(".hobby-hover");

hobby_img.addEventListener("mouseover", function () {
  hobby_hover.style.display = "block";
  hobby_show.style.backgroundImage = "";
});

hobby_img.addEventListener("mouseout", function () {
  hobby_hover.style.display = "none";
});

const hobby_music = document.querySelector(".hobby-music");
const hobby_travel = document.querySelector(".hobby-travel");
const hobby_reading = document.querySelector(".hobby-reading");

const hobby_show = document.querySelector(".hobby-show");

hobby_music.addEventListener("mouseover", function () {
  hobby_show.style.backgroundImage = "url(../img/music300350.png)";
});

hobby_travel.addEventListener("mouseover", function () {
  hobby_show.style.backgroundImage = "url(../img/travel300350.png)";
});

hobby_reading.addEventListener("mouseover", function () {
  hobby_show.style.backgroundImage = "url(../img/read300350.png)";
});

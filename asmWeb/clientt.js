var arrSlide = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
];

var i = 0;
var vSlideImg = document.getElementById("myslide");
var t; // set interval - biến lặp
function fnext() {
    i++;
    if (i >= arrSlide.length)
        i = 0;
    vSlideImg.src = "imgsl/" + arrSlide[i];
}

function fback() {
    i--;
    if (i < 0)
        i = arrSlide.length - 1;
    vSlideImg.src = "imgsl/" + arrSlide[i];
}

function fStart() {
    t = window.setInterval(fnext, 3000);
}
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

WDcar1_width = 120;
WDcar1_height = 70;
WDcar1_image = "buggati.png";
WDcar1_x = 10;
WDcar1_y = 300;

GMcar2_width = 120;
GMcar2_height = 70;
GMcar2_image = "Lambo.png";
GMcar2_x = 10;
GMcar2_y = 400;

background_image = "racing.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    WDcar1_imgTag = new Image();
    WDcar1_imgTag.onload = uploadWDcar1;
    WDcar1_imgTag.src = WDcar1_image;

    GMcar2_imgTag = new Image();
    GMcar2_imgTag.onload = uploadGMcar2;
    GMcar2_imgTag.src = GMcar2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadWDcar1() {
    ctx.drawImage(WDcar1_imgTag, WDcar1_x, WDcar1_y, WDcar1_width, WDcar1_height);
}

function uploadGMcar2() {
    ctx.drawImage(GMcar2_imgTag, GMcar2_x, GMcar2_y, GMcar2_width, GMcar2_height);
}

window.addEventListener("keydown", my_keydown);


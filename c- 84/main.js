canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_img = "rover.png";

rover_y = 10;
rover_x = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        console.log("When up key is pressed =" + rover_x + " - " + rover_y);
        uploadBackground();
        uploadWater();
        uploadRover();
    }
}

function down() {
    if (rover_y >= 500) {
        rover_y += 10;
        console.log("When down key is pressed, x=" + rover_x + " |  y = " + rover_y);
        uploadBackground();
        uploadWater();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("When up left is pressed, x=" + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadWater();
        uploadRover();
    }
}

function right() {
    if (rover_x >= 700) {
        rover_x += 10;
        console.log("When right key is pressed, x=" + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadWater();
        uploadRover();
    }
}
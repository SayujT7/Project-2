// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1000;

// Global Variable 
let player = new Player();
let obstacle = new Obstacle();
let gravity = 0.025;
let speed = 0.005;
let obstacle2 = new Obstacle2();

// Array Variables
let pushObstacles = totalObstacle(5);
let pushObstacles2 = totalObstacle2(5);

// Change Screens
let state = "start";

requestAnimationFrame(animate);

function animate() {

    // States of Game
    if (state === "start") {
        startScreen();
    } else if (state === "game") {
        gameScreen();
    } else if (state === "end") {
        endScreen();
    } else if (state === "restart") {
        reset();
    }

    scoreCount();

    requestAnimationFrame(animate);

}

// Event Listener
addEventListener("keydown", player.movePlayer);
addEventListener("mousedown", mouseDownHandler);

function mouseDownHandler() {
    if (state === "start") {
        state = "game";
    } else if (state === "end") {
        state = "restart";
    }
}
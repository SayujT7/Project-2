// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 1000;

// Global Variable 
let player = new Player();
let obstacle = new Obstacle();
let gravity = 0.5;

// Call Animate Function
requestAnimationFrame(animate);

function animate() {
    // Clear Rect for Animation
    background("skyblue");

    player.gravity();
    player.draw();
    obstacle.draw(obstacle);

    fill("green")
    rect(0, 900, 1920, 100, "fill");

    requestAnimationFrame(animate);

}

// Event Listener
addEventListener("keydown", player.movePlayer);
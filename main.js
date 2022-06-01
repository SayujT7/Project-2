// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1000;

// Global Variable 
let player = new Player();
let obstacle = new Obstacle();
let gravity = 0.05;

let pushObstacles = totalObstacle(22);


// Call Animate Function
requestAnimationFrame(animate);

function animate() {
    // Clear Rect for Animation
    background("skyblue");

    player.gravity();
    player.draw();




    for (i = 0; i < pushObstacles.length; i++) {
        obstacle.draw(pushObstacles[i]);
        obstacle.move(pushObstacles[i]);
    }

    fill("green")
    rect(0, 900, 1920, 100, "fill");

    requestAnimationFrame(animate);

}

// Event Listener
addEventListener("keydown", player.movePlayer);
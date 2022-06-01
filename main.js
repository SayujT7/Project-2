// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1000;

// Global Variable 
let player = new Player();
let obstacle = new Obstacle();
let gravity = 0.025;
let speed = 0.001;


let pushObstacles = totalObstacle(5);


requestAnimationFrame(animate);

function animate() {
    // Clear Rect for Animation
    background("skyblue");

    player.gravity();
    player.draw();

    for (let obstacle of pushObstacles) {
        obstacle.draw()
        if (rectCollide(player, obstacle)) {
            console.log("hi");
        }
        obstacle.move()
    }

    fill("green")
    rect(0, 900, 1920, 100, "fill");

    requestAnimationFrame(animate);

}

// Event Listener
addEventListener("keydown", player.movePlayer);
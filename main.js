// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 1000;

console.log(cnv.width);
console.log(cnv.height);

class Player {
    constructor() {

        // Location
        this.position = {
            x: 10,
            y: 10
        }

        // Velocites
        this.velocity = {
            x: 0,
            y: 0
        }

        // Dimensions
        this.width = 30;
        this.height = 30;
    }

    // Function to draw Player with Properties in constructor
    draw() {
        fill("red");
        rect(this.position.x, this.position.y, this.width, this.height, "fill");
    }


    gravity() {
        this.draw();
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= 900) {
            this.velocity.y += gravity;
        } else this.velocity.y = 0;
    }

    // Key Press Movement
    movePlayer(event) {
        if (event.keyCode == 87) {
            player.position.y -= 100;
        }
    }
}


class Obstacle {
    constructor() {
        // Location
        this.position = {
            x: 100,
            y: 50
        }

        this.width = 20;
        this.height = 100;

    }

    draw() {
        fill("red")
        rect(this.position.x, this.position.y, this.width, this.height, "fill");
    }
}

// Global Variable 
let player = new Player();
let obstacle = new Obstacle();
console.log(obstacle);

let gravity = 0.5;


function animate() {
    // Clear Rect for Animation
    background("skyblue");

    player.gravity();
    player.draw();

    requestAnimationFrame(animate);

    fill("green")
    rect(0, 900, 1920, 100, "fill");

}

obstacle.draw();

// Call Animate Function
animate();

// Event Listener
addEventListener("keydown", player.movePlayer);
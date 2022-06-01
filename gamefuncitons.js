"use strict"

class Player {
    constructor() {

        // Location
        this.position = {
            x: 10,
            y: 800
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
        if (event.keyCode == 32) {
            player.position.y -= 200;
        } else if (player.position.y <= 0) {
            player.position.y = 800;
        }
    }
}

class Obstacle {
    constructor() {

        this.width = 20;
        this.height = randomInt(20, 80);

        // Location
        this.position = {
            x: randomInt(100, 2000),
            y: 900 - this.height
        }
    }

    // Draw Function
    draw(obs) {
        fill("navy")
        rect(obs.position.x, obs.position.y, obs.width, obs.height, "fill");
    }


    move(obs) {
        if (obs.x <= 0) {
            obs.y = 900 - obs.height;
            obs.x = randomInt(1200, 2400);
        }

        obs.position.x--;
    }

}


// Make Empty Array
let obstacleArray = [];

// Function to Add Objects to Array
function totalObstacle(total) {
    for (let n = 1; n <= total; n++) {
        obstacleArray.push(new Obstacle());
    }
    return obstacleArray;
}
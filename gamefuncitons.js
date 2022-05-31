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
        if (event.keyCode == 87) {
            player.position.y -= 50;
        }
    }
}

let obstacleArray = [];

class Obstacle {
    constructor() {
       
        this.width = 20;
        this.height = randomInt(20,80);
       
        // Location
        this.position = {
            x: 200,
            y: 900 - this.height
        }
    }

    arrayPush(total) {
        for(n = 1; n <= total; n++) {
            obstacleArray.push(this)
        }
        return obstacleArray;
    }



    // Draw Function
    draw(object) {
        fill("navy")
        rect(object.position.x, object.position.y, object.width, object.height, "fill");
    }
}

console.log(obstacleArray);

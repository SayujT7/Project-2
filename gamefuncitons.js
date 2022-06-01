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




        if (this.velocity.y > 3) {
            this.velocity.y = 3;
        } else if (this.position.y + this.height + this.velocity.y < 900) {
            this.velocity.y += gravity;
        } else this.velocity.y = 0;


        console.log(this.velocity.y);

    }

    // Key Press Movement
    movePlayer(event) {
        if (event.keyCode == 32) {
            player.position.y -= 100;
        }
    }
}


class Obstacle {
    constructor() {

        this.width = 40;
        this.height = randomInt(200, 400);

        // Location
        this.position = {
            x: randomInt(100, 4000),
            y: 900 - this.height
        }

        this.velocity = {
            x: 0,
            y: 0
        }

    }

    // Draw Function
    draw() {
        fill("navy")
        rect(this.position.x, this.position.y, this.width, this.height, "fill");
    }


    move() {
        if (this.position.x <= -100) {
            this.height = randomInt(200, 400)
            this.position.y = 900 - this.height;
            this.position.x = randomInt(1200, 3000);

        }

        this.position.x -= this.velocity.x;
        this.velocity.x += speed;

        // Constrain Speed
        if (this.velocity.x > 5) {
            this.velocity.x = 5;
        }

    }

}

class Obstacle2 {
    constructor() {

        this.width = 40;
        this.height = randomInt(200, 400);

        // Location
        this.position = {
            x: randomInt(100, 3000),
            y: 0
        }

        this.velocity = {
            x: 0,
            y: 0
        }

    }

    // Draw Function
    draw() {
        fill("navy")
        rect(this.position.x, this.position.y, this.width, this.height, "fill");
    }


    move() {
        if (this.position.x <= -100) {
            this.position.y = 0;
            this.position.x = randomInt(1200, 2400);
            this.height = randomInt(300, 400);
        }

        this.position.x -= this.velocity.x;
        this.velocity.x += speed;

        // Constrain Speed
        if (this.velocity.x > 5) {
            this.velocity.x = 5;
        }
    }

}


// Function to Add Objects to Array
function totalObstacle(total) {
    // Make Empty Array
    let obstacleArray = [];

    for (let n = 1; n <= total; n++) {
        obstacleArray.push(new Obstacle());
    }
    return obstacleArray;
}


function totalObstacle2(total) {
    // Make Empty Array
    let obstacle2Array = [];

    for (let n = 1; n <= total; n++) {
        obstacle2Array.push(new Obstacle2());
    }
    return obstacle2Array;
}


// Test if two rectangle objects intersect
function rectCollide(rect1, rect2) {
    let le1 = rect1.position.x;
    let re1 = rect1.position.x + rect1.width;
    let te1 = rect1.position.y;
    let be1 = rect1.position.y + rect1.height;
    let le2 = rect2.position.x;
    let re2 = rect2.position.x + rect2.width;
    let te2 = rect2.position.y;
    let be2 = rect2.position.y + rect2.height;
    return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}
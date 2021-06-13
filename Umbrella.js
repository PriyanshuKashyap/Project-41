class Umbrella {
    constructor(x, y) {
        var options = {
            friction: 0.1,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 50, options);
        //this.body = Bodies.circle(x, y, 50);
        //this.img = loadImage("images/Walking Frame/walking_1.png");
        this.img = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
        //Matter.Body.setStatic(this.body, true);
        console.log(this.body);
    }

    display() {
        //Matter.Body.setStatic(this.body, true);
        image(this.img, this.body.position.x, this.body.position.y);
        //ellipse(this.body.position.x, this.body.position.y, 50, 50);
    }
}
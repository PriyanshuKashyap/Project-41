class Drops {
   constructor(x, y) {
       this.x = x;
       this.y = y;
       this.options = {
           friction: 0.1
       }
       this.body = Bodies.circle(x, y, 20, this.options);
       World.add(world, this.body);
   }
   
   update() {
       if (this.body.position.y > height) {
           Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});
       }
   }

   display() {
       push();
       fill(rgb(0, 0, 255));
       ellipse(this.body.position.x, this.body.position.y, 10, 10);
       pop();
   }
}
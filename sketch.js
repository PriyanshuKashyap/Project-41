const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine, world;
var umbrella, thunderAnim, thunderSpr;
var maxDrops = 100;
var drops = [];
function preload(){
    thunderAnim = loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png");
}

function setup(){
   createCanvas(500, 500);
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(width/2, height - 100);
   Engine.run(engine);
   thunderSpr = createSprite(width/2, 30, 50, 50);
   thunderSpr.debug = true;
   //console.log(thunderSpr);
   thunderSpr.addAnimation("thunder", thunderAnim);
}

function draw(){
    background("black");
    Engine.update(engine);
    //umbrella.display();
    for (var i = 0; i < maxDrops; i++) {
        if (frameCount % 10 === 0) {
            drops.push(new Drops(random(0, 400), random(0, 400)));

        }

        if (drops[i]) {
            drops[i].display();
            drops[i].update();
        }
        //console.log(frameCount);
    }
    umbrella.display();
    /*for (var i = 0; i <= 4; i++) {
        switch (i) {
            case 1:
                thunderSpr.changeAnimation("thunder", thunder);
                //image(thunder, width/2, 30);
            case 2:
                thunderSpr.changeImage("thunder", "images/thunderbolt/2.png");
            case 3:
            case 4:
        }
    }*/
    drawSprites();
}   


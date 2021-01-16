var playerCar, car2, car3, car4;
var carImage1, carImage2, carImage3, carImage4;
var obstacle, obstacleImage;
var oil, oilImage;
var obstacleState = 0;
var oilState = 0;
var speed = -8;

function preload() {
   carImage1 = loadImage("images/car1.png");
   carImage2 = loadImage("images/car2.png");
   carImage3 = loadImage("images/car3.png");
   carImage4 = loadImage("images/car4.png");
   
   oilImage = loadImage("images/oil.png");
   obstacleImage = loadImage("images/roadblock.png");
}

function setup() {
   createCanvas(800,800);

   playerCar = createSprite(100,700,20,20);
   car2 = createSprite(300,700,20,20);
   car3 = createSprite(500,700,20,20);
   car4 = createSprite(700,700,20,20);

   playerCar.addImage(carImage1);
   playerCar.scale = 0.3;
   
   car2.addImage(carImage2);
   car2.scale = 0.5;

   car3.addImage(carImage3);
   car3.scale = 0.07;

   car4.addImage(carImage4);
   car4.scale = 0.08;

   obstacle = createSprite(100,400,40,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.5
   oil = createSprite(100,200,40,40);
   oil.addImage(oilImage);
   oil.scale = 0.2
}

function draw() {
    background("gray");

    playerCar.velocityY = -8;
    car2.velocityY = -6;
    car3.velocityY = -random(4,8);
    car4.velocityY = -random(6,8);

    if(obstacle.isTouching(playerCar)) {
        obstacleState = 1
    }
    if(obstacleState === 1) {
        playerCar.velocityY = -3
    }
    if(oil.isTouching(playerCar)) {
        oilState = 1
    }
    if(oilState === 1) {
        playerCar.velocityY = -15
    }
    if(keyDown(LEFT_ARROW)) {
        playerCar.x = playerCar.x-4;
    }
    if(keyDown(RIGHT_ARROW)) {
        playerCar.x = playerCar.x+4;
    }

    drawSprites();
}
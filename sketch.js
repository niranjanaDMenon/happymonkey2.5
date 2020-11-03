
function setup() {
  createCanvas(800,800);
  fixedrect=createSprite(400,400,50,80);
  movingrect=createSprite(200,200,80,50);
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}

function draw() {
  background(0);

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
 // console.log(fixedrect.x);
 // console.log(movingrect.x);

  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
      fixedrect.x  - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
       movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
       fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){

    fixedrect.shapeColor="red"
    movingrect.shapeColor="blue";

  }else {

    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }

  drawSprites();
}
var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 80, 50);
  movingrect=createSprite(600,300,50,80);
  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";
}

function draw() {
  background(0);  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="pink";
    movingrect.shapeColor="pink";
  }
  else{
    fixedrect.shapeColor="yellow";
    movingrect.shapeColor="yellow";
  }

}
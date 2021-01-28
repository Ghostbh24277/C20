//Program to make algorithm for collision sprites
var movingRect, fixedRect;

function setup()
{
    createCanvas(windowWidth,windowHeight)

    movingRect=createSprite(200,100,50,50);
    fixedRect=createSprite(800,200,60,300)
    movingRect.shapeColor=fixedRect.shapeColor="yellow"
    

}
function draw()
{
    background(0);
     movingRect.x=World.mouseX;
     movingRect.y=World.mouseY;

     console.log("Width Gap " + (movingRect.x-fixedRect.x )+ " "+(movingRect.width/2+fixedRect.width/2))
     console.log("Height Gap "+ (movingRect.y-fixedRect.y )+ " " +(movingRect.height/2+fixedRect.height/2))
     
     //collision algorithm
    if(Math.abs(movingRect.x-fixedRect.x)<=(movingRect.width/2+fixedRect.width/2) && (Math.abs(movingRect.y-fixedRect.y)<=(movingRect.height/2+fixedRect.height/2))){
        movingRect.shapeColor=fixedRect.shapeColor="blue"
    }
    else
    {
        movingRect.shapeColor=fixedRect.shapeColor="yellow"
    }

    
    drawSprites();
}
//Width and height for our canvas
var canvasWidth = 650; 
var canvasHeight = 350;
 
//the with and height of our spritesheet
var spriteWidth = 864; 
var spriteHeight = 280; 
 
//we are having two rows and 8 cols in the current sprite sheet
var rows = 2; 
var cols = 8; 
 
//The 0th (first) row is for the right movement
var trackRight = 0; 
 
//1st (second) row for the left movement (counting the index from 0)
var trackLeft = 1; 
 
//To get the width of a single sprite we divided the width of sprite with the number of cols
//because all the sprites are of equal width and height 
var width = spriteWidth/cols; 
 
//Same for the height we divided the height with number of rows 
var height = spriteHeight/rows; 
 
//Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
var curFrame = 0; 
 
//The total frame is 8 
var frameCount = 8; 
 
//x and y coordinates to render the sprite 
var x=0;
var y=0; 
 
//x and y coordinates of the canvas to get the single frame 
var srcX=0; 
var srcY=0; 
 
//tracking the movement left and write 
var left = false;
 
var right = true;    //Assuming that at start the character will move right side 
 
//Speed of the movement 
var speed = 12; 
 
//Getting the canvas 
var canvas = document.getElementById('canvas');
 
//setting width and height of the canvas 
canvas.width = canvasWidth;
canvas.height = canvasHeight; 
 
//Establishing a context to the canvas 
var ctx = canvas.getContext("2d");
 
//Creating an Image object for our character 
var character = new Image(); 
 
//Setting the source to the image file 
character.src = "character.png";

function updateFrame(){
    //Updating the frame index 
    curFrame = ++curFrame % frameCount; 

    //Calculating the x coordinate for spritesheet 
    srcX = curFrame * width; 

    //Clearing the drawn frame 
    ctx.clearRect(x,y,width,height); 

    //if left is true and the character has not reached the left edge 
    if(left && x>0){
        //calculate srcY 
        srcY = trackLeft * height; 
        //decreasing the x coordinate
        x-=speed; 
    }
    
    //if the right is true and character has not reached right edge 
    if(right && x<canvasWidth-width){
        //calculating y coordinate for spritesheet
        srcY = trackRight * height; 
        //increasing the x coordinate 
        x+=speed; 
    }
}
 
function draw(){
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}

setInterval(draw,100);
function moveLeft(){
    left = true; 
    right = false; 
}
    
function moveRight(){
    left = false;
    right = true; 
}

   
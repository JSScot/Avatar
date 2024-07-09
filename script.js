/* VARIABLES */
let eyeHeight = 30
let eyeWidth = 55

let pupHeight =15
let pupWidth =27
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background("#e8e1ba"); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES)
  rectMode(CENTER)

  /*hair
  fill("black")
  rect(width/2,260,200,160)
  ellipse(136,118,100,200)*/

  //ears
  fill("#914e24")
  ellipse(106,192,30,50)
  ellipse(294,192,30,50)

  
  //Face
  fill("#914e24")
  ellipse(width/2,height/2,175,200)
  

  //eyes
  fill("white")
  ellipse(155,180,eyeWidth,eyeHeight)
  ellipse(245,180,eyeWidth,eyeHeight)

  //pupils
  fill("#3b1d0b")
  ellipse(155,180,pupWidth,pupHeight)
  ellipse(245,180,pupWidth,pupHeight)

  //mouth
  fill("#914e24")
  strokeWeight(3)
  arc(200,230,30,50,0,180)


  //text
  fill("red")
  textSize(17)
  text("We will customize this text later on\n in the project to reflect your avatar",10,20)
}
/* VARIABLES */

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(255,249,226); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES)
  rectMode(CENTER)

  //Face
  ellipse(200,200,175,200)

  //eyes
  ellipse(155,180,55,30)
  ellipse(245,180,55,30)

  //pupils
  ellipse(155,180,27,15)
  ellipse(245,180,27,15)

  //mouth
  arc(200,230,30,50,0,180)

  //text
  textSize(17)
  text("We will customize this text later on\n in the project to reflect your avatar",10,20)
}
/* VARIABLES */
let toggle = false

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

  //hair
  stroke("black")
  fill("black")
  ellipse(200,170,235,200)
  ellipse(200,170,235,200)
  ellipse(79,224,130,130)
  ellipse(320,224,130,130)


  //ears
  fill("#854a25")
  ellipse(106,192,30,50)
  ellipse(294,192,30,50)

  //earrings
  fill("#c9c8c7")
  rect(106,229,10,40)
  rect(295,229,10,40)

  
  //Face
  fill("#854a25")
  ellipse(width/2,height/2,175,200)
  

  //eyes
  //toggleEyes
  if(toggle==true)
  {
    fill(0)
    ellipse(155,180,eyeWidth,eyeHeight/8)
    ellipse(245,180,eyeWidth,eyeHeight/8)
    //pupils
    fill("#3b1d0b")
    ellipse(155,180,pupWidth,pupHeight/8)
    ellipse(245,180,pupWidth,pupHeight/8)
  }
  else if(toggle==false){
    fill("white")
    ellipse(155,180,eyeWidth,eyeHeight)
    ellipse(245,180,eyeWidth,eyeHeight)
    //pupils
    fill("#3b1d0b")
    ellipse(155,180,pupWidth,pupHeight)
    ellipse(245,180,pupWidth,pupHeight)
  }

  //nose
  fill("#854a25")
  arc(width/2,215,30,20,0,180)


  //mouth
  if(toggle==true)
    {
      //close
      fill("#854a25")
      arc(200,245,30,50,0,180)
    }
  else
  {
    //open mouth
    fill("#e88372")
    strokeWeight(3)
    arc(200,245,30,50,0,180)
  }


  //text
  fill("#079ade")
  stroke("white")
  textSize(20)
  text("Hi, I'm Jordin. I like coding, crocheting \n and baking stuff",10,20)

  //Directions for Mouse Press
   textSize(17)
  text("Click to see me close my eyes.\nClick again to open them",150,370)
}

/* Functions */
function mousePressed()
{
  toggle = !toggle
}

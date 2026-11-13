//create variable for canvas
var can;
var w,h;

//create function to set sketch to full browser width/height
window.onload = function(){
  w = document.getElementById("b").offsetWidth;
  h = document.getElementById("b").offsetHeight;
}

function setup(){
  can = createCanvas(w,h);
  can.parent("b");
  noStroke();
  noFill();
}

function draw(){

  clear();

  //small eye movement based on mouse position
  //mouse movement is divided by 50 so the pupils move slowly
  var x = (mouseX - width/2) / 50;
  var y = (mouseY - height/2) / 50;

  //conditional statement to stop the pupils
  //from moving too far outside the eyes
  if(x > 8){
    x = 8;
  } else if(x < -8){
    x = -8;
  }
    
  if(y > 8){
    y = 8;
  } else if(y < -8){
    y = -8;
  }

  //left eye
  fill(240);

  circle(width/2 - 100, height/2 + 110, 90);

  //left pupil
  fill(76, 0, 153);

  circle(width/2 - 100 + x, height/2 + 110 + y, 40);

  //right eye
  fill(240);

  circle(width/2 + 100, height/2 + 110, 90);

  //right pupil
  fill(76, 0, 153);

  circle(width/2 + 100 + x, height/2 + 110 + y, 40);
    
}

function windowResized(){

  w = document.getElementById("b").offsetWidth;
  h = document.getElementById("b").offsetHeight;

  resizeCanvas(w,h);
}
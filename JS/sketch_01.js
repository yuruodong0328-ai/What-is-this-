//create variable for canvas
var can;
var w,h;

//I learn arrays from the coding tutorials on brightspace

//declare variables for stars
var x = [];
var y = [];
var a = [];

//create function to set sketch to full browser width/height
window.onload = function(){
    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;
}

function setup(){

    can = createCanvas(w,h);
    can.parent("b");
    noFill();

    noStroke();

    //create stars
    for(var i = 0; i < 40; i++){

        x[i] = random(width);
        y[i] = random(height);
        a[i] = random(100,255);
    }
}

function draw(){

    //draw stars
    for(var i = 0; i < 40; i++){

        fill(249,228,160,a[i]);
        
        //draw pixel star shape using small rectangles
        rect(x[i], y[i], 4, 4);
        rect(x[i]+4, y[i], 4, 4);
        rect(x[i]-4, y[i], 4, 4);
        rect(x[i], y[i]+4, 4, 4);
        rect(x[i], y[i]-4, 4, 4);
    }
}


function windowResized() {
    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;
    resizeCanvas(w, h);
}
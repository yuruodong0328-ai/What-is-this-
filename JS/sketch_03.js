//create variable for canvas
var can;
var w,h;

//I learn arrays from the coding tutorials on brightspace

//declare variables for bubbles
//x = x position
//y = y position
//s = bubble size
//r,g,b = bubble color
var x = [];
var y = [];
var s = [];
var r = [];
var g = [];
var b = [];

//reference:
//MDN Web Docs - DOMContentLoaded event
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

//use DOMContentLoaded instead of window.onload
//because this page also contains another JavaScript file
//using window.onload in both files caused a conflict
//this waits until the HTML page finishes loading
//before getting the width and height of div "b"
document.addEventListener("DOMContentLoaded", function() {
    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;
});

function setup(){

    can = createCanvas(w,h);
    can.parent("b");
    noStroke();

    //create bubbles across the whole canvas
    for(var i = 0; i < 40; i++){
        //random x position
        x[i] = random(width);
         //random y position
        y[i] = random(height);
        
        //random bubble size
        s[i] = random(10,35);

        //random pastel bubble colors
        r[i] = random(220,255);
        g[i] = random(160,230);
        b[i] = random(180,255);
    }
}

function draw(){

    clear();

    //draw bubbles
    for(var i = 0; i < 50; i++){
        
        //draw bubble
        fill(r[i],g[i],b[i],130);
        circle(x[i],y[i],s[i]);
        
        //draw small white shine
        fill(255,255,255,120);
        circle(x[i] - s[i]/5, y[i] - s[i]/5, s[i]/4);

        //move bubble upward
        y[i] = y[i] - 0.5;

        //reset bubble from bottom
        if(y[i] < -50){
            x[i] = random(width);
            y[i] = height + random(20,80);
        }
    }
}

function windowResized(){

    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;

    resizeCanvas(w,h);
}
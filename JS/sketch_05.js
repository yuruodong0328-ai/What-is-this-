//create variable for canvas
var can;
var w,h;

//I learn arrays from the coding tutorials on brightspace

//declare variables for snow
var x = [];
var y = [];
var s = [];
var sp = [];

//reference:
//MDN Web Docs - DOMContentLoaded event
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

//use DOMContentLoaded instead of window.onload
//because this page also contains another JavaScript file
//using window.onload in both files caused a conflict
document.addEventListener("DOMContentLoaded", function() {
    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;
});

function setup(){

    can = createCanvas(w,h);
    can.parent("b");
    noStroke();

    //assign random values to snow
    for(var i = 0; i < 80; i++){

        x[i] = random(width);

        y[i] = random(height);

        s[i] = random(4,10);

        sp[i] = random(0.5,2);
    }
}

function draw(){

    clear();

    //draw 
    for(var i = 0; i < 80; i++){

        fill(255, 215, 101);

        rect(x[i], y[i], s[i], s[i]);

        //move snow down
        y[i] += sp[i];

        //reset snow
        if(y[i] > height){

            y[i] = 0;

            x[i] = random(width);
        }
    }
}

function windowResized(){

    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;

    resizeCanvas(w,h);
}
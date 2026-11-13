var can;
var w, h;
var d;

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

function setup() {
    can = createCanvas(w, h);
    can.parent("b");
    noFill();
    d = 40;
}

function draw(){

    clear();

    //grow circles
    d += 2;

    //reset
    if(d > 260){
        d = 40;
    }

    noFill();

    //main color
    stroke(249, 228, 160, 180);
    strokeWeight(4);

    // 用比例代替固定px
    circle(width * 0.15, height * 0.25, d);       // left top
    circle(width * 0.85, height * 0.35, d - 20);  // right side
    circle(width * 0.25, height * 0.75, d - 40);  // bottom left

    stroke(244, 162, 97, 100);
    strokeWeight(2);

    circle(width * 0.15, height * 0.25, d + 40);
    circle(width * 0.85, height * 0.35, d + 20);
    circle(width * 0.25, height * 0.75, d);

}

function windowResized() {
    w = document.getElementById("b").offsetWidth;
    h = document.getElementById("b").offsetHeight;
    resizeCanvas(w, h);
}
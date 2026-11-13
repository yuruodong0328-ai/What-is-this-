// variable to count clicks
var clickCount = 0;

// function runs when image is clicked
function boxClick(){
    // increase clickCount by 1 each time the image is clicked
    clickCount = clickCount + 1;

    if(clickCount == 1){
        document.getElementById("click").innerHTML = "something moves inside...";
    }
    else if(clickCount == 2){
        document.getElementById("click").innerHTML = "it moves again!";
    }
    else if(clickCount == 3){
        document.getElementById("click").innerHTML = "ok you should really open it...";
    }
    else if(clickCount == 4){
    // hide the click message and show the next link after the fourth click
    document.getElementById("click").style.display = "none";
    document.getElementById("next_btn").style.display = "block";
    }
}
// .style.display : learn from https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display 
// I see how to write style in js in this website
//example: 
// function updateDisplay() {
//  articles.forEach((article) => {
//  article.style.display = select.value; * this line
// });
//}
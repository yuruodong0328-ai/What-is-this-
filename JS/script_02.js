// this function changes the image and text after the egg is clicked
function changePet() {
    // replace the egg image with the pet image
    document.getElementById("pic_ani").src = "../../Images/pet.png";

    document.getElementById("text_1").innerHTML = "You freeze for a second.<br/>It is small, strange, and completely unlike anything you know.<br/>But it is looking at you like it expects something.";

    document.getElementById("click_02").innerHTML = "What is this thing?...";
    // show the continue button after the image is clicked
    document.getElementById("next_btn").style.display = "inline-block";
}
// Track how many objects clicked
var clickedCount = 0;

// Function runs when player clicks an object
function clickObject(obj) {

  // Add 1 to count
  clickedCount = clickedCount + 1;

  // Mark button as clicked
  // add the "clicked" class so the selected object changes appearance (The reference is below)
  // "obj_" + obj builds the id name, such as "obj_chair" or "obj_keys"
  // classList.add("clicked") adds the clicked class to that element
  document.getElementById("obj_" + obj).classList.add("clicked");

  // Show text based on which object was clicked
  if (obj == "chair") {
    document.getElementById("pic").src = "../../Images/pet_chair.png";
    document.getElementById("fragment_text").innerHTML = "It sat in your chair before you could.<br/>It looked very pleased with itself.";
  } else if (obj == "keys") {
    document.getElementById("pic").src = "../../Images/pet_keys.png";
    document.getElementById("fragment_text").innerHTML = "Your keys went missing for two days.<br/>You found them under its sleeping spot.";
  } else if (obj == "door") {
    document.getElementById("pic").src = "../../Images/pet_door.png";
    document.getElementById("fragment_text").innerHTML = "It sits by the door every time you leave.<br/>It's always there when you come back.";
  }

  // Show next button after all 3 clicked
  if (clickedCount == 3) {
    document.getElementById("next_btn").style.display = "inline-block";
  }

}

//MDN "Element: classList property."
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//MDN "DOMTokenList: add() method."
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
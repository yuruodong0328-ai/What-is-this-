window.onload = function() {
var petName = localStorage.getItem("petName");
    document.getElementById("pet_name").innerHTML = petName + "! <br/> You called its name.<br/><br/> Its ears twitched softly.<br/> Then it looked up at you.<br/><br/> Something about that moment<br/>made the apartment feel warmer.";
}
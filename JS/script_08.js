window.onload = function() {
    var petName = localStorage.getItem("petName");
    document.getElementById("pet_name").innerHTML ="You don't open the door.<br/> The agents stood outside for a long time.<br/>Then the footsteps faded.<br/>"+ petName + " did not move until it was quiet.<br/>Then it leaned against you.<br/>Just slightly. Just enough.<br/><br/>Outside, the city moves on.<br/>Inside—you chose to protect it.<br/>You are not sure what that choice means yet.<br/>But it feels like the beginning of something.";
}

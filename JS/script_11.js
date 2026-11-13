window.onload = function() {
    var petName = localStorage.getItem("petName");
    document.getElementById("pet_name").innerHTML ="You hesitated too long. <br/>And then you opened the door.<br/><br/>They were quick."+ petName + " did not fight back.<br/>It looked at you one last time as they led it out.<br/>You keep telling yourself<br/>you were not sure.<br/>That it was the right thing.<br/>That you had no choice.<br/>But the apartment feels different now.<br/>There is a small mark on the wall near the window<br/>where it used to sit and watch the street.<br/>You have not cleaned it off.<br/>You are not sure you will.";
}


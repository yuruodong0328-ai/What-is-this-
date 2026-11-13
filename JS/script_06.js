window.onload = function() {
    // retrieve the pet name that was saved earlier
    var petName = localStorage.getItem("petName");
    // insert the saved name into the text on the page
    document.getElementById("pet_name").innerHTML ="Three sharp sounds. "+ petName + " goes still.<br/> Another knock.<br/> Harder this time.<br/>A voice comes from the other side.<br/>“We know it is in there.”<br/>A pause.<br/>“You need to listen carefully.”<br/>“Do not believe anything it tells you.”<br/>“It imitates. It learns. It adapts.”<br/>“It will say whatever it needs to in order to stay.” ";
}


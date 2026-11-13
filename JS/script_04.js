function saveName() {

    var petName = document.getElementById("name_input").value;

    if (petName == "") {
        document.getElementById("name_error").innerHTML = "Please type a name first.";
    }
    else {
        // save the pet name so it can be used on later pages
        localStorage.setItem("petName", petName);
        // go to the next page after the name is saved
        window.location.href = "bond.html";
    }
}

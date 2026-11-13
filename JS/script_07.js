// this function chooses the ending based on the player's previous answer
// the final decision made on this page
function goEnding(choice) {
    // get the previous choice from localStorage
    var fearChoice = localStorage.getItem("fearChoice");
    
    // && means both conditions must be true
    if (fearChoice == "no" && choice == "protect") {
        window.location.href = "../Endings/stay_ending01.html";
    }
    else if (fearChoice == "no" && choice == "open") {
        window.location.href = "../Endings/regret_ending02.html";
    }
    else if (fearChoice == "unsure" && choice == "protect") {
        window.location.href = "../Endings/almost_ending03.html";
    }
    else if (fearChoice == "unsure" && choice == "open") {
        window.location.href = "../Endings/loss_ending04.html";
    }
}

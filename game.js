var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice) {
if(choice1 === choice2) {
    return "The result is a tie";
}
     if(userChoice === "rock") {

        if(computerChoice === "scissors") {
            return "rock wins";
    }
    else {
        return "paper wins";
    }
    }

     else if(userChoice === "paper") {

        if(computerChoice === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }

    else if(userChoice === "scissors") {

        if(computerChoice === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
}

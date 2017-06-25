function userChoice(choice) {
  switch (choice) {
    case 'rock':
      break;
    case 'paper':
      break;
    case 'scissors':
      break;
  };
  document.getElementById('humaResult').innerHTML = choice;
  return choice;
};

function computerChoice() {
  var choice = Math.random();
  if (choice < 0.34) {
    choice = 'rock';
  } else if (choice < 0.66) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }

  document.getElementById('computerResult').innerHTML = choice;
  return choice;
};

function userComputerChoices(choice) {
  var choice1 = userChoice(choice);
  var choice2 = computerChoice();
  var result = compare(choice1, choice2);
  document.getElementById('roundResult').innerHTML = result;
};

function clickEvent() {
  var rockChoice = document.getElementById('rockChoice');
  var paperChoice = document.getElementById('paperChoice');
  var scissorsChoice = document.getElementById('scissorsChoice');

  rock.addEventListener('click', function () {
    userComputerChoices();
  });

  rock.addEventListener('click', function () {
    userComputerChoices();

  });

  paper.addEventListener('click', function () {
    userComputerChoices();
  });

  scissors.addEventListener('click', function() {
    userComputerChoices();
  });
};

function compare(choice1, choice2) {
  if (choice1 === choice2) {
    return 'The result is a tie!';
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "rock wins";
    } else {
      return "scissors wins";
    }
  }
};

function score() {
}

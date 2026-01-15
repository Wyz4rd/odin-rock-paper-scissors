function getComputerChoice() {
    let result = "Computer chose: ";
    let computerCoice = Math.ceil(Math.random() * 3);
    
    if (computerCoice === 1) {
        return result + "Rock";
    } else if (computerCoice === 2) {
        return result + "Paper"
    } else {
        return result + "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type your choice of Rock, Paper or Scissors")
    return humanChoice
}


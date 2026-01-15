let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = "";
    let computerChoice = Math.ceil(Math.random() * 3);
    
    if (computerChoice === 1) {
        return result = "rock";
    } else if (computerChoice === 2) {
        return result = "paper"
    } else {
        return result = "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type your choice of Rock, Paper or Scissors")
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase()
    console.log(humanChoice)
    computerChoice = getComputerChoice()
    console.log(computerChoice)
    if(humanChoice === computerChoice) {
        return console.log(`Its a draw! you both chose ${humanChoice}`)
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
    
}

console.log(playRound(), playRound(), humanScore, computerScore)
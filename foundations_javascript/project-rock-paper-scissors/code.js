
function getComputerChoice() {
    let decider = Math.floor(Math.random() * 100)
    let choice = null
    if (decider < 33){
        choice = "rock"
    } else if (decider >= 33 && decider < 66) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice!")
    humanChoice = humanChoice.toLowerCase()
    return humanChoice
}
//console.log("Human: ", human)

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){

    let roundOutcome = null

    if (humanChoice === computerChoice){
        roundOutcome = "Tie"
   } 
    else if (humanChoice === "rock" && computerChoice === "scissors"){
    roundOutcome = "Win"
    humanScore += 1
   } 
    else if (humanChoice === "paper" && computerChoice === "rock"){
    roundOutcome = "Win"
    humanScore += 1
   } 
    else if (humanChoice === "scissors" && computerChoice === "paper"){
    roundOutcome = "Win"
    humanScore += 1
   } 
    else {
    roundOutcome = "Loss"
    computerScore =+ 1
   }

   console.log("Computer: ", computerChoice, "\n", "You: ", humanChoice, "\n", "Result: ", roundOutcome)
   console.log("Your score: ", humanScore, "\n", "Computer score: ", computerScore)
   
   return roundOutcome

}

function playGame(){
    for (let i=0; i < 5; i++){
        const computer = getComputerChoice()
        const human = getHumanChoice()
        console.log("Round number: ", i+1)
        playRound(human, computer)
    }
    if (humanScore > computerScore){
        console.log("You win the game!")
    }
    else if (humanScore === computerScore){
        console.log("The game was a tie!")
    } else {
        comsole.log("You lost the game!")
    }
}

playGame()
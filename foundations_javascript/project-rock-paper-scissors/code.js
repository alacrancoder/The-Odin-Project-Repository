
function getComputerChoice() {
    let decider = Math.floor(Math.random() * 100)
    let choice = null
    console.log(decider)
    if (decider < 33){
        choice = "rock"
    } else if (decider >= 33 && decider < 66) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}



//console.log("Computer: ", computer)

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice!")
    humanChoice = humanChoice.toLowerCase()
    return humanChoice
}
//console.log("Human: ", human)

let humanScore = 0
let computerScore = 0

function playRound(getHumanChoice, getcomputerChoice){
   if (humanChoice === computerChoice){
    console.log("It's a tie!")
    return null
   } else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("You win!")
    humanScore = humanScore++
    return humanScore
   } else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("You win!")
   } else if (humanChoice === "scissors" && computerChoice === "paper"){
    console.log("You win!")
   } else {
    console.log("You lost!")
   }
   console.log("You->", humanChoice, "|", "Computer->", computerChoice)


}
console.log(humanScore)
const computer = getComputerChoice()
const human = getHumanChoice()

playRound(human, computer);

function playGame(){

}
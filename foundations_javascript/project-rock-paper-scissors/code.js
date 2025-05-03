function getComputerChoice() {
    let decider = Math.floor(Math.random() * 100)
    let choice = null
    console.log(decider)
    if (decider < 33){
        choice = "Rock"
    } else if (decider >= 33 && decider < 66) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return choice
}

computer = getComputerChoice()

console.log("Computer: ", computer)

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice!")
    return humanChoice
}
human = getHumanChoice()
console.log("Human: ", human)

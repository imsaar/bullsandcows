import { getScore } from './check.js'
import { generateSecret } from './secret.js'

const MAXROUNDS = 5


//Input: secret = "1807", guess = "7810"
//Output: "1A3B"
//Input: secret = "1123", guess = "0111"
//Output: "1A1B"

//create DOM elements
let body = document.body
let startBtn = document.getElementById('start')
let input = document.createElement('input')
let submit = document.createElement('button')
submit.innerText = "Make your guess"
let finalResult = document.getElementById('final-result')
let results = document.getElementById('results')
//event listeners
startBtn.addEventListener('click', startGame)
submit.addEventListener('click', playRound)
//create variables
let secret
let round
let bulls
let cows

function startGame() {
    //remove any previous results
    results.innerHTML = ''
    startBtn.remove()
    round = 1
    //create a guess input
    body.append(input, submit)
    secret = generateSecret()
    console.log(secret)

}
function playRound() {
    //submit value for score
    let guess = input.value
    let score = getScore(secret, guess)
    bulls = score[0]
    cows = score[1]
    //create and display result
    let result = document.createElement('div')
    result.innerText = `Round ${round} Guess: ${guess} 🐂${bulls} 🐄${cows}]`
    results.append(result)
    //check to see if game is over
    if (isOver(result, round)) {
        submit.remove()
        input.remove()   
        body.append(startBtn)
    }
    //get ready for next round
    round++
    input.value = ''
}

function isOver(result, round) {
    if (bulls === secret.length) {
        finalResult.innerText = `You win!`
        return true
    } else if (round === MAXROUNDS) {
        finalResult.innerText = "That was your last guess, you lose!"
        return true
    } 

    return false
}

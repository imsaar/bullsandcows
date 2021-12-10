import {body, startBtn, input, submit, finalResult, results} from './script.js'
import { generateSecret } from './secret.js'

const MAXROUNDS = 5
let secret
let round
let bulls
let cows

export function startGame() {
    //remove any previous results
    results.innerHTML = ''
    finalResult.innerHTML = ''
    //start new game
    startBtn.remove()
    round = 1
    //create a guess input
    body.append(input, submit)
    secret = generateSecret()
    console.log(secret)

}
export function getScore(secret, guess) {
    let cows = 0
    let bulls = 0
    guess = guess.split('')
    secret = secret.split('')
    for (let i = 0; i < guess.length; i++) {
        let isBull = false
        if (guess[i] === secret[i]) {
            secret[i] = 'x'
            isBull = true
            bulls++
        }
        //find cows, but only when its not a bull
        //same number cannot be a cow twice
        if (secret.includes(guess[i]) && !isBull) {
            secret[secret.indexOf(guess[i])] = 'x'
            cows++
        }
    }

    return [bulls, cows]
}


export function playRound() {
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
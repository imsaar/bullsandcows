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
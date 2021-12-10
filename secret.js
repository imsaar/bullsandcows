export function generateSecret() {
    let secret = ''
    for (let i = 0; i < 4; i++) {
        secret += Math.floor(Math.random() * 10) 
    }
    return secret
}
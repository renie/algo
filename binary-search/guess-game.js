import promptLib from 'prompt-sync'

const program = (min, max, guessCount = 1) => {
    const nextGuess = min + Math.floor((max-min)/2)

    const isGuessRight = (prompt(`Is it ${nextGuess}? (y/n)  `).toLowerCase() === 'y')

    if (isGuessRight) {
        console.log(`Great! Just ${guessCount} attempts!`)
        return
    }

    const tip = prompt(`Is it higher or lower than ${nextGuess}? (h/l)  `).toLowerCase()
    switch (tip) {
        case 'h':
            program(nextGuess, max, ++guessCount)
            break;
        case 'l':
            program(min, nextGuess, ++guessCount)
            break;
        default:
            console.log('Wrong Option')
            break;
    }
}

const prompt = promptLib()
console.log('\nGuess a number 0 - 100\n\n')
program(0, 100)

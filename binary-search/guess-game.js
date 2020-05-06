import promptLib from 'prompt-sync'
const prompt = promptLib()

const getHalfOfRange = (min, max) =>
    min + Math.floor((max-min)/2)

const formatPlayerAnswer = playersAnswer =>
    playersAnswer.toLowerCase()

const getPlayersGuessConfirmation = nextGuess =>
    prompt(`Is it ${nextGuess}? (y/n)  `)

const isPositive = playersAnswer =>
    formatPlayerAnswer(playersAnswer) === 'y'

const isGuessRight = nextGuess =>
    isPositive(getPlayersGuessConfirmation(nextGuess))

const getPlayersTip = nextGuess =>
    prompt(`Is it higher or lower than ${nextGuess}? (h/l)  `)

const isGuessHigherOrLower = nextGuess =>
    formatPlayerAnswer(getPlayersTip(nextGuess))

const itIsHigher = higherOrLower =>
    higherOrLower === 'h'

const gessAHigherNumber = (nextGuess, {max, guessCount}) =>
    guess({ min: nextGuess, max, guessCount: ++guessCount })

const gessALowerNumber = (nextGuess, {min, guessCount}) =>
    guess({ min, max: nextGuess, guessCount: ++guessCount })

const itIsLower = higherOrLower =>
    higherOrLower === 'l'

const guessWithTip = (nextGuess, higherOrLower, lastGuessData) => {
    if (itIsHigher(higherOrLower))
        return gessAHigherNumber(nextGuess, lastGuessData)
    if (itIsLower(higherOrLower))
        return gessALowerNumber(nextGuess, lastGuessData)

    return false
}

const guess = ({ min, max, guessCount = 1 }) => {
    const nextGuess = getHalfOfRange(min, max)
    if (!isGuessRight(nextGuess))
        return guessWithTip(nextGuess, isGuessHigherOrLower(nextGuess), { min, max, guessCount })

    console.log(`Great! Just ${guessCount} attempts!`)
    return true
}

console.log('\nGuess a number 0 - 100\n\n')
guess({ min: 0, max: 100})

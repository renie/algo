import promptLib from 'prompt-sync'
const prompt = promptLib()

const formatPlayerAnswer = playersAnswer =>
    playersAnswer.toLowerCase()

const getPlayersGuessConfirmation = nextGuess =>
    prompt(`Is it ${nextGuess}? (y/n)  `)

const isPositive = playersAnswer =>
    formatPlayerAnswer(playersAnswer) === 'y'

const getPlayersTip = nextGuess =>
    prompt(`Is it higher or lower than ${nextGuess}? (h/l)  `)

export default {
    isGuessRight : nextGuess =>
        isPositive(getPlayersGuessConfirmation(nextGuess)),
    isGuessHigherOrLower : nextGuess =>
        formatPlayerAnswer(getPlayersTip(nextGuess)),
    getHalfOfRange : (min, max) =>
        min + Math.floor((max - min) /2)
}

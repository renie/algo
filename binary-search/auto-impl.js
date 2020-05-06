import promptLib from 'prompt-sync'
const prompt = promptLib()

const breakItemsIntoArray = string => string.split(',')

const stringToNumber = item => Number(item.trim())

const numericSort = array => array.sort((a, b) => a - b)

const parseInformedList = string =>
    numericSort(breakItemsIntoArray(string).map(stringToNumber))

const askUserList = () =>
    prompt('Insert your numbers, comma separated (eg.: 1,3,5,9,11,13):  ')

const askUserChoice = () =>
    prompt('Insert your choice:  ')

const warnWrongGuess = nextGuess =>
    console.log(`I guessed ${nextGuess}, but it was wrong.`)

const parseNumber = string => Number(string.trim())

export default {
    isGuessRight : (nextGuess, userChoice) =>
        nextGuess === userChoice,
    isGuessHigherOrLower : (nextGuess, userChoice) => {
        warnWrongGuess(nextGuess)
        return (nextGuess - userChoice) < 0 ? 'h' : 'l'
    },
    getAvailableList : () =>
        parseInformedList(askUserList()),
    getChoice : () =>
        parseNumber(askUserChoice())
}

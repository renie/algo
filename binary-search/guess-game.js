const getHalfOfRange = range =>
    range[Math.floor(range.length / 2)]

const getHigherRange = (actualRange, nextGuess) =>
    [...actualRange].slice(actualRange.indexOf(nextGuess), actualRange.length)

const getLowerRange = (actualRange, nextGuess) =>
    [...actualRange].slice(0, actualRange.indexOf(nextGuess) + 1)

const gessAHigherNumber = (nextGuess, lastGuessData, deps) =>
    guess({
        ...lastGuessData,
        range: getHigherRange(lastGuessData.range, nextGuess),
        guessCount: ++lastGuessData.guessCount
    }, deps)

const gessALowerNumber = (nextGuess, lastGuessData, deps) =>
    guess({
        ...lastGuessData,
        range: getLowerRange(lastGuessData.range, nextGuess),
        guessCount: ++lastGuessData.guessCount
    }, deps)

const itIsHigher = higherOrLower =>
    higherOrLower === 'h'

const itIsLower = higherOrLower =>
    higherOrLower === 'l'

const guessWithTip = (nextGuess, higherOrLower, lastGuessData, deps) => {
    if (itIsHigher(higherOrLower))
        return gessAHigherNumber(nextGuess, lastGuessData, deps)
    if (itIsLower(higherOrLower))
        return gessALowerNumber(nextGuess, lastGuessData, deps)

    return false
}

const guess = (guessData, deps) => {
    const nextGuess = getHalfOfRange(guessData.range)
    if (!deps.isGuessRight(nextGuess, guessData.choice))
        return guessWithTip(nextGuess, deps.isGuessHigherOrLower(nextGuess, guessData.choice), guessData, deps)

    console.log(`Great! Just ${guessData.guessCount} attempt(s)!`)
    return true
}

export default guess

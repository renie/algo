import promptLib from 'prompt-sync'
import interactiveDeps from './player-impl.js'
import guidedDeps from './auto-impl.js'
import guess from './guess-game.js'

const prompt = promptLib()

const createRange = (min, max) =>
    Array.from(Array(max - min + 1), (_, index) => min + index)

const interactiveOrGuided = prompt('Would you like interactive or guided game? (i/g)  ').toLowerCase()

switch (interactiveOrGuided) {
    case 'i':
        console.log('\nChoose a number 0 - 100\n\n')

        guess({
            range: createRange(0, 100),
            guessCount: 1
        }, interactiveDeps)
        break;
    case 'g':
        const range = guidedDeps.getAvailableList()
        const choice = guidedDeps.getChoice()

        guess({
            range,
            choice,
            guessCount: 1
        }, guidedDeps)
        break;
    default:
        console.log('This option does not exist.')
        break;
}

import promptLib from 'prompt-sync'
import sortFunc from './sort-selection.js'
import sortLoop from './sort-selection-loop.js'


const prompt = promptLib()

const breakItemsIntoArray = string => string.split(',')

const stringToNumber = item => Number(item.trim())

const parseInformedList = string =>
    breakItemsIntoArray(string).map(stringToNumber)

const askUserList = () =>
    prompt('Insert your numbers, comma separated (eg.: 1,3,5,9,11,13):  ')

const getListToSort = () =>
    parseInformedList(askUserList())

const init = (sort, list) =>
    console.log(sort(list))

const list = getListToSort()

console.log('Functional')
init(sortFunc, list)

console.log('Loop')
init(sortLoop, list)

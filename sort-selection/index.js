import promptLib from 'prompt-sync'
const prompt = promptLib()

const breakItemsIntoArray = string => string.split(',')

const stringToNumber = item => Number(item.trim())

const parseInformedList = string =>
    breakItemsIntoArray(string).map(stringToNumber)

const askUserList = () =>
    prompt('Insert your numbers, comma separated (eg.: 1,3,5,9,11,13):  ')

const getListToSort = () =>
    parseInformedList(askUserList())

const getSmallestIndex = (list, actualIndex) => {
    let smallestNumberIndex = actualIndex;

    for (let j = actualIndex ; j < list.length ; j++ ) {
        smallestNumberIndex = (
            list[j] < list[smallestNumberIndex]
            ? j
            : smallestNumberIndex
        )
    }

    return smallestNumberIndex
}

const selectionSort = list => {
    for (let i = 0 ; i < list.length ; i++) {
        const actualItem = list[i]
        const smallestNumberIndex = getSmallestIndex(list, i)

        list[i] = list[smallestNumberIndex]
        list[smallestNumberIndex] = actualItem
    }

    return list
}

const init = () =>
    console.log(selectionSort(getListToSort()))

init()

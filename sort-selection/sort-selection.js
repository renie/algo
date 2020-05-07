const compareIndex = (smallestNumberIndex, item, index, list) => (
    item < list[smallestNumberIndex]
        ? index
        : smallestNumberIndex
)

const getSmallestNumberIndex = (list) => list.reduce(compareIndex, 0)

const swapSmallestToFirstPosition = (array, smallestNumberIndex) => {
    const actualItem = array[0]
    array[0] = array[smallestNumberIndex]
    array[smallestNumberIndex] = actualItem

    return array
}

const sort = list => {
    const swappedList = swapSmallestToFirstPosition([...list], getSmallestNumberIndex(list))

    return (
        swappedList.length > 1
            ? [ swappedList[0], ...sort(swappedList.slice(1)) ]
            : swappedList
    )
}

export default sort

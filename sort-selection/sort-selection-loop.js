const compareIndex = (smallestNumberIndex, item, index, list) => (
    item < list[smallestNumberIndex]
        ? index
        : smallestNumberIndex
)

const getSmallestNumberIndex = (list, i) => {
    let smallestNumberIndex = i;

    for (let j = i ; j < list.length ; j++ ) {
        smallestNumberIndex = (
            list[j] < list[smallestNumberIndex]
            ? j
            : smallestNumberIndex
        )
    }

    return smallestNumberIndex
}

const sort = list => {
    for (let i = 0 ; i < list.length ; i++) {
        const actualItem = list[i]
        const smallestNumberIndex = getSmallestNumberIndex(list, i)

        list[i] = list[smallestNumberIndex]
        list[smallestNumberIndex] = actualItem
    }

    return list
}

export default sort

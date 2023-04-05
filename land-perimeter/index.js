function landPerimeter(arr) {
    let p = 0
    for (let row = 0; row < arr.length; row++) {
        for (let pointer = 0; pointer < arr[row].length; pointer++) {
            if (arr[row][pointer] === 'X') {
                let islandSides = 4
                if (arr[row - 1]) arr[row - 1][pointer] === 'X' ? islandSides-- : null
                if (arr[row + 1]) arr[row + 1][pointer] === 'X' ? islandSides-- : null
                if (arr[row][pointer + 1]) arr[row][pointer + 1] === 'X' ? islandSides-- : null
                if (arr[row][pointer + -1]) arr[row][pointer + -1] === 'X' ? islandSides-- : null

                p = p + islandSides
            }
        }
    }
    return `Total land perimeter: ${p}`
}
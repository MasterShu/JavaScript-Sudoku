function createRow(v = 0) {
    const array = new Array(9)
    array.fill(v)
    return array
}

function createMatrix(v = 0) {
    return Array.from({length: 9}, () => createRow(v))
}

const a = createMatrix()
a[0][1] = 2
console.log(a)
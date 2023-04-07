function arrayDiff(a, b) {
    let array = [...a]
    if (b.length) {
        for (let i = 0; i < b.length; i++) {
            array = array.filter((digit) => digit !== b[i])
        }
        return array
    }
    return a
}
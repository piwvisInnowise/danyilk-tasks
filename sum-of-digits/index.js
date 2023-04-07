function digitalRoot(n) {

    let array = n.toString().split('')
    let num = array.reduce((a, b) => Number(a) + Number(b))
    while (num > 9)
    {
        array = num.toString().split('')
        num = array.reduce((a, b) => Number(a) + Number(b))
    }
    return Number(num)
}
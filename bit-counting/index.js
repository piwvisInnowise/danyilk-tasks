var countBits = function(n) {
    let bits = []
    while (n) {
        n % 2 === 1 ? bits.push(1) : bits.push(0)
        n = Math.floor(n / 2)
    }
    return bits.reduce((value, a) => {
        a === 1 ? value = value + a : null
        return value
    }, 0 )
};
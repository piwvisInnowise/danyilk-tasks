function generateHashtag (str) {
    let usingSplit = str.split(' ').filter(Boolean);
    let res = '#'
    if (usingSplit.length) {
        res += usingSplit.map(word => word.replace(word[0], word[0].toUpperCase()))
        res = res.replaceAll(',','')
        if (res.length <= 140) return res
    }
    return false
}
String.prototype.vowel = function() {
    const re = /^[aeiouAEIOU]$/g;
    return this.length === 1 ? re.test(this) : false;
};
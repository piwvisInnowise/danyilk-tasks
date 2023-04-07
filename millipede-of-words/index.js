function solution(words) {
    if (words.length == 0) {
        return false;
    }

    let usedWords = new Set();

    function checkChain(currentWord, remainingWords) {
        usedWords.add(currentWord);

        if (remainingWords.length == 0) {
            return true;
        }

        for (let i = 0; i < remainingWords.length; i++) {
            let nextWord = remainingWords[i];
            if (nextWord[0] == currentWord.slice(-1)) {
                let newRemainingWords = remainingWords.slice(0, i).concat(remainingWords.slice(i + 1));
                if (checkChain(nextWord, newRemainingWords)) {
                    return true;
                }
            }
        }

        usedWords.delete(currentWord);

        return false;
    }

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (checkChain(currentWord, words.slice(0, i).concat(words.slice(i + 1)))) {
            return true;
        }
    }

    return false;
}
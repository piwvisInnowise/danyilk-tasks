function killer(suspectInfo, dead) {
    for (let i = 0; i < dead.length; i++) {
        for (const [key, value] of Object.entries(suspectInfo)) {
            if (value.includes(dead[i]) && i === dead.length - 1) {
                return key
            }
        }
    }
}
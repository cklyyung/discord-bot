var bannedWords = []

export function addWord(word) {
    if (!bannedWords.includes(word)) {
        bannedWords.push(word.toLowerCase())
        return true
    }
    return false
}

export function removeWord(word) {
    var lowerCaseWord = word.toLowerCase()
    if (bannedWords.includes(lowerCaseWord)) {
        bannedWords.splice( bannedWords.indexOf(lowerCaseWord), 1 );
        return true
    }
    return false
}

export function listBannedWords() {
    return bannedWords
}

export function containsBannedWord(message) {
    var lowerCaseMsg = message.toLowerCase()
    return bannedWords.find(word => lowerCaseMsg.includes(word));
}

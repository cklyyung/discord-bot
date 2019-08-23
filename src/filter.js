const redis = require('./redis')

var banSetKey = 'BANNED_WORDS'

export function addWord(word, ret) {
    var lowerCaseWord = word.toLowerCase()
    redis.addSetItem(banSetKey, lowerCaseWord, ret)
}

export function removeWord(word) {
    var lowerCaseWord = word.toLowerCase()
    redis.removeSetItem(banSetKey, lowerCaseWord, ret)
}

export function listBannedWords(ret) {
    redis.getSet(banSetKey, ret)
}

export function containsBannedWord(message, ret) {
    var lowerCaseMsg = message.toLowerCase()
    redis.getSet(banSetKey, function(bannedWords) {
        ret(bannedWords.find(word => lowerCaseMsg.includes(word)))
    })
}

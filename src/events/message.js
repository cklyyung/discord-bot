const kick = require('../commands/kick')
const listBannedWords = require('../commands/listBannedWords')
const addWord = require('../commands/addWord')
const removeWord = require('../commands/removeWord')
const censor = require('../commands/censor')
const filter = require('../filter')

module.exports = (client, message) => {
    if (message.author.id != '610617739920408649') { // This is nicebot's user id
        if (message.content === '!hello') {
            message.reply('Hello to you too!')
        }
        else if (message.content.startsWith('!kick')) {
            return kick(message)
        }
        else if (message.content.startsWith('!bannedWords')) {
            return listBannedWords(message)
        }
        else if (message.content.startsWith('!addWord')) {
            return addWord(message)
        }
        else if (message.content.startsWith('!removeWord')) {
            return removeWord(message)
        }
        else {
            filter.containsBannedWord(message.content, function(result) {
                if (result) {
                    return censor(message, result)
                }
            })
        }
    }
}
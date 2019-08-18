const kick = require('../commands/kick')
const listBannedWords = require('../commands/listBannedWords')
const addWord = require('../commands/addWord')
const removeWord = require('../commands/removeWord')

module.exports = (client, message) => {
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
}
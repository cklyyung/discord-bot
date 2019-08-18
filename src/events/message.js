const kick = require('../commands/kick')
const listBannedWords = require('../commands/listBannedWords')
const addWord = require('../commands/addWord')
const removeWord = require('../commands/removeWord')
const filter = require('../filter')

module.exports = (client, message) => {
    if (message.author.id != '610617739920408649') { // This is nicebot's user id
        var bannedWord = filter.containsBannedWord(message.content)
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
        else if (bannedWord !== undefined) {
            message.reply(`${bannedWord} is a banned word! Please use the command !bannedWords to check which words are banned.`)
        }
    }
}
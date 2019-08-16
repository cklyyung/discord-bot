const kick = require('../commands/kick')
var { filter } = require('../filter')

module.exports = (client, message) => {
    if (message.content === '!hello') {
        message.reply('Hello to you too!')
    }
    else if (message.content.startsWith('!kick')) {
        return kick(message)
    }
    else if (message.content.startsWith('!bannedWords')) {
        if (filter.list.length == 0) {
            message.reply('Right now there are no banned words!')
        } else {
            message.author.send(`Here's the current list of banned words: ${filter.list}`)
        }
    }
}
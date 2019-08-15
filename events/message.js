const kick = require('../commands/kick')

module.exports = (client, message) => {
    if (message.content === '!hello') {
        message.reply('Hello to you too!')
    }
    else if (message.content.startsWith('!kick')) {
        return kick(message)
    }
}
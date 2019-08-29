const kick = require('../commands/kick')
const listBannedWords = require('../commands/listBannedWords')
const addWord = require('../commands/addWord')
const removeWord = require('../commands/removeWord')
const censor = require('../commands/censor')
const roll = require('../commands/roll')
const help = require('../commands/help')
const filter = require('../filter')
const { CommandEnum } = require('../commands/commandEnum')
const helpRegex = /help/i

module.exports = (client, message) => {
    if (message.author.id != '610617739920408649') { // This is nicebot's user id
        let cmd = determineIfCommand(message.content)
        if (cmd != 0 && helpRegex.test(message.content)) {
            return help(message, cmd)
        }
        switch(cmd) {
            case CommandEnum.hello:
                message.reply('Hello to you too!')
                break;
            case CommandEnum.kick:
                return kick(message)
            case CommandEnum.bannedWords:
                return listBannedWords(message)
            case CommandEnum.addWord:
                return addWord(message)
            case CommandEnum.removeWord:
                return removeWord(message)
            case CommandEnum.roll:
                return roll(message)
            default:
                filter.containsBannedWord(message.content, function(result) {
                    if (result) {
                        return censor(message, result)
                    }
                })
        }
    }
}

function determineIfCommand(message) {
    for (let cmd in CommandEnum) {
        let regex = new RegExp(`!${cmd}`, 'i');
        if (regex.test(message)) {
            return CommandEnum[cmd]
        }
    }
    return 0
}
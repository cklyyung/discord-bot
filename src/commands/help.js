const { CommandEnum } = require('../commands/commandEnum')

const DESCRIPTION_HELLO = 'Greet NiceBot!'
const DESCRIPTION_KICK = 'Kicks the mentioned user from the server.'
const DESCRIPTION_BANNED_WORDS = 'Sends a private DM, containing the list of currently banned words.'
const DESCRIPTION_ADD_WORD = 'Adds a word to the ban list.'
const DESCRIPTION_REMOVE_WORD = 'Removes a word from the ban list.'
const DESCRIPTION_ROLL = 'Rolls a dice. A dice type can be specified (d4, d6, d12, ...). A d6 is rolled by default.'

module.exports = (message, cmd) => {
    switch(cmd) {
        case CommandEnum.hello:
            return message.reply(DESCRIPTION_HELLO)
        case CommandEnum.kick:
                return message.reply(DESCRIPTION_KICK)
        case CommandEnum.bannedWords:
                return message.reply(DESCRIPTION_BANNED_WORDS)
        case CommandEnum.addWord:
                return message.reply(DESCRIPTION_ADD_WORD)
        case CommandEnum.removeWord:
                return message.reply(DESCRIPTION_REMOVE_WORD)
        case CommandEnum.roll:
                return message.reply(DESCRIPTION_ROLL)
        default:
                return message.reply('Sorry, I don\'t recognize that command!')
    }
}

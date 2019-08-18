const filter = require('../filter')

module.exports = message => {
    const regex = /!removeWord (.*)+/
    const matches = message.content.match(regex)
    if (matches == null) {
        return message.reply('Please supply a word to remove from the ban list')
    }
    const word = matches[1]
    const success = filter.removeWord(word)
    if (success) {
        return message.reply(`${word} has been removed from the list of banned words`)
    }
    return message.reply(`${word} is not in the list of banned words`)
}

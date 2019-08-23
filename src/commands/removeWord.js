const filter = require('../filter')

module.exports = message => {
    const regex = /!removeWord (.*)+/i
    const matches = message.content.match(regex)
    if (matches == null) {
        return message.reply('Please supply a word to remove from the ban list')
    }
    const word = matches[1]
    filter.removeWord(word, function(result) {
        if (result) {
            return message.reply(`${word} has been removed to the list of banned words`)
        } else {
            return message.reply(`${word} is not in the list of banned words`)
        }
    })
}

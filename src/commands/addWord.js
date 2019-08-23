const filter = require('../filter')

module.exports = message => {
    const regex = /!addWord (.*)+/
    const matches = message.content.match(regex)
    if (matches == null) {
        return message.reply('Please supply a word to add to the ban list')
    }
    const word = matches[1]
    filter.addWord(word, function(result) {
        if (result) {
            return message.reply(`${word} has been added to the list of banned words`)
        } else {
            return message.reply(`${word} is already in the list of banned words`)
        }
    })
}

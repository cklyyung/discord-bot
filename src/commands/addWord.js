var { filter } = require('../filter')

module.exports = message => {
    const regex = /!addWord (.*)+/
    const matches = message.content.match(regex)
    if (matches == null) {
        return message.reply('Please supply a word to add to the ban list')
    }
    const word = matches[1]
    console.log(word)
    if (filter.isProfane(word)) {
        return message.reply(`${word} is already in the list of banned words`)
    }
    filter.addWords(word)
    return message.reply(`${word} has been added to the list of banned words`)
}
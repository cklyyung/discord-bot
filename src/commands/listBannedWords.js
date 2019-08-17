const filter = require('../filter')

module.exports = message => {
    const bannedWords = filter.listBannedWords()
    if (bannedWords.length == 0) {
        message.reply('Right now there are no banned words!')
    } else {
        message.author.send(`Here's the current list of banned words: ${bannedWords}`)
    }
}
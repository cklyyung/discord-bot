const filter = require('../filter')

module.exports = message => {
    filter.listBannedWords(function(bannedWords) {
        console.log(bannedWords)
        console.log(bannedWords.size)
        if (bannedWords == undefined || bannedWords.length == 0) {
            return message.reply('Right now there are no banned words!')
        } else {
            return message.author.send(`Here's the current list of banned words: ${bannedWords}`)
        }
    })
}
const redis = require('../redis.js')

module.exports = (message, bannedWord) => {
    message.delete()
    .then(msg => console.log(`Deleted message with banned word ${bannedWord} by ${msg.author.username}`))
    .catch(console.error);

    var warningMessage = `Your message has been removed; ${bannedWord} is a banned word!`
    const user = message.author.toString()

    redis.getKey(user, function(strikes) {
        console.log(strikes)
        if (strikes == -1) {
            strikes = 0
        }
        strikes++
        warningMessage = warningMessage.concat(` This is strike #${strikes}.`)
        redis.storeKey(user, strikes)
        message.reply(warningMessage)
    })
}
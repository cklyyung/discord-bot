const redis = require('../redis.js')

let maxWarnings = 3

module.exports = (message, bannedWord) => {
    let memberRole = message.guild.roles.find(r => r.name === 'member')
    message.delete()
    .then(message => console.log(`Deleted message with banned word ${bannedWord} by ${message.author.username}`))
    .catch(console.error)

    message.reply(`Your message has been removed: ${bannedWord} is a banned word!`)
    const user = message.author.toString()

    redis.getKey(user, function(strikes) {
        if (strikes == -1) {
            strikes = 0
        }
        strikes++
        let warningsLeft = Math.max(0, maxWarnings - strikes)
        console.log(`Strike ${strikes}, ${warningsLeft} warnings left`)
        if (warningsLeft > 0) {
            redis.storeKey(user, strikes)
            message.reply(`This is strike #${strikes}. You have ${warningsLeft} warnings left.`)
        } else {
            message.member.removeRole(memberRole)
            .then(() =>
                message.reply('No warnings left! 10 second timeout!'),
                setTimeout(function(){
                    message.member.addRole(memberRole).catch(console.error)
                }, 10000))
            .catch(console.error)
        }
    })
}
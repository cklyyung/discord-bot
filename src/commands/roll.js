const regex = /!roll d(.*)+/i

module.exports = message => {
    var diceSides = 6
    const matches = message.content.match(regex)
    if (matches != null) {
        diceSides = parseInt(matches[1], 10)
        if (diceSides <= 0) {
            return message.reply(`Hey, ${diceSides} isn't a valid number of sides!`)
        }
    }
    let result = getRandomInt(diceSides)
    return message.reply(`Rolling d${diceSides}...... Landed on ${result}!`)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
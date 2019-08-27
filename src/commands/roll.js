var diceSides = 6

module.exports = message => {
    let result = getRandomInt(diceSides)
    return message.reply(`Rolling d${diceSides}...... Landed on ${result}!`)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
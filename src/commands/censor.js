module.exports = (message, bannedWord) => {
    message.delete()
    .then(msg => console.log(`Deleted message with banned word ${bannedWord} by ${msg.author.username}`))
    .catch(console.error);

    message.reply(`Your message has been removed; ${bannedWord} is a banned word! Please use the command !bannedWords to check which words are banned.`)

}
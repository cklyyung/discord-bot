require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.content === '!hello') {
    message.reply('Hello to you too!')
  }
})

client.on('guildMemberAdd', member => {
    member.send(`Welcome to the server ${member}!`);
  });

client.on('message', async message => {
    if (message.content.startsWith('!kick')) {
        const member = message.mentions.members.first()

        if (!member) {
        return message.reply(
            `Who are you trying to kick? You must mention a user.`
        )
        }

        if (!member.kickable) {
        return message.reply(`I can't kick this user. Sorry!`)
        }

        try {
            await member.kick();
            return await message.reply(`${member.user.tag} was kicked.`);
        }
        catch (error) {
            return await message.reply(`Sorry, an error occured.`);
        }
        }
});

client.login(process.env.BOT_TOKEN)
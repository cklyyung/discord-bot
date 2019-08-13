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

client.login(process.env.BOT_TOKEN)
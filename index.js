require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === '!hello') {
    msg.reply('Hello to you too!')
  }
})

client.login(process.env.BOT_TOKEN)
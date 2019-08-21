
module.exports = (client, member) => {
    let memberRole = member.guild.roles.find(r => r.name === 'member');
    member.send(`Welcome to the server ${member}!`)
    member.addRole(memberRole).catch(console.error)
}
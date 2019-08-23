
module.exports = (client, member) => {
    let memberRole = member.guild.roles.find(r => r.name === 'member')
    return member.addRole(memberRole)
        .then(() => member.send(`Welcome to the server ${member}!`))
        .catch(console.error)
}
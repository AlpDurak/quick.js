class Logs {
    async join(Discord, client, member, channelID) {
        if (!Discord) throw new TypeError("\"Discord\" is not defined")
        if (!client) throw new TypeError("\"client\" is not defined")
        if (!member) throw new TypeError("\"member\" is not defined")
        if (!channelID) throw new TypeError("\"channelID\" is not defined")
        const channel = member.guild.channels.cache.get(channelID)
        const embed = new Discord.MessageEmbed()
            .setAuthor(member.username, member.displayAvatarURL({
                dynamic: true
            }))
            .setThumbnail(member.guild.iconURL())
            .setTimestamp()
            .setDescription(`${member.username} has joined the server`)
            .setColor("RANDOM")
        channel.send(embed)
    } // End Join

}
module.exports = Logs;

const Discord = require('discord.js');
class Logs {
    async join(client, GuildMember, channelID, options = {}) {
        if (!Discord) throw new TypeError("\"Discord\" is not defined")
        if (!client) throw new TypeError("\"client\" is not defined")
        if (!member) throw new TypeError("\"member\" is not defined")
        if (!channelID) throw new TypeError("\"channelID\" is not defined")
        const channel = GuildMember.guild.channels.cache.get(channelID)
        const embed = new Discord.MessageEmbed()
            .setAuthor(GuildMember.username, member.displayAvatarURL({
                dynamic: true
            }))
            .setThumbnail(GuildMember.guild.iconURL())
            .setTimestamp()
            .setDescription(`${GuildMember.username} has joined the server`)
            .setColor("RANDOM")
        channel.send(embed)
    } // End Join
    

}
module.exports = Logs;
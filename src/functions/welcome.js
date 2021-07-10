const Discord = require("discord.js")

async function welcomeMessage(client, message, member, channelID, embed, CustomMessage) { //embed true or false
    if (!message) throw new TypeError("\"message\" is not defined.")
    if (!channelID) throw new TypeError("\"channelID\" has not been provided.")
    if (!member) throw new TypeError("\"member\" is not defined.")
    if (!client) throw new TypeError("\"client\" is not defined.")
    const channel = client.guilds.channels.cache.get(channelID)

    if (embed == true) {
        const WelcomeEmbed = new Discord.MessageEmbed()
            .setAuthor(member.username)
            .setImage(member.avatarURL())
            .setTimestamp()
        if (CustomMessage) {
            WelcomeEmbed.setDescription(CustomMessage)
        } else {
            WelcomeEmbed.setDescription(`Welcome to ${member.guild.name} I hope you have a great time.`)

        }
        channel.send(WelcomeEmbed)

    } else if (embed == false) {
        if (CustomMessage) {
            channel.send(CustomMessage)
        } else {
            channel.send(`Welcome to ${member.guild.name} I hope you have a great time.`)

        }
    }

}
module.exports = welcomeMessage;

const Discord = require("discord.js")

async function memberCount(client, member, channelID) {
    if(!channelID) throw new TypeError("\"channelID\" has not been provided.")
    if (!member) throw new TypeError("\"member\" is not defined.")
    if (!client) throw new TypeError("\"client\" is not defined.")
    const channel = client.guilds.channels.cache.get(channelID)
    channel.setName(`Members: ${member.guild.size}`)
}
module.exports = memberCount
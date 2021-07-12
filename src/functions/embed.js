const Discord = require("discord.js");


async function embed(message, options = {}) {
    const embed = new Discord.MessageEmbed()
    try {
        if (options.title) embed.setTitle(options.title)
        if (options.description) embed.setDescrtiption(options.description)
        if (options.color) embed.setColor(options.color)
        if (options.footer) embed.setFooter(options.footer)
        if (options.timestamp) embed.setTimestamp()
        if (options.author) embed.setAuthor(options.author)
        if (options.url) embed.setURL(options.url)
        if (options.thumbnail) embed.setThumbnail(options.thumbnail)
        if(options.image) embed.setImage(options.image)
            message.channel.send(embed)

    } catch (err) {
        throw new Error (err)
    }
    
}

module.exports = embed;
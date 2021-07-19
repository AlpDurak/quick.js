const Discord = require("discord.js");


async function antiNsfwEmoji(message, options = {}) {

    const embed = new Discord.MessageEmbed()

    try {
        const eggplantTest = /🍆/g.test(message.content);
        const peachTest = /🍑/g.test(message.content);
        const cherryTest = /🍒/g.test(message.content);
        const bananaTest = /🍌/g.test(message.content);
        const sweatDropsTest = /💦/g.test(message.content);

        let NSFWEmojiUsage = false;

        if (eggplantTest || peachTest || cherryTest || bananaTest || sweatDropsTest) NSFWEmojiUsage = true;

        if (NSFWEmojiUsage) {
            message.delete()
            let useEmbed = false;

            if (options.embed) useEmbed = true;
            if (useEmbed && options.title) embed.setTitle(options.title)
            if (useEmbed && options.description) embed.setDescription(options.description)
            if (useEmbed && options.color) embed.setColor(options.color)
            if (useEmbed && options.footer) embed.setFooter(options.footer)
            if (useEmbed && options.timestamp) embed.setTimestamp()
            if (useEmbed && options.author) embed.setAuthor(options.author)
            if (useEmbed && options.url) embed.setURL(options.url)
            if (useEmbed && options.thumbnail) embed.setThumbnail(options.thumbnail)
            if (useEmbed && options.image) embed.setImage(options.image)
            message.channel.send(useEmbed ? embed : options.text)
        }

    } catch (err) {
        throw new Error(err)
    }
}

module.exports = antiNsfwEmoji;
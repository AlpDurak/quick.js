const Discord = require("discord.js");


async function antiMassEmoji(message, options = {}) {

    const embed = new Discord.MessageEmbed()

    const re = {
        default: /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
        custom: /<?(a)?:?(\w{2,32}):(\d{17,19})>?/g
    }

    try {
        const defaultEmoji = message.content.match(re.default)
        const customEmoji = message.content.match(re.custom)

        let massEmojiUsage = false;

        if (defaultEmoji !== null || customEmoji !== null) {
            const emojiLimit = options.emojiLimit ? parseInt(options.emojiLimit) !== NaN ? parseInt(options.emojiLimit) : 5 : 5;
            if (defaultEmoji !== null || defaultEmoji.length >= emojiLimit) massEmojiUsage = true;
            if (customEmoji !== null || customEmoji.length >= emojiLimit) massEmojiUsage = true;
        }

        if (massEmojiUsage) {
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

module.exports = antiMassEmoji;
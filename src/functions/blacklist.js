const Discord = require("discord.js");

async function blacklistWords(message, blacklistMessage = "Do not send that word!", options = {}) {
    if (!message) throw new TypeError("\"message\" is not defined");
    if (!options) throw new TypeError("\"options\" has not been provided");
    let splitContent = message.content.split(' ');

    let deleting = false;
    let Collection = options.words
    
    // does this work?

    await Promise.all(
        splitContent.map((content) => {
            if (Collection.includes(content.toLowerCase())) {
                deleting = true;
            }
        })
    )
        if (deleting) {
            message.delete();
            return message.channel.send(blacklistMessage);
        }
}
module.exports = blacklistWords;

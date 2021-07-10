const {MessageEmbed, Collection } = require('discord.js');
const ms = require('convert-ms');
class Cooldown {
    async set(message, cooldownTime) {
        if (!client) throw new TypeError('"client" is not defined');
        if (!message) throw new TypeError('"message" is not defined');
        if (!userID) throw new TypeError('"userID" has not been provided.');

        const sentRecently = new Map();


        const currentTime = Data.now();
        const cooldownAmount = (cooldownTime) * 1000;
        if (sentRecently(message.author.id)) {
            return message.channel.send(`Please wait ${ms.toHMS(cooldownAmount)} before using that again.`)
        } else {
            //Adding the user
            sentRecently.add(message.author.id);
            setTimeout(() => {
                //Removing the user
                sentRecently.delete(message.author.id)
            }, cooldownAmount)
        }

        
    }
}
module.exports = Cooldown;
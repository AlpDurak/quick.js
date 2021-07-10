const Discord = require('discord.js');
class Moderation {
    //----------------------------------------------------------------
    //BAN FUNCTION
    //----------------------------------------------------------------
    async ban(message, userID, options = {}) {
        if (!message) throw new TypeError("\"message\" is not defined.")
        if (!userID) throw new TypeError("\"userID\" has not been provided.")

        if (message.member.permissions.has("BAN_MEMBERS")) {
            return message.channel.send("You do not have permission to ban members.")
        }

        try {
            const user = message.guild.members.cache.get(userID)
            if (!user.bannable) return message.channel.send('I could not ban that member due to role hierarchy')

            user.ban()
            if (!options) {
                return message.channel.send("User has been banned");
            }

            else {
                const m = new Discord.MessageEmbed()
                    .setTitle(options.title ? options.title : "User Banned")
                    .setDescription(options.reason ? options.reason :`${user.user.tag} has been banned from ${message.guild}`)
                    .setColor(options.color ? options.color : "RANDOM");
                return message.channel.send(m);
            }
            
        } catch (e) {
            console.log(e);
        }



    }

    //----------------------------------------------------------------
    //KICK FUNCTION
    //----------------------------------------------------------------
    async kick(message, userID, options = {}) {
        if (!message) throw new TypeError("\"message\" is not defined.")
        if (!userID) throw new TypeError("\"userID\" has not been provided.")

        if (message.member.permissions.has("KICK_MEMBERS")) {
            return message.channel.send("You do not have permission to kick members.")
        }

        try {
            const user = message.guild.members.cache.get(userID)
            if (!user.kickable) return message.channel.send('I could not kick that member due to role hierarchy')

            user.kick()
            if (!options) {
                return message.channel.send("User has been kicked");
            }

            else {
                const m = new Discord.MessageEmbed()
                    .setTitle(options.title ? options.title : "User Kicked")
                    .setDescription(options.reason ? options.reason : `${user.user.tag} has been kicked from ${message.guild}`)
                    .setColor(options.color ? options.color :  "RANDOM");
                return message.channel.send(m);
            }
            
        } catch (e) {
            console.log(e);
        }
    }
    //----------------------------------------------------------------
    //Unban
    //----------------------------------------------------------------
    async unban(message, userID) {
          const args = message.content.slice(prefix.length).split(/ +/);
        if (!userID) return message.channel.send("You need to porvide a user ID");
        message.guild.members.unban(userID).then(() => {
            const unbanEmbed = new Discord.MessageEmbed()
                .setTitle("Member Unbanned")
                .setDescription(
                    `<@${userID}> was unbanned by ${message.author}`
                )
                .setThumbnail(message.guild.iconURL())
                .setTimestamp()
                .setColor("RANDOM");
            message.channel.send(unbanEmbed)
            message.delete()
        }).catch((err) => {
            console.log(err)
            const errorEmbed = new Discord.MessageEmbed()
                .setTitle('An error has occured')
                .setDescription(err.message)
                .setTimestamp()
                .setColor("RANDOM")
                .setThumbnail(message.guild.iconURL())
            message.channel.send(errorEmbed)
        })
    }
    //----------------------------------------------------------------
    //ADD MORE FUNCTIONS BELOW HERE
    //----------------------------------------------------------------
}
module.exports = Moderation;
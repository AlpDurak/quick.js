const Discord = require('discord.js');
class Ticket {
    //----------------------------------------------------------------
    //NEW TICKET
    //----------------------------------------------------------------

    async new(client, message, args, staffID) {
        const staff = message.guild.roles.cache.get(staffID)
        const channel = await message.guild.channels.create(
            `ticket: ${message.author.tag}`
        );

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        channel.updateOverwrite(staff, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        const ticketEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}'s ticket`)
            .setDescription(
                `Thank you for opening a ticket ${message.author} a staff member will be with you shortly!`
            )
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
            .setColor("RANDOM");
        const recationMessage = await channel.send(ticketEmbed);
        try {
            await recationMessage.react("🔒");
            await recationMessage.react("⛔");
        } catch (error) {
            channel.send("An error has occured");
            throw error;
        }
        const collector = recationMessage.createReactionCollector(
            (reaction, user) =>
            message.guild.members.cache
            .find((member) => member.id === user.id)
            .hasPermission("MANAGE_MESSAGES"), {
                dispose: true
            }
        );

        collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                    channel.send("Ticket is now closed");
                    channel.setName(`closed ticket: ${message.author.tag}`)
                    const closeEmbed = new Discord.MessageEmbed()
                        .setTitle('Ticket Closed')
                        .setDescription(`<#${channel.id}> has been closed by ${message.author}`)
                        .setTimestamp()
                        .setThumbnail(message.guild.iconURL())
                        .setFooter(`Channel ID: ${channel.id}`)
                        .setColor("RANDOM")

                    channel.updateOverwrite(message.author, {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false,
                    });
                    break;
                case "⛔":
                    channel.send("This channel will be removed in 5 seconds");
                    setTimeout(() => channel.delete(), 5000);
                    const deleteEmbed = new Discord.MessageEmbed()
                        .setTitle("Ticket Deleted")
                        .setDescription(`${channel.name} has been deleted by ${message.author}`)
                        .setTimestamp()
                        .setThumbnail(message.guild.iconURL())
                        .setFooter(`Channel ID: ${channel.id}`)
                        .setColor("RANDOM")

                    break;
            }
        });
        const newEmbed = new Discord.MessageEmbed()
            .setTitle('New Ticket Created')
            .setDescription(`${message.author} We will be right with you in ${channel}`)
            .setTimestamp()
            .setThumbnail(message.guild.iconURL())
            .setColor("RANDOM")
        message.channel
            .send(newEmbed)
            .then((msg) => {
                setTimeout(() => msg.delete(), 7000);
                setTimeout(() => message.delete(), 3000);
            }).catch((err) => {
                throw err;
            });

    }
    //----------------------------------------------------------------
    //RENAME TICKET
    //----------------------------------------------------------------
    async rename(client, message,) {
          const args = message.content.slice(prefix.length).split(/ +/);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can not preform this action.');
        const name = args.splice(0).join("-")
        message.channel.setName(name)
    }
    //----------------------------------------------------------------
    //DELETE TICKET
    //----------------------------------------------------------------
    async delete(message) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can not preform this action.');
         message.channel.send("This channel will be removed in 5 seconds");
         setTimeout(() => message.channel.delete(), 5000);
    }
    
    
}
module.exports = Ticket;
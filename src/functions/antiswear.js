function antiSwear(message, noSwearMessage = "Please do not swear!") {
    if (!message) throw new TypeError("\"message\" is not defined");
    
    const swearWords = [
        'fuck',
        'bitch',
        'motherfucker',
        'dick',
        'hoe',
        'dumbass'
    ];

    if (swearWords.includes(message.content.toLowerCase())) {
        message.delete();
        return message.channel.send(noSwearMessage);
    }
}
module.exports = antiSwear;
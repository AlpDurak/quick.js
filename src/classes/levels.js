const mongoose = require('mongoose');
const Schema = require('../models/levels');
class Levels {
    connect(mongoURL) {
        if (!mongoURL) throw new TypeError("\"mongoURL\" has not been provided.")

        mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }
    XP(userid, guildid, xpAmount = 10) {
        if (!userID) throw new TypeError("\"userID\" has not been provided")
        if (!guildID) throw new TypeError("\"guildID\" has not been provided")

        const user = await Schema.findOne({
            userID: userid,
            guildID: guildid
        });

        if (!user) {
            const newUser = await Schema.create({
                userID: userid,
                guildID: guildid,
            })
            newUser.save();
        }
        const xpNeeded = user.level * 500;
        if (user.xp === xpNeeded) {
            const 
        }
    }
    
}
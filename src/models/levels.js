const mongoose = require('mongoose')

const levelSchema = new mongoose.Schema({
    userID: String,
    guildID: String,
    level: { type: Number, default: 0},
    xp: { type: Number, default: 0}
});

const model = mongoose.model('Quick.djs-Levels', levelSchema)
module.exports = model;
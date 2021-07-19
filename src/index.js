//----------------------------------------------------------------
//FUNCTIONS
//----------------------------------------------------------------
module.exports.welcome = require('./functions/welcome');
module.exports.memberCount = require('./functions/membercount');
module.exports.blacklistWords = require('./functions/blacklist');
module.exports.antiSwear = require('./functions/antiswear');
module.exports.embed = require('./functions/embed');
module.exports.antiMassEmoji = require('./functions/massemoji')


//----------------------------------------------------------------
//CLASSES
//----------------------------------------------------------------
module.exports.Moderation = require('./classes/moderation');
module.exports.Images = require('./classes/images');
module.exports.Games = require('./classes/games');
module.exports.Ticket = require('./classes/tickets');
module.exports.Logs = require('./classes/logs');
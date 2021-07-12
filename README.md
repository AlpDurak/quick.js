# Table of Contents
* [About](https://www.npmjs.com/package/quick.djs#about)
* [Installation](https://www.npmjs.com/package/quick.djs#installation)
* [Functions and Classes](https://www.npmjs.com/package/quick.djs#functions-and-classes)
    * [Moderation](https://www.npmjs.com/package/quick.djs#moderation)
    * [Images](https://www.npmjs.com/package/quick.djs#images)
    * [Games](https://www.npmjs.com/package/quick.djs#games)
    * [Tickets](https://www.npmjs.com/package/quick.djs#ticket)
    * [Other](https://www.npmjs.com/package/quick.djs#other)
* [Contribute](https://www.npmjs.com/package/quick.djs#contribute)
* [Credits](https://www.npmjs.com/package/quick.djs#credits)


# About
`quick.djs` is a simple to use package that makes writing Discord.js bots much faster.

# Installation
In order to use `quick.djs` you *must* have **Node.js v12.0.0 or later insalled**

Installing `quick.djs`:
```
npm install quick.djs
```
or
```
yarn add quick.djs
```

# Functions and Classes

###### Moderation
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { Moderation } = require('quick.djs');

const moderation = new Moderation();
const prefix = "!"

client.on("ready", ready => {
    console.log("Online!");
});
   
client.on("message", async message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
 const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "ban") {
        const userID = message.mentions.members.first().id; // Make sure to use the "members" property and not users.
        const reason = args.slice(1).join(" ");
        await moderation.ban(message, userID, {title: "User has been banned", reason: reason, color: "RED"});
        //Will also send a message when banned.
    }
});
client.login("TOKEN");
``` 
Moderation Functions:
| Syntax  	| Description     	| Example                                                                                                                                             	|
|---------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------	|
| ban()   	| Bans a member   	| quick.ban(message, 'user id', {title: 'embed title',  reason: 'reason', color: 'hex color'}) //"message" is your message event parameter name.  	|
| unban() 	| Unbans a member 	| quick.unban(message, 'user id') //"message" is your message event parameter name.                                                               	|
| kick()  	| Kicks a member  	| quick.kick(message, 'user id', {title: 'embed title', reason: 'reason', color: 'hex color' //"message" is your message event parameter name.    	|

**More to come!**


###### Images
```js
        //Basic Syntax:
        const { Images } = require("quick.djs")
        const images = new Images();
        const image = await images.hug();
        console.log(image);
        //Will console log the image URL.

```
Image Functions:
| Syntax   	| Description              	|
|----------	|--------------------------	|
| hug()    	| Sends a hug image/gif    	|
| kiss()   	| Sends a kiss image/gif   	|
| slap()   	| Sends a slap image/gif   	|
| punch()  	| Sends a punch image/gif  	|
| wink()   	| Sends a wink image/gif   	|
| pat()    	| Sends a pat image/gif    	|
| kill()   	| Sends a pat image/gif    	|
| cuddle() 	| Sends a cuddle image/gif 	|
| wafiu()  	| Sends a wafiu image/gif  	|
**PLEASE NOTE: These do *not* send the image automatically, it only returns the image URL and then from there, you can do things with it.**
###### Games
```js
//Basic Syntax

//REST OF YOUR CODE ABOVE
const Discord = require("discord.js");
const client = new Discord.Client();

const { Games } = require("quick.djs");
client.on("message", message => {
    if (message.content === "snake") {
        const games = new Games();
        games.snake(message);
    }
})
```
| Syntax  	| Description                   	| Example                                                                   	|
|---------	|-------------------------------	|---------------------------------------------------------------------------	|
| snake() 	| Setup a fun little snake game 	| quick.snake(message) //"message" is your message event parameter name 	|

###### Ticket
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { Ticket } = require('quick.djs');

const ticket = new Ticket();
const prefix = "!"
client.on("ready", ready => {
    console.log("Online!");
});
    
   

client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

 const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ticket") {
        ticket.new(message, 'STAFF ROLE ID HERE', {title: 'New Ticket', description: 'Welcome to this ticket!', color: "RED"}) 
    }
});
client.login("TOKEN");
```
Ticket Functions:

| Syntax   	| Description              	| Example                                                                                                           	|
|----------	|--------------------------	|-------------------------------------------------------------------------------------------------------------------	|
| new()    	| Creates a new Ticket.    	| quick.new(message, 'staff role id'  {title: 'title', description: 'embed description', color: 'hex color'}) 	|
| rename() 	| Renames the channel name 	| quick.rename(message, 'channelName')  //"message" is what you have defined "message" as in your message event. 	|
| delete() 	| Deletes the channel      	| quick.delete(message) //"message" is what you have defined "message" as in your message event.    

#### Other
| Syntax           	| Description                                             	| Example                                                                                                                                       	|
|------------------	|---------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|
| antiSwear()      	| Prevents people from swearing.                          	| quick.antiSwear(message, "no swearing message") //"message" is your message event parameter name                                              	|
| blacklistWords() 	| Blacklist words that people can't say.                  	| quick.blacklistWords(message, "blacklisted word message" {words: ["word1", "word2", "etc"]}) //"message" is your message event parameter name 	|
| memberCount()    	| Display a member count of your server.                  	| quick.memberCount(client, member, channelID)                                                                                                  	|
| welcome()        	| Displays a welcome message when users join your server. 	| quick.welcome(client, message, channelID, GuildMember, embed = true, "custom join message"
| embed()           | Send a embed that you can construct easily.               | quick.embed(message, {title: "Title", description: "Description", color: "RED", footer: "Made with quick.djs", timestamp: true,  author: "quick.djs devs", url: "https://discord.gg/qwQfZsZ878", thumbnail: "https://prnt.sc/1ae892z", image: "https://prnt.sc/1ae8htl"})

![embed function example image](https://media.discordapp.net/attachments/735521586295078944/863957946089472030/unknown.png)

**These do not have any classes and are base functions you can use without importing a class**

# Contribute
Feeling good and want to contribute? Join the [Discord server](https://discord.gg/qwQfZsZ878)

## Credits
* [anime-images-api](https://www.npmjs.com/package/anime-images-api) - The package for the Images.
* [snakecord](https://www.npmjs.com/package/snakecord) - The package for the snake game.
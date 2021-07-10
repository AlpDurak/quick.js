# Table of Contents
* [About](https://www.npmjs.com/package/quick.djs#about)
* [Installation](https://www.npmjs.com/package/quick.djs#installation)
* [Functions and Classes](https://www.npmjs.com/package/quick.djs#functions-and-classes)
    * [Moderation](https://www.npmjs.com/package/quick.djs#moderation)
    * [Cooldown](https://www.npmjs.com/package/quick.djs#cooldown)
    * [Images](https://www.npmjs.com/package/quick.djs#images)
    * [Games](https://www.npmjs.com/package/quick.djs#games)
    * [Tickets](https://www.npmjs.com/package/quick.djs#ticket)
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
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if (command === "ban") {
        const userID = message.mentions.members.first().id; // Make sure to use the "members" property and not users.
        const reason = args.slice(1).join(" ");
        moderation.ban(message, userID, {title: "User has been banned", reason: reason, color: "RED"});
        //Will also send a message when banned.
    }
});
client.login("TOKEN");
``` 
Moderation Functions:
| Function | Description |
| --- | ----------- |
| ban() | Bans a specified member from the server. |
| kick() | Kicks a specified member from the server. |

**More to come!**

###### Cooldown
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { Cooldown } = require('quick.djs');

const cooldown = new Cooldown();
const prefix = "!"
client.on("ready", ready => {
    console.log("Online!");
});
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if (command === "hello") {
        cooldown.set(message, 5) // 5 meaning 5 seconds.
        message.channel.send("HELLO");
    }
});
client.login("TOKEN");
```
Cooldown Functions:
| Syntax 	| Description                                	|
|--------	|--------------------------------------------	|
| set()  	| Sets the cooldown amount for that command. 	|

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
Game Functions:
| Syntax  	| Description                        	|
|---------	|------------------------------------	|
| snake() 	| Generates a fun little snake game. 	|

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
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if (command === "ticket") {
        ticket.new(client, message, args, 'STAFF ROLE ID HERE') 
    }
});
client.login("TOKEN");
```
Ticket Functions:

| Syntax   	| Description              	|
|----------	|--------------------------	|
| new()    	| Creates a new Ticket.    	|
| rename() 	| Renames the channel name 	|
| delete() 	| Deletes the channel      	|

# Contribute
Feeling good and want to contribute? Join the [Discord server](https://discord.gg/qwQfZsZ878)

## Credits
* [anime-images-api](https://www.npmjs.com/package/anime-images-api) - The package for the Images.
* [snakecord](https://www.npmjs.com/package/snakecord) - The package for the snake game.
// Require Discord.js module.
const Discord = require('discord.js');
//REauire fs module.
const fs = require('fs');

// Reading info form the config.json file.
const {prefix, PatchNumber, BuildNumber } = require('./config/config.json');
// Create a new Discord Client.
const client = new Discord.Client();

//#region Command Handler
//Adding a discord collection and detecting commands.
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
	const command = require(`./Commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
//#endregion

const cooldowns = new Discord.Collection();
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	client.user.setPresence({
		status: 'online',
		activity: {
			name: '!help',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/monstercat'
		}
	})
	console.log('Bot Online, Running patch: ' + PatchNumber + ' and build: ' + BuildNumber);
});

const activities_list = [
    "with the !help command.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

// Triggred when user sends a message or we can check for a specific
// message here.
client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name))
	{
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id))
	{
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime)
		{
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try
	{
		command.execute(client, message, args);
	}
	catch (error)
	{
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	};
});

// login to Discord with your app's token
client.login(process.env.token);

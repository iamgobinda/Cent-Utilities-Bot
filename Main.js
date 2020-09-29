// Require Discord.js module.
const Discord = require('discord.js');
//REauire fs module.
const fs = require('fs');
const { coolDown } = require('./Commands/UserInfo');

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
			name: 'for commands! | !help',
			type: 'WATCHING',
		}
	})
	console.log('Bot Online, Running patch: ' + PatchNumber + ' and build: ' + BuildNumber);
});
//triggers when a user joins
client.on('guildMemberAdd', member => {
	const channelId = '727420256917782602'

	const Welcomevent = new Discord.MessageEmbed();
	Welcomevent.setColor(`RANDOM`);
	Welcomevent.setAuthor(member.user.tag , member.user.displayAvatarURL());
	Welcomevent.setThumbnail(member.user.displayAvatarURL());
	Welcomevent.setTitle('👋| Hello!');
	Welcomevent.setDescription('A wild user has been spotted joining the server! Make sure to go to <#747302081047691335>, verify yourself and start talking with the community!');
	Welcomevent.setTimestamp();

	const channel = member.guild.channels.cache.get(channelId)

	channel.send(Welcomevent);

});



// Triggred when user sends a message or we can check for a specific
// message here.
client.on('message', async message => {

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
			const Cooldownembed = new Discord.MessageEmbed();
			Cooldownembed.setColor(0xf53d3d)
			Cooldownembed.setTitle('Be a normie Common!');
			Cooldownembed.setTitle('Be a normie C\'mon!');
			Cooldownembed.setDescription(`If you spam my commands , I will die soon! You can use the command \`${command.name}\` again in ${timeLeft.toFixed(1)} seconds!`)
			Cooldownembed.setTimestamp();
			return message.reply(Cooldownembed);
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

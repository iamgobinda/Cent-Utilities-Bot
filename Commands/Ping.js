module.exports = {
	name: 'ping',
	cooldown: 2,
	description: 'A ping command, that displays the ping of the bot.',
    execute(message, args) 
    {
        const Discord = require('discord.js');
    
		// It sends the user "Pinging"
		message.channel.send("Pinging...").then(m =>{
		// The math thingy to calculate the user's ping
		var ping = m.createdTimestamp - message.createdTimestamp;
			  
		// Basic embed
		var embed = new Discord.MessageEmbed()
		.setAuthor(`🏓 | The bot's ping is ${ping}ms`)
		.setColor(0x2abbf5)
						  
		// Then It Edits the message with the ping variable embed that you created
		m.edit(embed);
		});
	},
};
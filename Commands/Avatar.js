const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
	aliases: ['av' , 'pfp'],
    description: 'Shows a user\'s pfp!',
    cooldown: 1,
    Usage: '`!avatar <user>`',
    PermLevel: `User`,
    async execute(client ,message, args)
    {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Your avatar!');
        embed.setImage(message.author.displayAvatarURL());
        embed.setColor(0x2abbf5);
    
        message.channel.send(embed);
    },
};

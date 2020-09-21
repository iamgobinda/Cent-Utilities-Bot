const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    coolDown: 1,
    description: 'A command that shows the avatar of the user that it gets a mention to.',
    aliases: ['a', 'ava'],
    async execute(client ,message, args)
    {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('<:greentick:750751680613843105> Your avatar!');
        embed.setImage(message.author.displayAvatarURL());
        embed.setColor(0x2abbf5);
    
        message.channel.send(embed);
    },
};

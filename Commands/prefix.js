const Discord = require('discord.js');

module.exports = {
    name: 'prefix',
	aliases: ['pref' , 'pfix'],
    description: 'Tells you that you can\'t change the bot\'s prefix! (Easter Egg #1)',
    cooldown: 2,
    Usage: '`!prefix`',
    PermLevel: `User`,
    async execute(client , message, args) {
        message.react('🥚');
        const prefixe = new Discord.MessageEmbed()
        .setTitle('UwU you found an easter egg!')
        .setDescription('It seems like you want to change the bot\'s prefix but due to the way this bot is designed you can\'t change the bot\'s prefix. However, if you want this to be added in future updates! Let us know in our [server](https://discord.gg/T77rFYC)!')
        .setFooter('Easter egg #1')
        .setColor('PURPLE')
        .setTimestamp()

        message.channel.send(prefixe)
   
    },
};
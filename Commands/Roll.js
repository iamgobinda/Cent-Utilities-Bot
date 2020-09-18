const Discord = require('discord.js');

module.exports = {
    name: 'roll',
    coolDown: 1,
	description: 'a command that rolls the dice !',
    aliases: ['ro', 'rol'],
    async execute(client ,message, args)
    {
        let maxrange = args[0];

        const randomNumber = getRndInteger(1, maxrange);
        const Embed = new Discord.MessageEmbed();
        Embed.setTitle('**YOUR ROLL IS:** ');
        Embed.setDescription(`is... ${randomNumber}`);
        Embed.setColor(0x2abbf5);

        message.channel.send(Embed);
    },
};
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const Discord = require('discord.js');

module.exports = {
    name: 'roll',
	aliases: ['randomnumber' , 'randnum'],
    description: 'Generates a random number based off the value!',
    cooldown: 2,
    Usage: '`!roll <number>`',
    PermLevel: `User`,
    async execute(client ,message, args)
    {
        let maxrange = args[0];

        const randomNumber = getRndInteger(1, maxrange);
        const Embed = new Discord.MessageEmbed();
        Embed.setTitle(`<:greentick:750751680613843105> You have successfully generated a number from **1 to ${args[0]}!** `);
        Embed.setDescription(`The number is **${randomNumber}**`);
        Embed.setColor(0x32ba4b);
        Embed.setFooter('User ID:' + message.author.id)
        Embed.setTimestamp();

        message.channel.send(Embed);
    },
};
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
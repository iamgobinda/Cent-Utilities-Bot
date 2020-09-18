const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'slowmode',
    coolDown: 2,
	description: 'sets slowmode for channels.',
    aliases: ['s', 'sm'],
    async execute(client ,message, args)
    {
        const embed = new MessageEmbed();

        if(!message.member.hasPermission("MANAGE_CHANNELS"))
        {
            embed.setTitle('Error !');
            embed.setDescription('Only Staff can access this Command !');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed);
        }

        if (!args[0])
        {
            embed.setTitle('Syntax Error !');
            embed.setDescription('You did not specify a correct amount of time! Usage: `Slowmode <time>`');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed);
        }

        else if(isNaN(args[0]))
        {
            embed.setTitle('Syntax Error !');
            embed.setDescription('That is not a number! Usage: `Slowmode <time>');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed);
        }

        else if(args[0] > 21600)
        {
            embed.setTitle('Error !');
            embed.setDescription('Invalid Number! Number must be below 21600.');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed);   
        }

        else if(args[0] < 0)
        {
            embed.setTitle('Success !');
            embed.setDescription('Set Slowmode to 0!');
            embed.setColor(0x32ba4b);

            return message.channel.send(embed);
        }

        embed.setTitle('Success !');
        embed.setDescription(`Slowmode Set to **${args[0]}**`);
        embed.setColor(0x32ba4b);
         
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(embed);
    }
};
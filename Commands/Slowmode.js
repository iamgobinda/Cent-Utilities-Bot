const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'slowmode',
	aliases: ['sm' , 'slow'],
    description: 'Sets a channel slowmode!',
    cooldown: 2,
    Usage: '`!slowmode <number>`',
    PermLevel: `Staff`,
    async execute(client ,message, args)
    {
        const embed = new MessageEmbed();

        if(!message.member.hasPermission("MANAGE_CHANNELS"))
        {
            embed.setTitle('<:redtick:750751681175748608> Error!');
            embed.setDescription('Only Staff can access this Command!');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));
        }

        if (!args[0])
        {
            embed.setTitle('<:redtick:750751681175748608> Syntax Error!');
            embed.setDescription(' You did not specify a correct amount of time! Usage: `Slowmode <time>`');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));
        }

        else if(isNaN(args[0]))
        {
            embed.setTitle('<:redtick:750751681175748608> Syntax Error!');
            embed.setDescription('That is not a number! Usage: `Slowmode <time>');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));
        }

        else if(args[0] > 21600)
        {
            embed.setTitle('<:redtick:750751681175748608> Error!');
            embed.setDescription('Invalid Number! Number must be below 21600.');
            embed.setColor(0xf53d3d);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));  
        }

        else if(args[0] < 0)
        {
            embed.setTitle('<:greentick:750751680613843105> Success!');
            embed.setDescription('This channel has no slowmode now!');
            embed.setColor(0x32ba4b);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));
        }
        else if(args[0] == 0)
        {
            embed.setTitle('<:greentick:750751680613843105> Success!');
            embed.setDescription('This channel has no slowmode now!');
            embed.setColor(0x32ba4b);

            return message.channel.send(embed).then(m => m.delete({timeout: 500}));
        }

        embed.setTitle('<:greentick:750751680613843105> Success!');
        embed.setDescription(`Slowmode Set to **${args[0]}**!`);
        embed.setColor(0x32ba4b);
         
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(embed).then(m => m.delete({timeout: 500}));
    }
};

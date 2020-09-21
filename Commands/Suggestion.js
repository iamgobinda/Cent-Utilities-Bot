const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    coolDown: 30,
	description: 'Gives suggestions...',
    aliases: ['s', 'su'],
    async execute(client, message, args)
    {
        let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
        let suggestion = args.slice(1).join(" ");
        try
        {
            const embed = new Discord.MessageEmbed();
            embed.setTitle('New Suggestion !');
            embed.setDescription(suggestion);

            channel.send(embed).then(m => {
                m.react("✅");
                m.react("❌");
            })
        }
        catch
        {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> Syntax Error!');
            Error.setDescription('Usage: `suggest <suggestion>`');
            Error.setColor(0xf53d3d);
    
            message.channel.send(Error);
        }
    }
}
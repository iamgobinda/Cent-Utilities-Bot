const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    coolDown: 30,
	description: 'Gives suggestions...',
    aliases: ['s', 'su'],
    async execute(client, message, args)
    {
        let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
        let suggestion = args.slice(0).join(" ");

        const embed = new Discord.MessageEmbed();
        embed.setTitle('New Suggestion !');
        embed.setDescription(suggestion);

        channel.send(embed).then(m => {
            m.react("✅");
            m.react("❌");
        })
    }
}
const Discord = require('discord.js');

module.exports = {
    name: "suggest",
    description: "Suggest a thing!",
    coolDown: 10,
    async execute(client, message, args) {
        if (!args.length) {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> Syntax Error!');
            Error.setColor(0xf53d3d);
            Error.setDescription('Usage - `!suggest <suggestion>`');

            return message.channel.send(Error);
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === "➕│suggestions" || x.name === "suggestions"));


        if (!channel) {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> Error!');
            Error.setDescription('There is no channel with name - suggestions');
            Error.setColor(0xf53d3d);

            return message.channel.send(Error);
        }

        const embed = new Discord.MessageEmbed();
        embed.setAuthor("SUGGESTION FROM " + message.author.tag, message.author.avatarURL());
        embed.setThumbnail(message.author.avatarURL());
        embed.setColor(0x2abbf5);
        embed.setDescription(args.join(" "));
        embed.setTimestamp();

        channel.send(embed).then(m => {
            m.react(":greentick:750751680613843105");
            m.react(":redtick:750751681175748608");
        })

        const sucess = new Discord.MessageEmbed();
        sucess.setThumbnail(message.author.avatarURL());
        sucess.setTitle('<:greentick:750751680613843105> Success!');
        sucess.setDescription('Successfully sent your sugesstion to be decided upon! We will contact you if the suggestion gets approved!');
        sucess.setColor(0x32ba4b)

        return message.channel.send(sucess).then(m => m.delete({timeout: 1500}));

    }
};
const Discord = require('discord.js');

module.exports = {
    name: 'qna',
	aliases: ['question'],
    description: 'Asks staff a question!',
    cooldown: 3,
    Usage: '`!qna <question>`',
    PermLevel: `User`,
    async execute(client, message, args) {
        if (!args.length) {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> Syntax Error!');
            Error.setColor(0xf53d3d);
            Error.setDescription('Usage - `!qna <question>`');

            return message.channel.send(Error);
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === "📌-staff-chat" ));


        if (!channel) {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> Error!');
            Error.setDescription('There is no channel with name - staff chat!');
            Error.setColor(0xf53d3d);

            return message.channel.send(Error);
        }

        const embed = new Discord.MessageEmbed();
        embed.setAuthor("❓│Question from " + message.author.tag, message.author.avatarURL());
        embed.setThumbnail(message.author.avatarURL());
        embed.setColor(0x2abbf5);
        embed.setDescription(args.join(" "));
        embed.setTimestamp();

        channel.send(embed).then(m => {
            m.react(":greentick:750751680613843105");
        })

        const sucess = new Discord.MessageEmbed();
        sucess.setThumbnail(message.author.avatarURL());
        sucess.setTitle('<:greentick:750751680613843105> Success!');
        sucess.setDescription('Sent your question to staff! You will receive a DM from the bot telling you the answer!');
        sucess.setColor(0x32ba4b)

        return message.channel.send(sucess).then(m => m.delete({timeout: 15000}));

    }
};
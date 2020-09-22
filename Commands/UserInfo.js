module.exports = {
    name: 'userinfo',
    coolDown: 5,
    description: 'A user Info command that shows the info about a user.',
    aliases: ['ui', 'useri', 'uinfo', 'whois'],
    async execute(client, message, args) {
        const Discord = require('discord.js');

        let ment = message.mentions.users.first();

        if (!ment) {
            const userEmbed = new Discord.MessageEmbed();
            userEmbed.setTitle('Incorrect Usage!');
            userEmbed.setDescription('**Usage:**\n`UserInfo <mentioned User>`');
            userEmbed.setFooter('TIP: To see your own info use UserInfo <your mentioned name>.')
            userEmbed.setColor(0xf53d3d);

            message.channel.send(userEmbed);

            return;
        }

        const userEmbed = new Discord.MessageEmbed();
        userEmbed.setAuthor(ment.username + '#' + ment.discriminator, ment.displayAvatarURL());
        userEmbed.setThumbnail(ment.displayAvatarURL());
        userEmbed.setColor(`RANDOM`);
        userEmbed.addField('**Created: **', ment.createdAt);
        userEmbed.addField('**Username: **', ment.tag);
        userEmbed.addField('**Status: **', ment.presence.status);
        userEmbed.addField('**ID: **', ment.id);
        userEmbed.setTimestamp();

        message.channel.send(userEmbed);
    },
};
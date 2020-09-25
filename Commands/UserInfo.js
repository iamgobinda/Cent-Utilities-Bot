module.exports = {
    name: 'userinfo',
    coolDown: 2,
    description: 'A user Info command that shows the info about a user.',
    aliases: ['ui', 'useri', 'uinfo', 'whois'],
    async execute(client, message, args) {
        const Discord = require('discord.js');

        let ment = message.mentions.members.first()||
        message.guild.members.cache.get(args[0]);
        let firstment = message.author;

        const ui = new Discord.MessageEmbed();
        ui.setAuthor(firstment.username + '#' + firstment.discriminator, firstment.displayAvatarURL());
        ui.setThumbnail(firstment.displayAvatarURL());
        ui.setColor(`RANDOM`);
        ui.addField('**Created: **', firstment.createdAt);
        ui.addField('**Username: **', firstment.tag);
        ui.addField('**Status: **', firstment.presence.status);
        ui.addField('**ID: **', firstment.id);
        ui.setTimestamp();

        message.channel.send(ui);

        if (!ment) {

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
module.exports = {
    name: 'userinfo',
	aliases: ['ui' , 'whois'],
    description: 'Displays a user info!',
    cooldown: 2,
    Usage: '`!userinfo <user>`',
    PermLevel: `User`,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const moment = require('moment');
        const member = message.member

        let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]);
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let embed = new Discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL())
        .setDescription(`${user}`)
        .setColor(`#32ba4b`)
        .setThumbnail(user.displayAvatarURL())
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField('Created at:', user.createdAt)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY')}`, true)
        .addField('Status:', user.presence.status, true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send(embed);
    return;


    },
};
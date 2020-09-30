module.exports = {
    name: 'invite',
	aliases: ['serverlink' , 'sl'],
    description: 'Gives the server invite link to your dm! (This is to blacklist links from the channel!)',
    cooldown: 2,
    Usage: '`!invite`',
    Category: "Miscellaneous",
    PermLevel: `User`,
    async execute(client, message, args){
        const Discord = require('discord.js')

        const invitelink = new Discord.MessageEmbed()
        .setTitle('Server Invite link')
        .setDescription('You had requested for the server invite link and here it is! \n Link: https://discord.gg/T77rFYC \n (If you are wondering why this is sent to the dm, it\'s because we have blacklisted links in our server!)')
        .setFooter('Message from ' + message.guild.name , message.guild.serverIcon)
        .setColor('GREEN')
        .setTimestamp()

        let user = message.author;
        user.send(invitelink)
        message.channel.send('You\'ve got mail!')
    },
};
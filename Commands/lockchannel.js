module.exports = {
    name: 'lockchannel',
	aliases: ['lock' , 'panik' , 'panic'],
    description: 'Locks a channel!',
    cooldown: 2,
    Usage: '`!lockchannel`',
    Category: "Moderation",
    PermLevel: `Admin`,
    async execute(client, message, args){

        const Discord = require("discord.js")
        let channel = message.channel

        if (!message.member.roles.cache.has('753283575276896337')) {
            return;
        }
        else if (message.member.roles.cache.has('753283575276896337')) {
            message.channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false });
            const lock = new Discord.MessageEmbed()
            .setDescription('<:greentick:750751680613843105> Successfully locked the channel. Members only with Admin permission can send messages into the channel! Keep in mind there is no unlock command at the moment.')
            .setColor('RED')
            .setTimestamp()
            message.channel.send(lock)
        }

    },
};
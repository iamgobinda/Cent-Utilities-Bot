module.exports = {
    name: 'botinfo',
	aliases: ['bi' , 'boti'],
    description: 'Shows the bot statistics and info!',
    cooldown: 2,
    Usage: '`!botinfo <question>`',
    PermLevel: `User`,
    async execute(client , message, args) 
    {
        const Discord = require('discord.js');
        message.channel.send("Pinging...").then(m =>{

            var ping = m.createdTimestamp - message.createdTimestamp;

            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);

            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

            const Botinfo = new Discord.MessageEmbed();
            Botinfo.setTitle('*Bot Info:** ');
            Botinfo.addField('**Creator:**', 'YT GAMEWORKS', false);
            Botinfo.addField('**Users:** ', `**${message.guild.memberCount}**`, true);
            Botinfo.addField('**Channels:** ', `**${message.guild.channels.cache.size}**`, true);
            Botinfo.addField('**Current ping: **', ping + ' ms', true);
            Botinfo.addField('**Uptime: **', uptime, false);
            Botinfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/754995783132250242/Discord_logo_4.png');
            Botinfo.setColor(0x2abbf5);
    
            message.channel.send(Botinfo);
        });
    },
};
module.exports = {
	name: 'roleinfo',
	aliases: ['ri', 'rolei', 'rinfo'],
	description: 'Information about individual roless.',
    async execute(client ,message, args) 
    {
        const Discord = require('discord.js');

        if(args[0] === 'gamedev' || args[0] === 'GameDev' || args[0] === 'Gamedev')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the GameDev role: **');
            GaveRole.setDescription('Get access to gamedev-only text and voice channels!');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Artist' || args[0] === 'artist')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Artist role: **');
            GaveRole.setDescription('Get access to artist-only text and voice channels');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Gamers' || args[0] === 'gamer' || args[0] === 'gamers')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Gamer role: **');
            GaveRole.setDescription('Get access to gamer-only text and voice channels!');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'SFX' || args[0] === 'Sound')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Sound designer role: **');
            GaveRole.setDescription('Get access to Sound Designers-only text and voice chat !');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Bot-Helper' || args[0] === 'Bot')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Bot helper role: **');
            GaveRole.setDescription('Get access to bot-helper-only text and voice channels');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'PlayTester' || args[0] === 'Playtester')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the playetester role: **');
            GaveRole.setDescription('Be the first one to review and play our games!');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Giveaway-Notifs' || args[0] === 'giveaway-notifs')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Giveaway notification role: **');
            GaveRole.setDescription('You will be notified when we host a giveaway!');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'YT-Notifs' || args[0] === 'yt-notifs')
        {
            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('**Info on the Youtube notifications role: **');
            GaveRole.setDescription('You will be notified when we upload a new video!');
            GaveRole.setColor(0x2abbf5);

            message.channel.send(GaveRole);
        }
        else if(!args.lenght)
        {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('Incorrect syntax !');
            Error.setDescription('**Usage:** `!Roleinfo <Role name>`')
            Error.setColor(0xf53d3d);

            message.channel.send(Error);
        }
	},
};
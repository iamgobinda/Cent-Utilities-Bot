module.exports = {
	name: 'roles',
	aliases: ['giverole' , 'role'],
    description: 'Gives a role to you!',
    cooldown: 2,
    Usage: '`!roles <role>`',
    PermLevel: `User`,
    async execute(client ,message, args) 
    {
        const Discord = require('discord.js');

        //#region Giving roles on input
        if(args[0] === 'gamedev' || args[0] === 'GameDev' || args[0] === 'Gamedev')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Game Dev");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Artist' || args[0] === 'artist')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Artist");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Gamers' || args[0] === 'gamer' || args[0] === 'gamers')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Gamers");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'SFX' || args[0] === 'Sound Designers' || args[0] === 'Sound and SFX Designer')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Sound and SFX Designer");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Bot Helper' || args[0] === 'Bot')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Bot Helper");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'PlayTester' || args[0] === 'Playtesters')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Playtesters");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Giveaway')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Giveaway Notifications");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        else if(args[0] === 'Youtube')
        {
            //Finding the role
            let role = message.guild.roles.cache.find(r => r.name === "Youtube Notifications");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            //embed:
            const GaveRole = new Discord.MessageEmbed();
            GaveRole.setTitle('Success !');
            GaveRole.setDescription('Gave you the role !');
            GaveRole.setColor(0x32ba4b);

            message.channel.send(GaveRole);
        }
        //#endregion

        //#region normal roles
        else if(!args.lenght)
        {
            const availableRanks = new Discord.MessageEmbed();
            availableRanks.setThumbnail('https://cdn.discordapp.com/attachments/751320406819995728/757925189009932288/download__2_-removebg-preview.png');
            availableRanks.setTitle('**SELF-ASSIGN ROLES!**');
            availableRanks.setDescription('SELF-ASSIGN ROLES\n These are the roles you can assign yourself!\nJust use the role command `(!Role)` followed by the role you want!\nAs an example, doing `!Role blue` would give you the blue role if blue is part of the\n list.');
            availableRanks.addField('Role 1\n**GameDev**', 'Get access to gamedev-only text and voice channels!', false);
            availableRanks.addField('Role 2\n**Artist**', 'Get access to artist-only text and voice channels', false);
            availableRanks.addField('Role 3\n**Gamer**', 'Get access to gamer-only text and voice channels!', false);
            availableRanks.addField('Role 4\n**Sound Designers**', 'Get access to Sound Designers-only text and voice chat !', false);
            availableRanks.addField('Role 5\n**Bot Helper**', 'Get access to bot-helper-only text and voice channels!', false);
            availableRanks.addField('Role 6\n**Playtester**', 'Be the first one to review and play our games!', false);
            availableRanks.addField('Role 7\n**Giveaway**', 'You will be notified when we host a giveaway!', false);
            availableRanks.addField('Role 8\n**Youtube**', 'You will be notified when we upload a new video!', false);
            availableRanks.setColor(0x2abbf5);
            availableRanks.setFooter('Type !role (role) to assign yourself the role');
            availableRanks.setTimestamp();
    
            message.channel.send(availableRanks);
        }
        //#endregion
    }
}
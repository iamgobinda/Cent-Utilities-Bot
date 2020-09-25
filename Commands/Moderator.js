const Discord = require('discord.js');

module.exports = {
    name: 'mod',
    description: 'Moderator and moderation commands.',
    aliases: ['m', 'mo'],
    async execute(client, message, args) 
    {
        if(args[0] === 'Kick' && !message.member.roles.cache.has('753283575276896337'))
        {
            const err = new Discord.MessageEmbed();
            err.setTitle('You don\'t have the permission to kick memebers !');
            err.setDescription('Only staff can kick members !');
            err.setColor(0xf53d3d);

            message.channel.send(err);
        }
        else if(args[0] === 'Kick' && message.member.roles.cache.has('753283575276896337'))
        {
            let memeberid = message.content.substring(message.content.indexOf(' ') + 1);
            let member = message.guild.members.cache.get(memeberid);
            if(member)
            {
                try
                {
                    await member.kick();
                    console.log('A member was kicked !');
                }
                catch(err)
                {
                    console.log(err);
                }
            }
        }
    },
};
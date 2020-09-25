const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    cooldown: 5,
    aliases: ['k', 'ki'],
    description: 'A command that kicks a person !',
    async execute(client, message, args) 
    {
        let memeberid = message.content.substring(message.content.indexOf(' ') + 1);
        let member = message.guild.members.cache.get(memeberid);

        if(message.member.roles.cache.has('753283575276896337'))
        {
            if(member)
            {
                try
                {
                    const success = new Discord.MessageEmbed();
                    success.setTitle('Sucess !');
                    success.setDescription('kicked: ' + `${memeberid}`);
                    success.setColor(0x32ba4b);

                    await member.kick();
                    message.channel.send(success);

                    console.log('A member was kicked !');
                }
                catch(err)
                {
                    console.log(err);

                    const err = new Discord.MessageEmbed();
                    err.setTitle('Unkown error !');
                    err.setColor(0xf53d3d);

                    message.channel.send(err);
                }
            }
            else if(!member)
            {
                const err = new Discord.MessageEmbed();
                err.setTitle('**Invaild Mention!**');
                err.setDescription('Usage: `Kick <memberid>`');
                err.setColor(0x32ba4b);

                message.channel.send(err);
            }
        }
        else if(!message.member.roles.cache.has('753283575276896337'))
        {
            const err = new Discord.MessageEmbed();
            err.setTitle('**YOU ARE NOT ELIGEBLE TO KICK !**');
            err.setDescription('Only staff and kick !');
            err.setColor(0x32ba4b);

            message.channel.send(err);
        }
    },
};
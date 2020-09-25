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

                    const uerr = new Discord.MessageEmbed();
                    uerr.setTitle('Unkown error !');
                    uerr.setColor(0xf53d3d);

                    message.channel.send(uerr);
                }
            }
            else if(!member)
            {
                const nerr = new Discord.MessageEmbed();
                nerr.setTitle('**Invaild Mention!**');
                nerr.setDescription('Usage: `Kick <memberid>`');
                nerr.setColor(0xf53d3d);

                message.channel.send(nerr);
            }
        }
        else if(!message.member.roles.cache.has('753283575276896337'))
        {
            const Eerr = new Discord.MessageEmbed();
            Eerr.setTitle('**YOU ARE NOT ELIGEBLE TO KICK !**');
            Eerr.setDescription('Only staff and kick !');
            Eerr.setColor(0xf53d3d);

            message.channel.send(Eerr);
        }
    },
};
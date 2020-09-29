const Discord = require('discord.js');

module.exports = {
    name: 'debugging',
	aliases: ['debug' , 'dbug'],
    description: 'Debugging commands!',
    cooldown: 5,
    Usage: '`!debugging <kill (or) error>`',
    PermLevel: `Bot Owner`,
    async execute(client, message, args) 
    {
        if(!message.member.roles.cache.has('748515939821158443'))
        {
            return;
        }
        else if(args[0] === 'kill' && message.member.roles.cache.has('748515939821158443'))
        {
            message.reply("Resetting...");
            client.destroy();
            client.login(process.env.token);
        }
        else if(args[0] === 'Log' && message.member.roles.cache.has('748515939821158443'))
        {
            try
            {
                const NoErr = new Discord.MessageEmbed();
                NoErr.setTitle('<:greentick:750751680613843105> No Errors !');
                NoErr.setColor(0x32ba4b);

                message.channel.send(NoErr);
            }
            catch(error)
            {
                const Err = new Discord.MessageEmbed();
                Err.setTitle('<:redtick:750751681175748608> **Error Found!**');
                Err.setDescription(error);
                error.setColor(0xf53d3d);

                message.channel.send(Err);
            }
        }
    },
};
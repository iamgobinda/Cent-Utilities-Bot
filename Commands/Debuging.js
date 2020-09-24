const Discord = require('discord.js');

module.exports = {
    name: 'debug',
    description: 'Debugging commands for me, and only me !',
    aliases: ['d', 'de'],
    async execute(client, message, args) 
    {
        if(!message.member.roles.cache.has('748515939821158443'))
        {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> | ERROR !');
            Error.setDescription('You are not allowed to access debugging commands.');
            Error.setColor(0xf53d3d);

            message.channel.send(Error).then(m => m.delete({timeout: 500}));
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
        else if(message.member.roles.cache.has('748515939821158443') && !args.lenght)
        {
            const DebugCommandsList = new Discord.MessageEmbed();
            DebugCommandsList.setTitle('**List of Debugging commands: **');
            DebugCommandsList.addField('Commands: ', '`Kill`, `Log`', false);
            DebugCommandsList.setColor(0x2abbf5);

            message.channel.send(DebugCommandsList);
        }
    },
};
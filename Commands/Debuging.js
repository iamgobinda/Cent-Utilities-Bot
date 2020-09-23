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

            message.channel.send(Error);
        }
        else if(message.member.roles.cache.has('748515939821158443') && !args.lenght)
        {
            const DebugCommandsList = new Discord.MessageEmbed();
            DebugCommandsList.setTitle('**List of Debugging commands: **');
            DebugCommandsList.addField('Commands: ', 'N/A', false);
            DebugCommandsList.setColor(0x2abbf5);

            message.channel.send(DebugCommandsList);
        }
        else if(args[0] === 'kill'
        {
            message.channel.send('Killing the bot....')
            .then(msg => client.destroy())
        }
    },
};
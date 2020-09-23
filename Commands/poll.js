const Discord = require('discord.js');

module.exports = {
    name: 'poll',
    coolDown: 60,
	description: 'A poll command used to make polls, to be used by staff!',
	aliases: ['po'],
    async execute(client , message, args) 
    {
        
        if(!message.member.roles.cache.has('753283575276896337'))
		{
			const Error = new Discord.MessageEmbed();
			Error.setTitle('ERROR!');
			Error.setDescription('Only Staff can do polls!');
			Error.setColor(0xf53d3d);

			message.channel.send(Error);
			return;
        }
        else if(message.member.roles.cache.has('753283575276896337'))
        {
            let pollChannel = message.mentions.channels.first();
            let pollDescription = args.slice(1).join(" ");
            try
            {
                let embedPoll = new Discord.MessageEmbed();
                embedPoll.setAuthor('From' + message.author.username , message.author.displayAvatarURL());
                embedPoll.setTitle('** 🚥 NEW POLL: **');
                embedPoll.setDescription(pollDescription);
                embedPoll.setColor(0x2abbf5);
        
                let msgEmbed = await pollChannel.send(embedPoll);
                await msgEmbed.react(':greentick:750751680613843105');
                await msgEmbed.react(':redtick:750751681175748608');
            }
            catch
            {
                const Error = new Discord.MessageEmbed();
                Error.setTitle(' <:redtick:750751681175748608> Syntax Error!');
                Error.setDescription('Usage: `<channel> <msg>`');
                Error.setColor(0xf53d3d);
    
                message.channel.send(Error);
            }
        }
    },
};

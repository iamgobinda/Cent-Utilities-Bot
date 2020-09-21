const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    coolDown: 30,
	description: 'A command that lets you make your own embeds!',
    aliases: ['e', 'em'],
    async execute(client ,message, args)
    {
        let channel = message.mentions.channels.first();
        let announcement = args.slice(1).join(" ");

        if(!message.member.roles.cache.has('753283575276896337'))
		{
			const Error = new Discord.MessageEmbed();
			Error.setTitle('<:redtick:750751681175748608> ERROR!');
			Error.setDescription('Only Staff can send embeds!');
			Error.setColor(0xf53d3d);

			message.channel.send(Error);
			return;
        }
        else if(message.member.roles.cache.has('753283575276896337'))
        {
            try
            {
                const embed = new Discord.MessageEmbed();
                embed.setAuthor(message.author.username);
                embed.setThumbnail(message.author.displayAvatarURL());
                embed.setTitle('**ANNOUCEMENT**');
                embed.setDescription(announcement);
                embed.setColor('RANDOM');
                embed.setFooter(timestamp);
        
                channel.send(embed);
            }
            catch
            {
                const Error = new Discord.MessageEmbed();
                Error.setTitle('<:redtick:750751681175748608> Syntax Error!');
                Error.setDescription('Usage: `<channel> <annoucement>`');
                Error.setColor(0xf53d3d);
    
                message.channel.send(Error);
            }
        }
    },
}

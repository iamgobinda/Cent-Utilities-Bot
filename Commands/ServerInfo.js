module.exports = {
	name: 'serverinfo',
	aliases: ['si', 'serveri', 'sinfo'],
	description: 'Information about the current server.',
    async execute(client ,message, args) 
    {
		const Discord = require('discord.js');
		
		
		const ServerInfo = new Discord.MessageEmbed();

		ServerInfo.setTitle('**Information about this server.**')
		ServerInfo.addField('**👑 Server Owner:** ', `${message.guild.owner}(${message.guild.ownerID} ) `, true);
		ServerInfo.addField('**Server name:** ', `${message.guild.name}`, true);
		ServerInfo.addField('**Total Members:** ', `${message.guild.memberCount}`, true);
		ServerInfo.addField('**Total Channels:** ', `${message.guild.channels.cache.size}`, true);
		ServerInfo.addField('**Creation date:** ', `${message.guild.createdAt}`, false);
		ServerInfo.addField('**Creation Region:** ', `${message.guild.region}`);
		ServerInfo.addField('**Verification Level:** ', `${message.guild.verificationLevel}`, true);
		ServerInfo.addField('**Total Boosts:** ', `${message.guild.premiumSubscriptionCount}`, true);
		ServerInfo.setThumbnail('https://media.discordapp.net/attachments/727420256917782602/754271858760613888/unknown.png');
		ServerInfo.setColor(0x2abbf5);

		message.channel.send(ServerInfo);
	},
};

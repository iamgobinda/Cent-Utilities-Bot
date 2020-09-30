module.exports = {
	name: 'serverinfo',
	aliases: ['si' , 'sinfo'],
    description: 'Shows the server info!',
    cooldown: 2,
    Usage: '`!serverinfo`',
    PermLevel: `User`,
    async execute(client ,message, args) 
    {
		const Discord = require('discord.js');
		var serverIcon = message.guild.iconURL();
		
		message.guild.members.fetch().then(fetchedMembers => {
			const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
			const totaldnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
			const totalidle = fetchedMembers.filter(member => member.presence.status === 'idle');

			

			const ServerInfo = new Discord.MessageEmbed();

		ServerInfo.setTitle('**Information about this server.**')
		ServerInfo.addField('**👑 Server Owner:** ', `${message.guild.owner}(${message.guild.ownerID} ) `, true);
		ServerInfo.addField('**Server name:** ', `${message.guild.name}`, true);
		ServerInfo.addField('**Creation date:** ', `${message.guild.createdAt}`, false);
		ServerInfo.addField('**Total Members:** ', `${message.guild.memberCount}`, true);
		ServerInfo.addField('**<:online:757105171535757402> Online Members:** ', `${totalOnline.size}`);
		ServerInfo.addField('**<:dnd:757105171330367538> DND Members:** ', `${totaldnd.size}`);
		ServerInfo.addField('**<:idle:757105172349583430> Idle Members:** ', `${totalidle.size}`);
		ServerInfo.addField('**Total Channels:** ', `${message.guild.channels.cache.size}`, true);
		ServerInfo.addField('**Total Roles:** ', `${message.guild.roles.cache.size}` , true);
		ServerInfo.addField('**Total Emojis: **' , `${message.guild.emojis.cache.size}` , true )
		ServerInfo.addField('**<a:verify:760771949277872158> Verification Level:** ', `${message.guild.verificationLevel}`, true);
		ServerInfo.addField('**<:nitroboost:760770653510303745> Total Boosts:** ', `${message.guild.premiumSubscriptionCount}`, true);
		ServerInfo.addField('**Features:**' , `${message.guild.features}`, true)
		ServerInfo.setThumbnail(serverIcon);
		ServerInfo.setFooter('User ID:' + message.author.id , message.author.displayAvatarURL());
		ServerInfo.setTimestamp();
		ServerInfo.setColor(0x32ba4b);

		message.channel.send(ServerInfo);
		});
		
	
	},
};

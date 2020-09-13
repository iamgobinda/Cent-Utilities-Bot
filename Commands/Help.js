module.exports = {
	name: 'help',
	description: 'A help command, that tells the user ALL the commads available in one embed.',
	aliases: ['info', 'h'],
    execute(message, args) 
    {
        const Discord = require('discord.js');

        if(args[0] === 'serverinfo')
		{
			const ServerInfo = new Discord.MessageEmbed();
			ServerInfo.setTitle('Information on the ServerInfo Command.');
			ServerInfo.addField('**Command:** ', 'ServerInfo', false);
			ServerInfo.addField('**Description:**', 'Displays the server information like creator and number of members, dynamically.', false);
			ServerInfo.addField('**CoolDown: **', '`3 secs`', false);
			ServerInfo.addField('**Aliases: **', '`si`, `ServerI`, `Si`', false);
			ServerInfo.addField('**Usage:**', 'ServerInfo', false);
			ServerInfo.addField('**Permission Level:** ', 'User', false);
			ServerInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
			ServerInfo.setColor(0x2abbf5);
	
			message.channel.send(ServerInfo);
        }
        else if (args[0] === 'ping')
        {
			const PingInfo = new Discord.MessageEmbed();
			PingInfo.setTitle('Information on the Ping Command.');
			PingInfo.addField('**Command:** ', 'Ping', false);
			PingInfo.addField('**Description:**', 'Displayes the current ping of the bot (in ms)', false);
			PingInfo.addField('**CoolDowns: ** ', '`2 secs`', false);
			PingInfo.addField('**Aliases: **', '`No alias`', false);
			PingInfo.addField('**Usage:**', 'Ping', false);
			PingInfo.addField('**Permission Level:** ', 'User', false);
			PingInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
			PingInfo.setColor(0x2abbf5);
	
			message.channel.send(PingInfo);
		}
		else if (args[0] === 'purge')
		{
			const PurgeInfo = new Discord.MessageEmbed();
			PurgeInfo.setTitle('Information on the purge command.');
			PurgeInfo.addField('**Command:** ', 'purge', false);
			PurgeInfo.addField('**Cooldowns: **', '`5 secs`', false);
			PurgeInfo.addField('**Description:**', 'Deletes the amout of messages specified.', false);
			PurgeInfo.addField('**Aliases: **', '`p`', false);
			PurgeInfo.addField('**Usage:**', 'Purge <amount (between 1 and 99)>', false);
			PurgeInfo.addField('**Permission Level:** ', 'staff', false);
			PurgeInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
			PurgeInfo.setColor(0x2abbf5);
	
			message.channel.send(PurgeInfo);
		}
		else if (args[0] === 'Roles')
		{
			const RolesInfo = new Discord.MessageEmbed();
			RolesInfo.setTitle('Information on the Roles command.');
			RolesInfo.addField('**Command:** ', '`Roles`', false);
			RolesInfo.addField('**Cooldowns: **', '`20 secs`', false);
			RolesInfo.addField('**Description:**', 'Shows and gives user the selected role.', false);
			RolesInfo.addField('**Aliases: **', '`r`, `Role`', false);
			RolesInfo.addField('**Usage:**', '`Roles` or `Roles <Rolename>`', false);
			RolesInfo.addField('**Permission Level:** ', 'user', false);
			RolesInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
			RolesInfo.setColor(0x2abbf5);
	
			message.channel.send(RolesInfo);
		}
        else if(!args.lenght)
		{
			const Help = new Discord.MessageEmbed();
			Help.setTitle('Help Command');
			Help.addField('If you want more information on a command: ', ' do `help <command name>`', false);
			Help.addField('**Info Commands:** ', '`ServerInfo`', false);
			Help.addField('**Roll Commands: **', "`Roles`", false);
			Help.addField('**Other Commands: **', '`Purge`, `Ping`', false);
			Help.setFooter('Hint: alias for help is "h" !');
			Help.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
			Help.setColor(0x2abbf5);
		
			message.channel.send(Help);
		}
	},
};
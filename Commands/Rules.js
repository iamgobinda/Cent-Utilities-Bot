const Discord = require('discord.js');
const { RuleTester } = require('eslint');

module.exports = {
    name: 'rules',
    coolDown: 1,
	description: 'A command that tells rules !',
    aliases: ['ro', 'rol'],
    async execute(client ,message, args)
    {
        if(!message.member.roles.cache.has('753283575276896337'))
		{
			const Error = new Discord.MessageEmbed();
			Error.setTitle('<:redtick:750751681175748608> ERROR!');
			Error.setDescription('Only Staff can bring up rules!');
			Error.setColor(0xf53d3d);

			message.channel.send(Error).then(m => m.delete({timeout: 500}));
			return;
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '1')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 1- <:greentick:750751680613843105> │ **NO BAD WORDS:**');
            SpecificRuleEmbed.setDescription('This includes telling explicit words. If you find a user saying them and the word has\n bypasses the filtration system. Report them to authorities using `-report [user]`');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '2')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 2- <:greentick:750751680613843105> │ **NO WEIRD TOPICS:**');
            SpecificRuleEmbed.setDescription('No discussions on topics on `c****virus` ETC. If you find a person talking about\n that. Report them using `-report [user]` or generate a new topic by `-topic`');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '3')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 3- <:greentick:750751680613843105> │ **NO TROLLING:**');
            SpecificRuleEmbed.setDescription('Do not impersonate others. if someone is trolling you, report them to the\n authorities, DONT TAKE ANY ACTION YOURSELF!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '4')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 4- <:greentick:750751680613843105> │ **NO BEGGING:**');
            SpecificRuleEmbed.setDescription('This includes asking for robux and nitro');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '5')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 5- <:greentick:750751680613843105> │ **BE MATURE:**');
            SpecificRuleEmbed.setDescription('Dont type like THiSSss or LIKE THIS. No zalgo,mass emojis, server invite links an\n all media links to be shared in <#734615225931792414> only !');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '6')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 6- <:greentick:750751680613843105> │ **FOLLOW DISCORD TOS:**');
            SpecificRuleEmbed.setDescription('If you break any discord TOS , You will be immediately banned!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '7')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 7- <:greentick:750751680613843105> │ **DON\'T PING STAFF FOR NO REASON:**');
            SpecificRuleEmbed.setDescription('This includes reporting minor breaks even though the automod has deleted that.\n Ping them for help or if someone breaks a major rule! or report them(the best\n option)');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '8')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 8- <:greentick:750751680613843105> │ **BE A COMMUNITY MEMBER:**');
            SpecificRuleEmbed.setDescription('Be active, be secure and talk with the community ❤');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '9')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Rule 9- <:greentick:750751680613843105> │ **IF YOU HAVE ANY QUESTION:**');
            SpecificRuleEmbed.setDescription('If you have any question dm <@575252669443211264> or ping a staff member! NOTE- Staff\n cannot respond to you within seconds, they have other work too!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && !args.lenght)
		{
            const ruleEmbed = new Discord.MessageEmbed();
            ruleEmbed.setTitle('**Rules:**');
            ruleEmbed.setDescription('Be Sure to follow them !');
            ruleEmbed.addField('Rule 1- <:greentick:750751680613843105> │ **NO BAD WORDS:**', 'This includes telling explicit words. If you find a user saying them and the word has\n bypasses the filtration system. Report them to authorities using `-report [user]`', false);
            ruleEmbed.addField('Rule 2- <:greentick:750751680613843105> │ **NO WEIRD TOPICS:**', 'No discussions on topics on `c****virus` ETC. If you find a person talking about\n that. Report them using `-report [user]` or generate a new topic by `-topic`', false);
            ruleEmbed.addField('Rule 3- <:greentick:750751680613843105> │ **NO TROLLING:**', 'Do not impersonate others. if someone is trolling you, report them to the\n authorities, DONT TAKE ANY ACTION YOURSELF!', false);
            ruleEmbed.addField('Rule 4- <:greentick:750751680613843105> │ **NO BEGGING:**', 'This includes asking for robux and nitro', false);
            ruleEmbed.addField('Rule 5- <:greentick:750751680613843105> │ **BE MATURE:**', 'Dont type like THiSSss or LIKE THIS. No zalgo,mass emojis, server invite links an\n all media links to be shared in <#734615225931792414> only !', false);
            ruleEmbed.addField('Rule 6- <:greentick:750751680613843105> │ **FOLLOW DISCORD TOS:**', 'If you break any discord TOS , You will be immediately banned!', false);
            ruleEmbed.addField('Rule 7- <:greentick:750751680613843105> │ **DON\'T PING STAFF FOR NO REASON:**', 'This includes reporting minor breaks even though the automod has deleted that.\n Ping them for help or if someone breaks a major rule! or report them(the best\n option)', false);
            ruleEmbed.addField('Rule 8- <:greentick:750751680613843105> │ **BE A COMMUNITY MEMBER:**', 'Be active, be secure and talk with the community ❤', false);
            ruleEmbed.addField('Rule 9- <:greentick:750751680613843105> │ **IF YOU HAVE ANY QUESTION:**', 'If you have any question dm <@575252669443211264> or ping a staff member! NOTE- Staff\n cannot respond to you within seconds, they have other work too!', false);
            ruleEmbed.setColor(0x32ba4b);

            message.channel.send(ruleEmbed);
        }
    },
};

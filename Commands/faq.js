const Discord = require('discord.js');

module.exports = {
    name: 'faq',
	aliases: ['fanquestions'],
    description: 'Displays the server FAQ!',
    cooldown: 2,
    Usage: '`!faq <number>`',
    PermLevel: `Staff`,
    async execute(client ,message, args)
    {
        if(!message.member.roles.cache.has('753283575276896337'))
		{
		
			return;
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '1')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 1 - <:info:758237327016984576> │ **How do I get my roles?**');
            SpecificRuleEmbed.setDescription('You can get assign yourself many roles! Type `!roles` in <#727483852733546508> for more information!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '2')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 2- <:info:758237327016984576> │ **Where can I promote myself?**');
            SpecificRuleEmbed.setDescription('You can only promote yourself in <#734615225931792414>. However you need <@&727786217671753738> to do so!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '3')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 3- <:info:758237327016984576> │ **Where can I get Cent Utility bot?**');
            SpecificRuleEmbed.setDescription('You can get this bot on [github!](https://github.com/YT-GameWorks/Cent-Utilities-Bot) .Note - It is protected under GNU Public License V3 so you cannot copy our server rules or anything like that! Doing this will result in your account or server getting banned! ');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '4')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 4- <:info:758237327016984576> │ **I am being trolled by a person in a DM from this server. What should I do?**');
            SpecificRuleEmbed.setDescription('We cannot do anything as its not in the server itself. However if it is a DM advert, do inform us!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '5')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 5- <:info:758237327016984576> │ **How do I contact staff?**');
            SpecificRuleEmbed.setDescription('To contact staff, ping them or DM modmail!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '6')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 6- <:info:758237327016984576> │ **How do I level up?**');
            SpecificRuleEmbed.setDescription('To level up just chat in the server and be active! You will be given your roles and permissions automatically! Read the Role Info channel for more info!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '7')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 7- <:info:758237327016984576> │ **How do I report a person?**');
            SpecificRuleEmbed.setDescription('You can report a person using the report command. Usage - `-report <user> <reason>`');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '8')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 8- <:info:758237327016984576> │ **How do I get staff roles?**');
            SpecificRuleEmbed.setDescription('There is an application process! To apply visit our [website!](https://centdevelopment.wixsite.com/centdev)');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && args[0] === '9')
        {
            const SpecificRuleEmbed = new Discord.MessageEmbed();
            SpecificRuleEmbed.setTitle('Faq 9- <:info:758237327016984576> │ **How do I get reputation?**');
            SpecificRuleEmbed.setDescription('This question cannot be answered as it only applies for staff! We are still dicussing on how to implement reputation in normal users!');
            SpecificRuleEmbed.setColor(0x32ba4b);

            message.channel.send(SpecificRuleEmbed);
        }
        else if(message.member.roles.cache.has('753283575276896337') && !args.lenght)
		{
            const ruleEmbed = new Discord.MessageEmbed();
            ruleEmbed.setTitle('**FAQ\'S!**');
            ruleEmbed.setDescription('Commonly asked questions!');
            ruleEmbed.addField('Faq 1- <:info:758237327016984576> │ **How do I get my roles?**', 'You can get assign yourself many roles! Type `!roles` in <#727483852733546508> for more information!', false);
            ruleEmbed.addField('Faq 2- <:info:758237327016984576> │ **Where can I promote myself?**', 'You can only promote yourself in <#734615225931792414>. However you need <@&727786217671753738> to do so!', false);
            ruleEmbed.addField('Faq 3- <:info:758237327016984576> │ **Where can I get Cent Utility bot?**', 'You can get this bot on [github!](https://github.com/YT-GameWorks/Cent-Utilities-Bot) .Note - It is protected under GNU Public License V3 so you cannot copy our server rules or anything like that! Doing this will result in your account or server getting banned!', false);
            ruleEmbed.addField('Faq 4- <:info:758237327016984576> │ **I am being trolled by a person in a DM from this server. What should I do?**', 'We cannot do anything as its not in the server itself. However if it is a DM advert, do inform us!', false);
            ruleEmbed.addField('Faq 5- <:info:758237327016984576> │ **How do I contact staff?**', 'To contact staff, ping them or DM modmail!', false);
            ruleEmbed.addField('Faq 6- <:info:758237327016984576> │ **How do I level up?**', 'To level up just chat in the server and be active! You will be given your roles and permissions automatically! Read the Role Info channel for more info!', false);
            ruleEmbed.addField('Faq 7- <:info:758237327016984576> │ **How do I report a person?**', 'You can report a person using the report command. Usage - `-report <user> <reason>`', false);
            ruleEmbed.addField('Faq 8- <:info:758237327016984576> │ **How do I get staff roles?**', 'There is an application process! To apply visit our [website!](https://centdevelopment.wixsite.com/centdev)', false);
            ruleEmbed.addField('Faq 9- <:info:758237327016984576> │ **How do I get reputation?**', 'This question cannot be answered as it only applies for staff! We are still dicussing on how to implement reputation in normal users!', false);
            ruleEmbed.setColor(0x32ba4b);

            message.channel.send(ruleEmbed);
        }
    },
};

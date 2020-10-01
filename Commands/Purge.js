module.exports = {
    name: 'purge',
	aliases: ['prune' , 'p' , 'clear' , 'clean'],
    description: 'Clears an amount of messages mentioned!',
    cooldown: 3,
    Usage: '`!purge <amount>`',
    PermLevel: `Staff`,
    async execute(client, message, args) {
        const Discord = require('discord.js');

        var amount = parseInt(args[0]) + 1;

        if (!message.member.roles.cache.has('753283575276896337')) 
        {
        
            return;
        }

        if (isNaN(amount)) 
        {
            const NotAValidNumber = new Discord.MessageEmbed();
            NotAValidNumber.setTitle('**Not a valid number!**');
            NotAValidNumber.setDescription('<:redtick:750751681175748608> That doesn\'t seem to be a valid number.');
            NotAValidNumber.setColor(0xf53d3d)

            return message.reply(NotAValidNumber).then(m => m.delete({timeout: 500}));
        } else if (amount <= 1 || amount > 100) 
        {
            const TooManySelected = new Discord.MessageEmbed();
            TooManySelected.setTitle('**Too many messages selected!**');
            TooManySelected.setDescription('<:redtick:750751681175748608> You can only input a number between 1 and 99.');
            TooManySelected.setColor(0xf53d3d);

            return message.reply(TooManySelected).then(m => m.delete({timeout: 500}));
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            const UnkownError = new Discord.MessageEmbed();
            UnkownError.setTitle('**<:redtick:750751681175748608> Unkown Error!**');
            UnkownError.setDescription('An unknown error ocuured!');
            UnkownError.setColor(0xf53d3d);

            console.error(err);
            message.channel.send(UnkownError);
        });
    message.react(':greentick:750751680613843105')

    },
};
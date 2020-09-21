module.exports = {
    name: 'purge',
    cooldown: 5,
    aliases: ['p'],
    description: 'Purge Command, that deletes sepcified messages.',
    async execute(client, message, args) {
        const Discord = require('discord.js');

        var amount = parseInt(args[0]) + 1;

        if (!message.member.roles.cache.has('753283575276896337')) {
            const Error = new Discord.MessageEmbed();
            Error.setTitle('<:redtick:750751681175748608> ERROR!');
            Error.setDescription('Only Staff can purge!');
            Error.setColor(0xf53d3d);

            message.channel.send(Error);
            return;
        }

        if (isNaN(amount)) {
            const NotAValidNumber = new Discord.MessageEmbed();
            NotAValidNumber.setTitle('**<:redtick:750751681175748608> Not a valid number!**');
            NotAValidNumber.setDescription('That doesn\'t seem to be a valid number.');
            NotAValidNumber.setColor(0xf53d3d);

            return message.reply(NotAValidNumber);
        } else if (amount <= 1 || amount > 100) {
            const TooManySelected = new Discord.MessageEmbed();
            TooManySelected.setTitle('**<:redtick:750751681175748608> Too many messages selected!**');
            TooManySelected.setDescription('You can only input a number between 1 and 99.');
            TooManySelected.setColor(0xf53d3d);

            return message.reply(TooManySelected);
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            const UnkownError = new Discord.MessageEmbed();
            UnkownError.setTitle('**<:redtick:750751681175748608> Unkown Error!**');
            UnkownError.setDescription('An unknown error ocuured!');
            UnkownError.setColor(0xf53d3d);

            console.error(err);
            message.channel.send(UnkownError);
        });
        var AmountOfMessagesDeleted = amount - 1;

        const Success = new Discord.MessageEmbed();
        Success.setTitle('**<:greentick:750751680613843105> SUCCESS!**');
        Success.setDescription('Deleted ' + AmountOfMessagesDeleted + " messages! You can now delete this message!");
        Success.setColor(0x32ba4b);

        message.channel.send(Success);
    },
};
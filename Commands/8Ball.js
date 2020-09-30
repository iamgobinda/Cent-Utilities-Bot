const { User } = require("discord.js");

module.exports = {
    name: '8ball',
    category: 'Fun',
	aliases: ['ball'],
    description: 'Fun command for the popular 8ball game!',
    cooldown: 2,
    Usage: '`!8ball <question>`',
    PermLevel: `User`,
    async execute(client ,message, args) 
    {
        const Discord = new require('discord.js');

        const Posiblities = ['Yes',
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',];
        const randomChoice = getRndInteger(0, 6);
         if (!args[0]) {

            const errorball = new Discord.MessageEmbed();
            errorball.setTitle("ERROR!")
            errorball.setDescription("You have to ask me a question so I can answer it! Go and try again dumbo!")
            errorball.setColor(0xf53d3d);
            message.channel.send(errorball).then(m => m.delete({timeout: 10500}));

            return;

             
         }
            
            const success = new Discord.MessageEmbed();
            success.setTitle('**<:greentick:750751680613843105> The 8ball has answered! **');
            success.setDescription('**🎱 speaks: **' + `${Posiblities[randomChoice]}`);
            success.setColor(0x32ba4b);
    
            message.channel.send(success);
    },
};
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

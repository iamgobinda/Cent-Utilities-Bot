module.exports = {
	name: '8ball',
	aliases: ['ball'],
	description: 'Fun command for the popular 8ball game!',
    async execute(client ,message, args) 
    {
        const Discord = new require('discord.js');

        const Posiblities = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];
        const randomChoice = getRndInteger(0, 6);
            
            const success = new Discord.MessageEmbed();
            success.setTitle('**THE 8BALL HAS ANSWERED: **');
            success.setDescription('`Answer is:` ' + `${Posiblities[randomChoice]}`);
            success.setColor(0x32ba4b);
    
            message.channel.send(success);
    },
};
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
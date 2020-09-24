module.exports = {
	name: '8ball',
	aliases: ['ball'],
	description: 'Fun command for the popular 8ball game!',
    async execute(client ,message, args) 
    {
        const Discord = new require('discord.js');

        const Posiblities = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];
        const randomChoice = getRndInteger(0, 6);
         if (!args[0]) {

            const errorball = new Discord.MessageEmbed();
            errorball.setTitle("ERROR!")
            errorball.setDescription("You have to ask me a question so I can answer it! Go and try again boi!")
            errorball.setColor(0xf53d3d);
            message.channel.send(errorball).then(m => m.delete({timeout: 500}));

            return;

             
         }
            
            const success = new Discord.MessageEmbed();
            success.setTitle('**<:greentick:750751680613843105> THE 8BALL HAS ANSWERED: **');
            success.setDescription('`🎱 Answer is:` ' + `${Posiblities[randomChoice]}`);
            success.setColor(0x32ba4b);
    
            message.channel.send(success);
    },
};
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

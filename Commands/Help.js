const { prefix } = require('../config/config.json');


module.exports = {
    name: 'help',
	aliases: ['h' , 'info'],
    description: 'Help command!',
    cooldown: 2,
    Usage: '`!help or !help <cmd>`',
    Category: "User",
    PermLevel: `User`,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const data = [];
const { commands } = message.client;

if (!args.length) {
    
  const helpmenu = new Discord.MessageEmbed()
  .setColor(0x32ba4b)
  .setThumbnail('https://images-ext-2.discordapp.net/external/8VesveSQuqiYmXDWC4DVg1Jc89a9IfXCvuBvCuJzE4E/%3Fwidth%3D475%26height%3D475/https/media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png')
  .setTitle('❓| HELP MENU')
  .setDescription('For more information on a command type `!help <commandname>` \n\n **Information** \n `userinfo` `serverinfo` `botinfo` `avatar` `rules` `faq` \n\n **Moderation** \n `purge` `slowmode` `dm` `kick` \n\n **Miscellaneous** \n `poll` `embed` `suggestion` `8ball` `roll` `roles` `qna` \n\n **System** \n `ping` `kill` `log` `reload`')
  .setFooter("User ID: " + message.author.id)
  .setTimestamp()
    

return message.channel.send(helpmenu)
	
    
    
}

const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));


if (!command) {
  const nocmd = new Discord.MessageEmbed()
  .setColor(0xf53d3d)
  .setTitle('Error!')
  .setDescription('That\'s not a valid command!')
  .setTimestamp();
	return message.reply(nocmd);
}




const hmenu = new Discord.MessageEmbed();
var description = data.push(`**Name: ** ${command.name} \n **Aliases: **${command.aliases} \n **Description :** ${command.description} \n **Usage: ** ${command.Usage} \n **PermLevel:** ${command.PermLevel}`)
hmenu.setThumbnail('https://images-ext-2.discordapp.net/external/8VesveSQuqiYmXDWC4DVg1Jc89a9IfXCvuBvCuJzE4E/%3Fwidth%3D475%26height%3D475/https/media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png')
hmenu.setColor(0x32ba4b)
hmenu.setTitle('❓| HELP MENU')
hmenu.setDescription(data)
hmenu.setFooter(`User ID: ` + message.author.id)
hmenu.setTimestamp()

message.channel.send(hmenu);

        
        
    },
};
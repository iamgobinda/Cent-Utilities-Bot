const ms = require("ms");
const Timers = new Map();


module.exports = {
    name: 'remindme',
    coolDown: 3,
	description: 'Reminds you about a certain a thing!',
	aliases: ['reminder'],
    async execute(client , message, args)
    {


        const Discord = require('discord.js');

        if (!args[0]) {
            const noamount = new Discord.MessageEmbed();
            noamount.setTitle("<:redtick:750751681175748608> ERROR!")
            noamount.setDescription("You did not specify the amount of time you wish to set a timer for! Usage - `!remindme <time[in s,m,h,d]>`")
            noamount.setColor(0xf53d3d)
            return message.channel.send(noamount).then(m => m.delete({timeout: 500}));
          }
          if (!args[0].endsWith("d")) {
            if (!args[0].endsWith("h")) {
              if (!args[0].endsWith("m")) {
                if (!args[0].endsWith("s")) {
                    const timeamount = new Discord.MessageEmbed();
            timeamount.setTitle("<:redtick:750751681175748608> ERROR!")
            timeamount.setDescription("You did not use the proper format for the the time!")
            timeamount.setColor(0xf53d3d)
            return message.channel.send(timeamount).then(m => m.delete({timeout: 500}));
                
              }
            }
          }
        }
          if (isNaN(args[0][0])) {
            const timeerror = new Discord.MessageEmbed();
            timeamount.setTitle("<:redtick:750751681175748608> ERROR!")
            timeamount.setDescription("That is not a number!")
            timeamount.setColor(0xf53d3d)
            return message.channel.send(timeerror);
          }
          Timers.set(message.author.id + " G " + message.guild.name, {
            Guild: message.guild.name,
            Author: {
              Tag: message.author.tag,
              ID: message.author.id,
            },
            Time: ms(args[0]),
          });
          const remindsuccess = new Discord.MessageEmbed();
          remindsuccess.setTitle("<:greentick:750751680613843105> SUCCESS!")
          remindsuccess.setDescription(`${message.author.tag} you have set a timer for ${args[0]}. A reminder will be send to your DM!`)
          remindsuccess.setColor(0x32ba4b)
          message.channel.send(remindsuccess);
          
          setTimeout(() => {
            let Embed = new Discord.MessageEmbed()
            Embed.setThumbnail('https://cdn.discordapp.com/attachments/756000439350198294/758605927888453662/kisspng-youtube-lg-watch-urbane-watchtime-timer-cartoon-5adbd2cad3c935.3925048215243557868675-remove.png')
              Embed.setTitle(`⏲️ Timer finished in guild ${message.guild.name}..`)
              Embed.setDescription(`Your timer for ${args[0]} has finished!`)
              Embed.setColor(0x32ba4b);
            message.author.send(Embed);
            Timers.delete(message.author.id + " G " + message.guild.name);
          }, ms(args[0]));



        
    },
};
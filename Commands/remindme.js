const ms = require("ms");
const Timers = new Map();


module.exports = {
  name: 'remindme',
	aliases: ['reminder' , 'timer'],
    description: 'Sets a reminder!',
    cooldown: 2,
    Usage: '`!remindme <time(in s,m,h,d)> <reason>`',
    PermLevel: `User`,
    async execute(client , message, args)
    {


        const Discord = require('discord.js');

        if (!args[0]) {
            const noamount = new Discord.MessageEmbed();
            noamount.setTitle("Invalid Syntax")
            noamount.setDescription("<:redtick:750751681175748608> Usage: `!remindme <time{in s,m,h,d}> <reason>`")
            noamount.setColor(0xf53d3d)
            return message.channel.send(noamount).then(m => m.delete({timeout: 11500}));
          }
          if (!args[0].endsWith("d")) {
            if (!args[0].endsWith("h")) {
              if (!args[0].endsWith("m")) {
                if (!args[0].endsWith("s")) {
                    const timeamount = new Discord.MessageEmbed();
            timeamount.setTitle("Invalid syntax")
            timeamount.setDescription("<:redtick:750751681175748608> Usage: `!remindme <time{in s,m,h,d}> <reason>`")
            timeamount.setColor(0xf53d3d)
            return message.channel.send(timeamount).then(m => m.delete({timeout: 11500}));
                
              }
            }
          }
        }
          if (isNaN(args[0][0])) {
            const timeerror = new Discord.MessageEmbed();
            timeamount.setTitle("Invalid syntax")
            timeamount.setDescription("<:redtick:750751681175748608> Usage: `!remindme <time{in s,m,h,d}> <reason>`")
            timeamount.setColor(0xf53d3d)
            return message.channel.send(timeerror);
          }
          if (!args.slice(1).join(" ")){
          const reason = new Discord.MessageEmbed()
          .setTitle('Invalid Syntax!')
          .setDescription('<:redtick:750751681175748608> Usage: `!remindme <time{in s,m,h,d}> <reason>`')
          .setColor('RED')
        return message.channel.send(reason);}
    
        

          Timers.set(message.author.id + " G " + message.guild.name, {
            Guild: message.guild.name,
            Author: {
              Tag: message.author.tag,
              ID: message.author.id,
            },
            Time: ms(args[0]),
          });
          const remindsuccess = new Discord.MessageEmbed();
          remindsuccess.setTitle("SUCCESS!")
          remindsuccess.setDescription(`<:greentick:750751680613843105> ${message.author} Your reminder will go off in ${args[0]}`)
          remindsuccess.setColor('GREEN')
          message.channel.send(remindsuccess);
          
          setTimeout(() => {
            let Embed = new Discord.MessageEmbed()
            Embed.setThumbnail('https://cdn.discordapp.com/attachments/756000439350198294/758605927888453662/kisspng-youtube-lg-watch-urbane-watchtime-timer-cartoon-5adbd2cad3c935.3925048215243557868675-remove.png')
              Embed.setTitle(`⏲️ Timer finished in guild ${message.guild.name}..`)
              Embed.setDescription(`Your timer for ${args[0]} has finished! \n Reason: ${args.slice(1).join(" ")}`)
              Embed.setColor('RANDOM');
            message.author.send(Embed);
            Timers.delete(message.author.id + " G " + message.guild.name);
          }, ms(args[0]));



        
    },
};
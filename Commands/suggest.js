const Discord = require('discord.js');

module.exports = {
    name: "suggest",
    description: "Suggest a thing!",
    coolDown: 10,
    async execute(client, message, args)
    {

    if(!args.length) 
    {
        return message.channel.send("Please Give the Suggestion");
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
    
    
    if(!channel) 
    {
      return message.channel.send("there is no channel with name - suggestions");
    }
                                                    
    
    const embed = new Discord.MessageEmbed();
    embed.setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL());
    embed.setThumbnail(message.author.avatarURL());
    embed.setColor("#ff2050");
    embed.setDescription(args.join(" "));
    embed.setTimestamp();
    
    
    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    })
    
    
    message.channel.send("Sent Your Suggestion to " + channel);
    
  }
 }   

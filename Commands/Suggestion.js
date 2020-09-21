const Discord = require('discord.js');

module.exports = {
    name: "suggest",
    description: "Suggest a thing!",
    coolDown: 10,
    async execute(client, message, args)
    {
    if(!args.length) 
    {
        const Error = new Discord.MessageEmbed();
        Error.setTitle('Syntax Error !')

        return message.channel.send("Please Give the Suggestion");
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
    
    
    if(!channel) 
    {
        const Error = new Discord.MessageEmbed();
        Error.setTitle('Error !');
        Error.setDescription('there is no channel with name - suggestions');
        Error.setColor(0xf53d3d);

        return message.channel.send(Error);
    }

    const embed = new Discord.MessageEmbed();
    embed.setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL());
    embed.setThumbnail(message.author.avatarURL());
    embed.setColor(0x2abbf5);
    embed.setDescription(args.join(" "));
    embed.setTimestamp();
    
    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    })
    
    
    message.channel.send("Sent Your Suggestion to " + `${channel}`);
    
  }
 };
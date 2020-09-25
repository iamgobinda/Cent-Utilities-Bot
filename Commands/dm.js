module.exports = {
    name: 'dm',
    coolDown: 2,
	description: 'Dm\'s a user mentioned!',
    
    async execute(client ,message, args)
    {
        const Discord = require('discord.js')
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("You do not have enough permissions!");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
      const dm = new Discord.MessageEmbed();
      dm.setColor(0x32ba4b)
      dm.setAuthor( message.author.username , message.author.displayAvatarURL());
      dm.setThumbnail(message.author.displayAvatarURL);
      dm.setTitle('DM FROM STAFF!')
      dm.setDescription(args.slice(1).join(" "))
      dm.setTimestamp();
      user.send(dm).then(() => message.channel.send(`Sent a message to ${user.user.tag}`));

        


    }};
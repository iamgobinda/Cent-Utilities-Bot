module.exports = {
    name: 'slowmode',
    coolDown: 2,
	  description: 'sets slowmode for channels.',
    aliases: ['s', 'sm'],
    execute(client ,message, args)
    {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have access to this command!")
          if (!args[0])return message.channel.send("You did not specify a correct amount of time!")
         if(isNaN(args[0]))return message.channel.send("That is not a number!")
         if(args[0] > 21600) return message.channel.send("Invalid Number! Number must be below 21600.");
         message.channel.setRateLimitPerUser(args[0])
         message.channel.send(`Slowmode Set to **${args[0]}**`)
    }
};
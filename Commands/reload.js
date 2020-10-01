
const Discord = require('discord.js')

module.exports = {
    name: 'reload',
	aliases: ['rl' , 'r' , 'load'],
    description: 'Reloads a command!',
    cooldown: 2,
    Usage: '`!reload <cmd>`',
    PermLevel: `Bot Owner`,
    async execute(client, message, args){


        if (!message.member.roles.cache.has('748515939821158443')) {

            return;
            
        }
        if (message.member.roles.cache.has('748515939821158443')) {

            const commandName = args[0]
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
            const errormsg = new Discord.MessageEmbed();
            errormsg.setDescription(`<:redtick:750751681175748608> There is no command with name or alias \`${commandName}\`, ${message.author}!`)
            errormsg.setColor(0xf53d3d)
            errormsg.setTimestamp();
			return message.channel.send(errormsg);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            const reloaded = new Discord.MessageEmbed()
            .setDescription(`<:greentick:750751680613843105> Command \`${command.name}\` was successfully reloaded without any errors!`)
            .setColor(0x32ba4b)
            .setTimestamp();
			message.channel.send(reloaded);
		} catch (error) {
            console.error(error);
            const newerror = new Discord.MessageEmbed()
            .setDescription(`<:redtick:750751681175748608> There was an error while reloading a command \`${command.name}\`:\nError for reference: \`${error.message}\``)
            .setColor(0xf53d3d)
            .setTimestamp();
			message.channel.send(newerror);
		} 
            
            
        }

        

    },
};
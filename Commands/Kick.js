module.exports = {
    name: 'kick',
    cooldown: 5,
    aliases: ['k', 'ki'],
    description: 'A command that kicks a person !',
    async execute(client, message, args) 
    {
        let memeberid = message.content.substring(message.content.indexOf(' ') + 1);
        let member = message.guild.members.cache.get(memeberid);

         if(member)
         {
             try
             {
                await member.kick();
                console.log('A member was kicked !');
             }
             catch(err)
             {
                console.log(err);
             }
         }
    },
};
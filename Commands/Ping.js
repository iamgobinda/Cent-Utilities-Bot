const Discord = require("discord.js");
const { execute } = require("./poll");

module.exports = {
  name: "ping",
  description: "Returns latency and API ping",
  coolDown: 2,
	async execute(bot, message, args)
	{
    message.channel.send(`🏓 Testing Ping....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
      .setTitle('🏓 Pong! ')
        .setDescription(
          ` This does not really matter much\nEvaluation time is ${getRndInteger(0, 2)}ms\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor(0xf53d3d);
      msg.edit(_);
      msg.edit("\u200B");
    });
  },
};

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
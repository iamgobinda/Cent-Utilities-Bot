module.exports = {
  name: "ban",
  description: "ban a user",
  Usage: '`!ban @mention`',
  PermLevel: `Staff`,
  async execute(client, message, args) {
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("I don't have permissions for that!");
    }

    const banUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    let banReason = args.join(" ").slice(23);

    if (!banReason) banReason = "Not Specified";

    if (!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR"))
      return message.channel.send("You don't have permissions for that!");

    if (!banUser.bannable || banUser.hasPermission("BAN_MEMBERS"))
      return message.channel.send("That person can't be banned!");

    banUser.ban({ days: 7, reason: banReason });

    banUser.user.send(
      `You've been **banned** from **${message.guild.name}**, Reason: **${banReason}**`
    );
    message.channel.send(
      `${banUser} was successfully banned from the server. Reason: **${banReason}**. I have also send a DM letting the person know.`
    );
  },
};

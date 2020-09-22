const { prefix } = require('../config/config.json');

module.exports = {
    name: 'help',
    description: 'A help command, that tells the user ALL the commads available in one embed.',
    aliases: ['info', 'h'],
    async execute(client, message, args) {
        const Discord = require('discord.js');

        if (args[0] === 'serverinfo') {
            const ServerInfo = new Discord.MessageEmbed();
            ServerInfo.setTitle('Information on the ServerInfo Command.');
            ServerInfo.addField('**Command:** ', 'ServerInfo', false);
            ServerInfo.addField('**Description:**', 'Displays the server information like creator and number of members, dynamically.', false);
            ServerInfo.addField('**CoolDown: **', '`3 secs`', false);
            ServerInfo.addField('**Aliases: **', '`si`, `ServerI`, `Si`', false);
            ServerInfo.addField('**Usage:**', 'ServerInfo', false);
            ServerInfo.addField('**Permission Level:** ', 'User', false);
            ServerInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            ServerInfo.setColor(0x2abbf5);

            message.channel.send(ServerInfo);
        } else if (args[0] === 'ping') {
            const PingInfo = new Discord.MessageEmbed();
            PingInfo.setTitle('Information on the Ping Command.');
            PingInfo.addField('**Command:** ', 'Ping', false);
            PingInfo.addField('**Description:**', 'Displayes the current ping of the bot (in ms)', false);
            PingInfo.addField('**CoolDowns: ** ', '`2 secs`', false);
            PingInfo.addField('**Aliases: **', '`No alias`', false);
            PingInfo.addField('**Usage:**', 'Ping', false);
            PingInfo.addField('**Permission Level:** ', 'User', false);
            PingInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            PingInfo.setColor(0x2abbf5);

            message.channel.send(PingInfo);
        } else if (args[0] === 'purge') {
            const PurgeInfo = new Discord.MessageEmbed();
            PurgeInfo.setTitle('Information on the purge command.');
            PurgeInfo.addField('**Command:** ', 'purge', false);
            PurgeInfo.addField('**Cooldowns: **', '`5 secs`', false);
            PurgeInfo.addField('**Description:**', 'Deletes the amout of messages specified.', false);
            PurgeInfo.addField('**Aliases: **', '`p`', false);
            PurgeInfo.addField('**Usage:**', '`Purge <amount (between 1 and 99)>`', false);
            PurgeInfo.addField('**Permission Level:** ', 'staff', false);
            PurgeInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            PurgeInfo.setColor(0x2abbf5);

            message.channel.send(PurgeInfo);
        } else if (args[0] === 'Roles') {
            const RolesInfo = new Discord.MessageEmbed();
            RolesInfo.setTitle('Information on the Roles command.');
            RolesInfo.addField('**Command:** ', '`Roles`', false);
            RolesInfo.addField('**Cooldowns: **', '`20 secs`', false);
            RolesInfo.addField('**Description:**', 'Shows and gives user the selected role.', false);
            RolesInfo.addField('**Aliases: **', '`r`, `Role`', false);
            RolesInfo.addField('**Usage:**', '`Roles` or `Roles <Rolename>`', false);
            RolesInfo.addField('**Permission Level:** ', 'user', false);
            RolesInfo.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            RolesInfo.setColor(0x2abbf5);

            message.channel.send(RolesInfo);
        } else if (args[0] === 'UserInfo') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the UserInfo command.');
            UserInfoCmd.addField('**Command:** ', '`UserInfo`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`5 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Shows the information of the current user or other mentioned users.', false);
            UserInfoCmd.addField('**Aliases: **', '`ui`, `ui`, `useri`, `uinfo`, `Whois`', false);
            UserInfoCmd.addField('**Usage:**', '`UserInfo <mentioned user>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Slowmode') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Slowmode command.');
            UserInfoCmd.addField('**Command:** ', '`Slowmode`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`2 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Changes slowmode of the channel.', false);
            UserInfoCmd.addField('**Aliases: **', '`s`, `sm`', false);
            UserInfoCmd.addField('**Usage:**', '`Slowmode <Time>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'Staff', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Rules') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Rules command.');
            UserInfoCmd.addField('**Command:** ', '`Rules`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`1 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Shows all the available rules or only a selected one.', false);
            UserInfoCmd.addField('**Aliases: **', '`ro`, `rol`', false);
            UserInfoCmd.addField('**Usage:**', '`Rules or Rules <Rule Number>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'staff', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Roll') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Roll command.');
            UserInfoCmd.addField('**Command:** ', '`Roll`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`1 secs`', false);
            UserInfoCmd.addField('**Description:**', 'A command that rolls the dice !', false);
            UserInfoCmd.addField('**Aliases: **', 'ro', `rol`, false);
            UserInfoCmd.addField('**Usage:**', '`Roll <max Number>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Roleinfo') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Roleinfo command.');
            UserInfoCmd.addField('**Command:** ', '`RoleInfo`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`3 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Displays, indiviual roles.', false);
            UserInfoCmd.addField('**Aliases: **', '`ri`, `rolei`, `rinfo`', false);
            UserInfoCmd.addField('**Usage:**', '`Roleinfo <Role Name>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Poll') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Poll command.');
            UserInfoCmd.addField('**Command:** ', '`Poll`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`60 secs`', false);
            UserInfoCmd.addField('**Description:**', 'A poll command, used to make polls', false);
            UserInfoCmd.addField('**Aliases: **', '`po`', false);
            UserInfoCmd.addField('**Usage:**', '`Poll <Channel> <message>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'Staff', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Embed') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Embed command.');
            UserInfoCmd.addField('**Command:** ', '`Embed`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`30 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Used to make annoucements in an embed form !', false);
            UserInfoCmd.addField('**Aliases: **', '`e`, `em`', false);
            UserInfoCmd.addField('**Usage:**', '`Embed <Channel> <Message>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'Staff', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'BotInfo') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Botinfo command.');
            UserInfoCmd.addField('**Command:** ', '`Botinfo`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`1 secs`', false);
            UserInfoCmd.addField('**Description:**', 'a command that displays the Bots\'s info, such as uptime.', false);
            UserInfoCmd.addField('**Aliases: **', '`bi`, `boti`, `binfo`', false);
            UserInfoCmd.addField('**Usage:**', '`Botinfo`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Avatar') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Avatar command.');
            UserInfoCmd.addField('**Command:** ', '`Avatar`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`1 secs`', false);
            UserInfoCmd.addField('**Description:**', 'a command that shows the avatar of the current user.', false);
            UserInfoCmd.addField('**Aliases: **', '`a`, `ava`', false);
            UserInfoCmd.addField('**Usage:**', '`Avatar`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === '8ball') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the 8ball command.');
            UserInfoCmd.addField('**Command:** ', '`8Ball`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`3 secs`', false);
            UserInfoCmd.addField('**Description:**', 'a fun command for the popular 8ball game !', false);
            UserInfoCmd.addField('**Aliases: **', '`ball`', false);
            UserInfoCmd.addField('**Usage:**', '`8Ball <question>', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Roles') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Roles command.');
            UserInfoCmd.addField('**Command:** ', '`Roles`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`10 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Shows all the available roles. and gives them', false);
            UserInfoCmd.addField('**Aliases: **', '`r`, `role`', false);
            UserInfoCmd.addField('**Usage:**', '`Roles or Roles <Role Name>(To get the role.)`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'user', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (args[0] === 'Suggest') {
            const UserInfoCmd = new Discord.MessageEmbed();
            UserInfoCmd.setTitle('Information on the Suggest command.');
            UserInfoCmd.addField('**Command:** ', '`Suggest`', false);
            UserInfoCmd.addField('**Cooldowns: **', '`10 secs`', false);
            UserInfoCmd.addField('**Description:**', 'Suggest something and maybe it gets approved?', false);
            UserInfoCmd.addField('**Aliases: **', 'No alias', false);
            UserInfoCmd.addField('**Usage:**', '`!suggest <suggestion>`', false);
            UserInfoCmd.addField('**Permission Level:** ', 'User', false);
            UserInfoCmd.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            UserInfoCmd.setColor(0x2abbf5);

            message.channel.send(UserInfoCmd);
        } else if (!args.lenght) {
            const Help = new Discord.MessageEmbed();
            Help.setTitle('Help Command');
            Help.addField('If you want more information on a command: ', ' do `help <command name>`', false);
            Help.addField('**Info Commands:** ', '`ServerInfo`, `UserInfo`, `BotInfo`', true);
            Help.addField('**User Commands: **', "`Roles`, `8ball`, `Avatar`, `RoleInfo`, `Roll` , `Suggest`", true);
            Help.addField('**Bot Commands: **', "`Ping`", true);
            Help.addField('**Mod Commands: **', '`Purge`, `Rules`, `RuleInfo`, `SlowMode`, `Poll`, `Embed`', true);
            Help.setFooter('Hint: alias for help is "h" !');
            Help.setThumbnail('https://media.discordapp.net/attachments/748792278474031124/753925799140392971/CA_1.png?width=475&height=475');
            Help.setColor(0x2abbf5);

            message.channel.send(Help);
        }
    },
};
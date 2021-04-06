var
    Discord = require('discord.js'),
    client = new Discord.Client(),
    chalk = require('chalk');

client.on('message', async(msg) => {
    const [command] = msg.content.split(' ');
    if (!command.startsWith(prefix) || msg.author.bot) { return; }
    switch (command.slice(prefix.length)) {
        case "bc":
            niro_gifts(msg)
            break;
        default:
            console.log(chalk.red.bold('._.'))
    }
})

function niro_gifts(msg) {
    let args = msg.content.split(' ').slice(1).join(' ')
    if (!args) return msg.reply('اكتب الرساله!')
    let count = 0;
    msg.guild.members.cache.some(member => {
        if (!member.user.bot) {
            member.send(args + '\n<@!' + member + '>').then(count++).catch(err => console.log(' '))
            console.log(chalk.green.bold('Done Sended To "' + count + '" Member!'))
        }
    })
message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor("✅ Done Sened To Broadcast")
                .setDescription(
                    `**✅ Done Sened To Serever Members**`
                )
            )
}
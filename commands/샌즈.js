module.exports = {
  name: "샌즈",
  description: "샌즈",
  execute (client, message, args) {
    const {MessageEmbed} = require('discord.js')
        const ch = client.channels.cache.get('708932774194577458')
const embed = new MessageEmbed()
.setTitle('COMMAND LOG')
.setDescription(message.author.tag+'님이 **``?샌즈``**을 사용했습니다')
ch.send(embed)
        const f = new MessageEmbed()
        .setTitle('샌즈!')
        .setImage("https://i.pinimg.com/564x/1e/ed/0a/1eed0a21c2499a3241b13d3bb44d4afd.jpg")
        message.channel.send(f)
  }
}

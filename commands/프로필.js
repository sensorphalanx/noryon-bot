module.exports = {
  name: "프로필",
  description: "프로필을 가져옵니다",
  execute (client, message, args) {
    const {MessageEmbed} = require('discord.js')
        const ch = client.channels.cache.get('708932774194577458')
const embed = new MessageEmbed()
.setTitle('COMMAND LOG')
.setDescription(message.author.tag+'님이 **``?프로필``**을 사용했습니다')
ch.send(embed)
        const f = new MessageEmbed()
        .setTitle('당신의 프로필')
        .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        message.channel.send(f)
  }
}

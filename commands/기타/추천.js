module.exports = {
  name: "추천",
  category: "기타",
  description: "프로필을 가져옵니다",
  run: (client, message, args)=> {
  
if(message.guild.id == '721606009180913754') return message.channel.send('🚨 이서버는 사용금지된 명령어입니다')
    const {MessageEmbed} = require('discord.js')
        const ch = client.channels.cache.get('708932774194577458')
const embed = new MessageEmbed()
.setTitle('COMMAND LOG')
.setColor('#2f3136')
.setDescription(message.author.tag+'님이 **``놀욘 추천``**을 사용했습니다')
ch.send(embed)
    const ㅇ = new MessageEmbed()
    .setTitle('💡추천 & 💕하트')
    .setDescription(
      `
[**---------------------------------**](https://discord.gg/UGaxK78)\n\n
**💡추천** [Discord Bot List](https://top.gg/bot/${client.user.id})
\n\n**💕하트** [한국 봇 리스트](https://koreanbot.dev/bots/${client.user.id})
\n\n[**---------------------------------**](https://discord.gg/UGaxK78)
\n- 이건 한번씩 눌러주거나 마나에요`)
        message.channel.send(ㅇ)
  }
}
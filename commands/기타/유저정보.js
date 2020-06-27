const {MessageEmbed} = require('discord.js')
const embed = new MessageEmbed()
.setColor("BLUE")
module.exports = {
  name: "정보",
  category: "기타",
  description: "굳이? 봐야되요?(ㅇㅇ 봐야되)",
  run: async (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

const Discord = require('discord.js')
//Discord.MessageMentions.EVERYONE_PATTERN
  //return message.channel.send({embed:{title:'다음으로 입력하신단어는 금지된단어입니다',description:'금지, @everyone, @here'}})
const embed = new MessageEmbed()
      .setTitle(message.author.username+'님의 유저정보')
      .addField('**닉네임**',message.author.username)
      .addField('**태그**',message.author.discriminator)
      .addField('**ID**(유저 아이디)',message.author.id)
      .setThumbnail(message.author.displayAvatarURL())
      return message.channel.send(`[ ${message.author} ]`,embed)

    
    if(args[0]/message.mentions.members.first(args[0])){
      const embed = new MessageEmbed()
      .setTitle(message.author.username+'님의 유저정보')
      .addField('**닉네임**',client.users.cache.get(message.mentions.members.first).name)
      .addField('**태그**',client.users.cache.get(message.mentions.members.first).discriminator)
      .addField('**ID**(유저 아이디)',client.users.cache.get(message.mentions.members.first).id)
      .setThumbnail(client.users.cache.get(message.mentions.members.first).displayAvatarURL())
      .setTimestamp()
      return message.channel.send(`[ ${message.author} ]`,embed)
    }
    if(isNaN(args[0])) {
      embed.setAuthor("유저가 없거나 id가 존제하지않습니다")
      .setColor("RED") 
      return message.channel.send(embed)
    }
    
    
  }
}
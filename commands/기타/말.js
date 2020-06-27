module.exports = {
  name: "say",
  category: "기타",
  description: "굳이? 봐야되요?(ㅇㅇ 봐야되)",
    aliases: ["말","따라해","말해"],
  run: async (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
const ch = client.channels.cache.get('708932774194577458')
const {MessageEmbed} = require('discord.js')
const embed = new MessageEmbed()
.setTitle('say 로그')
.setDescription('**'+message.author.tag+'**님이 사용했습니다\n')
.addField('**ID**',message.author.id)
.addField('**서버이름**','**'+message.guild.name+'**')
.addField('**메시지**',args.join(" "))
.setColor("BLUE")
ch.send(embed)
const Discord = require('discord.js')
//Discord.MessageMentions.EVERYONE_PATTERN
  //return message.channel.send({embed:{title:'다음으로 입력하신단어는 금지된단어입니다',description:'금지, @everyone, @here'}})

    const o = "@here"
    if(args[0] == /@here/) {
      return message.channel.send(`[ ${message.author} ]`,
                                  {embed:{title:'⚠️경고⚠️',description:"@everyone 또는 @here은 금지된 단어입니다\n\n@here을 사용함"}})
    }
  
    if(args[0] == /@[everyone]/ ) {
       message.channel.send(`[ ${message.author} ]`,
                           {embed:{title:'⚠️경고⚠️',description:'@everyone 또는 @here은 금지된 단어입니다\n\n@everyone을 사용함'}})
}
    
    message.channel.send(args.join(' '))
      message.delete()
}
}
module.exports = {
  name: "ping",
  category: "기타", 
  description: "굳이? 봐야되요?(ㅇㅇ 봐야되)",
  aliases: ["핑"],
  run: async (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

  
  const {MessageEmbed} = require('discord.js')
  
    const d = new MessageEmbed()
  .setTitle('지연시간')
  .setDescription(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')} 로딩.....`)
  .setThumbnail("https://cdn.glitch.com/51c4de8b-4ea0-417a-bbf2-c120ee63b664%2Fping%20pong.png?v=1592557620224")
  
  
  const embed = new MessageEmbed()
  .setTitle('지연시간')
  .setDescription(`${client.emojis.cache.find(x => x.name == 'botLab_done')}__**${client.ws.ping} ms**__`)
  .setThumbnail("https://cdn.glitch.com/51c4de8b-4ea0-417a-bbf2-c120ee63b664%2Fping%20pong.png?v=1592557620224")
  message.channel.send(d).then((m)=>{
    setTimeout(()=>{
      m.edit(embed)
    },1000)
        setTimeout(()=>{
      m.edit(embed)
    },1500)
        setTimeout(()=>{
      m.edit(embed)
    },2000)
        setTimeout(()=>{
      m.edit(embed)
    },2500)
        setTimeout(()=>{
      m.edit(embed)
    },3000)
  })
  
  
  
  
  
  }
}

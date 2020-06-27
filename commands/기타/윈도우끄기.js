const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "windowsoff",
  category: "기타",
  description: "프로필을 가져옵니다",
  run: (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
const ㄱ = new MessageEmbed()
.setTitle(`${client.emojis.cache.find(x => x.name == 'win_load')}앱이 열려있어 PC전원을 끌수없습니다\n 종료후 PC를 종료합니다`)
.setImage("https://filestore.community.support.microsoft.com/api/images/a2bd7a52-60c6-4a6f-85da-39e310b5ae90?upload=true")
    message.channel.send(ㄱ).then((t)=> {
setTimeout( () => {
  const l = new MessageEmbed()
  .setDescription(`${client.emojis.cache.find(x => x.name == 'win_load')}**PC 종료 중**`)
  .setImage("https://ncache.ilbe.com/files/attach/new/20140627/5381357/3431726196/3782129618/ffd1d72b77d562451debc7419af6ab24.png")
  t.edit('',l)
},5000)
setTimeout(() => {
  const k = new MessageEmbed()
  .setDescription(`종료됨`)
  .setImage("https://cdn.discordapp.com/attachments/705218576021192726/714721710640988210/videoplayback.gif")
      t.edit('',k)
},10000)
      setTimeout(() => {
  const k = new MessageEmbed()
  .setDescription(`종료가 완료되었어요.`)
  .setImage("https://media.giphy.com/media/l2ECXx80AOmXK/giphy.gif")
      t.edit('',k)
},15000)
})

  }
}
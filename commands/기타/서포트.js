//FIRST TEST HANDLER IS WORKING OR NOT
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "서포트",
  category: "기타",
  description: "Pinging the bot",
   run: (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
  message.channel.send(`${client.emojis.cache.find(x => x.name == 'loadi')}await..서포트 참여링크를 불러오는중..`).then((m) => {
setTimeout(() => {
m.edit('',{embed:{title:'서포트 참여',description:'[이링크로 참여해주세요!](https://discord.gg/vqkZDjj)'}})
}, 1500)
})
}
}

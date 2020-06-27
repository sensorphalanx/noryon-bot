//FIRST TEST HANDLER IS WORKING OR NOT
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "초대",
  category: "기타",
  description: "Pinging the bot",
  run: (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

  message.channel.send(`${client.emojis.cache.find(x => x.name == 'LOAD')}plese await..`).then((m) => {
setTimeout(() => {
m.edit('',{embed:{title:'초대 하기',description:'[여기야! 초대를 할수있는곳이요..](https://discord.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}})
}, 1000)
})
}
}

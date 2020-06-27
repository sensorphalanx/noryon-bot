const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "windows",
  category: "기타",
  description: "프로필을 가져옵니다",
  run: (client, message, args)=> {

    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
const ㄱ = new MessageEmbed()
.setTitle(`${client.emojis.cache.find(x => x.name == 'win_load')}잠시만 기달려주세요.\n\n pc전원을 끄지마세요`)
.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK_UB2aPEovbIhr1p_flnULAk-UpIMhWgylqwQPlDpx6gMmgAv&usqp=CAU")
    message.channel.send(ㄱ).then((t)=> {
setTimeout( () => {
  const l = new MessageEmbed()
  .setDescription(`${client.emojis.cache.find(x => x.name == 'win_load')}거의 다 됐습니다. \n\n **PC전원을 끄지마세요**`)
  .setImage("https://t1.daumcdn.net/cfile/tistory/99F521335AE802060E")
  t.edit('',l)
},5000)
setTimeout(() => {
  const k = new MessageEmbed()
  .setDescription(`${client.emojis.cache.find(x => x.name == 'win_load')} **${message.author.username}** 환영합니다`)
  .setImage("https://cdn.discordapp.com/attachments/677666975849381899/714701891044638741/unnamed.jpg")
      t.edit('',k)
},10000)
      setTimeout(()=> {
        const w = new MessageEmbed()
        .setTitle(`${client.emojis.cache.find(x => x.name == 'win_load')} **${message.author.username}** 로그인 했습니다`)
        .setImage("https://cdn.discordapp.com/attachments/692682565353734174/715010733519405096/rawingPicture_1590542220722.png")
        t.edit('',w)
      },15000)
      setTimeout(()=> {
        const e = new MessageEmbed()
        .setTitle(`${client.emojis.cache.find(x => x.name == 'win_load')} **${message.author.username}**님이 디스코드에 접속했습니다`)
        .setImage('https://cdn.discordapp.com/attachments/692682565353734174/715195234904178748/rawingPicture_1590586221153.png')
        t.edit('',e)
      },17000)
})

  }
}
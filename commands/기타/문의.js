const {MessageEmbed} = require('discord.js')


module.exports = {
  name: "문의",
  category: "기타",
  description: "프로필을 가져옵니다",
  run: (client, message, args)=> {
            if (!args.length) {
      //IF AUTHOR DIDENT GIVE URL OR NAME
    return message.channel.send("사용법 : `\n?문의 < 할말 >`");
        }
if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

    //return message.channel.send({embed:{title:'다음으로 입력하신단어는 금지된단어입니다',description:'금지, @everyone, @here'}})
const d = message.content.split(" ").slice(1);
    var saytext = d.join(" ");
    message.channel.send({embed:{title:'문의',description:`문의 전송자: ${message.author.tag}\n\n문의 된곳: #「📨」｜suggestion-건의\n\n**전송된 내용:** ${saytext}`}})
//client.user.tag
    const f = new MessageEmbed()
    .setTitle('사용자 문의입니다')
    .setDescription(`ID: ${message.author.id}\n이름: ${message.author.tag}\n\n내용: ${saytext}`)
    .setColor('#ff7fff')
    client.channels.cache.get('692639485313286204').send(f)}
}
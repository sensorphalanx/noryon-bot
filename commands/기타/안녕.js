module.exports = {
  name: "ㅎㅇ",
  category: "기타",
  description: "굳이? 봐야되요?(ㅇㅇ 봐야되)",
    aliases: ["안녕!","안녕"],
  run: async (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
message.channel.send(`${message.author}님 안녕하세요!`)
}
}
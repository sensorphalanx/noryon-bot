const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")
module.exports = {
  name: "도움말기타",
  category: "기타",
  aliases: ["도움기타"],
  description: "이건 도움말인데 굳이 볼필요가 있겠니?",
  run: (client, message, args,prefix)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[``여기를 터치해서 초대해주세요``](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
const p = "" 
let embed = new MessageEmbed()
.setAuthor("도움말", client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setColor('#0084ffff')
.setDescription(`저의 커맨드인 카테고리 이에요 - **${client.user.tag}**\n\n**접두사:** n$\n\n명령어수: ${client.commands.size}`)
.addField("**♦기타**",
          '말 **``• 말을 그대로 따라적어요``**'+
         '\n\n임베드 **``• 말을 임베드로 옮겨 적습니다``**')
message.channel.send(embed)

  }
}
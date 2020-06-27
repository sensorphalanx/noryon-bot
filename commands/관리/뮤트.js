const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "뮤트",
  aliases:["mute"],
  description: "Mute anyone who break rules",
  category: "관리",
  usage: "뮤트 <@맨션> <사유>",
  run: (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "죄송하지만 당신은 다른 사람을 음소거 할 권한이 없습니다"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("역할을 관리할 권한이 없습니다.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("음소거하려는 사람을 언급하세요!")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("자신을 음소거하지 못합니다 -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("회원을 음소거하는 사유를 알려주세요")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")

    
      if(!muterole) {
      return message.channel.send("이 서버는 이름이**``Muted``** 인 역할이 없습니다. 생성해주세요!")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("유저를 뮤트시켰습니다")
    }
    
  
    
    
    user.roles.add(muterole)
    
 message.channel.send(`** ${message.mentions.users.first().username} **을 음소거했습니다. \`${reason}\``)
    
    user.send(`** ${message.guild.name} **에서 \`${reason}\에 대해 음소거되었습니다.\``)
    
    
//WE ARE DONE HERE 
    
  }
};

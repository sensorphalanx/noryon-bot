module.exports = {
  name: "언뮤트",
  category: "관리",
  aliases:["unmute"],
  run: (client, message, args)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});

    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "죄송하지만 뮤트를 음소거 해제 할 권한이 없습니다"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("역할을 관리 할 권한이 없습니다");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "음소거 해제하려는 회원을 언급 해주세요"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "뮤트")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("이역할이 없는 사용자는 음소거 역할을하지 않으므로 자유롭게 활동할수있음")
    }
    
    
    user.roles.remove(muterole)
    
    message.channel.send(`**${message.mentions.users.first().username}**이(가) 음소거 해제되었습니다.`)
    
    user.send(`** ${message.guild.name}**에서 음소거 해제되었습니다.`)

  }
};

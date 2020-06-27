module.exports = {
  name: "슬로우모드",
  category: "관리",
  description: "Set the slowmode for the channel!",
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        `이 채널의 슬로우 모드로 설정하려는 시간을초 단위로 지정하지 않았어요.. `
      );
    if (isNaN(args[0])) return message.channel.send(`숫자가 아닙니다!`);
    if (args[0] > 1000) {  
      return message.channel.send
      (
      `[ ${message.author} ]`,{embed:{title:"🚫경고🚫",description:'최대 1000초까지 **설정**하실수 있습니다',color:'RED'}}
      )
    }
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('봇이 채널을 관리할 권한이 없습니다..')
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('채널을 관리할 권한이 있어야합니다 :)')
    if (!message.author.id !== '616570697875193866') {
          message.channel.setRateLimitPerUser(args[0]);
    message.channel.send({embed:{title:`개발자 승인!`,description: `슬로우 모드가 **${args[0]}초로 설정되었습니다**`,color:"YELLOW"}}).then((m)=>{
      setTimeout(()=>{
        m.delete(m)
    
      },1000)
      })
    } 
  
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send({embed:{title:
      `슬로우 모드가 **${args[0]}초로 설정되었습니다**`
,color:'YELLOW'}});
  },
};

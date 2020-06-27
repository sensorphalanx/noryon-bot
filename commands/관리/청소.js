module.exports = {
  name: "청소",
  category: "관리",
  aliases:["clear"],
  description: "프로필을 가져옵니다",
  run: async (client, message, dev)=> {
    if (!message.guild) return message.channel.send({embed:{title:'이곳에서 사용하실수없습니다',description:'봇을 초대하여 사용하고싶으신가요?\n[```여기를 터치해서 초대해주세요```](https://discordapp.com/oauth2/authorize?client_id=692294930416140308&scope=bot&permissions=82146958847)'}});
 const args = message.content.split(" ").slice(1);
    const author = dev
    
        if (!args.length) {
      //IF AUTHOR DIDENT GIVE URL OR NAME
    return message.channel.send("사용법 : `\n청소 < NUMBER >`");
        }
     
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("봇이 메시지를 관리 할 권한이 없습니다");
    }
  
            if (!message.member.hasPermission("MANAGE_CHANNELS") > !message.author.id == '616570697875193866') {
      return message.channel.send("유저가 채널을 관리 할 권한이 없습니다");
    }
     if (isNaN(args[0])) return message.channel.send(`숫자가 아닙니다!`);
      if (!message.deleted) {

        var ag = args[0]
        message.channel.send('**STARTING...**').then((d) => {
       message.delete()
          setTimeout(()=>{
            d.delete(d) 
          },1000)
          setTimeout(()=> {
            message.channel.send({embed:{title:`${ag}개 메시지를 제거 하였습니다.`,color:'#fff9f'}}).then((f)=>{
              
              
              setTimeout(()=>{
                
              f.delete(f)
            },3500)
            })
          },2500)
                              setTimeout(() => {
return message.channel.bulkDelete(Number(ag))
                          
                          
              },2000)
        
        })
        

          
          
    
    
   }
  }
  }

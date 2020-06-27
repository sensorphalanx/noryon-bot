const {MessageEmbed} = require('discord.js')
const {discord} = require('discord.js')
module.exports = {
  name: "npmi", 
      category: "dev",
  aliases: ["exec"],
  description: "개발자전용 eval커밴드",
  run: async (client, message, args,dev, discord) => {
    const author = dev
    if (!author.includes(message.author.id)) return message.channel.send('당신은 **``봇 관리자``** 가 아닙니다')
 
   require('child_process').exec(args.join(" "), (err, out) => {
    if(out) return message.channel.send('```js\n'+out+'\n```');
  if(err) return message.channel.send('```js\n'+err+'\n```');
   })
   
   
   
   
   
  }
}

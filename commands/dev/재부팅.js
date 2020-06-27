const {MessageEmbed} = require('discord.js')
const {discord} = require('discord.js')
module.exports = {
  name: "reboot", 
      category: "dev",
  aliases: ["리붓","리로드","reload"],
  description: "개발자전용 eval커밴드",
  run: async (client, message, args,dev, discord) => {
    const author = dev
    if (!author.includes(message.author.id)) return message.channel.send('당신은 **``봇 관리자``** 가 아닙니다')
 message.channel.send(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'typeping')}파일: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}명령어: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}서버: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}음악: 로딩중...\n\n`).then((m)=> {
   setTimeout(()=>{
     
   
   m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}명령어: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}서버: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}음악: 로딩중...\n\n`)
   },1000)
   

      setTimeout(()=>{
     
   
   m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}서버: 로딩중...\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}음악: 로딩중...\n\n`)
   },1700)
   
   
   
   
      setTimeout(()=>{
     
   
   m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}서버: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'typeping')}음악: 로딩중...\n\n`)
   },2300)
   
         setTimeout(()=>{
     
   
   m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}서버: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}음악: 완료\n\n`)
   },3600)
   setTimeout(()=>{
      m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}서버: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}음악: 완료\n\n
${client.emojis.cache.find(x => x.name == 'win_load')} 로그인중..`)
   },3800)
      setTimeout(()=>{
      m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}서버: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}음악: 완료\n\n
${client.emojis.cache.find(x => x.name == 'win_load')} 로그인 준비!`)
   },4000)
   
         setTimeout(()=>{
      m.edit(`${client.emojis.cache.find(x => x.name == 'botLab_done')}**\`\`개발자 승인됨 \`\`**\n\n`
                     +`${client.emojis.cache.find(x => x.name == 'botLab_done')}파일: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}명령어: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}서버: 완료\n\n`+
                     `${client.emojis.cache.find(x => x.name == 'botLab_done')}음악: 완료\n\n
${client.emojis.cache.find(x => x.name == 'win_load')} 로그인됨!`)
   },4200) 
   

   setTimeout(()=> {
     process.exit()
   },4900)
   
   
   
   
   
   
   })
  }
}

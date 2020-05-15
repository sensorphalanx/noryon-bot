//제작자: 놀욘봇 개발자(NoryonKR#4834)
const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const os = require("os")
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const http = require('http');
const express = require('express');
const app = express();
const {MessageEmbed} = require("discord.js")
const koreanbots = require('koreanbots');
const bot = new koreanbots.MyBot('-----------검열-------')
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end("Made by Noryonkr#4834")
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
setInterval(() => {
  http.get(`소지하고있는 봇 프로젝트 URL`); //Do for good hosting
},999999999);
//CLIENT EVENTS
client.on("ready", () => {
    const ch = client.channels.cache.get('699097664482050119')
const embed = new MessageEmbed()
.setTitle('ONLINE LOG')
.setDescription('놀욘 봇이 온라인이 되었습니다!\n\n놀욘 BOT is online!')
ch.send(embed)  
  console.log(client.user.tag+':노래를 재생할준비가 되었습니다!')
      const guild = client.guilds.cache.size
         const botgame = [`Use ?도움 | ?help`, `?서포트 | 서포트로 올려면 쳐주세요`,`${guild}서버와 함께하는 중이에요!`]
setInterval(() => {
        const activity = botgame[Math.floor(Math.random() * botgame.length)]
        client.user.setActivity(activity, { type: "PLAYING" })
      }, 4500)
    console.log(`${client.user.tag}로 로그인하였습니다.`);
    bot.update(client.guilds.cache.size) // 준비 상태를 시작할 때, 최초로 업데이트합니다.
    .then(res=>console.log('서버 수를 정상적으로 업데이트하였습니다!\n반환된 정보:' + JSON.stringify(res)))
    .catch(e=> console.error(e))
    setInterval(function(){
        bot.update(client.guilds.cache.size)
        .then(res=>console.log('서버 수를 정상적으로 업데이트하였습니다!\n반환된 정보:' + JSON.stringify(res)))
        .catch(e=> console.log(e))
        // 10분마다 서버 수를 업데이트합니다.
    }, 600000)
});

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) {
      return;
    }
  try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    } catch (e) { //IF IT CATCH ERROR
      console.log(e)
      message.reply(`${e.message}`)
    }
    
  }
  
  
});




//DONT DO ANYTHING WITH THIS TOKEN lol
  client.login(TOKEN)  
  

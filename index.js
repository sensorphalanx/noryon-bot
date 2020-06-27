
const { Client, Collection } = require("discord.js");
const {discord} = require('discord.js')
const { config } = require("dotenv");
const {prefix, token } = require("./config.json")
 
const client = new Client({
    disableEveryone: true,
  event: ["TYPING_START"]
}) 
const http = require('http');
const express = require('express');
const app = express(); 
var server = http.createServer(app);


 
const { MyBot } = require("koreanbots")
const Bot = new MyBot("이건 비밀이야 ^_^(얄밉)")
 
let update = count => Bot.update(count) 
    .then(res => console.log("서버 수를 정상적으로 업데이트하였습니다!\n반환된 정보:" + JSON.stringify(res)||client.channels.cache.get('724900649321365556').send(`서버가 업데이트되었습니다.\n${client.guilds.cache.size}개`)))
    .catch(console.error)
  
client.on("ready", () => {
    console.log(`${client.user.tag}로 로그인하였습니다.`)
  
    update(client.guilds.cache.size) // 준비 상태를 시작할 때, 최초로 업데이트합니다.
    setInterval(() => update(client.guilds.cache.size), 600000) // 10분마다 서버 수를 업데이트합니다.
})
 







// Ping The Apps.
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
setInterval(() => {
  http.get(`https://noryon-ko.glitch.me`); //디즈 호스팅! 좋구연
}, 999999999);




client.on("warn", info => console.log(info));
 
client.on("error", error=> {
           console.error
  client.channels.cache.get('712386989571309600').send({embed:{title:'메인 에러',description: error}})
                                                                              })

// Collections
client.commands = new Collection();
client.aliases = new Collection();


// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.on("ready", () => {

    const s = client.channels.cache.get('699097664482050119')


    const botgame = [`Use n$help | n$도움말`, `Version | ${process.env.v}`,`안전한 서비스 제공중`,`${client.guilds.cache.size}서버 | ${client.users.cache.size}유저`,`${client.users.cache.size}유저`,`${client.guilds.cache.size}서버`]
setInterval(() => {
        const activity = botgame[Math.floor(Math.random() * botgame.length)]
        client.user.setActivity(activity)

      }, 5500)
  setInterval(() => {
 client.channels.cache.get('ID').edit({name: `서버: ${client.guilds.cache.size}`})
    client.channels.cache.get('ID').edit({name: `유저: ${client.users.cache.size}`})
    client.channels.cache.get('ID').edit({name: `핑: ${client.ws.ping}`})
     }, 5500)
    console.log(`${client.user.username}지금 부터 온라인!`);
})

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  const dev = ["ㅁㄴㅇㅇㄹ","ㅁㄴㅇㄹ","ㅁㄴㅇㄹ"]
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args,dev);

 
});
 









client.login(token)

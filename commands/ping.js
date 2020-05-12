//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
  message.channel.send(`**__${client.ws.ping}__** ms`)
    
}
}

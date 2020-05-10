//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const {MessageEmbed} = require("discord.js")
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send(":white_check_mark: | 음악을 전부 틀었네요! 이만 가볼게요!").catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("다음 이유로 이컨텐츠를 재생할수없습니다\n\n**이 비디오는 저작권 콘텐츠를 포함합니다**")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 50); //VOLUME
    const ytdl = require('ytdl-core');

ytdl.getInfo('song.url', function(err, info) {
  console.log(info);
});
    

    const p = new MessageEmbed()
    .setTitle('🎶 재생을 시작합니다!')
    .setThumbnail(`https://img.youtube.com/vi/${song.url.split('v=').pop()}/maxresdefault.jpg`)
    .setDescription(`　\n지금 부터 시작합니다!\n\n[${song.title}](${song.url})`)
      queue.textChannel.send(p)
    console.log(song)
    console.log(`Thumbnail: https://img.youtube.com/vi/${song.url.split('v=').pop()}/maxresdefault.jpg`)
    
  }
}

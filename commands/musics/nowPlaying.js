module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const np = here.nowPlaying

  let startAt = new Date()
  if (here.dispatcher && here.dispatcher.streamingData) startAt = new Date(here.dispatcher.streamingData.startTime)
  else if (here.player && here.player.state) startAt = new Date(here.player.state.time)
  const seconds = Math.floor((new Date() - startAt) / 1000)
  const time = seconds >= np.secDuration ? '0:0' : np.secToArray(Math.floor(np.secDuration) - seconds).join(':')

  const embed = new client.Embed()
  embed.setTitle(':cd: 지금 재생중!')
    .setThumbnail(np.thumbnail)
    .setDescription(`
      **제목** : [${np.title}](${np.link})
      **길이** : ${Math.floor(np.strDuration)}
      **남은 시간** : ${time}
      **업로더** : [${np.author.name}](${np.author.link})
    `)
  msg.channel.send(embed)
}

module.exports.info = {
  alias: ['np', 'nowplaying', 'now', 'playing'],
  name: 'nowPlaying'
}

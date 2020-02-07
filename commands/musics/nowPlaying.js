module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const np = here.nowPlaying

  if (!here.dispatcher || !here.dispatcher.streamingData || !here.dispatcher.streamingData.startTime) return
  const startAt = new Date(here.dispatcher.streamingData.startTime)
  const seconds = Math.floor((new Date() - startAt) / 1000)
  const time = seconds >= np.secDuration ? '0:0' : np.secToArray(np.secDuration - seconds).join(':')

  const embed = new client.Embed()
  embed.setTitle(':cd: 지금 재생중!')
    .setThumbnail(np.thumbnail)
    .setDescription(`
      **제목** : [${np.title}](${np.link})
      **길이** : ${np.strDuration}
      **남은 시간** : ${time}
      **업로더** : [${np.author.name}](${np.author.link})
    `)
  msg.channel.send(embed)
}

module.exports.info = {
  alias: ['np', 'nowplaying', 'now', 'playing'],
  name: 'nowPlaying'
}

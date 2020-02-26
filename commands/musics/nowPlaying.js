const progressBar = (pos, len, count = 20) => {
  const result = new Array(count).fill('=')
  result[Math.floor((pos / len) * count)] = '■'
  return result
}

module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  if (client.config.music.useNative ? !here.dispatcher : !here.player) return msg.channel.send('아무런 곡이 재생되고 있지 않습니다!')

  const np = here.nowPlaying
  const progress = progressBar(
    client.config.music.useNative
      ? (here.dispatcher.streamingData.startTime + np.secDuration * 1000)
      : here.player.state.position, np.secDuration * 1000
  )

  const embed = new client.Embed()
  embed.setTitle(':cd: 지금 재생중!')
    .setThumbnail(np.thumbnail)
    .setDescription(`
      **제목** : [${np.title}](${np.link})
      **길이** : ${np.strDuration}
      **업로더** : [${np.author.name}](${np.author.link})
      **진행상황** : ${progress.join('')}
    `)
  msg.channel.send(embed)
}

module.exports.info = {
  alias: ['np', 'nowplaying', 'now', 'playing'],
  name: 'nowPlaying'
}

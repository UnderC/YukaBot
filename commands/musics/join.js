module.exports.run = (client, msg) => {
  const voiceChannel = msg.member.voiceChannel
  if (!voiceChannel) return

  const here = client.m.get(msg.guild.id)
  if (here.player) return
  here.join(voiceChannel)
  msg.channel.send('음성 채널에 접속하였습니다.')
}

module.exports.info = {
  alias: ['join'],
  name: 'join'
}

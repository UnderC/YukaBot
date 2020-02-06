module.exports.run = (client, msg) => {
  const voiceChannel = msg.member.voiceChannel
  if (!voiceChannel) return

  const here = client.m.get(msg.channel.id)
  here.join(voiceChannel)
}

module.exports.info = {
  alias: ['join'],
  name: 'join'
}

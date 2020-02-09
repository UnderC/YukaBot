module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.leave()
  msg.channel.send('음성 채널을 나갔습니다.')
}

module.exports.info = {
  alias: ['leave'],
  name: 'leave'
}

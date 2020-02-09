module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.stop()
  msg.channel.send('음악 스트리밍을 종료했습니다.')
}

module.exports.info = {
  alias: ['stop'],
  name: 'stop'
}

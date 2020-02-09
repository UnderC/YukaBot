module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const volume = Number(msg.args[1])

  if (Number.isNaN(volume)) return
  const results = here.setVolume(volume).map(v => v * 100)
  msg.channel.send(`볼륨이 ${results[0]}% 에서 ${results[1]}% 로 변경되었습니다.`)
}

module.exports.info = {
  alias: ['vol', 'volume'],
  name: 'volume'
}

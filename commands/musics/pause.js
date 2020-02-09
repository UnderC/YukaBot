module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const paused = here.stateToggle()
  msg.channel.send(`음악 스트리밍을 ${paused ? '일시정지' : '다시 재생'}했습니다.`)
}

module.exports.info = {
  alias: ['pause', 'resume'],
  name: 'pause'
}

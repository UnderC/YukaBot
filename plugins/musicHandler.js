const MusicHandler = {
  message: (client, msg) => {
    msg.args = msg.content.replace(client.config.prefix, '').split(' ')
    if (client.categories.get('musics').includes(msg.args[0])) {
      const here = client.m.get(msg.guild.id)
      if (here.handled) return
      here.handled = true

      here.on('join', () => {
        msg.channel.send('음성 채널에 접속하였습니다.')
      })

      here.on('leave', () => {
        msg.channel.send('음성 채널을 나갔습니다.')
      })

      here.on('now', (item) => {
        msg.channel.send(`**\`\`${item.title}\`\`**(을)를 재생하는 중입니다.`)
      })

      here.on('vol', (bef, aft) => {
        msg.channel.send(`볼륨이 ${bef * 100}% 에서 ${aft * 100}% 로 변경되었습니다.`)
      })

      here.on('stop', () => {
        msg.channel.send('음악 스트리밍을 종료했습니다.')
      })

      here.on('state', (paused) => {
        msg.channel.send(`음악 스트리밍을 ${paused ? '일시정지' : '다시 재생'}했습니다.`)
      })

      here.on('skip', () => {
        msg.channel.send('지금 듣고 있는 곡을 건너뜁니다.')
      })
    }
  }
}

module.exports = MusicHandler

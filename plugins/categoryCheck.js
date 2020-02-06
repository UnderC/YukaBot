const CategoryCheck = {
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
        msg.channel.send(`**${item.title}**를 재생하는 중입니다.`)
      })
    }
  }
}

module.exports = CategoryCheck

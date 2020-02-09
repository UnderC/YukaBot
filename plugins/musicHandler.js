const MusicHandler = {
  message: (client, msg) => {
    msg.args = msg.content.replace(client.config.prefix, '').split(' ')
    if (!client.categories.get('musics').includes(msg.args[0])) return
    const here = client.m.get(msg.guild.id)
    if (here.handled) return
    here.handled = true

    here.on('now', (item) => {
      msg.channel.send(`**\`\`${item.title}\`\`**(을)를 재생하는 중입니다.`)
    })
  }
}

module.exports = MusicHandler

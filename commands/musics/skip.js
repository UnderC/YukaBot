module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.skip()
  msg.channel.send('지금 듣고 있는 곡을 건너뜁니다.')
}

module.exports.info = {
  alias: ['skip'],
  name: 'skip'
}

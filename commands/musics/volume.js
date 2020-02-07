module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const volume = Number(msg.args[1])

  if (Number.isNaN(volume)) return
  here.setVolume(volume)
}

module.exports.info = {
  alias: ['vol', 'volume'],
  name: 'volume'
}

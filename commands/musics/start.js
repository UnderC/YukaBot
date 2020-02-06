module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here._.start()
}

module.exports.info = {
  alias: ['start'],
  name: 'start'
}

module.exports.run = (client, msg) => {
  const here = client.m.get(msg.channel.id)
  here._.start()
}

module.exports.info = {
  alias: ['start'],
  name: 'start'
}

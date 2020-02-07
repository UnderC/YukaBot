module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.stop()
}

module.exports.info = {
  alias: ['stop'],
  name: 'stop'
}

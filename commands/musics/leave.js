module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.leave()
}

module.exports.info = {
  alias: ['leave'],
  name: 'leave'
}

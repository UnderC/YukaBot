module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.skip()
}

module.exports.info = {
  alias: ['skip'],
  name: 'skip'
}

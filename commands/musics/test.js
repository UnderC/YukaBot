module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  console.log(here)
}

module.exports.info = {
  alias: ['test'],
  name: 'test'
}

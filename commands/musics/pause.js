module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.stateToggle()
}

module.exports.info = {
  alias: ['pause', 'resume'],
  name: 'pause'
}

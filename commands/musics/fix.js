module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  here.stop()
  here.queue.fix(here.nowPlaying)
  here._.start()
}

module.exports.info = {
  alias: ['fix'],
  name: 'fix'
}

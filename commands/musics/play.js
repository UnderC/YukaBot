module.exports.run = async (client, msg) => {
  const here = client.m.get(msg.guild.id)
  await here.join(msg.member.voiceChannel)
  await client.commands.get('search').run(msg)
  here._.start()
}

module.exports.info = {
  alias: ['play'],
  name: 'play'
}

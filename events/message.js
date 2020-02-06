module.exports.run = (c, msg) => {
  if (!msg.guild || msg.author.bot) return
  msg.args = msg.content.replace(c.config.prefix, '').split(' ')

  const cmd = c.commands.get(msg.args[0])
  if (cmd) cmd.run(msg)
}

module.exports.name = 'message'

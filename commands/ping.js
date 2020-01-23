module.exports.run = (client, msg) => {
  msg.channel.send(`${client.ping}ms`)
}

module.exports.info = {
  alias: ['ping', 'pong'],
  name: 'ping',
  perms: ['SEND_MESSAGES'],
  reqOwn: false
}

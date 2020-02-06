module.exports.run = (client, msg) => {
  msg.channel.send('u blacked')
}

module.exports.info = {
  alias: ['black', 'blacklist'],
  name: 'blacklist',
  reqOwn: true
}

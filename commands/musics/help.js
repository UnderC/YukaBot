module.exports.run = async (client, msg) => {
  msg.channel.send(```
  !join, !leave, !stop
  !search [query],
  !start, !vol [volume]
  !pause, !resume
  !np
  ```)
}

module.exports.info = {
  alias: ['help', 'm'],
  name: 'musicHelp'
}

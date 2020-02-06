module.exports.run = (client, msg) => {
  // eslint-disable-next-line no-eval
  eval(msg.args.splice(1).join(' '))
}

module.exports.info = {
  alias: ['eval'],
  name: 'eval',
  reqOwn: true
}

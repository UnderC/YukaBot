module.exports.run = (client, msg) => {
  try {
    // eslint-disable-next-line no-eval
    eval(msg.args.splice(1).join(' '))
  } catch (e) {
    console.log(e)
  }
}

module.exports.info = {
  alias: ['eval'],
  name: 'eval',
  reqOwn: true
}

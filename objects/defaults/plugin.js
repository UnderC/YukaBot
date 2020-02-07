class YukaPlugin {
  constructor (e, s) {
    this.client = s
    this.client.plugins.push(e)
  }
}

module.exports = YukaPlugin

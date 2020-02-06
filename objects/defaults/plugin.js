class YukaPlugin {
  constructor (e, s) {
    this.client = s
    this.client.plugins.push(e)
    /*
    if (this.client.on) {
      for (const event in e.events) {
        this.client.on(event, e[event])
      }
    }
    */
  }
}

module.exports = YukaPlugin

class YukaEvent {
  constructor (e, s) {
    this.client = s
    this.eventName = e.name
    this.run = (a, b) => {
      this.client.plugins.forEach(rawPlugin => {
        const plugin = rawPlugin[this.eventName]
        if (plugin) plugin(this.client, a, b)
      })
      e.run(this.client, a, b)
    }
    if (this.client.on) this.client.on(this.eventName, this.run)
  }
}

module.exports = YukaEvent

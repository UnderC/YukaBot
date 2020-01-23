class YukaEvent {
  constructor (e, s) {
    this.client = s
    this.run = (a, b) => typeof e.run === 'function' ? e.run(this.client, a, b) : () => { console.error('not assigned') }
    this.eventName = e.name
    if (this.client.on) this.client.on(this.eventName, this.run)
  }
}

module.exports = YukaEvent

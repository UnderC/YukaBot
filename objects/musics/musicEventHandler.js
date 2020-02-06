const events = [
  'join',
  'leave',
  'stop',
  'vol',
  'state',
  'now',
  'skip'
]

class MusicEventHandler {
  constructor (server) {
    this.server = server
    this.join = () => {}
    this.leave = () => {}
    this.stop = () => {}
    this.vol = (bef, aft) => {}
    this.state = (state) => {}
    this.now = (item) => {}
    this.skip = () => {}
  }

  assign () {
    console.log('assign')
    for (const event in events) {
      console.log(this[event])
      this.server.on(event, this[event])
    }
  }
}

module.exports = MusicEventHandler

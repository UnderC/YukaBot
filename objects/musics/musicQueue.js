const MusicItem = require('./musicItem')

class MusicQueue {
  constructor () {
    this.queue = []
  }

  add (raw) {
    if (raw) {
      const song = new MusicItem(raw)
      this.queue.push(song)
    }
    return this
  }

  fix (song) {
    if (song) this.queue = [song].concat(this.queue)
    return this
  }

  get first () {
    return this.queue.shift()
  }

  get thatLast () {
    return this.queue.length === 0
  }
}

module.exports = MusicQueue

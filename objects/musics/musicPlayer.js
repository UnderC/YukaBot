const ytdl = require('ytdl-core')

class MusicPlayer {
  constructor (server) {
    this.server = server
  }

  start () {
    if (!this.server.player) return
    if (this.server.dispatcher) delete this.server.dispatcher
    const np = this.server.nowPlaying = this.server.queue.first
    this.play(np)
  }

  play (np) {
    const dispatcher = this.server.player.playStream(ytdl(np.link))
    dispatcher.on('end', this.end.bind(this))

    this.server.dispatcher = dispatcher
    this.server.emit('now', np)
  }

  end () {
    if (this.server.repeat) this.server.add(this.server.nowPlaying)
    if (this.server.queue.thatLast) this.server.leave()
    if (this.server.skipSafe) {
      this.server.skipSafe = false
      return
    }

    this.start()
  }
}

module.exports = MusicPlayer

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
  }

  end () {
    console.log(this)
    return

    // 테스트 중
    // eslint-disable-next-line no-unreachable
    if (this.server.repeat) this.server.add(this.server.nowPlaying)
    if (this.server.queue.thatLast) this.server.leave()
    if (this.server.skipSafe) return

    this.start()
  }
}

module.exports = MusicPlayer

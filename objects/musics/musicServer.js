const events = require('events')
const MusicQueue = require('./musicQueue')
const MusicPlayer = require('./musicPlayer')

class MusicServer extends events.EventEmitter {
  constructor () {
    super()
    this.player = null // 비어있으면 join을 제외한 모든 명령을 무시
    this.isPlaying = false // true 면 start 명령을 무시
    this.skipSafe = false // true 면 dispatcher 이벤트 종료 후 재귀 벗어남
    this.queue = new MusicQueue() // 모듈 참고
    this.nowPlaying = null
    this.dispatcher = null // 비어있을면 재생 불가
    this.volume = 50 // 0 이면 소리가 나지 않음
    this.repeat = false
    this._ = new MusicPlayer(this)
  }

  async join (voiceChannel) {
    this.player = await voiceChannel.join()
    this.emit('join')
  }

  leave () {
    if (!this.player) return
    this.player.disconnect()

    this.stop(true)
    this.clear()
    this.emit('leave')
  }

  stop (cbLeave) {
    // call by Leave(Method)
    if (!this.dispatcher) return
    this.dispatcher.end()
    if (!cbLeave) this.emit('stop')
  }

  setVolume (vol) {
    if (!vol) return
    const before = this.volume
    this.volume = vol % 1 === 0 ? vol : vol *= 100
    if (this.dispatcher) this.dispatcher.setVolume(vol)
    this.emit('vol', before, this.volume)
  }

  stateToggle () {
    if (!this.dispatcher) return
    this.dispatcher.paused ? this.dispatcher.resume() : this.dispatcher.pause()
    this.emit('state', this.dispatcher.paused)
  }

  clear () {
    delete this.player
    delete this.dispatcher
  }
}

module.exports = MusicServer

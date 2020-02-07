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
    this.volume = 0.5 // 0 이면 소리가 나지 않음
    this.repeat = false
    this.handled = false
    this._ = new MusicPlayer(this)
  }

  async join (voiceChannel) {
    if (this.player) return // this.move(voiceChannel)
    this.player = await voiceChannel.join()
    this.emit('join')
  }

  leave (cbMove) {
    // call by Move(Method)
    if (!this.player) return this.emit('notInVoiceChannel')
    this.player.disconnect()

    this.stop(true)
    this.clear()
    if (!cbMove) this.emit('leave')
  }

  move (voiceChannel) {
    const here = this.player.voiceConnection.channel.calculatedPosition
    if (here === voiceChannel.calculatedPosition) return this.emit('alreadyJoin')

    this.leave(true)
    this.join(voiceChannel)
    this.emit('move')
  }

  stop (cbLeave) {
    // call by Leave(Method)
    if (!this.dispatcher) return
    this.skipSafe = true
    this.dispatcher.end()
    if (!cbLeave) this.emit('stop')
  }

  setVolume (vol) {
    if (!vol) return
    const before = this.volume
    this.volume = vol % 1 === 0 ? vol / 100 : vol
    if (this.dispatcher) this.dispatcher.setVolume(this.volume)
    this.emit('vol', before, this.volume)
  }

  stateToggle () {
    if (!this.dispatcher) return
    this.dispatcher.paused ? this.dispatcher.resume() : this.dispatcher.pause()
    this.emit('state', this.dispatcher.paused)
  }

  skip () {
    if (!this.dispatcher) return
    this.dispatcher.end()
    this.emit('skip')
  }

  clear () {
    delete this.player
    delete this.dispatcher
  }
}

module.exports = MusicServer

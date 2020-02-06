const MusicServer = require('./musicServer')

class MusicServers {
  constructor () {
    this.servers = new Map()
  }

  get (sID) {
    const server = this.servers.get(sID)
    if (!server) return this.set(sID)
    return server
  }

  set (sID) {
    this.servers.set(sID, new MusicServer())
    return this.get(sID)
  }
}

module.exports = MusicServers

const Discord = require('discord.js')
const musics = require('../musics')
class Client extends Discord.Client {
  constructor (config) {
    super()
    this.config = config
    this.plugins = []
    this.commands = new Map()
    this.categories = new Map()

    if (config.music.useNative) {
      this.m = new musics.Native.MusicServers()
      this.searcher = new musics.Lavalink.MusicSearcher()
    } else {
      const { host, port, password } = config.music.nodes[0]
      this.m = new musics.Lavalink.MusicServers(this, config.music.nodes, { user: config.music.botID })
      this.searcher = new musics.Lavalink.MusicSearcher(host, port, password)
    }

    this.Embed = Discord.RichEmbed
  }

  login (token) {
    super.login(token || this.config.token)
  }
}

module.exports = Client

const Discord = require('discord.js')
const musics = require('../musics')
class Client extends Discord.Client {
  constructor (config) {
    super()
    this.config = config
    this.plugins = []
    this.commands = new Map()
    this.categories = new Map()
    this.m = new musics.MusicServers()
    this.Embed = Discord.RichEmbed
  }

  login (token) {
    super.login(token || this.config.token)
  }
}

module.exports = Client

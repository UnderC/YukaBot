const Discord = require('discord.js')
class Client extends Discord.Client {
  constructor (config) {
    super()
    this.config = config
    this.commands = new Map()
    // if (config.token) this.login(config.token)
  }

  login (token) {
    super.login(token || this.config.token)
  }
}

module.exports = Client

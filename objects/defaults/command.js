class YukaCommand {
  constructor (e, c, s) {
    this.client = s
    this.category = c
    this.info = e.info
    this.chk = (m) => (!this.info.reqOwn ? m.hasPermission(this.info.perms) : false) || this.client.config.owners.includes(m.id)
    this.run = (msg) => typeof e.run === 'function' ? (this.chk(msg.member) ? e.run(this.client, msg) : false) : () => { console.error('not assigned') }
    if (this.client.commands) {
      this.client.categories.set(this.category, this.info)
      this.info.alias.forEach(alias => {
        this.client.commands.set(alias, this)
      })
    }
  }
}

module.exports = YukaCommand

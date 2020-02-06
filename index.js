const Events = require('./events')
const CmdCategories = require('./commands')
const Objects = require('./objects')
const Config = require('./config')

const Client = Objects.assigner(Objects.defaults.client, Config)
Object.values(Events).forEach(e => Objects.assigner(Objects.defaults.event, e, Client))
Object.keys(CmdCategories).forEach(c => Objects.defaults.category(CmdCategories[c], c, Client))

Client.login()

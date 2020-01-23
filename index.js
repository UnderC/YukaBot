const Events = require('./events')
const Commands = require('./commands')
const Objects = require('./objects')
const Config = require('./config')

const Client = Objects.assigner(Objects.client, Config)
Objects.assigner.storage(Client)
Object.values(Events).forEach(e => Objects.assigner(Objects.event, e))
Object.values(Commands).forEach(c => Objects.assigner(Objects.command, c))

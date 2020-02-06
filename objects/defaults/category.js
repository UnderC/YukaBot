const assigner = require('../assigner')
const command = require('./command')

module.exports = (req, category, client) => {
  Object.values(req).forEach(rawCMD => {
    assigner(command, rawCMD, category, client)
  })
}

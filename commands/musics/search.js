const Searcher = require('../../objects').musics.MusicSearcher
const search = new Searcher()
module.exports.run = async (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const results = await search.search(msg.args.splice(1).join(' '), 5)
  here.queue.add(results.items[0])
}

module.exports.info = {
  alias: ['search'],
  name: 'search'
}

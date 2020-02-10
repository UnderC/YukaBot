module.exports.run = async (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const query = msg.args.splice(1).join(' ')
  const results = await client.searcher.search(query, 5)
  const _msg = await msg.channel.send(`**\`\`${query}\`\`**(을)를 검색중입니다.`)

  here.queue.add(results.items[0])
  _msg.edit(`**\`\`${results.items[0].title}\`\`**(을)를 대기열에 추가했습니다.`)
}

module.exports.info = {
  alias: ['search'],
  name: 'search'
}

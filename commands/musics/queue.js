module.exports.run = (client, msg) => {
  const here = client.m.get(msg.guild.id)
  const queue = here.queue.queue
  let str = `**QUEUE**
  [__NOW__] `

  if (here.nowPlaying) str += `${here.nowPlaying.title} [${here.nowPlaying.strDuration}]\n`
  else str += 'NOT PLAYING [00:00]'

  for (let i = 0; i < queue.length; i++) {
    const { title, strDuration } = queue[i]
    str += `[__${i}__] ${title} [${strDuration}]\n`
  }

  msg.channel.send(str)
}

module.exports.info = {
  alias: ['queue'],
  name: 'queue'
}

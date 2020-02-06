const convDuration = (duration) => {
  const tempDurations = duration.split(':').map(v => Number(v)).reverse()
  let result = 0
  let gap = 1

  for (const i in tempDurations) {
    result += gap * i
    gap *= 60
  }

  return result
}

class MusicItem {
  constructor (obj) {
    this.link = obj.link
    this.title = obj.title
    this.thumbnail = obj.thumbnail
    this.views = obj.views
    this.duration = convDuration(obj.duration)
    this.author = {
      name: obj.author.name,
      link: obj.author.ref
    }
  }
}

module.exports = MusicItem
module.exports.conv = convDuration

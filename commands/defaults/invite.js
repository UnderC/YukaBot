module.exports.run = (client, msg) => {
  const embed = new client.Embed()
  embed.setTitle('봇 초대하기')
    .setDescription(`이 봇을 초대하려면 [여기](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847)를 눌러주세요!`)
  msg.channel.send(embed)
}

module.exports.info = {
  alias: ['invite', '초대'],
  name: 'invite'
}

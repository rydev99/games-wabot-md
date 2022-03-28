let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png'),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i

export default handler

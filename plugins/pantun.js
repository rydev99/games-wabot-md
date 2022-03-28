let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['fun']
handler.command = /^(pantun)$/i

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
"Kejar pencuri pakai belati\nOrang yang takut langsung lari\nKututup mata nampak di hati\nCantik dirimu bagai bidadari",
"Sebelum makan potong kuku\nNasi dimakan bukan dicakar\nJangan berpaling dari cintaku\nKamu lari tetap ku kejar",
]

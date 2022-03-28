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
"Satu titik dua koma.\nSi cantik ada yang punya.",
"Dulu gelatik sekarang cendrawasih.\nDulu cantik sekarang masih.",
"Ikan hiu makan badak.\nI love you mendadak.",
"Kamu perancis\nAku belgia\nKamunya manis\nSini aku buat bahagia",
"Waktu daftar hari terakhir,\nwaktu terasa banyak terbuang.\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang.",
"Api kecil dari tungku,\napinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you.",
"Jalanan lagi lancar,\nitu adalah sebuah berkah.\nAku bukan nyari pacar,\ntapi nyari yang mau diajak nikah.",
]

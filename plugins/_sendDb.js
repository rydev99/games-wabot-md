import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
let res = fetch("https://json-server.rynz01.repl.co/")
m.reply(res)
}

handler.command = /db/i
handler.owner = true
handler.limit = false
export default handler
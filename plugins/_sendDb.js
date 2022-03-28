import fs from 'fs'
let handler = async(m, { conn, text }) => {
m.reply(user)
}

handler.command = /db/i
handler.owner = true
handler.limit = false
export default handler
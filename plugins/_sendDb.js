import fs from 'fs'
let handler = async(m, { conn, text }) => {
let user = global.db.data
conn.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./session.data.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
m.reply(user)
}

handler.command = /db/i
handler.owner = true
handler.limit = false
export default handler
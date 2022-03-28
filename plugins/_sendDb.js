import fs from 'fs'
let handler = async(m, { conn, text }) => {
conn.sendFile('6283856085455@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
}

handler.command = /db/i
handler.owner = true
handler.limit = false
export default handler
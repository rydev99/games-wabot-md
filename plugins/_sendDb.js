let handler = async(m, { conn, text }) => {

conn.sendFile(m.chat, "https://json-server.rynz01.repl.co/", "db.json", null, m)
}

handler.command = /^['db']$/i
handler.owner = true
handler.limit = false
export default handler
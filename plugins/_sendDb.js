import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
let res = fetch("https://json-server.rynz01.repl.co/")
if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
m.reply(json)
}

handler.command = /db/i
handler.owner = true
handler.limit = false
export default handler
import fetch from 'node-fetch'
import { format } from 'util'
let handler = async (m, { text }) => {

    let res = await fetch("https://json-server.rynz01.repl.co/")
    if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
        // delete res
        throw `Content-Length: ${res.headers.get('content-length')}`
    }
    if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
}

handler.command = /db/i

export default handler
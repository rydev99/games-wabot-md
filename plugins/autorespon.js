import fs from 'fs'
let handler = m => m

handler.all = async function (m, { conn }) {
let set = db.data.settings[this.user.jid]
if (set.autoupdatestatus) {
        if (new Date() * 1 - set.status > 1000) {
            let _uptime = process.uptime() * 1000
            let uptime = conn.clockString(_uptime)
            await m.reply("oke")
            set.status = new Date() * 1
        }
    }
 
 }
export default handler
import fs from 'fs'
let handler = m => m

handler.all = async function (m, { conn }) {
let set = db.data.settings[this.user.jid]

        if (new Date() * 1 - set.status > 1000) {
      
            await m.reply("oke")
            set.status = new Date() * 1
        }
    
 
 }
export default handler
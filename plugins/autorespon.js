
let handler = async (m, { conn }) => {
        if (new Date() * 1 - status > 1000) {
            await m.reply("oke")
            status = new Date() * 1
        }
 }
export default handler
let handler =  m => m.reply(`
*Pulsa*
Indosat Ooredoo [085648294105]
Axis [083856085455]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

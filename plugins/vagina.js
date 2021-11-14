let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.vagina()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['vagina']
handler.tags = ['anime']

handler.command = /^(vagina)$/i
handler.premium = true

module.exports = handler
let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081379753850]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [6281379753850]
│ • NO OWNER NYA BOT INI GAUSAH NANYA LAGI OWNER NYA SIAPA
𝑩𝒚 𝕯ልቻሃ乂𝕯𝖊ልፕዘ
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

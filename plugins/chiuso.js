let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return
conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group open / close', 'gruppo aperto / chiuso']
handler.tags = ['group']
handler.command = /^(c|chiuso)$/i
handler.admin = true
handler.botAdmin = true
export default handler

let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://raw.githubusercontent.com/DarksitoBt/NovaBot-MD/main/src/e05904e2-daf1-4f49-b2f7-c5e8fdd0aad4.jpg' //Atras va la url de la imagen
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n╠ 🔸️ ')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

let text = `
╔══✪〘 *sᴛᴀғғ* 〙✪══
╠ INVOCANDO A LAS MOSQUETERAS:
╠ ➥ GRUPO _${groupMetadata.subject}_
╠  ADMINS
╠ 🔸️ ${listAdmin}
╚═〘 _*PINGONBOT*_ 〙
[ ⚠ ️] Si lo usas pa joder te doy ban ctm
`.trim()
conn.sendFile(m.chat, pp, 'staff.png', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['staff']
handler.tags = ['group']
handler.command = ['staff', 'admins', 'listadmin'] 
handler.group = true
handler.register = true

export default handler

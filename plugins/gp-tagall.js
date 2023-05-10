let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`╔══✪〘 *REVIVAN PAJINES* 〙✪══\n╠➥ɢʀᴜᴘᴏs : *${groupMetadata.subject}*\n╠➥ Miembros : *${participants.length}*${text ? `\n╠\n╠➥ Mensaje : ${text}\n` : ''}\n╠\n╠➥ ᴇᴛɪǫᴜᴇᴛᴀs\n` + users.map(v => '╠🔸️ @' + v.replace(/@.+/, '')).join`\n` + '\n╚═〘 *PINGONBOT* 〙\n\n▌│█║▌║▌║║▌║▌║▌║█', null, {
        mentions: users
    })
}
 
handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.register = true

export default handler

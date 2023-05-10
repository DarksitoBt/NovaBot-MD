
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ ETIQUETA O MENCIONA A ALGUIEN`
        if (!(who in global.db.data.users)) throw `✳️  El usuario no se encuentra en mi SQL`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *ᴅᴇʟᴡᴀʀɴ*
sᴇ ʟᴇ ǫᴜɪᴛᴏ ᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ ⚠️ 
🔸️ᴡᴀʀɴ: *-1*
🔸️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴛᴏᴛᴀʟ: *${warn - 1}*`)
         m.reply(`🔸️ Un cheroka te quitó el warn, ahora tienes *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('🔸️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ ᴛɪᴇɴᴇ ɴɪɴɢᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true

export default handler

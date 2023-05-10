
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇ Buenas!!*
*┇ Este bot fue creado gracias a otras personas y a darksito c:*
*┇ Apoya a los demás developers en YT :D*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* ʏᴏᴜᴛᴜʙᴇ | sᴜsᴄʀɪʙɪʀᴛᴇ 🔕
*┃*  *https://www.youtube.com/@TheLoliBot-MD*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ɢɪᴛʜᴜʙ 🌟
*┃*  *#*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ᴛɪᴋᴛᴏᴋ
*┃*  *#*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ғᴀᴄᴇʙᴏᴏᴋ
*┃* *#*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'PINGONBOT', img, [['GRUPO', `${usedPrefix}grupos`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 
handler.register = true
export default handler

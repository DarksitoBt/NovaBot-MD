let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`╰⊱🔰⊱ *𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `

 ᴇsᴄʀɪʙɪᴍᴇ ᴀʟ wa.me/51
 `
let buttonMessage= {
'document': { url: `https://youtu.be/13xBCq2ifGs` },
'mimetype': `application/${document}`,
'fileName': `PINGONBOT`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': '',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial de la instalación',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '✳️ MENU ✳️'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
handler.register = true
export default handler

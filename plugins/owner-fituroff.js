import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Sukses Menonaktifkan Fitur 」*
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Ini Aku Saranin Kak',  
    sourceUrl: sgc, 
    thumbnail: await (await fetch(`https://telegra.ph/file/b1db1904e2128ffbdaa63.png`)).buffer()
      }}
     })
}    
handler.command = /^fituroff$/i

handler.owner = true

export default handler

/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */
 
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━ꕥ〔 Owner 〕ꕥ━⬣
┃✾ .block
┃✾ .unblock
┃✾ .broadcast <teks>
┃✾ .bc <teks>
┃✾ .broadcastchats <teks>
┃✾ .bcchats <teks>
┃✾ .broadcastgroup <teks>
┃✾ .bcgc <teks>
┃✾ .delesewa
┃✾ .addsewa <hari>
┃✾ .titlein [nama]
┃✾ .listpc
┃✾ .oadd @user
┃✾ .o+ @user
┃✾ .addowner [@user]
┃✾ .addprem [@user] <days>
┃✾ .backup
┃✾ .banchat
┃✾ .ban
┃✾ .R-NXZ-Adisty(on/off)
┃✾ .cleartmp
┃✾ .buatgrup  🅟
┃✾ .delowner [@user]
┃✾ .delprem [@user]
┃✾ .deleteuser
┃✾ .df
┃✾ .email
┃✾ >
┃✾ =>
┃✾ $ [Exec]
┃✾ .fix <database>
┃✾ .getdb
┃✾ .getfile <text>
┃✾ .getname <@tag/reply>
┃✾ .getsessi
┃✾ .getplugin <text>
┃✾ .ojoin <chat.whatsapp.com>
┃✾ .ookick @user
┃✾ .o- @user
┃✾ .leavegc
┃✾ .out
┃✾ .opromote @tag
┃✾ .resetlimit
┃✾ .resetprefix
┃✾ .restart
┃✾ .rf <old name> | <new name>
┃✾ .renamefile <old name> | <new name>
┃✾ .setbotbio
┃✾ .setmenu <teks>
┃✾ .setmenubefore <teks>
┃✾ .setmenuheader <teks>
┃✾ .setmenubody <teks>
┃✾ .setmenufooter <teks>
┃✾ .setmenuafter <teks>
┃✾ .setppbot
┃✾ .sf <teks>
┃✾ .simulate <event> [@mention]
┃✾ .tesbot
┃✾ .unbanchat
┃✾ .unban
┃✾ .self
┃✾ .public
┃✾ .unwarn @mention
┃✾ .warn @tag
┗━━━━━━━━━ꕥ`
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, `${wish()} ${name}`,runnya + '\n\n' + wm + '\n\n' + botdate, thumb, [['🧑OWNER','.owner']], m, {
  'document':{'url':'https://youtu.be/@skyzoNation'},
'mimetype':global.dpdf,
'fileName':'「 𝐑-𝐍𝐗𝙕 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/@skyzoNation',
                        mediaType: 2,
                        description: `⚘ 𝐑-𝐍𝐗𝙕`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ 𝐑-𝐍𝐗𝙕`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/@skyzoNation'
                        
                      }}
})
 let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/script.mp3`
  conn.sendFile(m.chat, vn, 'Fangz.Ganz', null, m, true, {
type: 'audioMessage',
ptt: true })
}


handler.help = ['menuowner']
handler.command = /^(menuowner)$/i

handler.limit = false
handler.register = true
handler.exp = 3

export default handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

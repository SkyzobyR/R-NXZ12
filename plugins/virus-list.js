let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 ๐ฅ๐-๐๐๐๐ฅ
          
                  
โโโโโโ *แดแดสษชแดแดแดแดษด* โโโโโโ
*๐ฎGunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `โ VIRTEX`,
	rows: [
	    {title: "๐Virtex 1", rowId: '.virtex1', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	    {title: "๐Virtex 2", rowId: '.virtex2', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 3", rowId: '.virtex3', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 4", rowId: '.virtex4', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 5", rowId: '.virtex5', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 6", rowId: '.virtex6', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
    {title: "๐Virtex 7", rowId: '.virtex7', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 8", rowId: '.virtex8', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 9", rowId: '.virtex9', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 10", rowId: '.virtex10', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 11", rowId: '.virtex11', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 12", rowId: '.virtex12', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 13", rowId: '.virtex13', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 14", rowId: '.virtex14', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
    {title: "๐Virtex 15", rowId: '.virtex15', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 16", rowId: '.virtex16', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 17", rowId: '.virtex17', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 18", rowId: '.virtex18', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	{title: "๐Virtex 19", rowId: '.virtex19', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
    {title: "๐Virtex 20", rowId: '.virtex20', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },

	]
    }, {
    title: `โ INFO`,
	rows: [
	    {title: "๐ฅDownload WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "๐ฅVirus Troli", rowId: '.virustroli', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	    {title: "๐ฅVirus Power", rowId: '.powerlist', description: 'Jangan lupa Subs Yt ๐-๐๐๐' },
	    ]
        }, {
    title: `โ BUY`,
	rows: [
	    {title: "๐ธUpgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "๐บGASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler

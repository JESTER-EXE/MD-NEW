const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const apkdl = require('../lib/apkdl')
let wm = `© 👨‍💻 𝐑𝐀𝐍𝐔 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻 v${require("../package.json").version} (Test)
sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ 𝚁𝙰𝙽𝚄 ッ`

var N_FOUND = "🚩 *I couldn't find anything :(*"
var urlneed = "🚩 *It downloads apps from playstore.*"
var imgmsg = "🚩 ``*Please write a few words*"



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------


cmd({
        pattern: "happymod",
        react: "🗃️",
        desc: "Download apk in happymod",
        category: "download",
        use: '.happymod',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
        pushname,
        reply
    }) => {
        try {

const api = require("caliph-api")
const vid = await api.search.happymod(q)
let listdata = `> ❍⚯────────────────────⚯❍ 
🎲 *𝙷𝙰𝙿𝙿𝚈 𝙼𝙾𝙳𝚂 𝙰𝙿𝙺 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🎲
⚡ *𝚁𝙰𝙽𝚄-ᴍᴅ ʜ ᴍᴏᴅꜱ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡
❍⚯────────────────────⚯❍`


            const rows = []
      for (let i of vid.result ) {     
                rows.push({
                    header: i + 1,
                    title: `${i.title}`,
                    description: `📬 *Title - ${i.title}* \n🔗 _Url : ${i.link}_`,
                    id: `.dapk ${i.link}` + q
                }) 
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Select news types',
                        sections: [{
                            title: 'Please select a category',
                            highlight_label: '𝚁𝙰𝙽𝚄-MD',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: listdata

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
        pattern: "fmmods",
        react: "🗃️",
        desc: "get applications",
        category: "download",
        use: '.fmmods',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
        pushname,
        reply
    }) => {
        try {
  let response = (await fetchJson('https://vajira-api-7967fdc132a8.herokuapp.com/downloader/fmmods')).data
	let listdata = `> 📥 ＲＡＮＵ MD APKDL 📥

	 APPLICATION DOWNLOADER 📥`


            const rows = []
           
    for (var i = 0; i < 1; i++) {
                rows.push({
                    header: ``,
                    title: `Beta Whatsapp`,
                    description: `Download Beta Whatsapp`,
                    id: `.dmod ` + response.com_whatsapp.link + '+' + response.com_whatsapp.name
                }),
		rows.push({
                    header: ``,
                    title: `Fm Whatsapp`,
                    description: `Download Fm Whatsapp`,
                    id: `.dmod ` +  response.com_fmwhatsapp.link + '+' + response.com_fmwhatsapp.name
                }),
		rows.push({
                    header: ``,
                    title: `Gb Whatsapp`,
                    description: `Download Gb Whatsapp`,
                    id: `.dmod ` + response.com_gbwhatsapp.link + '+' + response.com_gbwhatsapp.name
                }),
		rows.push({
                    header: ``,
                    title: `Yo Whatsapp`,
                    description: `Download Yo Whatsapp`,
                    id: `.dmod ` + response.com_yowhatsapp.link + '+' + response.com_yowhatsapp.name
                })
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Select news types',
                        sections: [{
                            title: 'Please select a category',
                            highlight_label: '𝚁𝙰𝙽𝚄-MD',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: listdata

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


  
cmd({
  pattern: "dmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  modname + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})



cmd({
        pattern: "apk2",
        react: "🗃️",
        desc: "get applications",
        category: "download",
        use: '.apk2 whatsapp',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
        pushname,
        reply
    }) => {
        try {
		const data2 = await apkdl.search(q)
const data = data2
	let listdata = `> 📥 ＲＡＮＵ MD APKDL 📥

	 APPLICATION DOWNLOADER 📥`


            const rows = []
           
    for (var i = 0; i < data.length; i++) {
                rows.push({
                    header: i + 1,
                    title: `${data[i].name}`,
                    description: ``,
                    id: `.dapk ` + data[i].id
                }) 
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Select news types',
                        sections: [{
                            title: 'Please select a category',
                            highlight_label: '𝚁𝙰𝙽𝚄-MD',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: listdata

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


cmd({
        pattern: "apk",
        react: "🗃️",
        desc: "apk download.",
        category: "download",
        use: '.apk whatsapp',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
        pushname,
        reply
    }) => {
        try{
            if(!q) return await conn.sendMessage(from , { text: '*Need apk name...*' }, { quoted: msg } ) 
const data = await apkdl.download(q)
let listdata = `[👨‍💻 ＲＡＮＵ - ＭＤ - Ｖ1 👨‍💻]
   
 *APK-DOWNLOADER*

 *📚 ᴀᴘᴘ ɴᴀᴍᴇ: ${data.name}*
 *📈 ᴀᴘᴘ ꜱɪᴢᴇ: ${data.size}*
 
─────────────────────────────`
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'see in playstore',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Download apk 📥",
                        id: ".dapk " + q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Info of apk 📊",
                        id: ".apkinfo " + q
                    }),
                }
                ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: listdata

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


cmd({
    pattern: "dapk",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '*𝚁𝙰𝙽𝚄-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "apkinfo",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
    var msg = mek
await conn.sendMessage(from, { react: { text: 'ℹ️', key: msg.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: msg } ) 
const data = await apkdl.download(q)
let listdata = `╔═══════════════════╗
*║🤳𝚁𝙰𝙽𝚄 PLAYSTORE-SEARCH*
╚═══════════════════╝

*📚 ᴀᴘᴘ ɴᴀᴍᴇ: ${data.name}* 

*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): ${data.size}*

*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: ${data.lastup}*

*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ: ${data.package}* 

_*◯──────────────────────────────────◯*_`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: msg })
await conn.sendMessage(from, { react: { text: '✔', key: msg.key }})
} catch (e) {
  l(e)
}
})
			       



//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------



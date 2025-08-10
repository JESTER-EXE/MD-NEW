const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------


cmd({
        pattern: "xnxx",
        react: "🗃️",
        desc: "Get news",
        category: "download",
        use: '.xxx',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
	isMe,
	prefix,
        pushname,
        reply
    }) => {
        try {
	 if (!isMe) return await reply(' 🔐 Premium users only can use this command\nbuy via message to owner buy type .owner!!')	
		const fg = require('api-dylux')
	let res = await fg.xnxxSearch(q)
	let listdata = `> 🤤 RANU MD XXXDL 🤤	

	> DONT USE FOR WRONG THINGS ✖`
            
            const rows = []
           

let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) mek.reply(ff)
const data = res.result
    for (var i = 0; i < data.length; i++) {
                rows.push({
                    header: i + 1,
                    title: `${data[i].title}`,
                    description: ``,
                    id: `${prefix}xnxxdl ` + data[i].link
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
                            highlight_label: 'RANU-MD',
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
            return await conn.sendButtonMessage(from, buttons, m, opts, { quoted: mek});
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "xnxxdl",
    react: '👾',
    desc: 'to take xnxx video',
    category: "download",
    use: '.xnxxdl',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!q.includes('xnxx.com')) return mek.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(q)
conn.sendMessage(mek.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: mek })
} catch (e) {
l(e)
}
})   



//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------

		

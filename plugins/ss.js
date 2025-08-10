const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`


async function sswebA(url = '', full = false, type = 'desktop') {
	type = type.toLowerCase()
	if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
	let form = new URLSearchParams()
	form.append('url', url)
	form.append('device', type)
	if (!!full) form.append('full', 'on')
	form.append('cacheLimit', 0)
	let res = await axios({
		url: 'https://www.screenshotmachine.com/capture.php',
		method: 'post',
		data: form
	})
	let cookies = res.headers['set-cookie']
	let buffer = await axios({
		url: 'https://www.screenshotmachine.com/' + res.data.link,
		headers: {
			'cookie': cookies.join('')
		},
		responseType: 'arraybuffer' 
	})
	return Buffer.from(buffer.data)
}


//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------





cmd({
        pattern: "ss",
        react: "🗃️",
        desc: "Url to screenshot convert",
        category: "convert",
        use: '.ss',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        q,
        pushname,
        reply
    }) => {
        try {
            const msg = `\`✦ 𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 𝗧𝗔𝗞𝗘𝗥 ✦\`
    `

          const categories = [];
            const categoryMap = new Map();

           for (let i = 0; i < 1; i++) {
                const cmd = commands[i];
                if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                    const category = cmd.category.toUpperCase();
                    if (!categoryMap.has(category)) {
                        categories.push(category);
                        categoryMap.set(category, []);
                    }
                    categoryMap.get(category).push(cmd.pattern);
                }
            }
            const rows = []
           for (const category of categories) {


                rows.push({
                    header: 'Select you want type',
                    title: `Desktop type`,
                    description: '',
                    id: `.desktop ` + q
                }),
                rows.push({
                    header: '',
                    title: `Phone type`,
                    description: '',
                    id: `.ssphone ` + q
                }),  
                rows.push({
                    header: '',
                    title: `Tab type`,
                    description: '',
                    id: `.sstab ` + q
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
                        title: 'Select screenshot types',
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
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


cmd({
    pattern: "desktop",
    use: '.screenshot',
    react: "🎥",
    desc: 'Convert url to screenshot',
    category: "",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            let name = getRandom('')
let data = await sswebA(q,true,'desktop')
fs.writeFileSync(name + '.jpg', data);
let dat = `[👨‍💻 ＲＡＮＵ - ＭＤ - Ｖ1 👨‍💻]

   *📸 SCREENSHOT GETTER*`
    

            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Image type",
                    id: ".ssi " + name + '.jpg'
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document type",
                    id: ".ssd " + name + '.jpg'
                }),
            }
            ]
            let message = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: dat

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });


cmd({
    pattern: "ssphone",
    use: '.screenshot',
    react: "🎥",
    desc: 'Convert url to screenshot',
    category: "",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            let name = getRandom('')
let data = await sswebA(q,true,'phone')
fs.writeFileSync(name + '.jpg', data);
let dat = `[👨‍💻 ＲＡＮＵ - ＭＤ - Ｖ1 👨‍💻]

   *📸 SCREENSHOT GETTER*`
    

            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Image type",
                    id: ".ssi " + name + '.jpg'
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document type",
                    id: ".ssd " + name + '.jpg'
                }),
            }
            ]
            let message = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: dat

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });


cmd({
    pattern: "sstab",
    use: '.screenshot',
    react: "🎥",
    desc: 'Convert url to screenshot',
    category: "",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            let name = getRandom('')
let data = await sswebA(q,true,'tablet')
fs.writeFileSync(name + '.jpg', data);
let dat = `[👨‍💻 ＲＡＮＵ - ＭＤ - Ｖ1 👨‍💻]

   *📸 SCREENSHOT GETTER*`
    

            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Image type",
                    id: ".ssi " + name + '.jpg'
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document type",
                    id: ".ssd " + name + '.jpg'
                }),
            }
            ]
            let message = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: dat

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });





cmd({
  pattern: "ssi",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { image: fs.readFileSync(q), caption: config.FOOTER }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "ssd",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: fs.readFileSync(q), mimetype: 'image/jpeg', fileName: 'screenshot' + '.jpg',caption: config.FOOTER  }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


                                                                                                                                                 


//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------


const config = require('../settings');
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const getFbVideoInfo = require("fb-downloader-scrapper")


var needus = "🚩*Please give me facebook url !!*" 
var cantf = "🚩 *I cant find this video!*" 



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------


cmd({
    pattern: "fb",
    alias: ["facebook"],
    use: '.fb https://www.facebook.com/100029474354770/videos/837567391064603/',
    react: "🎥",
    desc: 'Download videos from facebook',
    category: "download",
    filename: __filename

},

    async (conn, m, mek, { from, q, prefix, reply }) => {
        if (!q || !q.includes('facebook.com')) return await reply('*Please enter a valid facebook url!*');
        const url = q.replace(/\?mibextid=[^&]*/, '');
        getFbVideoInfo(url)
            .then((result) => {
                const msg = `\`✦ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦\`
`

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on Facebook',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SD Quality",
                        id: `${prefix}downfb ` + result.sd
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "HD Quality",
                        id: `${prefix}downfb ` + result.hd
                    }),
                }
                ]
                let message = {
                    image: result.thumbnail,
                    header: '',
                    footer: config.FOOTER,
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
            }).catch((err) => {
                console.log(err)
            })


    });


cmd({
    pattern: "downfb",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Not Found!*')

            await conn.sendMessage(from, { video: { url: q } }, { quoted: mek })
            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


      
//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------
                    

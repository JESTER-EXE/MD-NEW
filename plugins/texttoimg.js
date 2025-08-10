const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct = "It convert given text to ai image."
var imgmsg = "*Example: .imagine woman,hair cut collor red,full body,bokeh*"
var cantf = "*Server is busy. Try again later.!*"
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
cmd({
    pattern: "texttoimgv1",
    react: '🤖',
    alias: ["texttoimagev1","toimagev1","t2iv1"],
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v3/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "prodia",
    alias: ["texttoimage4","toimage4","t2i4"],
    react: '🤖',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/prodia/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg2",
    alias: ["texttoimage2","toimage2","t2i2"],
    react: '🤖',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v2/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg3",
    alias: ["texttoimage3","toimage3","t2i3"],
    react: '🤖',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v1/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "aemtv1",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v1/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv2",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v2/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv3",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v3/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv4",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v4/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv5",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v5/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv6",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
await conn.sendMessage(from, { image: { url: `https://aemt.me/v6/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})



//================================================================================================================================================

cmd({
  pattern: "texttoimage",
  react: "🗃️",
  alias: ["t2i","texttoimg","text2img"],
  desc: "Get bot\'s command list.",
  category: "convert",
  use: '.texttoimage',
  filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
let monspace ='```'
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Follow Our Channel',
                        url: `https://whatsapp.com/channel/0029VbBIIzKJP21DcJla2S1s`,
                        merchant_url: `https://whatsapp.com/channel/0029VbBIIzKJP21DcJla2S1s`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: 'TextToImage V1',
                     // description: `X`,
                     id: ".aemtv1 " + q
                  }, {
                     title: 'TextToImage V2',
                     // description: `X`,
                     id: ".aemtv2 " + q
                  }, {
                     title: 'TextToImage V3',
                     // description: `X`,
                     id: ".aemtv3 " + q
                  }, {
                     title: 'TextToImage V4',
                     // description: `X`,
                     id: ".aemtv4 " + q
                  }, {
                     title: 'TextToImage V5',
                     // description: `X`,
                     id: ".aemtv5 " + q
                  }, {
                     title: 'TextToImage V6',
                     // description: `X`,
                     id: ".aemtv6 " + q
                  }, {
                     title: 'TextToImage V1 Hercai',
                     // description: `X`,
                     id: ".texttoimgv1" + q
                  }, {
                     title: 'TextToOmage V2 Heracai',
                     // description: `Y`,
                     id: ".texttoimg2" + q
                  }, {
                     title: 'TextToImage V3 Hercai',
                     // description: `Y`,
                     id: ".texttoimg3" + q
                  }, {
                     title: 'Prodia Hercai',
                     // description: `Y`,
                     id: ".prodia " + q
                  }]
               }]
            })
         }]
let msg = ` TexttoImage generater`

let message = {
                    image: `https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg`,
                    header: '.',
                    footer: config.FOOTER,
                    body: msg

                }
return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

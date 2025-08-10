const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {unsplash, pixabay} = require("@sl-code-lords/image-library")
const gis = require('async-g-i-s')
const { googleImage } = require('@bochilteam/scraper')
const axios = require('axios')
const cheerio = require('cheerio')

var imgmsg = "```Please write a few words!```"
var desc = "Search for related pics on Google."
var desc2 = "Search for related pics on unsplash.com."
var desc3 = "Search for related pics on pixabay.com."
var desc4 = "Searche for related pics on bing."
var desc4 = "Searche for related wallpapers."
let foot = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
var errt = "*I couldn't find anything :(*"




//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------









cmd({
        pattern: "img",
        react: "🗃️",
        desc: "image list.",
        category: "download",
        use: '.img',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	q,
	prefix,
        pushname,
        reply
    }) => {
        try{
            const MNG = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻
   
 ▏ *IMG-DOWNLOADER*

 ▏ *🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ: ${pushname}*
 ▏ *✏️ ʀᴇꜱᴜʟᴛ: ${q}*

└──────◉`
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'see in google',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Normal type 🖼️",
                        id: `${prefix}imgno ` + q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Document type 📂",
                        id: `${prefix}imgdoc ` + q
                    }),
                }
                ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: MNG

            }
            return await conn.sendButtonMessage(from, buttons, m, opts, { quoted: mek});
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })


cmd({
    pattern: "imgno",
    react: '👾',
    desc: 'to down images',
    category: "",
    use: '.im',
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
    
    if (!q) throw `Example: ${prefix + command} Bike`

   let gis = require('g-i-s')
    gis(q, async (error, result) => {
        if (error) {
            console.error('Error fetching images:', error);
		
            return reply('Error fetching images. Please try again later.')
        }

        const topImages = result.slice(0, 5); // Extract top 5 images

        for (let i = 0; i < topImages.length; i++) {
            const imageUrl = topImages[i].url
          let Message = {
              image: { url: imageUrl },caption: `*-------「 ＲＡＮＵ MD GIMAGE SEARCH 」-------*\n🤠 *Query* : ${q}\n\n🔗 *Image ${i + 1} Url* : ${imageUrl}`,
           }

//let senda = await conn.sendMessage(from, { document: {url: imageUrl },fileName: 'image' + '.jpg', mimetype: 'image/jpeg' ,caption: `*-------「 ＲＡＮＵ MD GIMAGE SEARCH 」-------*\n🤠 *Query* : ${q}\n\n🔗 *Image ${i + 1} Url* : ${imageUrl}`,}, { quoted: mek })  
		
            conn.sendMessage(from, Message, { quoted: mek })
        }
    })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch (e) {
l(e)
}
})




cmd({
    pattern: "imgdoc",
    react: '👾',
    desc: 'to down images',
    category: "",
    use: '.im',
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
    
    if (!q) throw `Example: ${prefix + command} Bike`

  let gis = require('g-i-s')
    gis(q, async (error, result) => {
        if (error) {
            console.error('Error fetching images:', error);
		
            return reply('Error fetching images. Please try again later.')
        }

        const topImages = result.slice(0, 5); // Extract top 5 images

        for (let i = 0; i < topImages.length; i++) {
            const imageUrl = topImages[i].url
          let Message = {
              document: { url: imageUrl },fileName: 'image' + '.jpg', mimetype: 'image/jpeg' ,caption: `*-------「 ＲＡＮＵ MD GIMAGE SEARCH 」-------*\n🤠 *Query* : ${q}\n\n🔗 *Image ${i + 1} Url* : ${imageUrl}`,
           }

conn.sendMessage(from, Message, { quoted: mek })
        }
    })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch (e) {
l(e)
}
})



cmd({
    pattern: "dimg",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
    await conn.sendMessage(from, { image: { url: q }, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  console.log(e)
}
})






cmd({
    pattern: "img2",
    react: '🖼️',
    alias: ["unsplash"],
    desc: desc2,
    category: "download",
    use: '.img2 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
const msg = `乂 U N S P L A S H - D O W N L O A D E R `
const results = await unsplash.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + data.result[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
} catch (e) {
reply(errt)
l(e)
}
})
cmd({
    pattern: "img3",
    react: '🖼️',
    alias: ["pixabay"],
    desc: desc3,
    category: "download",
    use: '.img3 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
const msg = `乂 P I X A B A Y - D O W N L O A D E R `
const results = await pixabay.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + data.result[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
} catch (e) {
reply(errt)
console.log(e)
}
})

//=============================================================================
cmd({
    pattern: "wallpaper",
    react: '🖼️',
    alias: ["img4","wallp","wp"],
    desc: desc4,
    category: "download",
    use: '.img4 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
const msg = `乂 W A L L P A P E R - D O W N L O A D E R `
let res = await wallpaper(q)
if (res < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < res.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              description: "Source: wallpaperflare.com",
              id: prefix + 'dimg ' + res[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek}); 
} catch (e) {
  reply(errt)
console.log(e)
}
})

cmd({
    pattern: "dimg",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
    await conn.sendMessage(from, { image: { url: q }, caption: foot }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  console.log(e)
}
})

//---------------------------pin------------------

cmd({
    pattern: "pin",
    react: '🖼️',
    alias: ["pinterest"],
    desc: desc2,
    category: "download",
    use: '.pin supra',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
const msg = `乂 P I N - D O W N L O A D E R `
const res = await fetchJson('https://allstars-apis.vercel.app/pinterest?search=' + q)
let data = res.data
if (res.data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < res.data.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + res.data[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
} catch (e) {
reply(errt)
l(e)
}
})


	
//---------------------------------------------------------------------------
    }
//---------------------------------------------------------------------------

	

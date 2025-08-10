const config = require('../settings')
const puppeteer = require('puppeteer');
const dl = require('@bochilteam/scraper')  
const yts = require("yt-search")
const ytdl = require("@distube/ytdl-core")
const l = console.log
const fs = require('fs-extra')
const fg = require('api-dylux');


var videotime = 60000 // 1000 min
function ytreg(url) {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    return ytIdRegex.test(url);
}
const dl2 = require('inrl-dl')
const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
const {
    cmd,
    commands
} = require('')



let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();


function formatUploadDate(uploadDate) {
  const date = new Date(uploadDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}


async function youtube720(url) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://en.y2mate.is/');
      await page.waitForSelector('#txtUrl');
      await page.type('#txtUrl', url);
      await page.click('#btnSubmit'),
      await page.waitForSelector('#tabVideo .tableVideo');
      await page.click('#tabVideo tr:nth-child(2) td .btn')
      await page.waitForSelector('#tabVideo tr:nth-child(2) td .btn a');
      const p720 = await page.$eval('#tabVideo tr:nth-child(2) td .btn a', link => link.href);
      await browser.close();

      return p720;
    } catch (error) {
      console.error('Error occurred:', error);
      return null;
    }
  }


var descv =''
if(config.LANG === 'SI') descv = "Youtube වෙතින් videos බාගත කරයි."
else descv = "Download videos from Youtube."

var descs =''
if(config.LANG === 'SI') descs = "Youtube වෙතින් songs බාගත කරයි."
else descs = "Download songs from Youtube."

var descyt =''
if(config.LANG === 'SI') descyt = "Youtube වෙතින් video සහ songs බාගත කරයි."
else descyt = "Download videos and songs from Youtube."

var descsh =''
if(config.LANG === 'SI') descsh = "Youtube search බාගත කරයි."
else descsh = "Search and get details from youtube."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*Youtube හි ඔබ තේරු quality එක නැත වෙන quality එකක් තෝරන්න :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me youtube url..*"

var urlneed1 =''
if(config.LANG === 'SI') urlneed1 = "එය soundcloud වෙතින් songs බාගත කරයි."
else urlneed1 = "It downloads songs from soundcloud."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

var sizetoo =''
if(config.LANG === 'SI') sizetoo = "_This file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*"
else sizetoo =  "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*"


//---------------------------------------------------------------------------



cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts lelena',
    react: "🔎",
    desc: 'Search videos from youtube',
    category: "search",
    filename: __filename

},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query to search!*')
            var result = await yts(q);
            var msg = '';
            result.videos.map((video) => {
                msg += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
            });
            await conn.sendMessage(from, { text: msg }, { quoted: mek })
        } catch (e) {
            reply('*Error !!*')
            l(e)
        }
    });




//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------


          
cmd({
    pattern: "video",
    alias: ["ytmp4"],
    use: '.video lelena',
    react: "🎥",
    desc: 'Download videos from youtube',
    category: "download",
    filename: __filename

},

    async (conn, m, mek, { from, q, prefix, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            const url = q.replace(/\?si=[^&]*/, '');
            var results = await yts(url);
            var result = results.videos[0]
            const msg = `\`✦ 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦\`
    
> *\`➤ Title\` :* ${result.title}
    
> *\`➤ Views\` :* ${result.views}
    
> *\`➤ Duration\` :* ${result.duration}
    
> *\`➤ URL\` :* ${result.url}
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
                    header: "Normal types videos",
                    title: "240P VIDEO",
                    description: "Download 240 quality video",
                    id: `${prefix}240p ` + result.url
                
                }),
                rows.push({
                    header: "",
                    title: "360P VIDEO",
                    description: "Download 360 quality video",
                    id: `${prefix}360p ` + result.url
                
                }),
                rows.push({
                    header: "",
                    title: "480P VIDEO",
                    description: "Download 480 quality video",
                    id: `${prefix}480p ` + result.url
                
                }), 
                rows.push({
                    header: "",
                    title: "720P VIDEO",
                    description: "Download 720 quality video",
                    id: `${prefix}720p ` + result.url
                
                }), 
                rows.push({
                    header: "",
                    title: "1080P VIDEO",
                    description: "Download 1080 quality video",
                    id: `${prefix}1080p ` + result.url
                
                })
	   }
		
	const rows2 = []
           for (const category of categories) {
                rows2.push({
                    header: "Document type videos",
                    title: "240P VIDEO",
                    description: "Download 240 quality video",
                    id: `${prefix}24p`  + result.url
                
                }),
		rows2.push({
                    header: "",
                    title: "360P VIDEO",
                    description: "Download 360 quality video",
                    id: `${prefix}36p ` + result.url
                
                }),
	        rows2.push({
                    header: "",
                    title: "480P VIDEO",
                    description: "Download 480 quality video",
                    id: `${prefix}48p ` + result.url
                
                }),
		rows2.push({
                    header: "",
                    title: "720P VIDEO",
                    description: "Download 720 quality video",
                    id: `${prefix}72p ` + result.url
                
                }),
                rows2.push({
                    header: "",
                    title: "1080P VIDEO",
                    description: "Download 1080 quality video",
                    id: `${prefix}108p ` + result.url
                
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
                        title: 'Normal type videos',
                        sections: [{
                            title: 'Please select a category',
                            highlight_label: 'RANU-MD',
                            rows: rows

                        }]
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Document type videos',
                        sections: [{
                            title: 'Please select a category',
                            highlight_label: 'RANU-MD',
                            rows: rows2

                        }]
                    }),
                }                       
            ]
            let message = {
                image: result.thumbnail,
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            reply('*Error !!*')
            l(e)
        }
    });

cmd({
    pattern: "yt360",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Need a youtube url!*')
            let info = await ytdl.getInfo(q);
            let title = info.videoDetails.title;
            let randomName = getRandom(".mp4");
            const stream = ytdl(q, {
                filter: (info) => info.container == 'mp4' && info.itag == '18',
            }).pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            if (!stream) return reply('*360p quality not found please try another!*')
            let stats = fs.statSync(`./${randomName}`);
            let size = stats.size / (1024 * 1024);
            if (size <= 1024) { 
                if (size <= 100) {
                    const video = await conn.sendMessage(from, { video: fs.readFileSync(`./${randomName}`)}, { quoted: mek })
                    await conn.sendMessage(from, { react: { text: '🎼', key: video.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                } else {
                    const document = await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: title + '.mp4' }, { quoted: mek })
                    await conn.sendMessage(from, { react: { text: '🎼', key: document.key } })
                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    return fs.unlinkSync(`./${randomName}`);
                }
            } else {
                fs.unlinkSync(`./${randomName}`);
                return reply('*File size is too big!*') 
            }     
        } catch (e) {
            reply('*Error !!*')
            l(e)
        }
    })

    cmd({
        pattern: "yt720",
        react: "🎥",
        dontAddCommandList: true,
        filename: __filename
    },
    
        async (conn, mek, m, { from, q, reply }) => {
            try {
                if (!q) return await reply('*Need a youtube url!*')
                let info = await ytdl.getInfo(q);
                let title = info.videoDetails.title;
                const result = await youtube720(q)
                let size = await getsize(result)
                if (size.includes('MB')) {
                   size = size.replace(' MB','')
                } else if (size.includes('GB')) {
                    size = size.replace(' GB','') * 1024
                }
                if (size <= 1024) {
                    if (size <= 100) {
                        const video = await conn.sendMessage(from, { video: {url: result}}, { quoted: mek })
                        await conn.sendMessage(from, { react: { text: '🎼', key: video.key } })
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    } else {
                        const document = await conn.sendMessage(from, { document: {url: result}, mimetype: 'video/mp4', fileName: title + '.mp4' }, { quoted: mek })
                        await conn.sendMessage(from, { react: { text: '🎼', key: document.key } })
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                    }
    
                } else {
                    reply('*File size is too big!*')
                }
            } catch (e) {
                reply('*Error !!*')
                l(e)
            }
        })



cmd({
  pattern: "song",
  category: "download",
  react: "🎧",
  use: ".song2 <song name>",
  desc: "youtube audio downloader",
  filename: __filename
  },
async (conn, mek, m, {
  reply,
  from,
  q,
  prefix
}) => {
  try {
    if (!q) return await reply("plase give me name !")
    const zxc = await yts(q)
    const info = zxc.videos[0]
    const url = info.url
    let dl = await fg.yta(url)
    const msg = `\`✦ 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦\`

> *\`➤ Title\` :* ${info.title}

> *\`➤ Size\` :* ${info.size}

> *\`➤ Duration\` :* ${info.timestamps}

> *\`➤ Quality\` :* ${dl.quality}				   

> *\`➤ URL\` :* ${info.url}
`
let buttons = [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Audio 🎧",
                        id: `${prefix}ytaud ` + info.url
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Document 📁",
                        id: `${prefix}ytdoc ` + info.url
                    }),
                }
                ]
                let message = {
                    image: info.thumbnail,
                    header: '',
                    footer: config.FOOTER,
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
    
cmd({
  pattern: "ytaud",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
        try {
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
let dl = await fg.yta(q)
let sendapk = await conn.sendMessage(from , { audio : { url : dl.dl_url  } ,mimetype: 'audio/mpeg', fileName : dl.title + '.' + 'mp3'} , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
cmd({
  pattern: "ytdoc",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
        try {
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
let dl = await fg.yta(q)
let sendapk = await conn.sendMessage(from , { document : { url : dl.dl_url  } ,mimetype: 'audio/mpeg', fileName : dl.title + '.' + 'mp3'} , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


                

cmd({
    pattern: "240p",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
},


async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['240p'].download())
let senda = await conn.sendMessage(from, { video: {url: await yt.video['240p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------
cmd({
  pattern: "360p",
  react: "📽️",
  dontAddCommandList: true,
    filename: __filename
},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['360p'].download())
let senda = await conn.sendMessage(from, { video: {url: await yt.video['360p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "480p",
  react: "📽️",
  dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['480p'].download())
let senda = await conn.sendMessage(from, { video: {url: await yt.video['480p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "720p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['720p'].download())
let senda = await conn.sendMessage(from, { video: {url: await yt.video['720p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "1080p",
  react: "📽️",
  dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['1080p'].download())
let senda = await conn.sendMessage(from, { video: {url: await yt.video['1080p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
    pattern: "24p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['240p'].download())
let senda = await conn.sendMessage(from, { document: {url: await yt.video['240p'].download() },fileName: 'video.mp4', mimetype: 'video/mp4' ,caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})
	
cmd({
    pattern: "36p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['360p'].download())
let senda = await conn.sendMessage(from, { document: {url: await yt.video['360p'].download() },fileName: 'video.mp4', mimetype: 'video/mp4' ,caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})




cmd({
    pattern: "48p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['480p'].download())
let senda = await conn.sendMessage(from, { document: {url: await yt.video['480p'].download() },fileName: 'video.mp4', mimetype: 'video/mp4' ,caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

				      

cmd({
    pattern: "72p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['720p'].download())
let senda = await conn.sendMessage(from, { document: {url: await yt.video['720p'].download() },fileName: 'video.mp4', mimetype: 'video/mp4' ,caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
    pattern: "108p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename

},

async (conn, m, mek, { from, q, reply }) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['1080p'].download())
let senda = await conn.sendMessage(from, { document: {url: await yt.video['1080p'].download() },fileName: 'video.mp4', mimetype: 'video/mp4' ,caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})    




//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------
			      

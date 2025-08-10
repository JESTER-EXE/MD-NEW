const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var request = require("request")
const fetch = require("node-fetch");
var cheerio = require("cheerio")
let soundcloud = async (link) => {
	return new Promise((resolve, reject) => {
		const options = {
			method: 'POST',
			url: "https://www.klickaud.co/download.php",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				'value': link,
				'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
			}
		};
		request(options, async function(error, response, body) {

			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			resolve({
				judul: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
				download_count: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			});
		});
	})
}

let axios=require("axios");
async function ssearch (i){let e="https://m.soundcloud.com",t=await axios.get(`${e}/search?q=${encodeURIComponent(i)}`,{headers:{"User-Agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}}),a=cheerio.load(t.data),d=[];return a("div > ul > li > div").each((function(i,t){let r=a(t).find("a").attr("aria-label"),v=e+a(t).find("a").attr("href"),s=a(t).find("a > div > div > div > picture > img").attr("src"),n=a(t).find("a > div > div > div").eq(1).text(),o=a(t).find("a > div > div > div > div > div").eq(0).text(),u=a(t).find("a > div > div > div > div > div").eq(1).text(),l=a(t).find("a > div > div > div > div > div").eq(2).text();d.push({title:r,url:v,thumb:s,artist:n,views:o,release:l,timestamp:u})})),{status:t.status,creator:"Caliph",result:d}}

var N_FOUND = "*I couldn't find anything :(*"
var urlneed = "It downloads songs from soundcloud."
var imgmsg = "```Please write a few words!```"



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------

 cmd(
   {
     pattern: "allsocial",
     desc: "Download media from various social platforms.",
     category: "download",
     filename: __filename,
     use: "<url>",
   },
   async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
       if (!q) {
         return await reply("*_Please provide a URL!_*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/alldownload2?url=${encodeURIComponent(
         q
       )}`;
       const response = await fetch(apiUrl);
 
       if (!response.ok) {
         return await reply(
           `*_Error: ${response.status} ${response.statusText}_*`
         );
       }
 
       const data = await response.json();
       const result = data.result;
 
       if (!result || !result.medias || !result.medias.length) {
         return await reply("*_No media found!_*");
       }
 
       const { title, thumbnail, medias } = result;
       const caption = `*Title:* ${title}\n\n*Source:* ${medias[0].source}`;
 
       await conn.sendFromUrl(from, thumbnail, caption, m, {}, "image");
 
       for (const media of medias) {
         const { url, formattedSize, quality, extension } = media;
         const mediaCaption = `*Quality:* ${quality}\n*Size:* ${formattedSize}\n*Extension:* ${extension}`;
         await conn.sendFromUrl(from, url, mediaCaption, m, {}, "video");
       }
     } catch (e) {
       reply(`${e}\n\ncommand: allsocial`, e);
     }
   }
 );

cmd({
    pattern: "soundcloud",
    react: "📱",
    alias: ["song2","scdl"],
    desc: urlneed,
    category: "download",
    use: '.soundcloud lelena',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await ssearch(q)
const data = data2.result
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )

var sections = []
        for (var i = 0; i < data.length; i++) {
        if(data[i].thumb && !data[i].views.includes('Follow')){
          sections.push({
            rows: [{
              title: data[i].title,
	      description:  data[i].artist + ' | ' + data[i].views + ' | '+ data[i].release + ' | '+ data[i].timestamp,
              id: prefix + 'selectaud2 ' + data[i].url
            }]
          })
        }}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029VbBIIzKJP21DcJla2S1s`,
                        merchant_url: `https://whatsapp.com/channel/0029VbBIIzKJP21DcJla2S1s`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from m.soundcloud.com 📲',
                        sections
                    })
                }]

let msg =  `┌───[ 👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻 ]

   *SOUNDCLOUD DOWNLOADER*

*📱 Entered Name:* ${q}`
    
        let message = {
            image: `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/soundcloud-logo-freelogovectors.net_.png`,
            header: '',
            footer: config.FOOTER,
            body: msg
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
  alias: ["selectaud2"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻
  *SELECT SONG TYPE*`
	
            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "DOCUMENT SONG",
                    id: prefix + 'sounddoc ' + q
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "AUDIO SONG",
                    id: prefix + 'soundaud ' + q
                }),
            }
            ]
            let message = {
                image: `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/soundcloud-logo-freelogovectors.net_.png`,
                header: '',
                footer: config.FOOTER,
                body: dat

            }
            return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
    pattern: "sounddoc",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
const data = await soundcloud(q)
let listdata = `*📚 Name :* ${data.judul}
*📺 Down Count :* ${data.download_count}`
await conn.sendMessage(from, { image: { url: data.thumb }, caption: listdata }, { quoted: mek })
let sendapk = await conn.sendMessage(from , { document : { url : data.link  } ,mimetype: 'audio/mpeg', fileName : data.judul + '.' + 'mp3'} , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

cmd({
  pattern: "soundaud",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
const data = await soundcloud(q)
let listdata = `*📚 Name :* ${data.judul}
*📺 Down Count :* ${data.download_count}`
await conn.sendMessage(from, { image: { url: data.thumb }, caption: listdata }, { quoted: mek })
let sendapk = await conn.sendMessage(from , { audio : { url : data.link  } ,mimetype: 'audio/mpeg', fileName : data.judul + '.' + 'mp3'} , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})



//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------


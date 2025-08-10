const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const axios = require("axios")
const fetch = require('node-fetch')
const fg = require('api-dylux')
var {subsearch , subdl }  = require('@sl-code-lords/si-subdl')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {  
    igstalker,
    tikstalk
} = require('../lib/stalker')


//  Bot Prosess Time
  const uptime = process.uptime()
const day = Math.floor(uptime / (24 * 3600)) // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600) // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60) // Calculate minutes
const seconds = Math.floor(uptime % 60) // Calculate seconds



var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති tiktok username පිළිබඳ විස්තර සපයයි.'
else desct = "It gives details of given tiktok username."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට tiktok username ලබා දෙන්න !*'
else needus = "*Please give me a tiktok username !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*මට මෙම tiktok පරිශීලකයා tiktok හි සොයාගත නොහැක !*'
else cantf = "*I cant find this user on tiktok !*"
var desct1 =''
if(config.LANG === 'SI') desct1 = 'එය ලබා දී ඇති instagram username පිළිබඳ විස්තර සපයයි.'
else desct1 = "It gives details of given instagram username."
var needus1 =''
if(config.LANG === 'SI') needus1 = '*කරුණාකර මට instagram username ලබා දෙන්න !*'
else needus1 = "*Please give me a instagram username !*" 
var cantf1 =''
if(config.LANG === 'SI') cantf1 = '*මට මෙම instagram පරිශීලකයා instagram හි සොයාගත නොහැක !*'
else cantf1 = "*I cant find this user on instagram !*"


cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    react: '🎙️',
    desc: 'එය ලබා දී ඇති සංගීතයේ lyrics දෙයි.\nIt gives lyrics of given song name.',
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('*කරුණාකර මට ගීතයක නමක් දෙන්න. !*\nPlease give me a song name. !')
const result = await fetchJson('https://api.sdbots.tech/lyrics?song=' + q)
if(result.lyrics) reply(`
👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻

   *LYRICS SEARCH*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉`)
else reply('*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*\nI cant find lyrics of this song !')
} catch (e) {
reply('*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*\nI cant find lyrics of this song !')
l(e)
}
})




cmd({
    pattern: "ip",
    alias: ["ipstalk","sip","searchip","ip-locator"],
    react: '🌐',
    desc: 'එය ලබා දී ඇති ip එක පිළිබඳ විස්තර සපයයි.\nIt gives details of given ip.',
    category: "search",
    use: '.ipstalk 112.134.193.130',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('*කරුණාකර මට ip එකක් ලබා දෙන්න !*\n*Please give me a ip !*')
if(!q.includes('.')) return reply('*කරුණාකර මට ip එකක් ලබා දෙන්න !*\n*Please give me a ip !*')
const IP = "IP :"
const ST = "STATUS :"
const CONTINENT = "CONTINENT :"
const COUNTRY = "COUNTRY :"
const COUNTRYCODE = "COUNTRYCODE :"
const REGIONNAME = "REGIONNAME :"
const CITY = "CITY :"
const ZIP = "ZIP :"
const CURRENCY = "CURRENCY :"
const ISP = "ISP :"
const MOBILE = "MOBILE :"
const PROXY = "PROXY :"
const r = await fetchJson('https://api.techniknews.net/ipgeo/' + q)
const wea = `👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻
    *IP STALKER*
    
` +
'*🔴 ' + IP +'* ```' + q + '```\n' +
'*✅' + ST +'* ```' + r.status+ '```\n' +
    '*🌐' + CONTINENT +'* ```' + r.continent+ '```\n' +
    '*🗺' + COUNTRY +'* ```' + r.country+ '```\n' +
    '*🔢' + COUNTRYCODE +'* ```' + r.countryCode+ '```\n' +
    '*🌍' + REGIONNAME +'* ```' + r.regionName+ '```\n' +
    '*🚩' + CITY +'* ```' + r.city+ '```\n' +
    '*🏛' + ZIP +'* ```' + r.zip+ '```\n' +
    '*💸' + CURRENCY +'* ```' + r.currency+ '```\n' +
    '*📡' + ISP +'* ```' + r.isp+ '```\n' +
    '*🛡' + PROXY +'* ```' + r.proxy+ '```\n' +
    '*📱' + MOBILE +'* ```' + r.mobile+ '```\n\n'
    + "└───────────◉"
await conn.sendMessage(from , { text: wea}, { quoted: mek } )
} catch (e) {
reply('*මට මෙම ip එක සොයාගත නොහැක !*\nI cant find this ip !')
l(e)
}
})



cmd({
    pattern: "igstalk",
    alias: ["instastalk","instagramstalk","igstalker"],
    react: '📷',
    desc: desct1,
    category: "search",
    use: '.igstalk <instagram username>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus1)
const dataget = await igstalker(q)
const cap = `👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻

    *IG STALKER*

*🆔 Username:* ${dataget.username}

*👤 Name:* ${dataget.fullname}

*🐾 Bio:* ${dataget.bio}

*🚶🏽 Following:* ${dataget.following}

*👥 Followers:* ${dataget.followers}

*📬 Post count:* ${dataget.post}

└───────────◉`
await conn.sendMessage(from, { image: { url: dataget.profile }, caption: cap }, { quoted: mek })
} catch (e) {
reply(cantf1)
l(e)
}
})

cmd({
    pattern: "stiktok",
    alias: ["tiktokstalk","stalktiktok","tikstalk"],
    react: '📱',
    desc: desct,
    category: "search",
    use: '.stiktok <tiktok username>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
const dataget = await tikstalk(args[0])
const cap = `👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻

    *TIKTOK STALKER*

*🆔 Username:* ${dataget.username}

*👤 Name:* ${dataget.name}

*🐾 Bio:* ${dataget.bio}

*🚶🏽 Following:* ${dataget.following}

*👥 Followers:* ${dataget.followers}

*💌 Likes:* ${dataget.likes}

└───────────◉`
await conn.sendMessage(from, { image: { url: dataget.img }, caption: cap }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})




cmd({
    pattern: "midjourney",
    react: "🧠",
    alias: ["midimage"] ,
    desc: "Midjourney Image generator",
    category: "search",
    use: '.apk < Target >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const img = await getBuffer(`https://vihangayt.me/tools/midjourney?q=${q}`)
await conn.sendMessage(from, { image: img , caption: "☘ *Generated by MidjourneyAi*" }, { quoted: mek })

} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})



cmd({
    pattern: "npmjs",
    react: "🥏",
    desc: "Developing command.",
    category: "search",
    use: '.checkjson',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('❗ *Please enter Valid npm Name*')
const duka = await fg.npmSearch(q)
let yt =`
ℹ️ *Vajira-Md NPM Informations ( From - npmjs.com )*

 Name -:  *${duka.name}*

 Description  -:  ${duka.description}

 Version   -:  ${duka.version}

 Url  -:  ${duka.packageLink}

 Latest Updated on  -:  ${duka.publishedDate}

 Home Page  -:  ${duka.homepage}
 
 License  -:  ${duka.license}
 
 Keywords :-
`
 
   for (let i of duka.keywords  ) {
        yt += `${i}  `
    }
    
    const cap = yt + "\n\n\n*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ ᴏꜰᴄ*"
  await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/1509c123f9d160fd4a8cb.jpg" },caption: cap },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*'+ e )
l(e)
}
})    

cmd({
    pattern: "weather",
    react: '🎙️',
    desc: "To see info of weather",
    category: "search",
    use: '.weather',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!q) return reply('What location?')
let city = q.split(' ')[0];
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${city}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           conn.sendMessage(
                from, {
                    text: textw,
                }, {
                    quoted: mek,
                }
           )
              
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})      





cmd({
    pattern: "gitstalk",
    react: '🎙️',
    desc: "To search github info",
    category: "search",
    use: '.gitstalk <github user name>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        	if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

  const username = args[0];


    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return mek.reply(`❌ GitHub user not found.`);
    }

    // Construct the response message
    let responseMessage = `🌟 *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;
    responseMessage += `  ◦  *Created At*: ${userData.created_at}\n`;
    responseMessage += `  ◦  *Updated At*: ${userData.updated_at}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      })

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Send the message with the updated caption and user's avatar
    await conn.sendMessage(mek.chat, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: mek });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    }
    await conn.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await conn.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: mek });
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
reply()
l(e)
}
})       


cmd({
    pattern: "infobot",
    react: '🎙️',
    desc: "To see info of bot",
    category: "search",
    use: '.infobot',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const tod = `
╭━──━─◈─━─━╮
│🔖 *Bot Name* : VAJIRA-MD
│🔖 *Owner Name* : Vajira
│🔖 *Owner Number* : 94719199757
│🔖 *Prefix* : .
│🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
╰━━─━─◈─━─━╯`

    const pollOptions = ['.menu', '.ping']

    conn.sendPoll(mek.chat, tod, pollOptions)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       




cmd({
    pattern: "nofind",
    react: '🎙️',
    desc: "To see same to the number",
    category: "search",
    use: '.nofind',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        let regex = /x/g;
    if (!q) throw 'Give a number to search';
    if (!q.match(regex)) throw `*Example: ${prefix + command} 919142294xxx`;
    let random = q.match(regex).length, total = Math.pow(10, random), array = [];
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')];
        let result = q.replace(regex, () => list.shift()) + '@s.whatsapp.net';
        if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await conn.fetchStatus(result).catch(_ => {});
            array.push({ exists: true, jid: result, ...info });
        } else {
            array.push({ exists: false, jid: result });
        }
    }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       

cmd({
    pattern: "google",
    react: '🎙️',
    desc: "To search infomations",
    category: "search",
    use: '.google <search name>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
          if (!q) throw `Example : ${prefix + command} what is a bot`
  let google = require('google-it');
  google({ 'query': q }).then(res => {
    let teks = `Google Search From : ${q}\n\n`
    for (let g of res) {
      teks += `⭔ *Title* : ${g.title}\n`;
      teks += `⭔ *Description* : ${g.snippet}\n`
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
    }
    mek.reply(teks)
  })
 
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
                        display_text: "restart again",
                        id: ".google " + q
                    }),
                }
            ]
            let opts = {
                image: 'https://telegra.ph/file/497a6d76131059588e9e2.jpg',
                header: '',
                footer: config.FOOTER,
                body: 'VAJIRA MD GOOGLE SEARCH'

            }	  
return await conn.sendButtonMessage(from, buttons, m, opts)	
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       


cmd({
    pattern: "itunes",
    react: '🎙️',
    desc: "To see info of Itunes",
    category: "search",
    use: '.itunes <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('Please provide a song name')
    let result = await fetch(`https://api.popcat.xyz/itunes?q=` +q)
    if (!result.ok) {
      throw new Error(`API request failed with status ${result.status}`)
    }
    let json = await result.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await conn.sendMessage(mek.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: mek})
    } 
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       


cmd({
    pattern: "pemoji",
    react: "🔖",
    desc: "imoji to image convert",
    category: "search",
    use: '.pemoji',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   if (!q) return reply(`*👸💬 Please Give me a imoji*\nExample - .${command}👸`)
    await conn.sendMessage(from, { react: { text: `✨`, key: mek.key }})
await conn.sendMessage(mek.chat, { image: { url:`https://api.vihangayt.me/search/semoji?q=${encodeURIComponent(q)} `},  caption: `${global.cap}`}, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})      


cmd({
    pattern: "slsubsearch",
    react: "🔎",
    desc: "Search All Subtitles  from Web Site",
    category: "search",
    use: '.slsubsearch',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to Search Subtitles*")
const vid = await subsearch(q)
    let yt = '\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ᴠᴀᴊɪʀᴀ ᴍᴅ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.results ) {
        yt += `📃 *${i.no} - ${i.title}*\n🔗 _Link : ${i.link}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/b4caa5682d75220623b83.jpg" },caption: yt + "*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})



cmd({
    pattern: "imdb",
    react: "🍎",
    desc: "To check imdb",
    category: "search",
    use: '.imdb',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply(`_Name a Series or movie`)

            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${q}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           conn.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: mek,
            })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
l(e)
}
})




cmd({
    pattern: "tempmail",
    react: '👾',
    desc: 'to take a tempmail',
    category: "download",
    use: '.tempmail',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const apiEndpoint = 'https://api.maher-zubair.tech/misc/tempmail';
            
            // Make a request to the API to generate a temporary email
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            if (!data || !data.email) {
                
                return reply("Failed to generate temporary email");
            }

            const generatedEmail = data.email;


            return reply(`Generated Temporary Email: ${generatedEmail}`);
        } catch (e) {
   return reply('Unexpected error occurred during the request.');
l(e)
}
})   


cmd({
    pattern: "checkmail",
    react: '👾',
    desc: 'to see mail',
    category: "download",
    use: '.checkmail',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!q) {
            
            return reply(`*Provide me tempmail for view inbox*`);
        }

        const email = encodeURIComponent(q);
        const apiEndpoint = `https://api.maher-zubair.tech/misc/get_inbox_tempmail?q=${email}`;

        
            const response = await fetch(apiEndpoint);

            if (!response.ok) {
                
                return reply(`Invalid response from the API. Status code: ${response.status}`);
            }

            const data = await response.json();

            if (!data || !data.messages) {
                
                return reply('Failed to retrieve email messages');
            }

            const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString()
                const messageBody = JSON.parse(message.message).body;

                const replyMessage = `Sender: ${sender}\nSubject: ${subject}\nDate: ${date}\nMessage: ${messageBody}`

                await reply(replyMessage);
            }
        } catch (e) {
            console.error('Error during API request:', e)
            
            return reply('Unexpected error occurred during the request.')
        
l(e)
}
})   

		    

cmd({
    pattern: "gitclone",
    react: "🔖",
    desc: "download github repos",
    category: "download",
    use: '.gitclone',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
                                                                   
                                  
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                              if (!args[0]) reply(`Use ${prefix}gitclone repo link\n: https://github.com/VajiraTech/QUEEN-IZUMI-MD`)
                              if (!regex1.test(args[0])) return reply('link')
                              let [, user, repo] = args[0].match(regex1) || []
                              repo = repo.replace(/.git$/, '')
                              let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                              let filename =  `${user}${repo}`
                              //(await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                              conn.sendMessage(mek.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip',caption: '*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*' }, { quoted: mek }).catch((err) => reply(mess.error))                             
} catch (e) {
reply()
l(e)
}
})
	

cmd({
    pattern: "ringtone",
    react: "🔖",
    desc: "to download ringtone",
    category: "download",
    use: '.ringtone',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) reply `${Lang.EXAMPLE}\n : ${prefix + command} black rover`
                          let { ringtone } = require('../lib/scraper')
                          let anu = await ringtone(q)
                          let result = anu[Math.floor(Math.random() * anu.length)]
                          conn.sendMessage(mek.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})



cmd({
    pattern: "couplepp",
    react: "🔖",
    desc: "couple pic download",
    category: "download",
    use: '.couplepp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   await conn.sendMessage(from, { react: { text: `💏`, key: mek.key }})
                                  
                                  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                                  let random = anu[Math.floor(Math.random() * anu.length)]
                                  conn.sendMessage(mek.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: mek })
                                  conn.sendMessage(mek.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: mek })
                              
                               
                              await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       

	    
cmd({
    pattern: "slsub",
    react: "📃",
    alias: ["srisub"],
    desc: "Search Sinhala Subtitles  from Web Site",
    category: "download",
    use: '.slsub',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to download Subtitles*")
const duka = await subsearch(q)
const latest = await subdl(duka.results[0].link)
const maru =`*VAJIRA-MD SINHALA SUB DOWNLOADER*

📊 *Movie Title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${duka.results[0].link}

`
  await conn.sendMessage(from,{image:{url: latest.results.img },caption: maru + "*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*" },{quoted:mek })
  await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

	    
cmd({
    pattern: "subdlfromlink",
    react: "📃",
    desc: "Download subtitles from Web Sites",
    category: "download",
    use: '.subdlfromlink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ Please enter movie Link to download Subtitles*")
if(!q.includes('baiscope')) return reply('🚫 *Please enter Valid Movie url*')
 const latest = await subdl(q)
const maru =`*VAJIRA-MD SL SUBTITLES DOWNLOADER*

📊 *Movie title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${q}

*ᴠᴀᴊɪʀᴀ-ᴍᴅ-ᴠ3*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
   await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

	


const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const l = console.log
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const Esana = require('@sl-code-lords/esana-news');
var api = new Esana()
const sirasanews = require('sirasa-news')        
const derananews = require('@kaveesha-sithum/derana-news')
//const { EVNEWS } = require('arenaev-vehicles-news')
//const { GMSNEWS } = require('gms-mobile-news')



var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Tech news ලබා දෙයි.'
else tmsg = "It gives Tech news."
var tmsg3 =''
if(config.LANG === 'SI') tmsg3 = 'එය IOS news ලබා දෙයි.'
else tmsg3 = "It gives IOS news."




 
//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------
	

cmd({
        pattern: "news",
        react: "🗃️",
        desc: "Get news",
        category: "search",
        use: '.news',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
	prefix,
        pushname,
        reply
    }) => {
        try {
            const msg = `\`✦ 𝗡𝗘𝗪𝗦 𝗦𝗘𝗔𝗥𝗖𝗛 ✦\`
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
                    header: 'Select you want to see news',
                    title: `Ios News`,
                    description: '',
                    id: `${prefix}ios`
                }),
                rows.push({
                    header: '',
                    title: `wabeta News`,
                    description: '',
                    id: `${prefix}wabeta`
                }),  
                rows.push({
                    header: '',
                    title: `Nasa News`,
                    description: '',
                    id: `${prefix}nasanews`
                }),  
                rows.push({
                    header: '',
                    title: `Tech News`,
                    description: '',
                    id: `${prefix}technews`
                }),
                rows.push({
                    header: '',
                    title: `Sirasa News`,
                    description: '',
                    id: `${prefix}sirasanews`
                }),
                rows.push({
                    header: '',
                    title: `Esana News`,
                    description: '',
                    id: `${prefix}esananews`
                }),  
                rows.push({
                    header: '',
                    title: `Derana News`,
                    description: '',
                    id: `${prefix}derananews`
                }),
                rows.push({
                    header: '',
                    title: `Hiru News`,
                    description: '',
                    id: `${prefix}hirunews`
                }),  
                rows.push({
                    header: '',
                    title: `Cricket News`,
                    description: '',
                    id: `${prefix}cricketnews`
                }),
		rows.push({
                    header: '',
                    title: `Vehical News`,
                    description: '',
                    id: `${prefix}vnews`
                }),
		rows.push({
                    header: '',
                    title: `Mobile News`,
                    description: '',
                    id: `${prefix}gmsnews`
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
                image: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts, { quoted: mek});
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })




//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------



cmd({
    pattern: "ios",
    react: "🍎",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
const data = await fetchJson(`https://api.maher-zubair.tech/details/ios`);   	
let info = `👨‍💻ＲＡＮＵ ＭＤＩＯＳ ＮＥＷＳ 👨‍💻

*🔖 Title:* ${data.result.title}
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}`
return await conn.sendMessage(from, { image: { url: data.result.images} , caption: info } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch (e) {
l(e)
}
})



	

cmd({
    pattern: "wabeta",
    react: "✔️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
const data = await fetchJson(`https://api.maher-zubair.tech/details/wabetainfo`);   	
let info = `👨‍💻 ＲＡＮＵ ＷＡＢＥＴＡＩＮＦＯ 👨‍💻

*🥏 Title :* ${data.result.title}
*📅 Date :* ${data.result.date}
*🖥️ Platform :* ${data.result.subtitle}
*🔗 URL :* ${data.result.link}
*🗞️ Short Desc :* ${data.result.desc}`

return await conn.sendMessage(from, { image: { url: data.result.image} , caption: info } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch (e) {
l(e)
}
})

		
cmd({
    pattern: "nasanews",
    react: "📡",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
const data = await fetchJson(`https://api.maher-zubair.tech/details/nasa`);   
const textw = `👨‍💻 ＲＡＮＵ ＮＡＳＡ ＮＥＷＳ 👨‍💻

🪄 𝙏𝙄𝙏𝙇𝙀: ${data.result.title}
📆𝘿𝘼𝙏𝙀: ${data.result.date}
🚀 𝙑𝙀𝙍𝙎𝙄𝙊𝙉: ${data.result.service_version}
🔖𝙐𝙍𝙇: ${data.result.url}
📝 𝙀𝙓𝙋𝙇𝘼𝙉𝘼𝙏𝙄𝙊𝙉: ${data.result.explanation}`
return conn.sendMessage(from, { image: { url: data.result.hdurl}, caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch (e) {
l(e)
}
})



cmd({
    pattern: "technews",
    react: "📡",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
const nima = require("tech-news-scraper")
      
      const news = await nima.allNews()
      
      let textw = `👨‍💻 ＲＡＮＵ ＴＥＣＨ ＮＥＷＳ 👨‍💻\n\n`;
for (let i=0; i<16; i++){
  textw +=`*⛓️ No:* ${news.result[i].no}\n`
  textw +=`*📃 Title:* ${news.result[i].title}\n`	
  textw +=`*📚 CatName:* ${news.result[i].catname}\n`
  textw +=`*🕒 Time:* ${news.result[i].date}\n`
  textw +=`*📎 Link:* ${news.result[i].link}\n\n--------------------------------------------\n\n
`
} 
        return await reply(textw );
return await conn.sendMessage(from, { image: { url: news.result[i].img} , caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       


cmd({
    pattern: "sirasanews",
    react: '🎙️',
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
const sirasa = await sirasanews()
try{
    const caption = `⛶ 𝑹𝑨𝑵𝑼 𝙈𝘿 𝙎𝙄𝙍𝘼𝙎𝘼 𝙉𝙀𝙒𝙎 ⛶    
🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* ${sirasa.result.title}

🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔸𝕋𝔼 𝔸ℕ𝔻 𝕋𝕀𝕄𝔼* : ${sirasa.result.dateandtime}

🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* ${sirasa.result.description}

🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* ${sirasa.result.link}`

await conn.sendMessage(from, { image: { url: sirasa.result.image }, caption: caption }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       
		    

cmd({
    pattern: "esananews",
    react: '🎙️',
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
    const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = q || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await conn.sendMessage(from, {image: 
	    {url: res.COVER},caption: `\n*┠─❲ 👩🏻‍🎨 𝑅𝐴𝑁𝑈 MD 🗞️❳* \n\n*┃◉* *⇨ ᴛɪᴛᴇʟ :*
 ${res.TITLE}\n\n*┃◉* *⇨ ᴅᴀᴛᴇ :*
 ${res.PUBLISHED}\n\n*┃◉* *⇨ ᴜʀʟ :*
 ${res.URL}\n\n*┃◉* *⇨ Description :*
 ${res.DESCRIPTION}\n\n*𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚁𝙰𝙽𝚄 𝚈𝚃 ®*\n\n`},
			{ quoted: mek });
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       




cmd({
    pattern: "derananews",
    react: '🎙️',
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
const result = await derananews()		
try{

    const caption = ` 👨‍💻 𝑹𝑨𝑵𝑼 𝙈𝘿 𝘿𝙀𝙍𝘼𝙉𝘼 𝙉𝙀𝙒𝙎 👨‍💻
    
🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* ${result.title}

🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* ${result.link}

🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* ${result.description}`

await conn.sendMessage(from, { image: { url: result.image }, caption: caption }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       


cmd({
    pattern: "hirunews",
    react: "🔖",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
const Hiru = require('hirunews-scrap');
var api = new Hiru()

 const dswa = await api.MainNews();
             const res = dswa.results
             const descr = res.title
             const vajira = res.news
             const time = res.date
             const img = res.thumb;

          const txt3 = await conn.sendMessage(from, {image: {url: img}, caption:  `
👨‍💻 𝑹𝑨𝑵𝑼 𝙃𝙄𝙍𝙐 𝙉𝙀𝙒𝙎 👨‍💻

📍➣*${descr}* 
●━━━━━━━━━━━━━━━━━━━━━●  
📃➣${vajira} 
●━━━━━━━━━━━━━━━━━━━━━● 
📅➣${time}
●━━━━━━━━━━━━━━━━━━━━━●

🗞️ *News From hirunews.lk*

🔗 *Create By ʀᴀɴᴅᴜʟᴀ*

📍 *SL News*

👤 *Owner Number* :- http://wa.me/94783462955


●━━━━━━━━━━━━━━━━━━━━━●`}, { quoted: mek });
            

    await conn.sendMessage(from, { react: {
        text: "📰",
        key: txt3.key,
            } } );
	
} catch (e) {
reply()
l(e)
}
}) 	


cmd({
    pattern: "cricketnews",	
    react: '🎙️',
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
      reply (`*_Please Wait, Getting Cricket Info_*`);
const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78');
  const dat = await response.json();
console.log(dat);
	
for (let i=0 ; i <  dat.data.length; i++) {
let j = i+1;

q +=`\n*--------------------- MATCH ${i}-------------------*`;
q +="\n*Match Name  :* "+ dat.data[i].name;
q +="\n*Match Status  :* "+ dat.data[i].status;
q +="\n*Match  Date   :* " + dat.data[i].dateTimeGMT ;
q +="\n*Match Started :* " + dat.data[i].matchStarted;
q +="\n*Match Ended:* " + dat.data[i].matchEnded;
}
return await reply(q)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {	
reply()
l(e)
}
})




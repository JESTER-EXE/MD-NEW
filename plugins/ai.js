const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const fg = require('api-dylux');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const cheerio = require('cheerio')
const axios = require("axios")
const vm = require('vm')
let wm = `👨‍💻 𝐑𝐀𝐍𝐔 ᴍᴅ ʙʏ CRD ᴛᴇᴀᴍ 👨‍💻`


var desct = "It search on chatgpt ai for what you provided."
var needus = "*Please give me words to search on chatgpt ai !*" 
var cantf  = "*Server is busy. Try again later.!*"





async function logo(prompt) {
    try {
        const {
            data
        } = await axios.post('https://boredhumans.com/apis/boredagi_api.php',
            `prompt=${prompt.replace(/\s+/g, "%2520")}&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44`, {
                headers: {
                    'User-Agent': 'Googlebot-News',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });
        const url = data.output.match(/src="([^"]+)"/)[1]
        return url
    } catch (e) {
        return e
    }
}



cmd({
    pattern: "bard",
    alias: ["bardai","gbard","googlebard","googleai","ai2"],
    react: '👾',
    desc: 'එය ඔබ ලබා දුන් දේ සඳහා bard AI මත සොයයි.\nIt search on bard ai for what you provided.',
    category: "search",
    use: '.bard hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('*කරුණාකර මට bard AI හි සෙවීමට වචන ලබා දෙන්න !*\nPlease give me words to search on bard ai !')
let apilist = await fetchJson('https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json')
let list = apilist.users
let apikey = list[Math.floor(Math.random() * list.length)]
const dataget = await fetchJson(apilist.xz +'api/bard?text='+ q +'&apikey='+ apikey)
return await reply(dataget.content)
} catch (e) {
try{
    const dataget = await fetchJson('https://api.akuari.my.id/ai/gbard?chat=' + q)
return await reply(dataget.respon)
} catch (e) {
reply('*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*\nServer is busy. Try again later.!')
l(e)
}
}
})



cmd({
    pattern: "ailogo",
    alias: ["logoai","ail","gptlogo"],
    react: '🤖',
    desc: "It creates ai logos.",
    category: "other",
    use: '.ailogo  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please enter a query")
let result = await logo(q)
conn.sendMessage(from, { image: { url: result }, caption: wm }, { quoted: mek })
} catch (e) {
reply("I cant create that logo")
l(e)
}
})



cmd({
    pattern: "mathsgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.gptmaths 2-3',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//var res = (await fetchJson('https://vajira-api-t8iy.onrender.com/ai/mathssolve?q=' + q)).data
    
        async function maths(messagews) {
      const messages = [
        { role: 'system', content: 'You are a helpful maths solver. You must solve the all maths question. And also you dont have permission to reply other questions.' },
        { role: 'user', content: messagews },
      ];
        const response = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages }),
        });

        const data = await response.json();
        return data.choices[0].message.content

}
//return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    


cmd({
    pattern: "chatgpt",
    alias: ["ai","gpt","openai","chat"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/v3/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "chatgpt2",
    alias: ["ai2","gpt2","openai2","chat2"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.ai2 hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/v3-32k/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "turbo",
    alias: ["ai3","gpt3","openai3","chat3"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/turbo/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "turbo2",
    alias: ["ai4","gpt4","openai4","chat4"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/turbo-16k/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "gemini",
    alias: ["ai5","gpt5","openai5","chat5"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/gemini/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "aipic",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.aipic hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
let res = await fetchJson('https://api.maher-zubair.tech/ai/photoleap?q='+q)
await conn.sendMessage(from, { image: { url: await res.result }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

                    

    
 cmd({ on: "body" }, 
  async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (config.AI_CHATBOT === 'true') {
if (mek.key.fromMe) return
let res = await fetchJson('https://hercai.onrender.com/gemini/hercai?question='+q)
return await reply(res.reply)	 
}    
})



 cmd({ on: "body" }, 
  async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (config.AI_IMAGE === 'true') {
if (mek.key.fromMe) return
let res = await fetchJson('https://api.maher-zubair.tech/ai/photoleap?q='+q)
await conn.sendMessage(from, { image: { url: await res.result }, caption: wm }, { quoted: mek })
}    
})


cmd({ on: "body" }, 
  async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (config.MATHS_AI === 'true') {
if (mek.key.fromMe) return
var res = (await fetchJson('https://api.maher-zubair.tech/ai/mathssolve?q=' + q)).data
return await reply(res)
}    
})



cmd({
    pattern: "blackbox",
    alias: ["bb"],
    react: '👾',
    desc: "Blackbox ai chat",
    category: "other",
    use: '.blackbox hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('Need a keyword')
var res = (await fetchJson('https://api.yanzbotz.my.id/api/ai/blackbox?query=' + q)).result

return await reply(res)
} catch (e) {
reply('Unable to generate')
l(e)
}
})

cmd({
    pattern: "bingimgai",
    alias: ["midj"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "other",
    use: '.bingimgai <prompt>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await  reply("*Give me a prompt to generate images*")
  let response = await fetchJson('https://api.yanzbotz.my.id/api/text2img/bing-image?prompt='+q+'&apiKey=vihangayt0')
        if (response && response.result && Array.isArray(response.result) && response.result.length > 0) {
            for (let i = 0; i < response.result.length; i++) {
                await conn.sendMessage(from, { image: { url: response.result[i] }, caption: config.FOOTER }, { quoted: mek });
            }
        } else {
            reply('No images found for the given prompt');
        }
} catch (e) {
reply('Unable to generate images to the given prompt')
l(e)
}
})

const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');
let { img2url } = require('@blackamda/telegram-image-url');
const l = console.log


var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*මට anime නමක් දෙන්න !*'
else imgmsg = "*Give me a anime name !*"
var descgs = ''
if(config.LANG === 'SI') descgs = "එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි."
else descgs = "It gives details of given anime name."
var cants = ''
if(config.LANG === 'SI') cants = "I cant find this anime."
else cants = "I cant find this anime."



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------


cmd({
    pattern: "anime",
    alias: ["animesearch","sanime"],
    react: "⛩️",
    desc: descgs,
    category: "search",
    use: '.anime astro',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('Give a anime name')
let anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
	let listdata = `𝐑𝐀𝐍𝐔 MD ANIME SEARCH

	 > ANIME SEARCHER 🚶`


            const rows = []
           
    for (let i of anu.data) {
                rows.push({
                    header: i + 1,
                    title: `Anime number`,
                    description: `${i.title}`,
                    id: `${prefix}animeeg ${i.mal_id}` 
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
                            highlight_label: '𝐑𝐀𝐍𝐔-MD',
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



//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------
	

cmd({
    pattern: "animeeg",
    dontAddCommandList: true,
    filename: __filename
  },
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{
  await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
  res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
  let txt = `*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
  conn.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :mek }).catch((err) => reply(''))
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  } catch (e) {
  reply(cants)
  l(e)
  }
  })

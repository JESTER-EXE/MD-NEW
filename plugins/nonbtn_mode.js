const config = require('../settings')
const l = console.log
const { cmd, commands } = require('../lib/command')
var { get_set , input_set } = require('../lib/set_db') 
const dl = require('@bochilteam/scraper')  
const ytdl = require('@distube/ytdl-core')
const api = require("caliph-api")
const apkdl = require('../lib/apkdl')
const fs = require('fs-extra')
const fg = require('api-dylux')
const os = require('os')
const yts = require("yt-search")
var videotime = 60000 // 1000 min
var request = require("request")
var cheerio = require("cheerio")
const sirasanews = require('sirasa-news')        
const derananews = require('@kaveesha-sithum/derana-news')
var {subsearch , subdl }  = require('@sl-code-lords/si-subdl')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, getsize, jsonformat} = require('../lib/functions')
const dl2 = require('inrl-dl')
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


function ytreg(url) {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    return ytIdRegex.test(url);
}


const { Tiktok } = require('../lib/tiktok')
function regtik(url) {return url.includes('tiktok.com')}
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
async function fbDownloader(url) {
	try {
		const response1 = await axios({
			method: 'POST',
			url: 'https://snapsave.app/action.php?lang=vn',
			headers: {
				"accept": "*/*",
				"accept-language": "vi,en-US;q=0.9,en;q=0.8",
				"content-type": "multipart/form-data",
				"sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"Referer": "https://snapsave.app/vn",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			data: {
				url
			}
		});

		let html;
		const evalCode = response1.data.replace('return decodeURIComponent', 'html = decodeURIComponent')
		eval(evalCode);
		html = html.split('innerHTML = "')[1].split('";\n')[0].replace(/\\"/g, '"')

		const $ = cheerio.load(html)
		const download = []

		const tbody = $('table').find('tbody')
		const trs = tbody.find('tr')

		trs.each(function (i, elem) {
			const trElement = $(elem)
			const tds = trElement.children()
			const quality = $(tds[0]).text().trim()
			const url = $(tds[2]).children('a').attr('href')
			if (url != undefined) {
				download.push({
					quality,
					url
				});
			}
		});

		return {
			success: true,
			download
		};
	}
	catch (err) {
		return {
			success: false
		};
	}
}
function fbreg(url) {
const fbRegex = /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
return fbRegex.test(url)
}




 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 





var desc1 =''
if(config.LANG === 'SI') desc1 = "Facebook වෙතින් වීඩියෝ බාගත කරයි."
else desc1 = "Download videos from Facebook."

var urlneed2 =''
if(config.LANG === 'SI') urlneed2 = "*කරුණාකර facebook video url එකක් ලබා දෙන්න*"
else urlneed2 = "*Please give me facebook video url..*"

var desc =''
if(config.LANG === 'SI') desc = "Tiktok වෙතින් වීඩියෝ බාගත කරයි."
else desc = "Download videos from Facebook."

var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else descg = "It gives desktop size screenshot of given url."

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Tech news ලබා දෙයි.'
else tmsg = "It gives Tech news."

var tmsg2 =''
if(config.LANG === 'SI') tmsg2 = 'එය whatsapp beta news ලබා දෙයි.'
else tmsg2 = "It gives whatsapp beta news."

var tmsg3 =''
if(config.LANG === 'SI') tmsg3 = 'එය IOS news ලබා දෙයි.'
else tmsg3 = "It gives IOS news."

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
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
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

var urlneed3 =''
if(config.LANG === 'SI') urlneed3 = "එය androidapksfree වෙතින් mod apps බාගත කරයි."
else urlneed3 = "It downloads mod apps from androidapksfree."

var cantf =''
if(config.LANG === 'SI') cantf = '*මට මෙම වීඩියෝව සොයාගත නොහැක!*'
else cantf = "*I cant find this video!*"

var urlneed1 =''
if(config.LANG === 'SI') urlneed1 = "*කරුණාකර Tiktok video url එකක් ලබා දෙන්න*"
else urlneed1 = "*Please give me tiktok video url..*"

var errt =''
if(config.LANG === 'SI') errt = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else errt = "*I couldn't find anything :(*"

var urlneed4 =''
if(config.LANG === 'SI') urlneed4 = "එය playstore වෙතින් apps බාගත කරයි."
else urlneed4 = "It downloads apps from playstore."

var descp = ''
if(config.LANG === 'SI') descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else descp = "It gives phone size screenshot of given url."

var desct = ''
if(config.LANG === 'SI') desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else desct = "It gives tablet size screenshot of given url."

var cant = ''
if(config.LANG === 'SI') cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*"
else cant = "*I can't get a screenshot. Try again later.*"

var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"
//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'nonbutton') {
//---------------------------------------------------------------------------



	

cmd({
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.PREFIX == q) return reply(alredy)
  await input_set('PREFIX' , q)
  return reply('prefix was changed')
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setlogo",
    react: "🗣️",
    desc: "To change bot logo",
    category: "main",
    use: '.setlogo logo url .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.LOGO == q) return reply(alredy)
  await input_set('LOGO' , q)
  return reply('Logo was changed')
} catch (e) {
reply('*Error !!*')
l(e)
}
})	
	
cmd({
    pattern: "oreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.OWNER_REACT == 'true') return reply('already Owner React is on ')
  await input_set('OWNER_REACT' , 'true')
  return reply('Owner React turned on')
  }
if ( q == 'off' ) {
   if ( config.OWNER_REACT !== 'true') return reply('already Owner React is off')
  await input_set('OWNER_REACT' , 'false')
  return reply('Owner React turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "onlygroup",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_GROUP == 'true') return reply('already Only Group is on ')
  await input_set('ONLY_GROUP' , 'true')
  return reply('Only Group turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_GROUP !== 'true') return reply('already Only Group is off')
  await input_set('ONLY_GROUP' , 'false')
  return reply('Only Group turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  

cmd({
    pattern: "onlyme",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_ME == 'true') return reply('already Only Me is on ')
  await input_set('ONLY_ME' , 'true')
  return reply('Only Me turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_ME !== 'true') return reply('already Only Me is off')
  await input_set('ONLY_ME' , 'false')
  return reply('Only Me turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  


	
cmd({
    pattern: "antidelete",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_DELETE == 'true') return reply('already antidelete is on ')
  await input_set('ANTI_DELETE' , 'true')
  return reply('Antidelete turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_DELETE !== 'true') return reply('already antidelete is off')
  await input_set('ANTI_DELETE' , 'false')
  return reply('Antidelete turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "anticall",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_CALL == 'true') return reply('already anticall is on ')
  await input_set('ANTI_CALL' , 'true')
  return reply('Anticall turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_CALL !== 'true') return reply('already anticall is off')
  await input_set('ANTI_CALL' , 'false')
  return reply('Anticall turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "welcome",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.WELCOME == 'true') return reply('already Welcome is on ')
  await input_set('WELCOME' , 'true')
  return reply('Welcome turned on')
  }
if ( q == 'off' ) {
   if ( config.WELCOME !== 'true') return reply('already Welcome is off')
  await input_set('WELCOME' , 'false')
  return reply('Welcome turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "mathsai",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{ᴏ
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.MATHS_AI == 'true') return reply('already Ai Maths is on ')
  await input_set('MATHS_AI' , 'true')
  return reply('Ai Maths turned on')
  }
if ( q == 'off' ) {
   if ( config.MATHS_AI !== 'true') return reply('already Ai Maths is off')
  await input_set('MATHS_AI' , 'false')
  return reply('Ai Maths turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})      
	
cmd({
    pattern: "aichatbot",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AI_CHATBOT == 'true') return reply('already Ai Chatbot is on ')
  await input_set('AI_CHATBOT' , 'true')
  return reply('Ai Chatbot turned on')
  }
if ( q == 'off' ) {
   if ( config.AI_CHATBOT !== 'true') return reply('already Ai Chatbot is off')
  await input_set('AI_CHATBOT' , 'false')
  return reply('Ai Chatbot turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "aiimage",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AI_IMAGE == 'true') return reply('already Ai Image is on ')
  await input_set('AI_IMAGE' , 'true')
  return reply('Ai Image turned on')
  }
if ( q == 'off' ) {
   if ( config.AI_IMAGE !== 'true') return reply('already Ai Image is off')
  await input_set('AI_IMAGE' , 'false')
  return reply('Ai Image turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})
	

cmd({
    pattern: "onlygroup",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_GROUP == 'true') return reply('already bot is private ')
  await input_set('ONLY_GROUP' , 'true')
  return reply('Bot is now private')
  }
if ( q == 'off' ) {
   if ( config.ONLY_GROUP !== 'true') return reply('already bot is public')
  await input_set('ONLY_GROUP' , 'false')
  return reply('Bot is now public')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "disablepm",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.DISABLE_PM == 'true') return reply('already bot is Shutdown ')
  await input_set('DISABLE_PM' , 'true')
  return reply('Bot is now Shutdown')
  }
if ( q == 'off' ) {
   if ( config.DISABLE_PM !== 'true') return reply('already bot is working public')
  await input_set('DISABLE_PM' , 'false')
  return reply('Bot is now works everyone')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})




   

cmd({
    pattern: "autovoice",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_VOICE == 'true') return reply('already on ')
  await input_set('AUTO_VOICE' , 'true')
  return reply('autovoice turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_VOICE !== 'true') return reply('already off')
  await input_set('AUTO_VOICE' , 'false')
  return reply('autovoice turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "autosticker",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_STICKER == 'true') return reply('already on ')
  await input_set('AUTO_STICKER' , 'true')
  return reply('autosticker turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_STICKER !== 'true') return reply('already off')
  await input_set('AUTO_STICKER' , 'false')
  return reply('autosticker turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "autobio",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_BIO == 'true') return reply('already on ')
  await input_set('AUTO_BIO' , 'true')
  return reply('autobio turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_BIO !== 'true') return reply('already off')
  await input_set('AUTO_BIO' , 'false')
  return reply('autobio turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autowelcome",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.WELCOME == 'true') return reply('already on ')
  await input_set('WELCOME' , 'true')
  return reply('autowelcome turned on')
  }
if ( q == 'off' ) {
   if ( config.WELCOME !== 'true') return reply('already off')
  await input_set('WELCOME' , 'false')
  return reply('autowelcome turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antibot",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_BOT == 'true') return reply('already on ')
  await input_set('ANTI_BOT' , 'true')
  return reply('antibot turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BOT !== 'true') return reply('already off')
  await input_set('ANTI_BOT' , 'false')
  return reply('antibot turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antilink",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_LINK == 'true') return reply('already on ')
  await input_set('ANTI_LINK' , 'true')
  return reply('antilink turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_LINK !== 'true') return reply('already off')
  await input_set('ANTI_LINK' , 'false')
  return reply('antilink turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

	  
cmd({
    pattern: "antibad",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_BAD == 'true') return reply('already on ')
  await input_set('ANTI_BAD' , 'true')
  return reply('antibad turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BAD !== 'true') return reply('already off')
  await input_set('ANTI_BAD' , 'false')
  return reply('antibad turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "autostatus",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_STATUS_READ == 'true') return reply('already on ')
  await input_set('AUTO_STATUS_READ' , 'true')
  return reply('autostatus turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_STATUS_READ !== 'true') return reply('already off')
  await input_set('AUTO_STATUS_READ' , 'false')
  return reply('autostatus turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autotyping",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_TYPING == 'true') return reply('already on ')
  await input_set('AUTO_TYPING' , 'true')
  return reply('autotyping turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_TYPING !== 'true') return reply('already off')
  await input_set('AUTO_TYPING' , 'false')
  return reply('autotyping turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autorecording",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_RECORDING == 'true') return reply('already on ')
  await input_set('AUTO_RECORDING' , 'true')
  return reply('autorecording turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_RECORDING !== 'true') return reply('already off')
  await input_set('AUTO_RECORDING' , 'false')
  return reply('autorecording turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_READ == 'true') return reply('already on ')
  await input_set('AUTO_READ' , 'true')
  return reply('autoread turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_READ !== 'true') return reply('already off')
  await input_set('AUTO_READ' , 'false')
  return reply('autoread turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "cmdread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.READ_CMD_ONLY == 'true') return reply('already on ')
  await input_set('READ_CMD_ONLY' , 'true')
  return reply('cmdread turned on')
  }
if ( q == 'off' ) {
   if ( config.READ_CMD_ONLY !== 'true') return reply('already off')
  await input_set('READ_CMD_ONLY' , 'false')
  return reply('cmdread turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_REACT == 'true') return reply('already on ')
  await input_set('AUTO_REACT' , 'true')
  return reply('autoreact turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_REACT !== 'true') return reply('already off')
  await input_set('AUTO_REACT' , 'false')
  return reply('autoreact turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	



cmd({
    pattern: "alwaysonline",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ALWAYS_ONLINE == 'true') return reply('already on ')
  await input_set('ALWAYS_ONLINE' , 'true')
  return reply('alwaysonline turned on')
  }
if ( q == 'off' ) {
   if ( config.ALWAYS_ONLINE !== 'true') return reply('already off')
  await input_set('ALWAYS_ONLINE' , 'false')
  return reply('alwaysonline turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoblock",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_BLOCK == 'true') return reply('already on ')
  await input_set('AUTO_BLOCK' , 'true')
  return reply('Auto block turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_BLOCK !== 'true') return reply('already off')
  await input_set('AUTO_BLOCK' , 'false')
  return reply('Auto block turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

	

cmd({
    pattern: "settings",
    react: "⚙️",
    desc: "setting list",
    category: "main",
    use: '.settings',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)	
let dat = `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻

  *SEN𝖴 MD SETTINGS*`
const sections = [

   {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[1] 𝗕𝗢𝗧 𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    1.1", rowId: prefix + 'onlygroup on ' + q , description: 'To Put Bot Private 🔑'}, 
  {title: "    1.2", rowId: prefix + 'onlygroup off ' + q , description: 'To Put Bot Public 🔑'},	
]
    } ,	


{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[2] 𝗕𝗢𝗧 𝗦𝗛𝗨𝗧𝗗𝗢𝗪𝗡 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    2.1", rowId: prefix + 'disablepm on ' + q , description: 'To Put Bot Shutdown 🔑'}, 
  {title: "    2.2", rowId: prefix + 'disablepm off ' + q , description: 'To Put Bot Public 🔑'},	
]
    } ,	
	
   {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[3] 𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    3.1", rowId: prefix + 'autovoice on ' + q , description: 'To Enable Auto Voice 🔑'}, 
  {title: "    3.2", rowId: prefix + 'autovoice off ' + q , description: 'To Disable Auto Voice Off 🔒'},	
]
    } ,	

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[4] 𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    4.1", rowId: prefix + 'autosticker on ' + q , description: 'To Enable Auto Sticker On 🔑'}, 
  {title: "    4.2", rowId: prefix + 'autosticker off ' + q , description: 'To Disable Auto Sticker Off 🔒'},	
]
    } 	,
	
    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[5] 𝗔𝗨𝗧𝗢 𝗕𝗜𝗢 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    5.1", rowId: prefix + 'autobio on ' + q , description: 'To Enable Auto Bio On 🔑'}, 
  {title: "    5.2", rowId: prefix + 'autobio off ' + q , description: 'To Disable Auto Bio Off 🔒'},	
]
    } 	,

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[6] 𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗩𝗜𝗘𝗪 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    6.1", rowId: prefix + 'autostatus on ' + q , description: 'To Enable Auto Status On 🔑'}, 
  {title: "    6.2", rowId: prefix + 'autostatus off ' + q , description: 'To Disable Auto Status Off 🔒'},	
]
    } 	,

 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[7] 𝗔𝗨𝗧𝗢 𝗧𝗬𝗣𝗜𝗡𝗚 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    7.1", rowId: prefix + 'autotyping on ' + q , description: 'To Enable Auto Typing On 🔑'}, 
  {title: "    7.2", rowId: prefix + 'autotyping off ' + q , description: 'To Disable Auto Typing Off 🔒'},	
]
    } 	,

 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[8] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    8.1", rowId: prefix + 'autorecording on ' + q , description: 'To Enable Auto Recording On 🔑'}, 
  {title: "    8.2", rowId: prefix + 'autorecording off ' + q , description: 'To Disable Auto Recording Off 🔒'},	
]
    } 	,	

 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[9] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    9.1", rowId: prefix + 'autoread on ' + q , description: 'To Enable Auto Read On 🔑'}, 
  {title: "    9.2", rowId: prefix + 'autoread off ' + q , description: 'To Disable Auto Read Off 🔒'},	
]
    } 	,	

 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[10] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    10.1", rowId: prefix + 'autoreact on ' + q , description: 'To Enable Auto React On 🔑'}, 
  {title: "    10.2", rowId: prefix + 'autoreact off ' + q , description: 'To Disable Auto React Off 🔒'},	
]
    } 	,	

 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[11] 𝗔𝗨𝗧𝗢 𝗔𝗟𝗪𝗔𝗬𝗦 𝗢𝗡𝗟𝗜𝗡𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    11.1", rowId: prefix + 'alwaysonline on ' + q , description: 'To Enable Always Online On 🔑'}, 
  {title: "    11.2", rowId: prefix + 'alwaysonline off ' + q , description: 'To Disable Always Online Off 🔒'},	
]
    } 	,	   

{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[12] 𝗔𝗨𝗧𝗢 𝗡𝗢 𝗕𝗟𝗢𝗖𝗞 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    12.1", rowId: prefix + 'autoblock on ' + q , description: 'To Enable Block On 🔑'}, 
  {title: "    12.2", rowId: prefix + 'autoblock off ' + q , description: 'To Disable Block Off 🔒'},	
]
    } 	,	   
	
 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[13] 𝗔𝗨𝗧𝗢 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    13.1", rowId: prefix + 'autowelcome on ' + q , description: 'To Enable Auto Welcome On 🔑'}, 
  {title: "    13.2", rowId: prefix + 'autowelcome off ' + q , description: 'To Disable Auto Welcome Off 🔒'},	
]
    } 	,

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[14] 𝗔𝗡𝗧𝗜 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    14.1", rowId: prefix + 'antibot on ' + q , description: 'To Enable AntiBot On 🔑'}, 
  {title: "    14.2", rowId: prefix + 'antibot off ' + q , description: 'To Disable AntiBot Off 🔒'},	
]
    } 	,

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[15] 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    15.1", rowId: prefix + 'antilink on ' + q , description: 'To Enable AntiLink On 🔑'}, 
  {title: "    15.2", rowId: prefix + 'antilink off ' + q , description: 'To Disable AntiLink Off 🔒'},	
]
    } 	,

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[16] 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    16.1", rowId: prefix + 'antibad on ' + q , description: 'To Enable AntiBad On 🔑'}, 
  {title: "    16.2", rowId: prefix + 'antibad off ' + q , description: 'To Disable AntiBad Off 🔒'},	
]
    },

   {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[17] 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    17.1", rowId: prefix + 'antidelete on ' + q , description: 'To Enable AntiDelete On 🔑'}, 
  {title: "    17.2", rowId: prefix + 'antidelete off ' + q , description: 'To Disable AntiDelete Off 🔒'},	
]
    },	

    {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[18] 𝗔𝗡𝗧𝗜 𝗖𝗔𝗟𝗟 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    18.1", rowId: prefix + 'anticall on ' + q , description: 'To Enable AntiCall On 🔑'}, 
  {title: "    18.2", rowId: prefix + 'anticall off ' + q , description: 'To Disable AntiCall Off 🔒'},	
]
    },
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[19] 𝗔𝗜 𝗜𝗠𝗔𝗚𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    19.1", rowId: prefix + 'aiimage on ' + q , description: 'To Enable Ai Image On 🔑'}, 
  {title: "    19.2", rowId: prefix + 'aiimage off ' + q , description: 'To Disable Ai Image Off 🔒'},	
]
    },
 {
	title: "━━━━━━━━━━━━━━━━━━\n\n`[20] 𝗔𝗜 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    20.1", rowId: prefix + 'aichatbot on ' + q , description: 'To Enable Ai CHATBOT On 🔑'}, 
  {title: "    20.2", rowId: prefix + 'aichatbot off ' + q , description: 'To Disable Ai CHATBOT Off 🔒'},	
]
    },	
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[21] 𝗔𝗜 𝗠𝗔𝗧𝗛𝗦 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    21.1", rowId: prefix + 'mathsai on ' + q , description: 'To Enable Ai MATHS On 🔑'}, 
  {title: "    21.2", rowId: prefix + 'mathsai off ' + q , description: 'To Disable Ai MATHS Off 🔒'},	
]
    },		
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[22] 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    22.1", rowId: prefix + 'welcome on ' + q , description: 'To Enable Welcome On 🔑'}, 
  {title: "    22.2", rowId: prefix + 'welcome off ' + q , description: 'To Disable Welcome Off 🔒'},	
]
    },
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[23] 𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    23.1", rowId: prefix + 'oreact on ' + q , description: 'To Enable Owner React On 🔑'}, 
  {title: "    23.2", rowId: prefix + 'oreact off ' + q , description: 'To Disable Owner React Off 🔒'},	
]
    },	
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[24] 𝗖𝗠𝗗 𝗥𝗘𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    24.1", rowId: prefix + 'cmdread on ' + q , description: 'To Enable CmdRead On 🔑'}, 
  {title: "    24.2", rowId: prefix + 'cmdread off ' + q , description: 'To Disable CmdRead Off 🔒'},	
]
    },
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[25] 𝗢𝗡𝗟𝗬 𝗚𝗥𝗢𝗨𝗣 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    25.1", rowId: prefix + 'onlygroup on ' + q , description: 'To Enable OnlyGroup On 🔑'}, 
  {title: "    25.2", rowId: prefix + 'onlygroup off ' + q , description: 'To Disable OnlyGroup Off 🔒'},	
]
    },
{
	title: "━━━━━━━━━━━━━━━━━━\n\n`[26] 𝗢𝗡𝗟𝗬 𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
	rows: [
  {title: "    26.1", rowId: prefix + 'onlyme on ' + q , description: 'To Enable OnlyMe On 🔑'}, 
  {title: "    26.2", rowId: prefix + 'onlyme off ' + q , description: 'To Disable OnlyMe Off 🔒'},	
]
    }			
]
  const listMessage = {
  caption: "⚙️ SE𝖭𝖴 MD V1 SETTINGS ⚙️",
     image: { url: `https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg` },
   footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})                    



	

cmd({
    pattern: "fmmods",
    alias: ["wamod","wamods","fmmod"],
    react: '📲',
    desc: "Download all fmmods.",
    category: "download",
    use: '.fmmods',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted,prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  let response = (await fetchJson('https://vajiratech.osc-fr1.scalingo.io/downloader/fmmods')).data
  const sections = [
      {
	title: "",
	rows: [
    {title: "1", rowId: prefix + 'dmod ' + response.com_whatsapp.link + '+' + response.com_whatsapp.name, description: response.com_whatsapp.name },
    {title: "2", rowId: prefix + 'dmod ' + response.com_fmwhatsapp.link + '+' + response.com_fmwhatsapp.name, description: response.com_fmwhatsapp.name },
    {title: "3", rowId: prefix + 'dmod ' + response.com_gbwhatsapp.link + '+' + response.com_gbwhatsapp.name, description: response.com_gbwhatsapp.name }, 
    {title: "4", rowId: prefix + 'dmod ' + response.com_yowhatsapp.link + '+' + response.com_yowhatsapp.name, description: response.com_yowhatsapp.name },
  ]
    } 
]

  const listMessage = {
      text : `👨‍💻 ꜱᴇɴ𝚄 ᴍᴅ ʙʏ ꜱx𝙳 ᴛᴇᴀᴍ 👨‍💻
      
*Foud Whatsapp Mod Downloader 📲*
`,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})
	
cmd({
  pattern: "dmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  modname + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


cmd({
    pattern: "alive",
    react: "👨‍💻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'

const cap = `${monspace}👋 Hello ${pushname}${monspace}

*👾𝐒𝐄𝐍𝐔 -MD commands menu...*
  
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
🐼This is the result of our teams hard work and our 𝐒𝐗𝐃 team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻`
		    
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'Take Menu'},
	    {title: "2", rowId: prefix + 'ping' , description: 'To Check Speed'}

	]
    } 
]
const listMessage = {
  image: {url: config.LOGO},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})	

	

cmd({
    pattern: "sc",
    react: "👨‍💻",
    alias: ["script","repo"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
let cap = `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻

   *SENU MD WHATSAPP USER BOT* 💫

                     *OUR MISSION*

🐼This is the result of our teams hard work and our SXD team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot


🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier


💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.


⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.


👨‍💻 OWNER 𝐉𝐄𝐒𝐓𝐄𝐑

🎡 *GITHUB:*  https://github.com/Gehansasl/SENU-X-BOT

🪩 *OUR GROUP:* 

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 
`
	
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'Take Menu'},
	    {title: "2", rowId: prefix + 'ping' , description: 'To Check Speed'}

	]
    } 
]
const listMessage = {
  image: {url: config.LOGO},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})	
		    
	



cmd({
  pattern: "menu",
  react: "👨‍💻",
  alias: ["panel","help","commands"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
	
	
const cap = `${monspace}👋 Hello ${pushname}${monspace}

*👾 SENU-MD commands menu...*
  
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'downmenu' , description: 'Down Commands'},
	    {title: "2", rowId: prefix + 'searchmenu' , description: 'Search Commands'},
	    {title: "3", rowId: prefix + 'convertmenu' , description: 'Convert Commands'}, 
	    {title: "4", rowId: prefix + 'logomenu' , description: 'Logo Commands'},
	    {title: "5", rowId: prefix + 'mainmenu' , description: 'Main Commands'},
	    {title: "6", rowId: prefix + 'groupmenu' , description: 'Group Commands'},
	    {title: "7", rowId: prefix + 'bugmenu' , description: 'Bug commands'},
	    {title: "8", rowId: prefix + 'othermenu' , description: 'Other commands'}

	]
    } 
]
const listMessage = {
  image: {url: config.LOGO},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})	

	
	
cmd({
    pattern: "play",
    react: "📱",
    desc: urlneed1,
    category: "download",
    use: '.soundcloud lelena',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await ssearch(q)
const data = data2.result
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
  if(data[i].thumb && !data[i].views.includes('Follow')){
srh.push({
title: i + 0,
description: data[i].title + ' | ' + data[i].artist + ' | ' + data[i].views + ' | '+ data[i].release + ' | '+ data[i].timestamp,
/**
	description: data[i].artist + ' | ' + data[i].views + ' | '+ data[i].release + ' | '+ data[i].timestamp,
	**/
rowId: prefix + 'selectaud3 ' + data[i].url
});
  }
}
const sections = [{
title: "_[Result from m.soundcloud.com]_",
rows: srh
}]
const listMessage = {
text: `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻

   *SOUNDCLOUD DOWNLOADER*

*📱 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from m.soundcloud.com 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
  alias: ["selectaud3"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻

  *SELECT VIDEO QUALITY*`
const sections = [
    {
	title: "",
	rows: [
  {title: "1", rowId: prefix + 'soundaud ' + q , description: 'Normal type song 🎶'}, 
  {title: "2", rowId: prefix + 'sounddoc ' + q , description: 'Document type song 📁'},
]
    } 
]
  const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
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


cmd({
    pattern: "yt",
    use: '.yt [song name or link]',
    react: "🎬",
    desc: descyt,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `*🎬📥SENU-MD YT DOWNLOADER*

*✏️ ʀᴇꜱᴜʟᴛ:*
*🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ:*

*◯──────────────────────────────────◯*_`

const sections = [
    {
title: "",
	rows: [
	    {title: "1", rowId: prefix + 'selectaud ' + q , description: 'DOWNLOAD SONG 🎙️'},
	    {title: "2", rowId: prefix + 'selectvid ' + q , description: 'DOWNLOAD VIDEO 🎞️'}
	]
    } 
]
const listMessage = {
  text: dat,
  footer: `*ꜱᴇɴᴜ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇꜱᴛᴇʀ*`,
  buttonText: "🔢 Reply below number,",
  sections	
}

return await conn.replyList(from, listMessage ,{ quoted : mek })	
		    }
if(ytreg(q)){let dat = `*🎬📥SENU-MD YT DOWNLOADER*

*✏️ ʀᴇꜱᴜʟᴛ:*
*🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ:*

*◯──────────────────────────────────◯*_`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytdocs ' + q , description: 'DOWNLOAD SONG 🎙️'},
	    {title: "2", rowId: prefix + 'ytdocv ' + q , description: 'DOWNLOAD VIDEO 🎞️'}

	]
    } 
]
const listMessage = {
  text: dat,
  footer: `*ꜱᴇɴᴜ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇꜱᴛᴇʀ*`,
  buttonText: "🔢 Reply below number,",
  sections
  }

	     
return await conn.replyList(from, listMessage ,{ quoted : mek })
	    }
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*🎬📥SENU-MD YT DOWNLOADER*

*🎼 ꜱᴏɴɢ ɴᴀᴍᴇ: ${anu.title}*
*🎻 ᴄʜᴀɴɴᴇʟ: ${anu.author.name}*

*◯──────────────────────────────────◯*_`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'selectaud ' + anu.url , description: 'DOWNLOAD SONG 🎙️'},
	    {title: "2", rowId: prefix + 'selectvid ' + anu.url , description: 'DOWNLOAD VIDEO 🎞️'}

	]
    } 
]
const listMessage = {
  image: {url: anu.thumbnail},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
    pattern: "video",
    alias: ["ytvideo"],
    use: '.video lelena',
    react: "📽️",
    desc: descv,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻

   *SELECT VIDEO TYPE*`
const sections = [
    {
	title: '*[1] NORMAL QUALITY 🎶*',
	rows: [
	    {title: "    1.1", rowId: prefix + '240p ' + q , description: '```240p```'} ,
            {title: "    1.2", rowId: prefix + '360p ' + q , description: '```320p```'},
	    {title: "    1.3", rowId: prefix + '480p ' + q , description: '```480p```'} ,
	    {title: "    1.4", rowId: prefix + '720p ' + q , description: '```720p```'},
	    {title: "    1.5", rowId: prefix + '1080p ' + q , description: '```1080p```'} ,
	]
    } ,

   {
	title: '*[2] DOCUMENT QUALITY 📂*',
	rows: [
	    {title: "    2.1", rowId: prefix + '24p ' + q , description: '```240p```'},
	    {title: "    2.2", rowId: prefix + '36p ' + q , description: '```360p```'} ,
	    {title: "    2.3", rowId: prefix + '48p ' + q , description: '```480p```'},
	    {title: "    2.4", rowId: prefix + '72p ' + q , description: '```720p```'} ,
            {title: "    2.5", rowId: prefix + '108p ' + q , description: '```1080p```'} ,
	]
    } 	
]
const listMessage = {
  text: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek }) 				      
				     }
if(ytreg(q)){let dat = `👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ ꜱxᴅ ᴛᴇᴀᴍ 👨‍💻
*SELECT VIDEO TYPE*`
const sections = [
    {
	title: '*[1] NORMAL QUALITY 🎶*',
	rows: [
	    {title: "    1.1", rowId: prefix + '240p ' + q , description: '```240p```'} ,
            {title: "    1.2", rowId: prefix + '360p ' + q , description: '```320p```'},
	    {title: "    1.3", rowId: prefix + '480p ' + q , description: '```480p```'} ,
	    {title: "    1.4", rowId: prefix + '720p ' + q , description: '```720p```'},
	    {title: "    1.5", rowId: prefix + '1080p ' + q , description: '```1080p```'} ,
	]
    } ,

   {
	title: '*[2] DOCUMENT QUALITY 📂*',
	rows: [
	    {title: "    2.1", rowId: prefix + '24p ' + q , description: '```240p```'},
	    {title: "    2.2", rowId: prefix + '36p ' + q , description: '```360p```'} ,
	    {title: "    2.3", rowId: prefix + '48p ' + q , description: '```480p```'},
	    {title: "    2.4", rowId: prefix + '72p ' + q , description: '```720p```'} ,
            {title: "    2.5", rowId: prefix + '108p ' + q , description: '```1080p```'} ,
	]
    } 	
]
const listMessage = {
  text: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections 
}	

	     
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
	}
	
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `📽️ *ꜱᴇɴᴜ-ᴍᴅ ᴠɪᴅᴇᴏ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*📽️

┌──────────────────

*ℹ️ Title:* ${anu.title}
*👁️‍🗨️ Views:* ${anu.views}
*🕘 Duration:* ${anu.timestamp}
*🔗 Url:* ${anu.url} 

└──────────────────`

const sections = [
    {
	title: '*[1] NORMAL QUALITY 🎶*',
	rows: [
	    {title: "    1.1", rowId: prefix + '240p ' + anu.url , description: '```240p```'} ,
            {title: "    1.2", rowId: prefix + '360p ' + anu.url , description: '```320p```'},
	    {title: "    1.3", rowId: prefix + '480p ' + anu.url , description: '```480p```'} ,
	    {title: "    1.4", rowId: prefix + '720p ' + anu.url , description: '```720p```'},
	    {title: "    1.5", rowId: prefix + '1080p ' + anu.url , description: '```1080p```'} ,
	]
    } ,

   {
	title: '*[2] DOCUMENT QUALITY 📂*',
	rows: [
	    {title: "    2.1", rowId: prefix + '24p ' + anu.url , description: '```240p```'},
	    {title: "    2.2", rowId: prefix + '36p ' + anu.url , description: '```360p```'} ,
	    {title: "    2.3", rowId: prefix + '48p ' + anu.url , description: '```480p```'},
	    {title: "    2.4", rowId: prefix + '72p ' + anu.url , description: '```720p```'} ,
            {title: "    2.5", rowId: prefix + '108p ' + anu.url , description: '```1080p```'} ,
	]
    } 	
]
const listMessage = {
  image: {url: anu.thumbnail},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 ꜱᴇɴᴜ ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})


cmd({
    pattern: "downmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *SENU-MD DOWNLOAD COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};

let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'ꜱᴇɴᴜ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *SENU-MD SEARCH COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'ꜱᴇɴᴜ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴇɴᴜ-ᴍᴅ◎ʙʏ ᴊᴇꜱᴛᴇʀ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *𝖱𝖠𝖭𝖴-MD CONVERT COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *RANU-MD LOGO COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *RANU-MD MAIN COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})



cmd({
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   * 𝖱𝖠𝖭𝖴-MD GROUP COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   * 𝖱𝖠𝖭𝖴-MD BUG COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   * RANU-MD OTHER COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: '𝚁𝙰𝙽𝚄-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image : { url : config.LOGO} ,
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙰𝙽𝚄-ᴍᴅ◎ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})
 	
//---------------------------------------------------------------------------


		    
cmd({
    pattern: "song",
    alias: ["ytsong"],
    use: '.song lelena',
    react: "🎧",
    desc: descs,
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *SELECT SONG TYPE*`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytmp3 ' + q , description: 'Normal type song 🎶'},
	    {title: "2", rowId: prefix + 'ytdocs ' + q , description: 'Document type song 📂'},

	]
    } 
]
const listMessage = {
  text: dat,
  footer: `*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*`,
  buttonText: "```🔢 Reply below number you need song type,```",
  sections
}

return await conn.replyList(from, listMessage ,{ quoted : mek }) 				      
				     }
if(ytreg(q)){let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

*SELECT SONG TYPE*`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytmp3 ' + q , description: 'Normal type song 🎶'},
	    {title: "2", rowId: prefix + 'ytdocs ' + q , description: 'Document type song 📂'},

	]
    } 
]
const listMessage = {
  text: dat,
  footer: `*𝚁𝙰𝙽𝚄-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙲𝚁𝙳 𝚃𝙴𝙰𝙼*`,
  buttonText: "```🔢 Reply below number you need song type,```",
  sections }	

	     
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
	    }
    const zxc = await yts(q)
    const info = zxc.videos[0]
    const url = info.url
    let dl = await fg.yta(url)
const cap = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *SONG DOWNLOADER*

> *\`➤ Title\` :* ${info.title}

> *\`➤ Size\` :* ${info.size}

> *\`➤ Duration\` :* ${info.timestamps}

> *\`➤ Quality\` :* ${dl.quality}				   

> *\`➤ URL\` :* ${info.url}
`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytmp3 ' + info.url , description: 'Normal type song 🎶'},
	    {title: "2", rowId: prefix + 'ytdocs ' + info.url , description: 'Document type song 📂'},

	]
    } 
]
const listMessage = {
  image: {url: info.thumbnail},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
  alias: ["selectaud"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻

  *SELECT VIDEO QUALITY*`
const sections = [
    {
	title: "",
	rows: [
  {title: "1", rowId: prefix + 'ytmp3 ' + q , description: 'Normal type song 🎶'}, 
  {title: "2", rowId: prefix + 'ytdocs ' + q , description: 'Document type video 📁'},	
]
    } 
]
  const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
  alias: ["selectvid"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

  *SELECT VIDEO QUALITY*`
const sections = [
    {
	title: '*[1] NORMAL QUALITY 🎶*',
	rows: [
	    {title: "    2.4", rowId: prefix + '240p ' + q , description: '```240p```'} ,
            {title: "    1.1", rowId: prefix + '360p ' + q , description: '```320p```'},
	    {title: "    1.2", rowId: prefix + '480p ' + q , description: '```480p```'} ,
	    {title: "    1.3", rowId: prefix + '720p ' + q , description: '```720p```'},
	    {title: "    1.4", rowId: prefix + '1080p ' + q , description: '```1080p```'} ,
	]
    } ,

   {
	title: '*[2] DOCUMENT QUALITY 📂*',
	rows: [
	    {title: "    2.1", rowId: prefix + '24p ' + q , description: '```240p```'},
	    {title: "    2.2", rowId: prefix + '36p ' + q , description: '```360p```'} ,
	    {title: "    2.3", rowId: prefix + '48p ' + q , description: '```480p```'},
	    {title: "    2.4", rowId: prefix + '72p ' + q , description: '```720p```'} ,
            {title: "    2.5", rowId: prefix + '108p ' + q , description: '```1080p```'} ,
	]
    } 	
]
  const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})



//===================================================================================================

cmd({
  pattern: "240p",
  react: "📽️",
  dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

//---------------------------------------------------------------------------

cmd({
  pattern: "ytmp3",
  react: "🎧",
dontAddCommandList: true,
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
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




    
//---------------------------------------------------------------------------

cmd({
  pattern: "ytmp4",
  react: "🎧",
  dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let sendaE =  await conn.sendMessage(from, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName:  `${titleYt}.mp3` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})
return fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "ytdocs",
  react: "🎧",
  dontAddCommandList: true,
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
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

//---------------------------------------------------------------------------

cmd({
  pattern: "ytdocv",
  react: "🎧",
  dontAddCommandList: true,
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp4");
const stream = ytdl(q, {
      filter: (info) => info.itag == 22 || info.itag == 18,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
  let senda =  await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'document/mp4', fileName: titleYt + '.mp4',caption: config.FOOTER  }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: '🎼', key: senda.key }})
return fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "24p",
react: "📽️",
  dontAddCommandList: true,
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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

cmd({
    pattern: "apk",
    react: '📦',
    desc: "To download apk files",
    category: "download",
    use: ".apk apkname",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var msg = mek
await conn.sendMessage(from, { react: { text: 'ℹ️', key: msg.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: msg } ) 
const data = await apkdl.download(q)
let listdata = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻
   
 *APK-DOWNLOADER*

 *📚 ᴀᴘᴘ ɴᴀᴍᴇ: ${data.name}*
 *📈 ᴀᴘᴘ ꜱɪᴢᴇ: ${data.size}*
 
─────────────────────────────`
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'dapk ' + q , description: 'Download the apk'},
	    {title: "2", rowId: prefix + 'apk1 ' + q , description: 'Download many apk'} ,
	    {title: "3", rowId: prefix + 'apkinfo ' + q , description: 'Info of apk'}, 

	]
    } 
]      
  const listMessage = {
  text: listdata ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
    pattern: "apk1",
    react: "📱",
    alias: ["findapk","playstore"],
    desc: urlneed4,
    category: "download",
    use: '.apk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const data = data2
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
description: data[i].name,
title: i + 1,
rowId: prefix + 'dapk ' + data[i].id
});
}
const sections = [{
title: "_[Result from playstore.]_",
rows: srh
}]
const listMessage = {
text: `┌───[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

   *APK DOWNLOADER*

*📱 Apk Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from playstore. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dapk",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '*𝚁𝙰𝙽𝚄-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚁𝙴𝙳 𝙳𝚁𝙰𝙶𝙾𝙽*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "apkinfo",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    var msg = mek
await conn.sendMessage(from, { react: { text: 'ℹ️', key: msg.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: msg } ) 
const data = await apkdl.download(q)
let listdata = `╔═══════════════════╗
*║🤳𝚁𝙰𝙽𝚄 PLAYSTORE-SEARCH*
╚═══════════════════╝

*📚 ᴀᴘᴘ ɴᴀᴍᴇ: ${data.name}* 

*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): ${data.size}*

*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: ${data.lastup}*

*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ: ${data.package}* 

_*◯──────────────────────────────────◯*_`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: msg })
await conn.sendMessage(from, { react: { text: '✔', key: msg.key }})
} catch (e) {
  l(e)
}
})


//============================================================================
cmd({
    pattern: "ss",
    react: '🖼️',
    desc: "url to screenshot",
    category: "download",
    use: '.ss url',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻
   
 ▏ *SS CONVETER*

└──────◉`
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'desktop ' + q , description: 'Desktop type ss'},
	    {title: "2", rowId: prefix + 'ssphone ' + q , description: 'Phone type ss 🖼️'} ,
	    {title: "3", rowId: prefix + 'sstab ' + q , description: 'Tab type ss 🖼️'} ,
            

	]
    } 
]   
  const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})

	


cmd({
    pattern: "desktop",
    react: "📸",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'desktop')
fs.writeFileSync(name + '.jpg', data);
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *📸 SCREENSHOT GETTER*`
const sections = [
    {
	title: "",
	rows: [
{title: "1", rowId: prefix + 'ssd ' + name + '.jpg', description: 'DOCUMENT'}, 
{title: "2", rowId: prefix + 'ssi ' + name + '.jpg', description: 'IMAGE'}, 
]
    } 
]
    const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(cant)
l(e)
}
})

	
cmd({
    pattern: "ssphone",
    react: "📸",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'phone')
fs.writeFileSync(name + '.jpg', data);
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *📸 SCREENSHOT GETTER*`
const sections = [
    {
	title: "",
	rows: [
 {title: "1", rowId: prefix + 'ssd ' + name + '.jpg', description: 'DOCUMENT'},
 {title: "2", rowId: prefix + 'ssi ' + name + '.jpg', description: 'IMAGE'} ,
	]
    } 
]
    const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "sstab",
    react: "📸",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'tablet')
fs.writeFileSync(name + '.jpg', data);
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *📸 SCREENSHOT GETTER*`
const sections = [
    {
	title: "",
	rows: [
 {title: "1", rowId: prefix + 'ssd ' + name + '.jpg', description: 'DOCUMENT'},
 {title: "2", rowId: prefix + 'ssi ' + name + '.jpg', description: 'IMAGE'} ,
	]
    } 
]
    const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

	    
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
cmd({
    pattern: "sub",
    react: "🎞️",
    alias: ["subtitle","sinhalasub","sisub","sinhalasubtitle"],
    desc: urlneed1,
    category: "download",
    use: '.sub spiderman',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await subsearch(q)
const data = data2.results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND}, { quoted: mek } )
var srh = [];  
for (var i = 0; i < 9; i++) {
srh.push({
title: i + 1,
description: data[i].title,
rowId: prefix + 'dsub ' + data[i].link
});
}
const sections = [{
title: "_[Result from Baiscopelk.com]_",
rows: srh
}]
const listMessage = {
text: `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *SI SUB DOWNLOADER*

*📜 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from Baiscopelk.com 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dsub",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need sub link...*' }, { quoted: mek } ) 
const dataq = await subdl(q)
let data = dataq.results
let listdata = `*📚 Title :* ${data.title.trim()}
*💼 Creater :* ${data.creater}`
await conn.sendMessage(from, { image: { url: data.img }, caption: listdata }, { quoted: mek })
let sendapk = await conn.sendMessage(from , { document : { url : data.dl_link  } , mimetype : 'application/zip' , fileName : data.title.trim() + '.' + 'zip',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

//===============================TIKTOK COMMAND===============================

                                         
cmd({
    pattern: "tiktok",
    alias: ["ttdl","tt"],
    react: '🏷️',
    desc: desc,
    category: "download",
    use: '.tiktok <Tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!regtik(q)) return await  reply(urlneed)
var l = ''
let tiktok = await fetchJson('https://api.maher-zubair.tech/download/tiktok?url=' + q)
if(tiktok.msg == 'OK') {
let data = tiktok
l = {
title: data.result.desc,
nowm: data.result.withoutWaterMarkVideo,
watermark: data.result.waterMarkVideo,
audio: data.result.music,
thumbnail: data.result.cover,
author: data.result.author
}
}
else {
let data = await Tiktok(q)
l = data
}


let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

*TIKTOK DOWNLOADER*

*📃 Title:* ${l.title}
*✍🏼 Author:* ${l.author}`

const sections = [
    {
	title: "",
	rows: [
	{title: "1", rowId: `${prefix}dvideo ${l.nowm}`,description: 'VIDEO NO WATERMARK'},
        {title: "2", rowId: `${prefix}dvideo ${l.watermark}`,description: 'VIDEO WITH WATERMARK'},
        {title: "3", rowId: `${prefix}dau ${l.audio}`,description: 'AUDIO DOWNLOAD'} ,
  ]
    } 
]
const listMessage = {
  image: { url: l.thumbnail },	
  text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,                                       
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})	


cmd({
  pattern: "dau",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: { url: q }, mimetype: 'audio/mpeg', fileName: 'TikTok Audio' + '.mp3',caption: config.FOOTER }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

//===================================FB COMMAND====================================
    
cmd({
  pattern: "fb",
  react: '#️⃣',
  alias: ["fbdl","facebook"],
  desc: desc1,
  category: "download",
  use: '.fb <Fb video link>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!fbreg(q)) return await  reply(urlneed2)
let data = await fbDownloader(q)
let l = data.download
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *FB DOWNLOADER*

*📎 Url:* ${q}`
if(!l[0]) return await reply(N_FOUND)
var sections
if(!l[1]){
var sections = [
    {
	title: "",
	rows: [
  {title: "1", rowId: prefix + 'dvideo ' + l[0].url, description: l[0].quality + ' VIDEO'}
]
    } 
]
} else {
var sections = [
    {
	title: "",
	rows: [
  {title: "1", rowId: prefix + 'dvideo ' + l[0].url, description: l[0].quality + ' VIDEO'}, 
  {title: "2", rowId: prefix + 'dvideo ' + l[1].url, description: l[1].quality + ' VIDEO'}
]
    } 
]}	
const listMessage = {
    image: {url: 'https://media.idownloadblog.com/wp-content/uploads/2022/04/Download-Facebook-data.jpg'},
    text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,                                       
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})	



cmd({
  pattern: "dvideo",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { video: { url: q }, caption: config.FOOTER}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

//---------------------------------------------------------------------------
cmd({
    pattern: "removebg",
    react: "🔮",
    alias: ["rmbg"],
    desc: descg,
    category: "convert",
    use: '.removebg <Reply to image>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    const isQuotedVideo = m.quoted ? ((m.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'videoMessage') : false)) : false
    const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false
  if ((m.type === 'imageMessage') || isQuotedImage) {
    var nameJpg = getRandom('');
    var namePng = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let type = await fileType.fromBuffer(buff);
    await fs.promises.writeFile("./" + type.ext, buff);
    var form = new FormData();
    form.append("image_file", fs.createReadStream("./" + type.ext));
    form.append("size", "auto");

    var rbg = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
      body: form,
      headers: {
        "X-Api-Key": 'fLYByZwbPqdyqkdKK6zcBN9H',
      },
    });
await pipeline(rbg, fs.createWriteStream(namePng + ".png"));
let dat = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *🌆 BACKGROUND REMOVER*

`
const sections = [
    {
	title: "",
	rows: [
{title: "1", rowId: prefix + 'rbgi ' + namePng + ".png", description: 'IMAGE'}, 
{title: "2", rowId: prefix + 'rebgs ' + namePng + ".png", description: 'STICKER'}, 
{title: "3", rowId: prefix + 'rbgd ' + namePng + ".png", description: 'DOCUMENT'}
]
    } 
]
    const listMessage = {
 text : dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
}else return await  reply(imgmsg)
} catch (e) {
reply(cant)
l(e)
}
})

cmd({
  pattern: "rbgi",
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
  pattern: "rebgs",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
let sticker = new Sticker(q, {
  pack: pushname, // The pack name
  author: '', // The author name
  type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
  categories: ["🤩", "🎉"], // The sticker category
  id: "12345", // The sticker id
  quality: 75, // The quality of the output file
  background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
await conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "rbgd",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: fs.readFileSync(q), mimetype: 'image/x-png', fileName: 'Removebg' + '.png',caption: config.FOOTER  }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

//---------------------------------------------------------------------------	
cmd({
    pattern: "news",
    react: '📰',
    desc: "news information",
    category: "search",
    use: '.news',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'derananews ' + q , description: 'Derana News 📰'},
	    {title: "2", rowId: prefix + 'sirasanews ' + q , description: 'Sirasa News 📰'} ,
            {title: "3", rowId: prefix + 'hirunews ' + q , description: 'Hiru News 📰'},
	    {title: "4", rowId: prefix + 'esananews ' + q , description: 'Esana News 📰'} ,
	    {title: "5", rowId: prefix + 'technews ' + q , description: 'Tech News 📰'} ,
            {title: "6", rowId: prefix + 'nasanews ' + q , description: 'Nasa News 📰'} ,
            {title: "7", rowId: prefix + 'wabeta ' + q , description: 'Wabeta News 📰'} ,		
	    {title: "8", rowId: prefix + 'ios ' + q , description: 'Ios News 📰'} ,
	    {title: "9", rowId: prefix + 'cricketnews ' + q , description: 'Cricket News 📰'} ,		
            {title: "10", rowId: prefix + 'vnews ' + q , description: 'Vehical News 📰'} ,
	    {title: "11", rowId: prefix + 'gmsnews ' + q , description: 'Mobile News 📰'} ,
            

	]
    } 
]   
const listMessage = {
  caption: `❖──👨‍💻 ＲＡＮＵ - ＭＤ - ＮＥＷＳ 👨‍💻──❖`,
     image: { url: `https://telegra.ph/file/cb9556cbbdfe190a14da2.jpg` },
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: config.IMAGE,
      sourceUrl: 'https://wa.me/94783462955',
      mediaType: 1,
      renderLargerThumbnail: true
         }}	
}


return await conn.replyList(from, listMessage ,{ quoted : mek }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'derananews ' + q , description: 'Derana News 📰'},
	    {title: "2", rowId: prefix + 'sirasanews ' + q , description: 'Sirasa News 📰'} ,
            {title: "3", rowId: prefix + 'hirunews ' + q , description: 'Hiru News 📰'},
	    {title: "4", rowId: prefix + 'esananews ' + q , description: 'Esana News 📰'} ,
	    {title: "5", rowId: prefix + 'technews ' + q , description: 'Tech News 📰'} ,
	    {title: "6", rowId: prefix + 'nasanews ' + q , description: 'Nasa News 📰'} ,	
            {title: "7", rowId: prefix + 'wabeta ' + q , description: 'Wabeta News 📰'} ,
	    {title: "8", rowId: prefix + 'ios ' + q , description: 'Ios News 📰'} ,
	    {title: "9", rowId: prefix + 'cricketnews ' + q , description: 'Cricket News 📰'} ,
            {title: "10", rowId: prefix + 'vnews ' + q , description: 'Vehical News 📰'} ,
	    {title: "11", rowId: prefix + 'gmsnews ' + q , description: 'Mobile News 📰'} ,	
            

	]
    } 
]   
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: true,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})
    




//---------------------------------------------------------------------------
cmd({
    pattern: "xnxx",
    react: "📱",
    desc: "xxx video dowloader",
    category: "download",
    use: '.xnxx mia kalifa',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return mek.reply(`Enter Query`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(q)
           let ff = res.result.map(() => `මොනාද හුත්තො කුනුහරප ඉල්ලන්නෙ🤣 \n බැන්ඩ් කරගනිම් ඔව ඉල්ලල උබෙ whatsapp එක🤣\nවලත්තයා `)
	//return reply('මොනාද හුත්තො කුනුහරප ඉල්ලන්නෙ🤣 \n බැන්ඩ් කරගනිම් ඔව ඉල්ලල උබෙ whatsapp එක🤣\nවලත්තයා')
              if (res.status) mek.reply(ff)

const data = res.result
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
title: i + 1,
description: data[i].title,
rowId: prefix + 'xnxxdl ' + data[i].link + '+' + data[i].title
});
}
const sections = [{
title: "_[Result from androidapksfree.]_",
rows: srh
}]
const listMessage = {
text: `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *XNXX VIDEO DOWNLOADER*

*📱 Enterd Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from androidapksfree. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "xnxxdl",
    react: '👾',
    desc: 'to take xnxx video',
    category: "download",
    use: '.xnxxdl',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!q.includes('xnxx.com')) return mek.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(q)
conn.sendMessage(mek.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: mek })
} catch (e) {
l(e)
}
})   

cmd({
    pattern: "wallpaper",
    react: "🔖",
    desc: "image downloader",
    category: "download",
    use: '.wallpaper',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    let teks = 'Enter Query Title'
        let { wallpaper } = require('../lib/scraper')
                                  anu = await wallpaper(q)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                          
              const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'wallpaper ' + q , description: 'NEXT  PIC ➡️'},

	]
    } 
]      
                                  const listMessage = {
  image: { url: result.image[0] },
      caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
      footer: config.FOOTER,
      buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: {
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})	

cmd({
    pattern: "coffe",
    react: "🔖",
    desc: "to download coffe",
    category: "download",
    use: '.coffe',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: `☕`, key: mek.key }})
                              const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'coffe ' + q , description: 'NEXT  PIC ➡️'}

	]
    } 
]      
                                  const listMessage = {
 image: { url: 'https://coffee.alexflipnote.dev/random' },
                                      caption: `Random Coffee`,
                                      footer: config.FOOTER,
                                      buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
    pattern: "happymod",
    react: "📱",
    desc: "To download happymod apl",
    category: "download",
    use: '.happymod',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return mek.reply(`Enter Query`)
	const api = require("caliph-api")
	const vid = await api.search.happymod(q)

const data = vid.result
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < 33; i++) {	
srh.push({
title: i + 1,
description: `📬 *Title - ${i.title}* \n🔗 _Url : ${i.link}_\n\n\n`,
rowId: prefix + `dapk ${i.link}`
});
}
const sections = [{
title: "_[Result from happymod.]_",
rows: srh
}]
const listMessage = {
text: `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻

   *HAPPYMOD APK DOWNLOADER*

*📱 Enterd Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from happymod. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
	
//---------------------------------------------------------------------------

}

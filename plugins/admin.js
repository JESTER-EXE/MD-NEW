const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const os = require('os')
const fs = require('fs')
const axios = require("axios")
const owner = config.OWNER_NUMBER
const moment = require('moment-timezone')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const { default: makeWASocket, useMultiFileAuthState, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')
const Heroku = require('heroku-client')
const heroku = new Heroku({
    token: config.HEROKU_API_KEY
})
const si = require('systeminformation')
const l = console.log


var tesadtag = '*Give me text to tag !*'
var descg = "It tag all members in group."
var ONLGROUP = "*This is not a group !*"
var ADMIN = "You are not an admin !"
var tmsg = "It gives bot link."
var mgmsg = "Enter the enable/disable value, For Example ${prefix}ephemeral enable"
var BOTOW = "*You are not bot\'s owner or moderator !*"

//===========================================================================


cmd({
    pattern: "updates",
    react: "🔖",
    desc: "To Se bot updates",
    category: "main",
    use: '.updates',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                }]		
            let message = {
                image: 'https://telegra.ph/file/daaa44e2849851736dd2e.png',
                header: '',
                footer: config.CAPTION,
                body: ''

            }
            return await conn.sendButtonMessage(from, buttons, m, message)	
  return await conn.sendMessage(from, buttonMessaged, {quoted: mek })

		    
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 




cmd({
    pattern: "upbio",
    react: "🍟",
    alias: ["updatebio"],
    desc: "Change the Bot number Bio",
    category: "main",
    use: '.upbio',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, isownbot, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
//if (!isCreator) { if (!isDev) return reply('🚩 *You must be a Moderator frist*') }
if ( !q ) return reply('🚩 *Enter the New Bio*')
if (q.length > 139 ) return reply('🚩 *Sorry ! Characters limit Exceded*')
await conn.updateProfileStatus(q)
await conn.sendMessage(from , { text: "🚩 *New Bio Added Successfully*" }, { quoted: mek } )
} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "getprivacy",
    react: "🍟",
    alias: ["getprivacysettings","gpvc"],
    desc: "Get the bot Number Privacy Setting Updates",
    category: "main",
    use: '.getprivacy',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, isownbot, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
const duka = await conn.fetchPrivacySettings(true)
let puka = `Read Recipt - ${duka.readreceipts}
Profile Picture - ${duka.profile}
Status  - ${duka.status}
Online - ${duka.online}
Last Seen - ${duka.last}
Group Privacy - ${duka.groupadd}
Call Privacy - ${duka.calladd}

© *𝚂𝙴𝙽𝚄 𝚇 𝙱𝙾𝚃*`
 await conn.sendMessage(from , { text: puka }, { quoted: mek } )

} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "removepp",
    react: "🍟",
    alias: ["rmpp"],
    desc: "Remove the botNumber PP",
    category: "main",
    use: '.removepp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isownbot, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
await conn.removeProfilePicture(botNumber2)
 await conn.sendMessage(from , { text: "🚩 *Profile Pic Successfully removed*" }, { quoted: mek } )

} catch (e) {
reply('🚩 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "setpp",
    react: "🍟",
    alias: ["setdp"],
    desc: "Update the botNumber PP",
    category: "main",
    use: '.setpp',
    filename: __filename
},
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, isownbot, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
    if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
    if (!mek.quoted.image)
    return await reply("🚩 *Reply to a photo*");
    let buff = await mek.quoted.download();
    await conn.updateProfilePicture(botNumber2, buff);
    return await reply("🚩 *Profile Picture Updated*");
  }
)

cmd({
    pattern: "getsession",
    react: "🔖",
    desc: "To get bot session",
    category: "main",
    use: '.getsession',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isMe) return await reply(BOTOW)
                                  
         	reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                conn.sendMessage(mek.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: mek
                })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 		    	

cmd({
    pattern: "delsession",
    react: "🔖",
    desc: "To delete bot session",
    category: "main",
    use: '.delsession',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isMe) return await reply(BOTOW)
                                  
         	                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply()
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply()
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 


cmd({
    pattern: "block",
    react: "🔖",
    desc: "To block a member",
    category: "main",
    use: '.block',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isMe) return await reply(BOTOW)
                                  
         	let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	

cmd({
    pattern: "unblock",
    react: "🔖",
    desc: "To unblock a member",
    category: "main",
    use: '.unblock',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isMe) return await reply(BOTOW)
                                  
         	let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 		    	




cmd({
    pattern: "save",
    category: "download",
    react: "🎧",
    use: ".save",
    filename: __filename
},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            
//const { repondre , msgRepondu , superUser, auteurMessage } = commandeOptions;

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});		
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const decodeJid = (jid) => {
                if (!jid)
                    return jid;
                if (/:\d+@/gi.test(jid)) {
                    let decode = (0, baileys_1.jidDecode)(jid) || {};
                    return decode.user && decode.server && decode.user + '@' + decode.server || jid;
                }
                else
                    return jid;
            };
var origineMessage = mek.key.remoteJid;
const verifGroupe = origineMessage?.endsWith("@g.us");		
var auteurMessage = verifGroupe ? (ms.key.participant ? ms.key.participant : ms.participant) : origineMessage;
 var idBot = decodeJid(conn.user.id);
var servBot = idBot.split('@')[0];
const FranceKing = '94788770020';		
var msgRepondu = mek.message.extendedTextMessage?.contextInfo?.quotedMessage;
var superUser=[servBot,FranceKing].map((s)=>s.replace(/[^0-9]/g)+"@s.whatsapp.net").includes(auteurMessage);
var auteurMessage = verifGroupe ? (mek.key.participant ? mek.key.participant : mek.participant) : origineMessage;

		
  
      if(msgRepondu) {

        console.log(msgRepondu) ;

        let msg ;
  
        if (msgRepondu.imageMessage) {
  
          
  
       let media  = await conn.downloadAndSaveMediaMessage(msgRepondu.imageMessage) ;
       // console.log(msgRepondu) ;
       msg = {
  
         image : { url : media } ,
         caption : msgRepondu.imageMessage.caption,
         
       }
      
  
        } else if (msgRepondu.videoMessage) {
  
          let media  = await conn.downloadAndSaveMediaMessage(msgRepondu.videoMessage) ;
  
          msg = {
  
            video : { url : media } ,
            caption : msgRepondu.videoMessage.caption,
            
          }
  
        } else if (msgRepondu.audioMessage) {
      
          let media  = await conn.downloadAndSaveMediaMessage(msgRepondu.audioMessage) ;
         
          msg = {
     
            audio : { url : media } ,
            mimetype:'audio/mp4',
             }     
          
        } else if (msgRepondu.stickerMessage) {
  
      
          let media  = await conn.downloadAndSaveMediaMessage(msgRepondu.stickerMessage)
  
          let stickerMess = new Sticker(media, {
            pack: 'SENU-MD',
            type: StickerTypes.CROPPED,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
          const stickerBuffer2 = await stickerMess.toBuffer();
         
          msg = { sticker: stickerBuffer2}
  
  
        }  else {
            msg = {
               q : msgRepondu.conversation,
            }
        }
  
      conn.sendMessage(auteurMessage,msg)
  
      } else { 
	      reply('Mention the message that you want to save') }
  
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });


cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to Vajira Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '◍○○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍◍' , edit : ping.key })
return await conn.sendMessage(from, { text : '📍️ *𝚂𝙴𝙽𝚄 𝚇 Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "cmdfile",
    react: "🔖",
    desc: "To command file",
    category: "main",
    use: '.cmdfile',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (q.split(" ")[0].toLowerCase()))
        if (!cmd) return await reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return reply(arr.join('\n'));
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 


cmd({
    pattern: "owner",
    react: "🔖",
    desc: "To take owner number",
    category: "main",
    use: '.ban',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
const config = require('../settings')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + config.OWNER_NAME + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: config.OWNER_NAME, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: config.OWNER_NAME,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: `https://res.cloudinary.com/df2rnoijw/image/upload/v1751873666/cudef6prscrlf8mp7wqo.jpg`,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + mek.pushName,
                },
            },
        }




let buttons = [
            {
		name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Bot Owner',
                        url: config.OWNER_NUMBER,
                        merchant_url: config.OWNER_NUMBER
                }),
            },    
            {
                name: "address_message",
                buttonParamsJson: JSON.stringify({
                    display_text: "Send address to bot owner",
                     url: config.BTNURL,
                        merchant_url: config.BTNURL
                }),
	    },
	    {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({
			display_text: "Call to the owner",
                     url: config.OWNER_NUMBER,
                        merchant_url: config.OWNER_NUMBER
                }),
	    },
            {
                name: "send_location",
                buttonParamsJson: JSON.stringify({
                    display_text: "Send Location for owner",
                   url: config.BTNURL,
                        merchant_url: config.BTNURL
                }),
            }
            ]
		
            let message = {
                image: '',
                header: '',
                footer: config.FOOTER,
                body: '> You can contact the bot owner from this section'

            }
            return await conn.sendButtonMessage(from, buttons, m, message)	
  return await conn.sendMessage(from, buttonMessaged, {quoted: mek })

		    
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 





cmd({
    pattern: "kickall",
    react: "🔖",
    desc: "To kick all members in one time",
    category: "group",
    use: '.kickall',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
for (let mem of participants) {
                      
                      await sleep(1000)
                      if(mem.id == botNumber+'@s.whatsapp.net') return
                      if(mem.id == owner+'@s.whatsapp.net') return
                      await conn.groupParticipantsUpdate(from, [mem.id], 'remove')
                      await conn.sendText(from,`*${mem.id.split('@')[0]} Kick out !!!*`)
                                  }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here*')
l(e)
}
}) 		    	



cmd({
    pattern: "opentime",
    react: "🔖",
    desc: "To open group to a time",
    category: "group",
    use: '.opentime',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
  if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = mek.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    conn.groupSettingUpdate(from, 'not_announcement')
                    reply(open)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 	
	
cmd({
    pattern: "closetime",
    react: "🔖",
    desc: "To close group to a time",
    category: "group",
    use: '.closstime',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    conn.groupSettingUpdate(from, 'announcement')
                    reply(close)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 	

	

cmd({
    pattern: "sendcontact",
    react: "🔖",
    desc: "To see group contacts",
    category: "group",
    use: '.sendcontact',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
if (!mek.mentionedJid) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = q.split(' ')[1] ? q.split(' ')[1] : 'Contact' 
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+mek.mentionedJid.split('@')[0]+":"+mek.mentionedJid.split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
conn.sendMessage(mek.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		    	

cmd({
    pattern: "savecontact",
    react: "🔖",
    desc: "To save group contacts",
    category: "group",
    use: '.savecontact',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
let cmiggc = await conn.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
conn.sendMessage(mek.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	


cmd({
    pattern: "getcontact",
    react: "🔖",
    desc: "To get group contacts",
    category: "group",
    use: '.getcontact',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
if (!mek.mentionedJid) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = q.split(' ')[1] ? q.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid.split('@')+":"+mek.mentionedJid[0].split('@')+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
conn.sendMessage(mek.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	


cmd({
    pattern: "contacttag",
    react: "🔖",
    desc: "To tag group contacts",
    category: "group",
    use: '.contacttag',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
izumibigpp = await conn.sendMessage(mek.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: mek, ephemeralExpiration: 86400})
await sleep(1000)
conn.sendContact(mek.chat, participants.map(a => a.id), izumibigpp)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	


cmd({
    pattern: "creatgc",
    react: "🔖",
    desc: "To create a group",
    category: "group",
    use: '.creatgc',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
let cret = await conn.groupCreate(args.join(" "), [])
let response = await conn.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
conn.sendMessage(m.chat, { text:teksop, mentions: await conn.parseMention(teksop)}, {quoted:mek}) 

await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	

	
cmd({
    pattern: "hidetag",
    react: "🔖",
    desc: descg,
    category: "group",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)
if (!q) return await  reply(tesadtag)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
})

cmd({
    pattern: "tagall",
    react: "🔖",
    desc: descg,
    category: "group",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
let teks = ` *ＧＲＯＵＰ  ＮＯＴＩＦＹ*
                   
*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
for (let mem of participants) {
teks += `🔵 @${mem.id.split('@')[0]}\n`
     }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('Sorry !! Im not admin here')
l(e)
}
})         


cmd({
    pattern: "tagadmin",
    react: "🔖",
    desc: descg,
    category: "group",
    use: '.tagadmin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
                   if (!isGroup) return reply(ONLGROUP)
                  let teks = ` _❗ ${groupName}Admins ❗_
                  
*MASSAGE :* ${q ? q : 'blank'}\n\n`
                  for (let mem of groupAdmins) {
                                  teks += `    `
                                  }
                  conn.sendMessage(from, { text: teks, mentions: groupAdmins.map(a => a.id) })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('Sorry !! Im not admin here')
l(e)
}
})



cmd({
    pattern: "mute",
    react: "🔖",
    desc: "close a group",
    category: "group",
    use: '.mute',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
        await conn.groupSettingUpdate(mek.chat, 'announcement')
        const sendmsg = await conn.sendMessage(mek.chat.G_MUTE)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('🛑 Group muted successfully')
l(e)
}
})


  
cmd({
    pattern: "unmute",
    react: "🔖",
    desc: "open a group",
    category: "group",
    use: '.unmute',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
        await conn.groupSettingUpdate(mek.chat, 'not_announcement')
        const sendmsg = await conn.sendMessage(mek.chat.G_UNMUTE)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('🛑 Group opend successfully')
l(e)
}
})

cmd({
    pattern: "kick",
    react: "🔖",
    desc: "kick a member",
    category: "group",
    use: '.kick',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
        let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(mek.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 



cmd({
    pattern: "add",
    react: "🔖",
    desc: "Add a member",
    category: "group",
    use: '.add',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isBotAdmins) return reply(botAdmin)

                                  
         let users = mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(mek.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 



cmd({
    pattern: "promote",
    react: "🔖",
    desc: "promote admin to a member",
    category: "group",
    use: '.promote',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(mek.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	reply('🛑 You were promoted as admin')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 


cmd({
    pattern: "demote",
    react: "🔖",
    desc: "demote admin to a member",
    category: "group",
    use: '.demote',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         	let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(mek.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('🛑 You were demoted as normal member')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 		    



cmd({
    pattern: "setname",
    react: "🔖",
    desc: "To change group name",
    category: "group",
    use: '.setname',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         	await conn.groupUpdateSubject(mek.chat, q).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	reply('*✅ Group name successfully changed*')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 		



cmd({
    pattern: "setdesc",
    react: "🔖",
    desc: "To change group description",
    category: "group",
    use: '.setdesc',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
         	await conn.groupUpdateDescription(mek.chat, q).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	reply('*✅ Group description successfully changed')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Sorry !! Im not admin here !!*')
l(e)
}
}) 		



cmd({
    pattern: "ephemeral",
    react: "🔖",
    desc: "To desappear & appear messages",
    category: "group",
    use: '.ephemeral',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)

	if (!q) return await  reply(imgmsg)
                if (args[0] === 'enable') {
                    await conn.sendMessage(mek.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }else if (args[0] === 'disable') {
                    await conn.sendMessage(mek.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		

cmd({
    pattern: "delete",
    react: "🔖",
    desc: "To delete message",
    category: "main",
    use: '.delete',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{               
  if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                let teks = `The message was not sent by a bot!`
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		

cmd({
    pattern: "join",
    react: "🔖",
    desc: "To join a group",
    category: "group",
    use: '.join',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
  if (!isMe) return await reply(BOTOW)
                  if (!q) throw 'Enter the Group Link!';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Invalid Link!';
  reply();
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((e) => reply(jsonformat(e)));           
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		

														   
cmd({
    pattern: "leave",
    react: "🔖",
    desc: "To leave a group",
    category: "group",
    use: '.leave',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{        
if (!isMe) return await reply(BOTOW)	
await conn.groupLeave(mek.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		

														   
cmd({
    pattern: "joinsup",
    react: "🔖",
    desc: "To leave a group",
    category: "main",	
    use: '.joinsup',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
await conn.groupAcceptInvite('GC2eZuYTkMp0XR6x9NUdvl')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
await reply('✅ *You have successfully joined to our support group*')
} catch (e) {
reply('🚩 *You have already joined to our support group*')
l(e)
}
}) 					

	
cmd({
    pattern: "npm",
    react: "🔖",
    desc: "To search npm packages",
    category: "main",
    use: '.npm',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!q) return mek.reply("Please give me package name.📦");
      const { data } = await axios.get(
        `https://api.npms.io/v2/search?q=${q}`
      );
      let txt = data.results
        .map(
          ({ package: pkg }) =>
            `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
        )
        .join("\n\n")
        ?.trim();
      data && txt
        ? await mek.reply(txt)
        : await mek.reply("*No Result Found. Sorry!!*");
    
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
 await console.error(`${e}\n\ncommand : npm`, e);
l(e)
}
}) 



	

cmd({ on: "body" }, 
     async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
     if (config.AUTO_REACT === 'true') {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         conn.sendMessage(from, {
             react: {
                 text: emokis,
                 key: mek.key
             }
         })
     }
}) 





cmd({
    pattern: "device",
    react: "ℹ️",
    alias: ["getdevice"],
    desc: "Vajira User Checking Tool",
    category: "main",
    use: '.device',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isMe ) return reply('ℹ️ *Sorry ! This is Owner only Command..*') 
if ( !m.quoted ) return reply('ℹ️ *Please reply a Message...*')
if (m.quoted.id.startsWith("3A")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Ios WhatsApp(i Phone)${ss}`, 
      mentions : [m.quoted.sender]
    });
} else if (m.quoted.id.startsWith("3EB")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp${ss}`, 
      mentions : [m.quoted.sender]
    });
} else if (m.quoted.id.startsWith("BAE")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp(Wiskeysockets/Baileys-WA-Web-Api)${ss}`, 
      mentions : [m.quoted.sender]
    });
} else if (m.quoted.id.startsWith("QUEENAMDI")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp(QueenAmdi-Wa-Bot)${ss}`, 
      mentions : [m.quoted.sender]
    });
  } else if (m.quoted.id.startsWith("CYBER2")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp(Cyber-X-Wa-Bot)${ss}`, 
      mentions : [m.quoted.sender]
    });
} else if (m.quoted.id.startsWith("ZEROTWO")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp(ZeroTwo-Md-Wa-Bot)${ss}`, 
      mentions : [m.quoted.sender]
    });
} else if (m.quoted.id.startsWith("QUEENELISA")) {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Web WhatsApp (QueenElisa-Wa-Bot)${ss}`, 
      mentions : [m.quoted.sender]
    });
} else {
  var ss= '```'
 conn.sendMessage(from, { 
      text : `@${m.quoted.sender.split('@')[0]}  *Is Using:* ${ss}Android WhatsApp ${ss}`, 
      mentions : [m.quoted.sender]
    });
}
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})

cmd({
    pattern: "id",
    react: "📚",
    alias: ["getdeviceid"],
    desc: "Vajira User Checking Tool",
    category: "main",
    use: '.id',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isMe) return reply('🚫 *You must be a Moderator frist*') 
if ( !m.quoted ) return reply('ℹ️ *Please reply a Message...*')
//reply(m.quoted.id)
const id = m.quoted.id;
const buttons = [
                {
                    "name": "cta_copy",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "Copy Id",
                        "id": "copy_email",
                        "copy_code": id
                    })
                }
            ];		
let opts = {
                image: 'https://telegra.ph/file/2bff9cb5c82eccfdeb7af.jpg',
                header: '',
                footer: '> Click Copy id in the below',
                body: id
		    }
 return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})





cmd({
    pattern: "restart",
    react: "♻️",
    desc: "restart bot",
    category: "main",
    use: '.restart',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, isDev, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
try{
    if (!isMe) return reply('🚫 *You must be a Moderator frist*') 
    await conn.sendMessage(from , { text: '*Restarting the Bot....*' }, { quoted: mek } )
    let baseURI = '/apps/' + config.HEROKU_APP_NAME
    await heroku.delete(baseURI + '/dynos')
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "shutdown",
    react: "⚙️",
    desc: "To shutdown the bot",
    category: "main",
    use: '.shutdown',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, isCreator, isDev, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
   
  if (!isMe) return reply('🚫 *You must be a Moderator frist*') 
        await conn.sendMessage(from , { text: '*Shutting Down the Bot....*' }, { quoted: mek } )
        let baseURI = '/apps/' + config.HEROKU_APP_NAME
       const form = await heroku.get(baseURI + '/formation')
       forID = form[0].id
       await heroku.patch(baseURI + '/formation/' + forID, {
        body: {
            quantity: 0
        }
    })
  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 	



cmd({
    pattern: "request",
    react: "🔖",
    desc: "Contact to bot owner",
    category: "main",
    use: '.rsquest2',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{       
if (!q) return mek.reply(`Example: ${prefix + command} hi ranu play command is not working`)

var izumilod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."
]
let { key } = await conn.sendMessage(from, {text: 'ꜱᴇɴᴅɪɴɢ...'})

for (let i = 0; i < izumilod.length; i++) {
await conn.sendMessage(from, {text: izumilod[i], edit: key })
}


    const messageId = mek.key.id

    if (reportedMessages[messageId]) {
        return mek.reply("This report has already been forwarded to the owner. Please wait for a response.")
    }

    reportedMessages[messageId] = true

    const textt = `*| REQUEST/BUG |*`
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${q}`
    const teks2 = `\n\n*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait...*`

    // Send the message to the first owner in the `owner` array
    conn.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [mek.sender],
    }, {
        quoted: mek,
    });

    // Send a reply to the user
    mek.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.")
  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 


cmd({
    pattern: "request2",
    react: "⚙️",
    desc: "Contact to bot owner",
    category: "main",
    use: '.request',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{      
   let teks =  `Enter The Bug Example\n\n${command} < YOUR REPORT MASSAGE > `
	          
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."
]
let { key } = await conn.sendMessage(from, {text: 'ꜱᴇɴᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await conn.sendMessage(from, {text: xeonlod[i], edit: key })
}

                  await conn.sendMessage(`94703617065@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${mek.sender.split("@")[0]}\n\n*Bug Report*\n${q ? q : 'blank'}` })
                  const repo = await conn.sendMessage(`*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』*`)
                  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('🛑 This is an owner command...')
l(e)
}
})	       

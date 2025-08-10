const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const fonts = require('../lib/font.js')
const availableStyles = Object.keys(fonts)
const jsobfus = require('javascript-obfuscator')
const l = console.log
const { fetchJson } = require('../lib/functions')

function convertToFontStyle(q, style) {
    let styledText = ''

    if (fonts[style]) {
        for (const char of q) {
            styledText += fonts[style][char] || char;
        }
    } else {
        styledText = q;
    }

    return styledText;
}






cmd({
        pattern: "ehi",
        react: "🗃️",
        desc: "Ehi file download",
        category: "download",
        use: '.ehi',
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

            const MNG = `> RANU MD EHI DOWNLOAD 🖼️
            
> HTTP Injector සීමා කිරීම් මඟහැර අන්තර්ජාල සම්බන්ධතාව වැඩිදියුණු කිරීම සඳහා ප්‍රයෝජනවත් මෙවලමක් විය හැකි අතර, එය නීත්‍යානුකූල අරමුණු සඳහා පමණක් භාවිතා කළ යුතු බව සැලකිල්ලට ගැනීම වැදගත්ය. HTTP Injector නීති විරෝධී ක්‍රියාකාරකම් සඳහා හෝ අන් අයට හානි කිරීමට භාවිතා කිරීම සපුරා තහනම් වේ.
`
            const rows = []
                
                    
                rows.push({
                    header: '',
                    title: 'Http Injector',
                    description: 'To down http injector',
                    id: `${prefix}httpinjector` 
                }),
                 rows.push({
                    header: '',
                    title: 'Ehi files',
                    description: 'Download ehi files',
                    id: `${prefix}ehifile` 
                }),
                rows.push({
                    header: '',
                    title: 'Ehi info',
                    description: 'To see ehi info',
                    id: `${prefix}aboutehi` 
                }),
		rows.push({
                    header: '',
                    title: 'Paid Ehi',
                    description: 'To Take Paid ehi',
                    id: `${prefix}paid` 
                })	
                        
                        
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
                        title: 'Select a Category :)',
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
                body: MNG

            }
            return await conn.sendButtonMessage(from, buttons, m, opts, { quoted: mek});
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
    pattern: "httpinjector",
    react: '👾',
    dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const load = await reply('*📤 Uploading...*' )
       await conn.sendMessage(m.chat, { document: { url: 'https://github.com/ThivankaOnline/UPLOADS/raw/main/APK/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk' }, mimetype: 'application/vnd.android.package-archive', fileName: `HTTP Injector 👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻 (SSHProxyV2Ray) VPN.apk`}, { quoted: m })
       const app = await conn.sendMessage(m.chat, { delete: load.key })
       await conn.sendMessage(from, { react: { text: `🚀`, key: app.key }})
} catch (e) {
l(e)
}
})

cmd({
    pattern: "ehifile",
    react: '👾',
dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const ehiVajira = await fetchJson ('https://gist.githubusercontent.com/VajiraTech/3236bd860346192700b2fb1ce4f4ee65/raw')
  ehi = ehiVajira.EHI_FILES[0].SG_FILE1
  ehi2 = ehiVajira.EHI_FILES[0].SG_FILE2
  ehi3 = ehiVajira.EHI_FILES[0].SG_FILE3
                 
                await conn.sendMessage(m.chat, { text : `
${ehiVajira.EHI}
${ehiVajira.C_E_DATES}
${ehiVajira.XX_XX}
` } ,{ quoted: m })
                await conn.sendMessage(m.chat, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} FaceBook ${ehiVajira.EHI_IMOJI}.ehi`}, { quoted: m })
                await conn.sendMessage(m.chat, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} Whatsapp ${ehiVajira.EHI_IMOJI}.ehi `}, { quoted: m })
                await conn.sendMessage(m.chat, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} Youtube ${ehiVajira.EHI_IMOJI}.ehi`}, { quoted: m })
                
                await conn.sendText(m.chat, `✅ _Success send_ *${m.pushName}* _Ehi Files..._`,m)
} catch (e) {
l(e)
}
})


cmd({
    pattern: "aboutehi",
    react: '👾',
    dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msg = ` *Ehi file is*,
 💬 It is a method where you can get free internet by using whatsapp package.
 For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.

 This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.
 You can find this ehi file which we usually use
 You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc

*How to use*
 1. Install the http injector app on your phone.
 2. Select the ehi file related to your package.
 3. Enter that file into the httpinjector app and press the start button.
_( If you want to use this file, you must have one of the above packages installed )_


*© 𝚁𝙰𝙽𝚄 𝙼𝙳*

────────────────────────────────────────────────────𝙾𝙾

*💬 Ehi file යනු* ,
ඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.

උදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.
මෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.
ඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන 
whatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක 


බාවිතාකරන්නේ කෙසේද ?
1. http injector app එක ඔබගේ phone එකට install කරගන්න 
2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න 
3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න 
( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )

*© 𝚁𝙰𝙽𝚄 𝙼𝙳*
 
    `	
return await conn.sendMessage(from, { image: { url: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',} , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
    
} catch (e) {
l(e)
}
})



cmd({
        pattern: "paid",
        react: "🗃️",
        dontAddCommandList: true,
  filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

            const msg = `> > 𝐑𝐀𝐍𝐔 𝗠𝗗 𝗣𝗔𝗜𝗗 𝗘𝗛𝗜 ᴬᴸᴱˣ 🚀

☁️ Aws,
☁️ Digital Ocean paid Fils Available
╭═══════════════ ᛃ
┃╰┈➤ *Payment ©*
┃ *.Ez cash 💲*
┃ *.Bank 💲*
╭═══════════════ ᛃ
┃ᛃ .✔ Dialog Zoom
┃ᛃ .✔ Hutch Zoom
┃ᛃ .✔ Hutch gaming
┃ᛃ .✔ Airtel Youtube
┃ᛃ .✔ Dialog Bypass 348 (20GB)
┃ᛃ .✔ Airtel 389 | 769 | 909
┃ᛃ .✔ Hutch Whatsapp
┃ᛃ .✔ Hutch Youtube 
┃ᛃ .✔ Hutch Gaming
╰════════════════ ᛃ
╭═══════════════ ᛃ
╰┈➤ *🏴‍☠️V2ray (100GB) - Rs.200/=*
        *🏴‍☠️V2ray (Unlimited GB)- Rs.400/=*
╭═══════════════ ᛃ
╰╮╰┈➤ 𝐎𝙒𝐍𝐄𝙍 ☠️
╭═══════════════ ᛃ
┃ᛃ 𝐑𝐀𝐍𝐃𝐔𝐋
╰════════════════ ᛃ
`
            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "DIALOG EHI",
                    id: `${prefix}dialog`
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "HUTCH EHI",
                    id: `${prefix}hutch`
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "AIRTEL EHI",
                    id: `${prefix}airtel`
                }),
            },
	    {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "MOBITEL EHI",
                    id: `${prefix}Mobitel` 
                }),
            }  
            ]
            let message = {
                image:'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });

//==================================================================
//==================================================================



cmd({
        pattern: "dialog",
        react: "🗃️",
        dontAddCommandList: true,
  filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

            const msg = `* *🛜 DIALOG 🛜*

*🚀 ඔයාගේ Dialog Sim එකක් හො Router එකක් තියේ නම් දැනට vpn connect කරගෙන උපරිම speed එකක් ගන්න පුළුවන් package යටින් දාලා තියෙනවා. යට දාලා තියෙන පැකේජ් වලින් විතරයි දැනට හොඳ speed එකක් ගන්න පුලුවන්🛜📳..*

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*🚀  Dialog Zoom Router 724 (unlimited)*
*🚀 Bypass 348 (20 GB limit)*

* *𝗨𝗻𝗟𝗶𝗠𝗶𝘁𝗲𝗗 -𝗥𝘀.400 /=*
* *150 𝗚𝗕 - 𝗥𝘀.300 /=*
* *200 𝗚𝗕 - 𝗥𝘀.200/=*

💲 Sampath bank💲
      💲 Ez cash 💲

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`
             let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'CONTACT SELLER',
                        url: config.O_NO,
                        merchant_url: config.O_NO
                    }),
                }
            ]
            let message = {
                image: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });



cmd({
        pattern: "hutch",
        react: "🗃️",
        dontAddCommandList: true,
  filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

             const msg = `* *🛜 HUTCH 🛜*

*🚀 ඔයාගේ Hutch user කෙනෙක් නම් දැනට vpn connect කරගෙන උපරිම speed එකක් ගන්න පුළුවන් package යටින් දාලා තියෙනවා. යට දාලා තියෙන පැකේජ් වලින් විතරයි දැනට හොඳ speed එකක් ගන්න පුලුවන්🛜📳..*

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*🚀 Hutch Zoom pakages*
*🚀Hutch gaming 505*

* *𝗨𝗻𝗟𝗶𝗠𝗶𝘁𝗲𝗗 -𝗥𝘀.400 /=*
* *150 𝗚𝗕 - 𝗥𝘀.300 /=*
* *200 𝗚𝗕 - 𝗥𝘀.200/=*

💲 Sampath bank💲
      💲 Ez cash 💲

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'CONTACT SELLER',
                        url: config.O_NO,
                        merchant_url: config.O_NO
                    }),
                }
            ]
            let message = {
                image: 'https://media.idownloadblog.com/wp-content/uploads/2022/04/Download-Facebook-data.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });



cmd({
        pattern: "airtel",
        react: "🗃️",
        dontAddCommandList: true,
  filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

            const msg = `* *🛜 AIRTEL 🛜*

*🚀 ඔයාත් Airtel sim use කරන user කෙනෙක් නම් දැනට vpn connect කරගෙන උපරිම speed එකක් ගන්න පුළුවන් package දැනට නෑ...*

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'CONTACT SELLER',
                        url: config.O_NO,
                        merchant_url: config.O_NO
                    }),
                }
            ]
            let message = {
                image: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });


cmd({
        pattern: "mobitel",
        react: "🗃️",
        dontAddCommandList: true,
  filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
                

             const msg = `* *🛜 MOBITEL 🛜*

*🚀 ඔයාත් Mobitel sim එකක් හො router එකක් use කරන user කෙනෙක් නම් දැනට vpn connect කරගෙන උපරිම speed එකක් ගන්න පුළුවන් package යටින් දාලා තියෙනවා. යට දාලා තියෙන පැකේජ් වලින් විතරයි දැනට හොඳ speed එකක් ගන්න පුලුවන්🛜📳..*

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*🚀 Slt router Zoom pakages*
*🚀 mobitel Zoom*

* *𝗨𝗻𝗟𝗶𝗠𝗶𝘁𝗲𝗗 -𝗥𝘀.400 /=*
* *150 𝗚𝗕 - 𝗥𝘀.300 /=*
* *200 𝗚𝗕 - 𝗥𝘀.200/=*

💲 Sampath bank💲
      💲 Ez cash 💲

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`
             let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'CONTACT SELLER',
                        url: config.O_NO,
                        merchant_url: config.O_NO
                    }),
                }
            ]
            let message = {
                image: 'https://res.cloudinary.com/df2rnoijw/image/upload/v1750525477/m5kuhnur9rjx6cdcfnhg.jpg',
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });



			
//==================================================================
//==================================================================

cmd({
    pattern: "saveno",
    react: '👾',
    desc: "To save acc number",
    category: "other",
    use: '.saveno',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 let recordedMessage = '';
	
          if (recordedMessage === '') {
     const message = q.trim();
     recordedMessage = message;
     await mek.reply(`Account number recorded: "${message}"`);
   } else {
     await mek.reply("A message is already recorded.");
   }
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})


cmd({
    pattern: "delno",
    react: '👾',
    desc: "To delete acc number",
    category: "other",
    use: '.delno',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 recordedMessage = '';
   await mek.reply("Account number deleted.");
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})

cmd({
   on: "text",
 }, async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   if (/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(q) && recordedMessage) {
     await mek.reply(recordedMessage);
   }
 });
		    

cmd({
    pattern: "hack",
    react: '☠️',
    desc: "To hack",
    category: "other",
    use: '.hack',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
mek.reply("```Injecting malware```")

await sleep(1000)

mek.reply("```transfer into device \n 0%```")

await sleep(1000)

mek.reply("```transfer photos \n █ 10%```")

await sleep(1000)

mek.reply("```transfer successful \n █ █ 20%```")

await sleep(1000)

mek.reply("```transfer videos \n █ █ █ 30%```")

await sleep(1000)

mek.reply("```transfer successful \n █ █ █ █ 40%```")

await sleep(1000)

mek.reply("```transfering audio \n █ █ █ █ █ 50%```")

await sleep(1000)

mek.reply("```transfer successful \n █ █ █ █ █ █ 60%```")

await sleep(1000)

mek.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

mek.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

mek.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

mek.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

mek.reply("```System hyjacking on process.. \n Conecting to Server ```")

await sleep(1000)

mek.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

mek.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

mek.reply("``` HACKING COMPLETED BY RANU ```")

await sleep(1000)

mek.reply("``` SENDING PHONE DOCUMENTS FOR RANU...```")

await sleep(1000)

mek.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected by ranu```")

await sleep(1000)

            return reply('*ALL FILES TRANSFERRED TO RANU*');
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})


cmd({
    pattern: "fontchange",
    react: '👾',
    desc: "To change font of text",
    category: "other",
    use: '.fontchange',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (args.length === 0) {
        const availableStylesPreview = availableStyles.map(style => {
            const previewText = convertToFontStyle("vajira md", style);
            return `${style}: ${previewText}`;
        }).join('\n');

        reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
    } else {
        const style = parseInt(args[0]);

        if (isNaN(style) || style < 0 || style > 34) {
            reply(`Style number should be between 0 and 34. Please choose a valid style.`);
        } else {
            const inputText = args.slice(1).join(" ");
            const styledText = convertToFontStyle(inputText, style);


            reply(`${styledText}`);
        }
    }
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})

cmd({
    pattern: "nowa",
    react: '👾',
    desc: "To see same type whatsapp numbers",
    category: "other",
    use: '.nowa',
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
    let txt = 'Registered\n\n' + array.filter(v => v.exists).map(v => `• Link: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'description'}\n*• set on:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Not registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n');
    reply(txt);
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})


cmd({
    pattern: "obfus",
    react: '👾',
    desc: "To encrypt js code",
    category: "other",
    use: '.obfus',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply(`Example ${prefix+command} const vajiramd = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {
l(e)
}
})



cmd({
    pattern: "leaderboard",
    react: '👾',
    desc: "To see info of leaderboard",
    category: "other",
    use: '.leaderboard',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})   
} catch (e) {p
reply(cantf)
l(e)
}
})

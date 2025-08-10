const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const fileType = require("file-type");
const fs = require('fs');
var TextPro = require('@sl-code-lords/text-pro-me')
var text_pro = new TextPro()
const mumaker = require("mumaker")
const { Maker } = require('imagemaker.js')
let { img2url } = require('@blackamda/telegram-image-url');

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර නමක් දෙන්න !```"
else imgmsg = "```Please give me a name !```"
var imgmsg2 =''
if(config.LANG === 'SI') imgmsg2 = "*උදා: .banner vajira+rathnayaka*"
else imgmsg2 = "*Ex: .banner vajira+rathnayaka*"
var imgmsg3 =''
if(config.LANG === 'SI') imgmsg3 = "*උදා: .banner2 vajira+rathnayaka*"
else imgmsg3 = "*Ex: .banner2 vajira+rathnayaka*"
var imgmsg4 =''
if(config.LANG === 'SI') imgmsg4 = "*උදා: .banner3 vajira+rathnayaka*"
else imgmsg4 = "*Ex: .banner3 vajira+rathnayaka*"
var imgmsg5 =''
if(config.LANG === 'SI') imgmsg5 = "*උදා: .banner3 vajira+rathnayaka*"
else imgmsg5 = "*Ex: .banner3 vajira+rathnayaka*"
var imgmsg6 =''
if(config.LANG === 'SI') imgmsg6 = "*උදා: .banner3 vajira+rathnayaka*"
else imgmsg6 = "*Ex: .banner3 vajira+rathnayaka*"
var errt =''
if(config.LANG === 'SI') errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*"
else errt = "*I cant create this logo :(*"
var desc2 =''
if(config.LANG === 'SI') desc2 = "එය channel banners නිර්මාණය කරයි.."
else desc2 = "It creates channel banners.."


//============================================================================


//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
//---------------------------------------------------------------------------







cmd({
        pattern: "logo",
        react: "🗃️",
        desc: "Logo Genarate.",
        category: "logo",
        use: '.logo vajira',
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {
 if (!q) return await reply(imgmsg)               

            const MNG = `> ＲＡＮＵ MD LOGO CREATION 🖼️
            
> The first quality great logos share is that they're relevant to the markets their companies target. More importantly, they clearly communicate a brand's personality and identity. A primary component is the use of colors in your logo, which can trigger different emotions and show your brand's personality to consumers.`
    
            const rows = []
                rows.push({
                    header: 'Select logo type want',
                    title: 'Black pink',
                    description: 'Black pink logo design',
                    id: `${prefix}blackpink ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Deadpool',
                    description: 'Create text effects in the style of the Deadpool logo',
                    id: `${prefix}deadpool ` + q
                }),  
                rows.push({
                    header: '',
                    title: 'Wolf Galaxy',
                    description: 'Create logo, avatar Wolf Galaxy',
                    id: `${prefix}wolf ` + q
                }),
                rows.push({
                    header: '',
                    title: '3D wooden',
                    description: 'Create 3D wooden logo',
                    id: `${prefix}3dwooden ` + q
                }),  
                 rows.push({
                    header: '',
                    title: 'Zombie 3D',
                    description: 'Zombie 3D Text Effect',
                    id: `${prefix}zombie3d ` + q
                }),     
                 rows.push({
                    header: '',
                    title: 'Comic Style',
                    description: 'Create online 3D comic-style text effects',
                    id: `${prefix}comic ` + q
                }), 
                 rows.push({
                    header: '',
                    title: 'Air Balloon',
                    description: 'Writing your name on hot air balloon',
                    id: `${prefix}airballoon ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Glitter Gold',
                    description: 'Glitter Gold',
                    id: `${prefix}glittergold ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Incandescent Bulbs',
                    description: 'Text effects incandescent bulbs',
                    id: `${prefix}bulb ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'BORN PINK',
                    description: 'Create BLACKPINKs BORN PINK album logo',
                    id: `${prefix}bornpink ` + q
                }),
                rows.push({
                    header: '',
                    title: 'gold text',
                    description: 'Beautiful gold text effect',
                    id: `${prefix}goldtext ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Neon Light',
                    description: 'Making Neon Light Text Effect with Galaxy Style',
                    id: `${prefix}neonlight ` + q
                }), 
                 rows.push({
                    header: '',
                    title: 'Water Color',
                    description: 'Create a watercolor text effect online',
                    id: `${prefix}watercolor ` + q
                }),   
                rows.push({
                    header: '',
                    title: 'Purple Text',
                    description: 'Purple text effect',
                    id: `${prefix}purple-text ` + q
                }),   
                 rows.push({
                    header: '',
                    title: '3D ruby ​​stone',
                    description: '3D ruby ​​stone',
                    id: `${prefix}3drubystone ` + q
                }), 
                   rows.push({
                    header: '',
                    title: 'Triangle mountain',
                    description: 'Triangle mountain logo black & white',
                    id: `${prefix}mountain ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Create Marvel',
                    description: 'Create Marvels Style Logo',
                    id: `${prefix}marvel ` + q
                }), 
                 rows.push({
                    header: '',
                    title: 'letters on the leaves',
                    description: 'Write letters on the leaves',
                    id: `${prefix}leaves ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Metal',
                    description: 'Metal logo online',
                    id: `${prefix}metal ` + q
                }), 
                 rows.push({
                    header: '',
                    title: 'Modern Gold',
                    description: 'Modern Gold',
                    id: `${prefix}moderngold ` + q
                }), 
                 rows.push({
                    header: '',
                    title: '1917 Style Text',
                    description: '1917 Style Text Effect',
                    id: `${prefix}1917 ` + q
                }), 
                 rows.push({
                    header: '',
                    title: 'Plasma',
                    description: 'Plasma text effects online',
                    id: `${prefix}plasma ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Blue neon',
                    description: 'Blue neon text effect',
                    id: `${prefix}blueneon ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Christmas snow',
                    description: 'Christmas snow text effect online',
                    id: `${prefix}christmas ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Stars night',
                    description: 'Stars night',
                    id: `${prefix}starsnight ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Mechanical Style',
                    description: 'Create your name in a mechanical style',
                    id: `${prefix}mechanical ` + q
                }),
                rows.push({
                    header: '',
                    title: 'multicolored signature attachment',
                    description: 'Create multicolored signature attachment arrow effect',
                    id: `${prefix}attachmentarrow ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Underwater Text',
                    description: 'Underwater Text',
                    id: `${prefix}underwater ` + q
                }),
                rows.push({
                    header: '',
                    title: 'Wings Galaxy',
                    description: 'Wings Galaxy',
                    id: `${prefix}wingsgalaxy ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'star zodiac',
                    description: 'Create star zodiac wallpaper mobile',
                    id: `${prefix}starzodiac ` + q
                }),
                 rows.push({
                    header: '',
                    title: 'Heated steel',
                    description: 'Heated steel lettering effect',
                    id: `${prefix}heatedsteel ` + q
                }),
                rows.push({
                    header: '',
                    title: 'FireWork',
                    description: 'Text FireWork Effect',
                    id: `${prefix}firework ` + q
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
                            highlight_label: 'VAJIRA-MD',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: 'https://telegra.ph/file/e99e5f3349e85fecebfff.jpg',
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
    pattern: "firework",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/text-firework-effect-356.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})           

cmd({
    pattern: "heatedsteel",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/heated-steel-lettering-effect-65.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                      

cmd({
    pattern: "starzodiac",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})     

cmd({
    pattern: "heatedsteel",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/heated-steel-lettering-effect-65.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})     

cmd({
    pattern: "wingsgalaxy",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/wings-galaxy-206.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})     

cmd({
    pattern: "underwater",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/underwater-text-73.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})     

cmd({
    pattern: "attachmentarrow",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})       

cmd({
    pattern: "mechanical",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                                

cmd({
    pattern: "starsnight",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/stars-night-online-84.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "christmas",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/christmas-snow-text-effect-online-631.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                            

cmd({
    pattern: "blueneon",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/blue-neon-text-effect-117.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})


cmd({
    pattern: "plasma",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/plasma-text-effects-online-71.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})


cmd({
    pattern: "1917",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/1917-style-text-effect-523.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
}) 

cmd({
    pattern: "moderngold",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/modern-gold-157.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
}) 

cmd({
    pattern: "metal",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/metal-logo-online-108.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
}) 

cmd({
    pattern: "leaves",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/write-letters-on-the-leaves-248.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})  

cmd({
    pattern: "marvel",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-marvel-style-logo-419.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})  

cmd({
    pattern: "mountain",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/triangle-mountain-logo-black-white-566.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})  

cmd({
    pattern: "3drubystone",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/3d-ruby-stone-text-281.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})  

cmd({
    pattern: "purpletext",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/purple-text-effect-online-100.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                             

cmd({
    pattern: "watercolor",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                              

cmd({
    pattern: "neonlight",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})      
                        
cmd({
    pattern: "goldtext",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/beautiful-gold-text-effect-122.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})      
    
cmd({
    pattern: "bornpink",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-blackpink-s-born-pink-album-logo-online-779.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})      

cmd({
    pattern: "bulb",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})      
                        
cmd({
    pattern: "glittergold",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/glitter-gold-98.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})      
                        
cmd({
    pattern: "airballoon",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})       

cmd({
    pattern: "comic",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                        


cmd({
    pattern: "zombie3d",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/zombie-3d-text-effect-143.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})                        

cmd({
    pattern: "blackpink",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "deadpool",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "wolf",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-logo-avatar-wolf-galaxy-online-366.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})
                    
cmd({
    pattern: "3dwooden",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
      
    let name = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/logo-viettel-156.html', [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

//============================================================================

cmd({
    pattern: "banner",
    alias: ["ytbanner","cover","channelbanner"],
    desc: desc2,
    category: "logo",
    use: '.banner VajiraTech+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg2)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner2",
    alias: ["ytbanner2","cover2","channelbanner2"],
    desc: desc2,
    category: "logo",
    use: '.banner2 VajiraTech+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg3)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner3",
    alias: ["ytbanner3","cover3","channelbanner3"],
    desc: desc2,
    category: "logo",
    use: '.banner3 VajiraTech+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg4)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner4",
    alias: ["ytbanner4","cover4","channelbanner4"],
    desc: desc2,
    category: "logo",
    use: '.banner4 VajiraTech+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg5)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner5",
    alias: ["ytbanner5","cover5","channelbanner5"],
    desc: desc2,
    category: "logo",
    use: '.banner5 VajiraTech+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg6)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})


cmd({
    pattern: "naruto",
    react: "🏜️",
    alias: ["textpro1"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.naruto',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "rose",
    react: "🏜️",
    alias: ["textpro2"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.rose',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "cake",
    react: "🏜️",
    alias: ["textpro3"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.cake',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pokn",
    react: "🏜️",
    alias: ["textpro4"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.pokn',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "liud",
    react: "🏜️",
    alias: ["textpro5"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.liud',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-liquid-metal-text-effect-1112.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "rusty",
    react: "🏜️",
    alias: ["textpro6"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.rusty',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "frid",
    react: "🏜️",
    alias: ["textpro7"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.frid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/neon-light-style-3d-text-effect-online-1132.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pink",
    react: "🏜️",
    alias: ["textpro8"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.pink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "drag",
    react: "🏜️",
    alias: ["textpro9"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.drag',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "sumr",
    react: "🏜️",
    alias: ["textpro10"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.sumr',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "cart",
    react: "🏜️",
    alias: ["textpro11"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.cart',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-cartoon-text-effect-online-1120.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "grun",
    react: "🏜️",
    alias: ["textpro12"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.grun',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pain",
    react: "🏜️",
    alias: ["textpro13"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.pain',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "meta",
    react: "🏜️",
    alias: ["textpro14"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.meta',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-metallic-text-with-details-online-1108.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "part",
    react: "🏜️",
    alias: ["textpro15"],
    desc: "Text to Image Collection",
    category: "logo",
    use: '.part',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})



//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------

   cmd({
    pattern: "enhance",
    react: "↗️",
    alias: ["imgenhance","remini","qualityimage","tohd"],
    desc: 'It converts given low quality image to quality image..',
    category: "convert",
    use: '.enhance <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let wm = `👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻`
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
const fileType = require("file-type");
  var nameJpg = getRandom('');
  let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
  let type = await fileType.fromBuffer(buff);
  await fs.promises.writeFile("./" + type.ext, buff);
  img2url("./" + type.ext).then(async url => {
 let res = await fetchJson(`https://aemt.me/remini?url=${url}&resolusi=4`)
 await conn.sendMessage(from, { image: res.url, caption: wm }, { quoted: mek })
});
    } else return reply('*Reply to a photo !*')
} catch (e) {
  reply('*Server is busy. Try again later.!*');
  l(e);
}
})
                 

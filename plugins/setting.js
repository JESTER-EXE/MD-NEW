const { cmd, commands } = require('../lib/command')
const config = require('../settings')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')


var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var alredy = ''
if(config.LANG === 'SI') alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*"
else alredy = "*This setting alredy updated !*"
//---------------------------------------------------------------------------



//---------------------------------------------------------------------------
if (config.COMMAND_TYPE === 'button') {
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
await input_set("PREFIX", q)
await reply("*prefix updated: " + q + "*")
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
await input_set("LOGO", q)
await reply("*Logo updated: " + q + "*")
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
    pattern: "mathsai",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
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
    pattern: "antidelete",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_DELETE == 'true') return reply('already Anti Delete On ')
  await input_set('ANTI_DELETE' , 'true')
  return reply('Anti Delete Turn on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_DELETE !== 'true') return reply('already Anti Delete Off')
  await input_set('ANTI_DELETE' , 'false')
  return reply('Anti Delete Turn Off')
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
        react: "🗃️",
        category: "main",
	desc: "To take Bot Settings",
        use: '.settings .',
        filename: __filename
},
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	

let teks = `SETTINGS INFO \n\n`
  //  for (let g of res) {
      teks += `⭔ ${config.AUTO_BLOCK}\n`;
      teks += `⭔ ${config.ALWAYS_ONLINE}\n`
      teks += `⭔ ${config.AUTO_REACT}\n────────────────────────\n\n`
 //   }
  //  mek.reply(teks)
 // })
			
            const MNG = `[👨‍💻 RANU - ＭＤ - Ｖ1 👨‍💻]
	    
      ⭔ Auto Block : ${config.AUTO_BLOCK}
      ⭔ Always Online : ${config.ALWAYS_ONLINE}
      ⭔ Auto React : ${config.AUTO_REACT}
      ⭔ Auto ReadMsg : ${config.AUTO_READ}
      ⭔ Auto CmdReadMsg : ${config.READ_CMD_ONLY}
      ⭔ Auto Recording : ${config.AUTO_RECORDING}
      ⭔ Auto Typing : ${config.AUTO_TYPING}
      ⭔ Auto Read Status : ${config.AUTO_STATUS_READ}
      ⭔ Auto Bio : ${config.AUTO_BIO}
      ⭔ Auto Sticker : ${config.AUTO_STICKER}
      ⭔ Auto Voice : ${config.AUTO_VOICE}
      ⭔ Anti Delete : ${config.ANTI_DELETE}
      ⭔ Anti Call : ${config.ANTI_CALL}
      ⭔ Anti Bad : ${config.ANTI_BAD}
      ⭔ Anti Link : ${config.ANTI_LINK}
      ⭔ Anti Bot : ${config.ANTI_BOT}
      ⭔ Ai Image : ${config.AI_IMAGE}
      ⭔ Ai Maths : ${config.MATHS_AI}
      ⭔ Ai Chat Bot : ${config.AI_CHATBOT}
      ⭔ Prefix : ${config.PREFIX}
      ⭔ Welcome Message : ${config.WELCOME}
      ⭔ Owner React : ${config.OWNER_REACT}	
      ⭔ Only Group : ${config.ONLY_GROUP}
      ⭔ Only Me : ${config.ONLY_ME}	
 
  *RANU MD SETTINGS*`

            const rows = []

		rows.push({
                    header: 'ONLY_GROUP',
                    title: 'To Enable/disable Only Group',
                    description: 'Only Group settings',
                    id: `${prefix}onlygroup1`
		}),
                 rows.push({
                    header: 'ONLY_ME',
                    title: 'To Enable/disable Work Type',
                    description: 'Work type settings',
                    id: `${prefix}onlyme1`
		}),
                 rows.push({
                    header: 'OWNER_REACT',
                    title: 'To Enable/disable Owner React',
                    description: 'Owner React settings',
                    id: `${prefix}oreact1`
		}),
		rows.push({
                    header: 'WELCOME',
                    title: 'To Enable/disable Welcome',
                    description: 'Welcome settings',
                    id: `${prefix}welcome1`
		}),	
                rows.push({
                    header: 'MATHS_AI',
                    title: 'To Enable/disable Ai Maths',
                    description: 'Ai Maths settings',
                    id: `${prefix}mathsai1`
                }),
                 rows.push({
                    header: 'AI_CHATBOT',
                    title: 'To Enable/disable Ai Chatbot',
                    description: 'Ai Chatbot settings',
                    id: `${prefix}aichatbot1`
                }),
                rows.push({
                    header: 'AI_IMAGE',
                    title: 'To Enable/disable Ai Image',
                    description: 'Ai Image settings',
                    id: `${prefix}aiimage1`
                }),
                rows.push({
                    header: 'DISABLE_PM',
                    title: 'To Enable/disable Only Group',
                    description: 'Disablr Pm settings',
                    id: `${prefix}disablepm1`
                }),
                rows.push({
                    header: 'AUTO_VOICE',
                    title: 'To Enable/disable Auto Voice',
                    description: 'Voice Settings',
                    id: `${prefix}autovoice1`
                }),
                rows.push({
                    header: 'AUTO_STICKER',
                    title: 'To Enable/disable Auto Voice',
                    description: 'Sticker Settings',
                    id: `${prefix}autosticker1`
                }),
               rows.push({
                    header: 'AUTO_BIO',
                    title: 'To Enable/disable Auto Bio',
                    description: 'Bio Settings',
                    id: `${prefix}autobio1`
                }),
		rows.push({
                    header: 'AUTO_STATUS_VIEW',
                    title: 'To Enable/disable Auto Status View',
                    description: 'Auto Status Settings',
                    id: `${prefix}autosview1`
                }),
		rows.push({
                    header: 'AUTO_TYPING',
                    title: 'To Enable/disable Auto Typing',
                    description: 'Auto Typing Settings',
                    id: `${prefix}autotype1`
                }),	
		rows.push({
                    header: 'AUTO_RECORDING',
                    title: 'To Enable/disable Auto Recording',
                    description: ' Auto Recording Settings',
                    id: `${prefix}autorecord1`
                }),
		rows.push({
                    header: 'AUTO_READ',
                    title: 'To Enable/disable Auto Read',
                    description: 'Auto Read Settings',
                    id: `${prefix}autoread1`
                }),	
               rows.push({
                    header: 'READ_CMD_ONLY',
                    title: 'To Enable/disable Cmd Read',
                    description: 'Cmd Read Settings',
                    id: `${prefix}cmdread1`
                }),	
		rows.push({
                    header: 'AUTO_REACT',
                    title: 'To Enable/disable Auto React',
                    description: 'Auto React Settings',
                    id: `${prefix}autoreact1`
                }),	
		rows.push({
                    header: 'ALWAYS_ONLINE',
                    title: 'To Enable/disable Always Online',
                    description: 'Always Onlind Settings',
                    id: `${prefix}alwaysonline1`
                }),	 
		rows.push({
                    header: 'AUTO_BLOCK',
                    title: 'To Enable/disable Auto No',
                    description: 'Auto No Block Settings',
                    id: `${prefix}autoblock1`
                }),	
		rows.push({
                    header: 'AUTO_WELCOME',
                    title: 'To Enable/disable Auto Welcome',
                    description: 'Welcome Settings',
                    id: `${prefix}autowelcome1`
                }),	
		rows.push({
                    header: 'ANTI_BOT',
                    title: 'To Enable/disable AntiBot',
                    description: 'AntiBot Settings',
                    id: `${prefix}antibot1`
                }),	 
		rows.push({
                    header: 'ANTI_LINK',
                    title: 'To Enable/disable AntiLink',
                    description: 'AntiLink Settings',
                    id: `${prefix}antilink1`
                }),	 
		rows.push({
                    header: 'ANTI_BAD',
                    title: 'To Enable/disable AntiBad',
                    description: 'AntiBaad Settings',
                    id: `${prefix}antibad1`
                }),	 
		rows.push({
                    header: 'ANTI_DELETE',
                    title: 'To Enable/disable AntiDelete',
                    description: 'AntiDelete Settings',
                    id: `${prefix}antidelete1`
                }),	 	 
                rows.push({
                    header: 'ANTI_CALL',
                    title: 'To Enable/disable AntiCALL',
                    description: 'AntiCall Settings',
                    id: `${prefix}anticall1`
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
                            rows: rows,
			    	

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
        pattern: "oreact1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *OWNER REACT SETTINGS*
  Only Works For CRD Team members`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Owner React`,
            id: `${prefix}oreact on`,
            
         }, {
            title: "Disable",
            description: `To Enable Owner React`,
            id: `${prefix}oreact off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "onlygroup1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ONLY GROUP SETTINGS*
  Only Works For CRD Team members`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Only Group`,
            id: `${prefix}onlygroup on`,
            
         }, {
            title: "Disable",
            description: `To Enable Only Group`,
            id: `${prefix}onlygroup off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "onlyme1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ONLY ME SETTINGS*
  Only Works For CRD Team members`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Work Type`,
            id: `${prefix}onlyme on`,
            
         }, {
            title: "Disable",
            description: `To Enable Work Type`,
            id: `${prefix}onlyme off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "worktype1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ONLY GROUP SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Private`,
            id: `${prefix}worktype on`,
            
         }, {
            title: "Disable",
            description: `To Enable Public`,
            id: `${prefix}worktype off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "welcome1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *WELCOME SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Welcome`,
            id: `${prefix}welcome on`,
            
         }, {
            title: "Disable",
            description: `To disable Welcome`,
            id: `${prefix}welcome off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "mathsai1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AI MATHS SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Ai Maths`,
            id: `${prefix}mathsai on`,
            
         }, {
            title: "Disable",
            description: `To disable Ai Maths`,
            id: `${prefix}mathsai off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "aichatbot1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AI CHATBOT SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Ai Chatbot`,
            id: `${prefix}aichatbot on`,
            
         }, {
            title: "Disable",
            description: `To desable Ai Chatbot`,
            id: `${prefix}aichatbot off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "aiimage1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AI INAGE SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Ai Image`,
            id: `${prefix}aiimage on`,
            
         }, {
            title: "Disable",
            description: `To disable Ai Image`,
            id: `${prefix}aiimage off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "disablepm1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *WORK TYPE SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Bot Shutdown`,
            id: `${prefix}disablepm on`,
            
         }, {
            title: "Disable",
            description: `To Enable Public`,
            id: `${prefix}disablepm off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autovoice1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO VOICE SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Voice`,
            id: `${prefix}autovoice on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Voice`,
            id: `${prefix}autovoice off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autosticker1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO STICKER SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Sticker`,
            id: `${prefix}autosticker on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Sticker`,
            id: `${prefix}autosticker off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autobio1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO BIO SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Bio`,
            id: `${prefix}autobio on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Bio`,
            id: `${prefix}autobio off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autosview1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO STATUS VIEW SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Status View`,
            id: `${prefix}autostatus on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Status View`,
            id: `${prefix}autostatus off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autotype1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO TYPING SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Typing`,
            id: `${prefix}autotyping on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Typing`,
            id: `${prefix}autotyping off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autorecord1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
 (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO RECORDING SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Recording`,
            id: `${prefix}autorecording on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Recording`,
            id: `${prefix}autorecording off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autoread1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO READ SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Read`,
            id: `${prefix}autoread on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Read`,
            id: `${prefix}autoread off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "cmdread1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *CMD READ SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Cmd Read`,
            id: `${prefix}cmdread on`,
            
         }, {
            title: "Disable",
            description: `To Disable Cmd Read`,
            id: `${prefix}cmdread off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autoreact1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO REACT SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto React`,
            id: `${prefix}autoreact on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto React`,
            id: `${prefix}autoreact off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "alwaysonline1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ALWAYS ONLINE SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Always Online`,
            id: `${prefix}alwaysonline on`,
            
         }, {
            title: "Disable",
            description: `To Disable Always Online`,
            id: `${prefix}alwaysonline off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autoblock1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *212 BLOCK SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Block`,
            id: `${prefix}autoblock on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Block`,
            id: `${prefix}autoblock off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "autowelcome1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *AUTO WELCOME SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Auto Welcome`,
            id: `${prefix}autowelcome on`,
            
         }, {
            title: "Disable",
            description: `To Disable Auto Welcome`,
            id: `${prefix}autowelcome off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "antibot1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ANTI BOT SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Anti Bot`,
            id: `${prefix}antibot on`,
            
         }, {
            title: "Disable",
            description: `To Disable Anti Bot`,
            id: `${prefix}antibot off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "antilink1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ANTI LINK SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Anti Link`,
            id: `${prefix}antilink on`,
            
         }, {
            title: "Disable",
            description: `To Disable Anti Link`,
            id: `${prefix}antilink off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "antibad1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {                
if (!isMe) return await reply(BOTOW)	
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ANTI BAD SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Anti Bad`,
            id: `${prefix}antibad on`,
            
         }, {
            title: "Disable",
            description: `To Disable Anti Bad`,
            id: `${prefix}antibad off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "anticall1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {       
	if (!isMe) return await reply(BOTOW)		
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ANTI CALL SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Anti Call`,
            id: `${prefix}anticall on`,
            
         }, {
            title: "Disable",
            description: `To Disable Anti Call`,
            id: `${prefix}anticall off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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
        pattern: "antidelete1",
        react: "🗃️",
        filename: __filename
    },
    async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
        try {       
	if (!isMe) return await reply(BOTOW)		
            const MNG = `[👨‍💻 𝚁𝙰𝙽𝚄 ᴍᴅ ʙʏ 𝙲𝚁𝙳 ᴛᴇᴀᴍ 👨‍💻]

  *ANTI DELETE SETTINGS*`

var buttons = [{
   name: "single_select",
   buttonParamsJson: JSON.stringify({
      title: "Tap here!",
      sections: [{
        highlight_label: 'RANU-MD',
         rows: [{
            title: "Enable",
            description: `To Enable Anti Delete`,
            id: `${prefix}antidelete on`,
            
         }, {
            title: "Disable",
            description: `To Disable Anti Delete`,
            id: `${prefix}antidelete off`
         }]
      }]
   })
}]
		
let opts = {
                image: '',
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


//---------------------------------------------------------------------------
}
//---------------------------------------------------------------------------



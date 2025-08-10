const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')



              


cmd({
    pattern: "vv",
    react: "😁",
    desc: "To ViewOnceMessage",
    category: "convert",
    use: '.vv',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
  
const quot = mek.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
   let cap =quot.message.imageMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage)
   return conn.sendMessage(from,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
   let cap =quot.message.videoMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage)
   return conn.sendMessage(from,{video:{url : anu},caption : cap })
}
 
}
//else citel.reply("```This is Not A ViewOnce Message```") 
       
       
if(!mek.quoted) return mek.reply("```Uh Please Reply A ViewOnce Message```")           
if(mek.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
 if(mek.quoted.message.imageMessage )
{ 
  let cap = mek.quoted.message.imageMessage.caption;
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.imageMessage)
  conn.sendMessage(from,{image:{url : anu},caption : cap })
}
else if(mek.quoted.message.videoMessage )
{
  let cap =mek.quoted.message.videoMessage.caption;
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.videoMessage)
  conn.sendMessage(from,{video:{url : anu},caption : cap })
}

}
else return mek.reply("```This is Not A ViewOnce Message```")
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})


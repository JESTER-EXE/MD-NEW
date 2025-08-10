const config = require('../settings')
const { cmd, commands } = require('../lib/command');
let { img2url } = require('@blackamda/telegram-image-url');
const { getRandom } = require('../lib/functions');
const fs = require('fs');
const FormData = require('form-data');
const { downloadMediaMessage } = require('../lib/msg');

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති රූපය url එකක් බවට පරිවර්තනය කරයි.'
else desct = "It convert given image to url."
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
else imgmsg = "*Reply to a photo !*"
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"


const addCopyButton = (message, replyText) => {
    message.push({
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Copy",
            copy_code: replyText
        })
    });
    return message;
};

const sendReplyWithButton = async (conn, from, m, replyText, reply) => {
    let buttons = addCopyButton([], replyText);
    let message = {
        body: replyText,
        footer: config.FOOTER
    };
    return await conn.sendButtonMessage(from, buttons, m, message);
};

cmd({
    pattern: "img2url",
    react: "📷",
    alias: ["telegraph", "url", "tourl"],
    desc: "Upload an image to telegra.ph and get the direct URL.",
    category: "convert",
    use: 'telegraph',
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        if (!quoted) {
            return reply('*Please reply to an image message.*');
        }

        reply('*Processing the image....*');

        // Download the quoted image
        let media = await downloadMediaMessage(quoted);

        // Upload the image to telegra.ph
        const form = new FormData();
        form.append('file', media, { filename: 'image.jpg' });

        const response = await axios.post('https://telegra.ph/upload', form, {
            headers: {
                ...form.getHeaders()
            }
        });

        if (response.data && response.data[0] && response.data[0].src) {
            const url = `https://telegra.ph${response.data[0].src}`;
            return await sendReplyWithButton(conn, from, m, url, reply);
        } else {
            throw new Error('Failed to upload image to telegra.ph');
        }
    } catch (e) {
        reply('*Error !!*\n\n' + e);
    }
});

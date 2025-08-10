const axios = require("axios");
const cheerio = require('cheerio');
const { cmd, commands } = require('../lib/command')
const config = require('../settings');
const {fetchJson} = require('../lib/functions');

const api = `https://nethu-api-ashy.vercel.app`;

var desc =''
if(config.LANG === 'SI') desc = "sinhalasub වෙතින් වීඩියෝ බාගත කරයි."
else desc = "Download videos from sinhalasub."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "*🚩 කරුණාකර වචන කිහිපයක් ලියන්න*"
else imgmsg = "*🚩 Please give me a text*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*🚩 කරුණාකර sinhalasub url එකක් ලබා දෙන්න*"
else urlneed = "*🚩 Please give me a sinhalasub url*"

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var epurlneed = config.LANG === 'SI' ? "*🚩 කරුණාකර sinhalasub episode url එකක් ලබා දෙන්න්*" : "*🚩 Please give me a SinhalaSub episode url*";
 
cmd({
  pattern: "sinhalasubtv",
  alias: ["sstv"],
  react: "📺",
  desc: desc,
  category: "series",
  use: ".sinhalasubtv game of thrones",
  filename: __filename
},
async (conn, mek, m, { from, q, reply, prefix }) => {
  try {
    if (!q) return reply(imgmsg);

    const res = await fetchJson(`${searchApi}/movie/sinhalasub/search?text=${encodeURIComponent(q)}`);

    if (!res.result || res.result.data.length === 0) return reply(N_FOUND);

    const buttons = res.result.data
      .filter(item => item.link.includes('/tvshows/'))
      .slice(0, 10)
      .map(item => ({
        buttonId: `${prefix}tv_search ${item.link}`,
        buttonText: { displayText: `${item.title}` },
        type: 1
      }));

    if (buttons.length === 0) return reply(N_FOUND);

    const buttonMessage = {
      image: { url: "https://i.ibb.co/1YPWpS3H/9882.jpg" },
      caption: `*_🔎 𝗦𝗜𝗡𝗛𝗔𝗟𝗔𝗦𝗨𝗕 𝗧𝗩 𝗦𝗘𝗔𝗥𝗖𝗛 𝗥𝗘𝗦𝗨𝗟𝗧𝗦_*\n\n\`Input:\` ${q}`,
      footer: "> *SENU X MD*",
      buttons: buttons,
      headerType: 4
    };

    await conn.buttonMessage2(from, buttonMessage, mek);
  } catch (e) {
    reply('*Error*');
    console.error(e);
  }
});

// Fetch TV series details and episodes
cmd({
  pattern: "tv_search",
  react: "🔎",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, prefix, reply }) => {
  try {
    if (!q) return reply(urlneed);

    let series = await fetchJson(`${seriesApi}/movie/sinhalasub/tvshow?url=${encodeURIComponent(q)}`);
    if (!series.result?.data) return reply(N_FOUND);

    let data = series.result.data;
    const image = data.image && (data.image.startsWith("https://sinhalasub.lk") || data.image.startsWith("https://image.tmdb.org"))
      ? data.image
      : "https://files.catbox.moe/apqvg7.jpeg";

    const caption = `*_🍃 𝗦𝗜𝗡𝗛𝗔𝗟𝗔𝗦𝗨𝗕 𝗧𝗩 𝗦𝗘𝗥𝗜𝗘𝗦 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡_*

☘️ \`Title\` : ${data.originalTitle || data.title || 'N/A'}
📅 \`Release Date\` : ${data.date || 'N/A'}
🌟 \`IMDB Rating\` : ${data.imdb || data.tmdbRate || 'N/A'}
🗳️ \`SinhalaSub Votes\` : ${data.average || data.sinhalasubVote || 'N/A'}
🎭 \`Categories\` : ${data.category?.join(', ') || 'N/A'}
🎬 \`Director\` : ${data.director || 'N/A'}
🪄️ \`Subtitle By\` : ${data.subtitle_author || 'N/A'}
📎 \`Url\` : ${q}

🧾 Description:
${data.desc?.split('\n')[0] || data.description?.split('\n')[0] || 'No description available'}`;

    const sections = [
      {
        title: "Select Episode ⬇️",
        rows: data.episodes?.map((ep, i) => ({
          title: `Episode ${ep.title || `S${Math.floor((i + 1) / 10) + 1}E${(i + 1) % 10 || 10}`} - ${ep.date || 'N/A'}`,
          rowId: `${prefix}tv_episode ${ep.episode_link || ep.link}`
        })) || []
      },
      {
        title: "Download All Episodes ⬇️",
        rows: [{
          title: "Download All Episodes",
          rowId: `${prefix}tv_download_all ${q}||${data.originalTitle || data.title || 'Series'}`
        }]
      }
    ];

    await conn.listMessage2(from, {
      image: { url: image },
      caption,
      footer: "> *SENU X MD*",
      title: "",
      buttonText: "`Reply Below Number` 🔢",
      sections,
    }, mek);
  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while fetching series data.");
  }
});

// Fetch and download individual episode
cmd({
  pattern: "tv_episode",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, prefix, reply }) => {
  try {
    if (!q) return reply(epurlneed);

    let episode = await fetchJson(`${seriesApi}/movie/sinhalasub/episode?url=${encodeURIComponent(q)}`);
    if (!episode.result?.data) return reply(N_FOUND);

    let data = episode.result.data;
    const safeTitle = data.ep_name?.replace(/[^\w\s\-]/gi, '') || data.title?.replace(/[^\w\s\-]/gi, '') || "Episode";
    const image = (data.images && Array.isArray(data.images))
      ? (data.images.find(img => img.startsWith("https://sinhalasub.lk") || img.startsWith("https://image.tmdb.org")) || "https://files.catbox.moe/apqvg7.jpeg")
      : data.image && (data.image.startsWith("https://sinhalasub.lk") || data.image.startsWith("https://image.tmdb.org"))
        ? data.image
        : "https://i.ibb.co/1YPWpS3H/9882.jpg";

    const sections = [
      {
        title: "Download DDL ⬇️",
        rows: data.dl_links?.map((dl, i) => ({
          title: `${i + 1}. ${dl.quality} (${dl.size})`,
          rowId: `${prefix}tv_download ${dl.link}||${safeTitle}||${dl.quality}`
        })) || []
      }
    ];

    const caption = `*_📺 𝗦𝗜𝗡𝗛𝗔𝗟𝗔𝗦𝗨𝗕 𝗘𝗣𝗜𝗦𝗢𝗗𝗘 𝗜𝗡𝗙𝗢_*

☘️ \`Episode Title\` : ${data.ep_name || data.title || 'N/A'}
📅 \`Release Date\` : ${data.date || 'N/A'}
📎 \`Url\` : ${q}`;

    await conn.listMessage2(from, {
      image: { url: image },
      caption,
      footer: "> *SENU X MD*",
      title: "",
      buttonText: "`Select Download Option` 🔢",
      sections,
    }, mek);
  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while fetching episode data.");
  }
});

// Download individual episode
cmd({
  pattern: "tv_download",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
  try {
    if (!q) return reply(epurlneed);

    const [link, title, quality] = q.split("||");
    const safeTitle = title?.replace(/[^\w\s\-]/gi, '') || "Episode";

    await conn.sendMessage(from, {
      document: { url: link },
      mimetype: "video/mp4",
      fileName: `${safeTitle} [ ${quality} ] - SUNU X MD.mp4`,
      caption: `[ *Quality:* \`${quality}\` ]\n\n> *SENU X MD*`,
    }, { quoted: mek });
  } catch (e) {
    console.error(e);
    reply("❌ Failed to send the episode.");
  }
});

// Download all episodes
cmd({
  pattern: "tv_download_all",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, prefix, reply }) => {
  try {
    if (!q) return reply(urlneed);

    const [seriesUrl, seriesTitle] = q.split("||");
    let series = await fetchJson(`${seriesApi}/movie/sinhalasub/tvshow?url=${encodeURIComponent(seriesUrl)}`);
    if (!series.result?.data?.episodes) return reply(N_FOUND);

    const episodes = series.result.data.episodes;
    const safeSeriesTitle = seriesTitle?.replace(/[^\w\s\-]/gi, '') || "Series";

    reply(`*📺 Downloading all episodes for ${safeSeriesTitle}...*\nThis may take a while depending on the number of episodes.`);

    for (const episode of episodes) {
      let epData = await fetchJson(`${seriesApi}/movie/sinhalasub/episode?url=${encodeURIComponent(episode.episode_link || episode.link)}`);
      if (!epData.result?.data) continue;

      const ep = epData.result.data;
      const downloadLink = ep.dl_links?.[0]?.link;
      const quality = ep.dl_links?.[0]?.quality || "Unknown";
      const safeEpTitle = ep.ep_name?.replace(/[^\w\s\-]/gi, '') || ep.title?.replace(/[^\w\s\-]/gi, '') || `Episode_${ep.episode || 'Unknown'}`;

      if (downloadLink) {
        await conn.sendMessage(from, {
          document: { url: downloadLink },
          mimetype: "video/mp4",
          fileName: `${safeSeriesTitle} - ${safeEpTitle} [ ${quality} ] - SENU X MD.mp4`,
          caption: `[ *Episode:* ${ep.ep_name || ep.title || 'Untitled'} ]\n[ *Quality:* \`${quality}\` ]\n\n> *SENU X MD*`,
        }, { quoted: mek });

        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    reply(`*✅ Finished downloading all available episodes for ${safeSeriesTitle}.*`);
  } catch (e) {
    console.error(e);
    reply("❌ Error occurred while downloading episodes.");
  }
});

//=============================================
  
cmd({
  pattern: "sinhalasub",
  alias: ["ssub"],
  desc: desc,
  category: "downloa",
  use: ".sinhalasub 2024",
  filename: __filename
},
async (conn, mek, m, { from, q, reply, prefix }) => {
  try {
    if (!q) return reply(imgmsg);

    const res = await fetchJson(`${api}/movie/sinhalasub/search?text=${encodeURIComponent(q)}`);

    if (!res.result || res.result.data.length === 0) {
      return reply(N_FOUND);
    }

    const buttons = res.result.data.slice(0, 10).map((item, i) => ({
      buttonId: `${prefix}sub_search ${item.link}`,
      buttonText: { displayText: `${item.title}` },
      type: 1
    }));

    const buttonMessage = {
      image: { url: "https://i.ibb.co/1YPWpS3H/9882.jpg" },
      caption: `*_SINHALASUB SEARCH RESULT 📽️_*\n\n\`Input :\` ${q}`,
      footer: "> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏᴋᴜ-ᴍᴅ 🔒🪄",
      buttons: buttons,
      headerType: 4
    };

    return await conn.buttonMessage2(from, buttonMessage, mek);

  } catch (e) {
    reply('*Error*');
    console.error(e);
  }
});

cmd({
  pattern: "sub_search",
  react: "🔎",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, prefix, quoted, reply }) => {
  try {
    if (!q) return reply(urlneed);

    let sin = await fetchJson(`${api}/movie/sinhalasub/movie?url=${q}`);
    if (!sin.result?.data) return reply(N_FOUND);

    let data = sin.result.data;

    const caption = `*_SINHALASUB MOVIE INFORMATION 📽️_*

*┃* 📝 \`Title\` : ${data.title}
*┃* 📅 \`Release Date\` : ${data.date}
*┃* 🌍 \`Country\` : ${data.country}
*┃* 🎯 \`TMDB Rating\` : ${data.tmdbRate}
*┃* 🗳️ \`SinhalaSub Votes\` : ${data.sinhalasubVote}
*┃* 🎬 \`Directed by\` : ${data.director}
*┃* 🏷️ \`Categories\` : ${data.category.join(', ')}
*┃* ✍️ \`Subtitle By\` : ${data.subtitle_author}
*┃* 📎 \`Url\` : ${q}

🧾 Description:
${data.description.split('\n')[0]}`;

    const sections = [
      {
        title: "Download PixelDrain ⬇️",
        rows: data.pixeldrain_dl.map(dl => ({
          title: `${dl.quality} (${dl.size})`,
          rowId: `${prefix}subsdl ${dl.link}`
        }))
      },
      {
        title: "Download DDL ⬇️",
        rows: data.ddl_dl.map(dl => ({
          title: `${dl.quality} (${dl.size})`,
          rowId: `${prefix}subsdl ${dl.link}`
        }))
      }
    ];

    await conn.listMessage2(from, {
      image: { url: data.images[0] },
      caption,
      footer: "senu x md",
      title: "",
      buttonText: "\`Reply Below Number\` 🔢",
      sections,
    }, mek);
    
  } catch (err) {
    console.error(err);
    reply("❌ Error occurred while fetching data.");
  }
});

cmd({
  pattern: "subsdl",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, quoted, reply }) => {
  try {
    if (!q) return reply(urlneed);

    await conn.sendMessage(from, {
      document: { url: q },
      mimetype: "video/mp4",
      fileName: "Sinhalasub-Movie.mp4",
      caption: "> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏᴋᴜ-ᴍᴅ 🔒🪄",
      contextInfo: {
        mentionedJid: [],
        isForwarded: false,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363404913442592@newsletter',
          newsletterName: "Loku MD V1",
          serverMessageId: 999
        },
        externalAdReply: {
          title: "Sinhalasub Movie",
          body: 'www.sinhalasub.lk',
          mediaType: 1,
          sourceUrl: q,
          thumbnailUrl: "https://i.ibb.co/1YPWpS3H/9882.jpg",
          renderLargerThumbnail: false,
          showAdAttribution: true
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error("subsdl error:", e);
    reply(`*ERROR*`);
  }
});

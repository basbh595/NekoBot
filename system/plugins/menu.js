const moment = require("moment-timezone");
const pkg = require(process.cwd()+"/package.json");
const axios = require('axios');
const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    command: "menu",
    alias: ["menu", "help"],
    category: ["main"],
    description: "Menampilkan menu bot",
    loading: true,
    async run(m, { sock, plugins, config, Func }) {
    let data = fs.readFileSync(process.cwd() + "/system/case.js", "utf8");
    let casePattern = /case\s+"([^"]+)"/g;
    let matches = data.match(casePattern);
    if (!matches) return m.reply("Tidak ada case yang ditemukan.");
    matches = matches.map((match) => match.replace(/case\s+"([^"]+)"/, "$1"));   
    let menu = {};
    plugins.forEach((item) => {
      if (item.category && item.command && item.alias && item.description) {
        item.category.forEach((cat) => {
          if (!menu[cat]) {
            menu[cat] = { command: [] };
          }
          menu[cat].command.push({
            name: item.command,
            alias: item.alias,
            description: item.description,
<<<<<<< HEAD
            settings: item.settings,
=======
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
          });
        });
      }
    });
    let cmd = 0;
    let alias = 0;
    let pp = await sock.profilePictureUrl(m.sender, 'image').catch(e => 'https://files.catbox.moe/8getyg.jpg')
   Object.values(menu).forEach(category => {
       cmd += category.command.length
          category.command.forEach(command => {
            alias += command.alias.length; 
        });
    });
<<<<<<< HEAD
      let premium = db.list().user[m.sender].premium.status
    let limit = db.list().user[m.sender].limit
=======
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
      let caption = `*🍟 Selamat datang di Dashboard bot*
Nama saya nekoBot - , Berikut list command bot ini

*– 乂 Info User*
> *- Nama :* ${m.pushName}
<<<<<<< HEAD
> *- Tag :* @${m.sender.split("@")[0]}
> *- Status :* ${m.isOwner ? "Developer bot" : premium ? "Premium" : "Gratisan"}
> *- Limit :* ${m.isOwner ? "Unlimited" : limit}
=======
> *- Perangkat :* ${m.device}
> *- Tag :* @${m.sender.split("@")[0]}
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4

*– 乂 Info - Bot*
> *- Nama :* ${pkg.name}
> *- Versi :* v${pkg.version}
> *- Runtime :* ${Func.toDate(process.uptime() * 1000)}
> *- Prefix :* [ ${m.prefix} ]
<<<<<<< HEAD
> *- Total fitur :* ${cmd + alias + matches.length}
> *- Source code :* https://github.com/AxellNetwork/NekoBot

> *- Fitur Limit :* [L]
> *- Fitur Premium :* [P]

☎️ Jika menemukan bug pada bot ini bisa langsung hubungi owner bot
=======

Jika menemukan bug pada bot ini bisa langsung hubungi owner bot
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4

*– 乂 M e n u - O t h e r*

${matches.map((a, i) => `*${i + 1}.* ${m.prefix + a}\n> Fitur sampingan ( Case Fitur )`).join("\n")} 
`
Object.entries(menu).forEach(([tag, commands]) => {
    caption += `\n*– 乂 M e n u – ${tag.split('').join(' ').capitalize()}*\n\n`;
    commands.command.forEach((command, index) => {
<<<<<<< HEAD
        caption += `*${index + 1}.* ${m.prefix + command.name} ${command.settings?.limit ? "*[L]*" : ''}\n${command.description ? `> ${command.description}\n` : ''}`
            });
      });   
      m.reply({
           image: {
               url: "https://files.catbox.moe/yupd7z.jpg"
           },
           caption,
           mentions: [m.sender],
           footer: config.name,
           buttons: [{
             buttonId: ".ping",
               buttonText: {
                   displayText: "⚡ Ping Bot"
              }
          },{
             buttonId: ".script",
               buttonText: {
                   displayText: "👾 Script Bot"
              }
          },{
             buttonId: ".tqto",
               buttonText: {
                   displayText: "👥 Top Contribute"
              }
          }],
          viewOnce: true,
          headerType: 6,
=======
        caption += `*${index + 1}.* ${m.prefix + command.name}\n${command.description ? `> ${command.description}\n` : ''}`
            });
      });   
      m.reply({
           text: caption,
           contextInfo: {
            mentionedJid: [m.sender],
            isForwarded: !0,
            forwardingScore: 127,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363355890061032@newsletter",
                newsletterName: "☘️ nekoBot | Playground",
                 serverMessageId: -1
             },
              externalAdReply: {
               title: "NekoBot - simple WhatsApp bot",
               body: "- NekoBot adalah bot WhatsApp yang didesain untuk membantu anda di WhatsApp",
               mediaType: 1,
               thumbnailUrl: "https://files.catbox.moe/yupd7z.jpg",
               sourceUrl: "https://api.botwa.space",
               renderLargerThumbnail: true
           }
         }
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
       })
    }
}
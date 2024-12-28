const fs = require('node:fs');

const config = {
<<<<<<< HEAD
    owner: ["6285351971353", "6281910094713"],
=======
    owner: ["6285165556936", "6285215909004"],
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
    name: "- nekoBot - Simple WhatsApp bot",
    sessions: "sessions",
    sticker: {
      packname: "Made by ",
      author: "nekoBot"
    },
   messages: {
      wait: "> Data sedang memprosess...",
      owner: "> Khusus Owner bot ini mah",
      premium: "> Upgrade ke premium kalo mau akses, murah aja",
      group: "> Fitur khusus group chat",
      botAdmin: "> Lu siapa bukan Admin group",
      grootbotbup: "> Jadiin NekoBot admin dulu baru bisa akses",
   },
   database: "neko-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
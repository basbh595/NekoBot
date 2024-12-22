const os = require("node:os");

module.exports = {
     command: "runtime",
     alias: ["uptime"],
     category: ["info"],
     description: "Menampilkan uptime bot",
     async run(m, { Func }) {
      let cap = "*– 乂 Info - Update*\n"
          cap += `> *- Uptime bot :* ${Func.toDate(process.uptime()+1000)}\n`
          cap += `> *- Uptime server :* ${Func.toDate(os.uptime()+1000)}`
   
     m.reply(cap);
   }
}
const fs = require('node:fs');

const config = {
    owner: ["6285351971353", "6281910094713"],
    name: "- nekoBot - Simple WhatsApp bot",
    sessions: "{"noiseKey":{"private":{"type":"Buffer","data":"CDMfyglme7Do4PnXhRv5NTLwNapSPj/iL1ePP2LHQ1A="},"public":{"type":"Buffer","data":"BY2Av5yyOCNmQnZ61vVWPck/5qlEhOkE4Ut5yDkd5Tw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"yOU067xCf3PvY0Aa5fkfnKXS5G0MooENwus3Cldl7Go="},"public":{"type":"Buffer","data":"bz/dpZY95D4MGkbdYp0VCYBgrjs2i9ZuL++eJjtgEnw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MLriVi9RRRN/7AbG60L1uCGa/zrie4N4JtjtfpjxW3M="},"public":{"type":"Buffer","data":"sD3KtAGw8/uPj0bXEbZaewvELQHkpWCsMS+vnlIrFAk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SGvDj7+bwO2JZ3fQXlfdZvuDa7/UyWVXNx5TN4iPvXw="},"public":{"type":"Buffer","data":"oRwtElcZ8luBoQbh+nhcnmcqgSbRANyzYJQpyWhiAng="}},"signature":{"type":"Buffer","data":"lcu1SG+FcrUnvODxl1mYRMmBgm8tlm2wD1jRpHoYwiac4/JehD80J63t6taQxZCJU0qHWl/TViCj3RqzM9owhw=="},"keyId":1},"registrationId":1,"advSecretKey":"9nhqP1uYOd2kVzw+Y0sHAWYY4wBJ6CpXAPrpp2rEJvY=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"12LZ3THK","me":{"id":"96896515043:6@s.whatsapp.net","lid":"145247757709395:6@lid"},"account":{"details":"CK/WjZoBENuhybsGGAMgACgA","accountSignatureKey":"lu+qI/pBvwc05BmbfOVnbIKvfVuJ0shTPXNIvomXpVo=","accountSignature":"hYfuUNazaPpShxukYEuwI2OEdzXTNx+qBKiFnbWyAQAncMQKIfxIYeFlo26pnCWYi+9jh/azz6SUpfsR8+jIDQ==","deviceSignature":"42Vkj1bweKtDHM4Sqtqwx0uLt8oQYHpL9SeQMIRVFRDpiql5egHoKMHQeZsQIS9uVm87iTOdI6bRcjWMGLQXhA=="},"signalIdentities":[{"identifier":{"name":"96896515043:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZbvqiP6Qb8HNOQZm3zlZ2yCr31bidLIUz1zSL6Jl6Va"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1735545056,"lastPropHash":"TrDC9","myAppStateKeyId":"AAAAAGkr"}",
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

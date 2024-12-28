const axios = require("axios");

const cmd = {
  command: "waifu",
  category: ["anime"],
  alias: ["waifu"],
  description: "Gambar random Waifu",
  loading: true,
<<<<<<< HEAD
  async run(m, { sock, config }) {
=======
  async run(m, { sock }) {
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
    let json = await axios.get("https://api.waifu.pics/sfw/waifu");
    m.reply({
      image: json.data,
      caption: `> *- Random :* [ ${m.command} ]`,
<<<<<<< HEAD
      footer: config.name,
      buttons: [{
          buttonId: ".waifu",
          buttonText: {
            displayText: "🖼️ Gambar selanjutnya"
         }
       }],
       viewOnce: true,
       headerType: 6,
=======
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4
    });
  },
};

<<<<<<< HEAD
module.exports = cmd;
=======
module.exports = cmd;
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4

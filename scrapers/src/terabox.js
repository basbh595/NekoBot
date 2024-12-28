<<<<<<< HEAD
const { fetch } = require("undici");

class TeraboxHnn {
 getInfo = async (inputUrl) => {
    try {
      const url = `https://terabox.hnn.workers.dev/api/get-info?shorturl=${inputUrl.split("/").pop()}&pwd=`;
      const headers = {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
        Referer: "https://terabox.hnn.workers.dev/",
      };
      const response = await fetch(url, {
        headers: headers,
      });
      if (!response.ok) {
        throw new Error(
          `Gagal mengambil informasi file: ${response.status} ${response.statusText}`,
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Gagal mengambil informasi file:", error);
      throw error;
    }
  }
  getDownloadLink = async (fsId, shareid, uk, sign, timestamp) => {
    try {
      const url = "https://terabox.hnn.workers.dev/api/get-download";
      const headers = {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
        Referer: "https://terabox.hnn.workers.dev/",
      };
      const data = {
        shareid: shareid,
        uk: uk,
        sign: sign,
        timestamp: timestamp,
        fs_id: fsId,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(
          `Gagal mengambil link download: ${response.status} ${response.statusText}`,
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Gagal mengambil link download:", error);
      throw error;
    }
  }
  download = async (inputUrl) => {
    try {
      const { list, shareid, uk, sign, timestamp } =
        await this.getInfo(inputUrl);
      if (!list) {
        throw new Error(`File tidak ditemukan`);
      }
      let array = [];
      for (let i = 0; i < list.length; i++) {
        const fsId = list[i].fs_id;
        const { downloadLink } = await this.getDownloadLink(
          fsId,
          shareid,
          uk,
          sign,
          timestamp,
        );
        array.push({
          filename: list[i].filename,
          size: list[i].size,
          download: downloadLink,
        });
      }
      return array;
    } catch (error) {
      console.error("Gagal mengunduh file:", error);
      throw error;
    }
  }
}
module.exports = new TeraboxHnn();
=======
const axios = require('axios');

async function terabox(url) {
return new Promise(async(resolve, reject) => {
await axios.post('https://teradl-api.dapuntaratya.com/generate_file', {
   mode: 1,
   url: url
}).then(async(a) => {
const array = []
for (let x of a.data.list) {
let dl = await axios.post('https://teradl-api.dapuntaratya.com/generate_link', {
       js_token: a.data.js_token,
       cookie: a.data.cookie,
       sign: a.data.sign,
       timestamp: a.data.timestamp,
       shareid: a.data.shareid,
       uk: a.data.uk,
       fs_id: x.fs_id
     }).then(i => i.data).catch(e => e.response.data)
;
  if (!dl.download_link) return
    array.push({
          fileName: x.name,
          type: x.type,
          thumb: x.image,
          ...dl.download_link
         });
      }
      resolve(array);
    }).catch(e => reject(e.response.data));
 })
}

module.exports = terabox
>>>>>>> 674c68d5fef13eb97000e280fe7e6567035b07c4

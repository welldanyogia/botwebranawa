require('./db/config')
let autoGetLayanan = false;
let intervalId;
let antilinkEnabled = false;

const { BufferJSON, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
let defaultMarkupPercentage = 0.01;


const admin = require('firebase-admin');

const serviceAccount = require('./db/serviceAccountKey.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '', //ISI LINK DATABASE FIREBASE KAMU
});

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const md5 = require('md5');
const isCreator = [nomerBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const firestore = admin.firestore();
const path = require('path');
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const jsonFilePath = './db/custom_commands.json';
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateUniqueRefID, connect } = require('./lib/myfunc')
module.exports = client = async (client, m, chatUpdate, store, db_respon_list) => {
  try {
      const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = "."
    const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd,DD MMMM YYYY');
    const productData = './db/datadigi.json';
      const productData2 = './db/dataevilbee.json';
    const db = admin.firestore();
    const pathUser = './db/user_down.json'
    const afk = require('./lib/afk');
    const _afk = JSON.parse(fs.readFileSync('./db/afk.json'));
      const ms = require('parse-ms');
      const fetch = require('node-fetch');
      const { createCanvas, loadImage } = require("canvas");
      const { prepareWAMessageMedia } = require('@whiskeysockets/baileys');
      const moment2 = require('moment-timezone');
      const QRCode = require('qrcode');
    let localUserData = [];
if (fs.existsSync(pathUser)) {
  const rawData = fs.readFileSync(pathUser, 'utf8');
  localUserData = JSON.parse(rawData);
}
    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const from = mek.key.remoteJid
    const botNumber = await client.decodeJid(client.user.id)
    const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    if (time1 < "23:59:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "19:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "18:00:00") {
      var ucapanWaktu1 = 'Sore'
    }
    if (time1 < "15:00:00") {
      var ucapanWaktu1 = 'Siang'
    }
    if (time1 < "10:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "05:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "03:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    const poster = fs.readFileSync('./lib/poster.jpg')
    const content = JSON.stringify(m.message)
   
    const fdocc = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
 
      message: {
        documentMessage: {
          title: `*Selamat ${ucapanWaktu1} ${pushname}*`,
          jpegThumbnail: m,
        }
      }
    }
    
  function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}  
    
   
function wrapText(text, maxLineLength) {
  const lines = [];
  while (text.length > maxLineLength) {
    let spaceIndex = text.lastIndexOf(" ", maxLineLength);
    if (spaceIndex === -1) {
      spaceIndex = maxLineLength; // Jika tidak ada spasi, potong pada batas maksimum
    }
    lines.push(text.substring(0, spaceIndex));
    text = text.substring(spaceIndex).trim(); // Hilangkan spasi yang tidak perlu
  }
  lines.push(text); // Tambahkan sisa teks
  return lines;
}

async function generateInvoiceWithBackground(data, backgroundPath, logoPath = null) {
  const canvas = createCanvas(600, 400); // Ukuran canvas
  const ctx = canvas.getContext("2d");

  // Muat gambar latar belakang
  if (backgroundPath && fs.existsSync(backgroundPath)) {
    const backgroundImage = await loadImage(backgroundPath);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Gambar latar belakang
  } else {
    // Jika tidak ada gambar latar belakang, gunakan warna solid
    ctx.fillStyle = "#FFFFFF"; // Warna default
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

 // Tambahkan logo jika ada
  if (logoPath && fs.existsSync(logoPath)) {
    const logo = await loadImage(logoPath);

    const logoOriginalWidth = logo.width; // Lebar asli logo
    const logoOriginalHeight = logo.height; // Tinggi asli logo

    // Tentukan ukuran maksimal untuk logo
    const maxWidth = 100; // Lebar maksimum untuk logo
    const maxHeight = 100; // Tinggi maksimum untuk logo

    // Hitung skala untuk menjaga rasio aspek
    const widthRatio = maxWidth / logoOriginalWidth;
    const heightRatio = maxHeight / logoOriginalHeight;

    // Pilih skala yang lebih kecil untuk mempertahankan rasio
    const scale = Math.min(widthRatio, heightRatio);

    // Hitung ukuran baru berdasarkan skala
    const logoWidth = logoOriginalWidth * scale;
    const logoHeight = logoOriginalHeight * scale;

    // Gambar logo dengan ukuran proporsional
    ctx.drawImage(logo, 10, 10, logoWidth, logoHeight); // Tempatkan logo di sudut kiri atas
  }

  // Teks invoice dan detail lainnya
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 10px Arial";

  ctx.fillText(`${data.invoice}`, 259, 134); // Lokasi invoice
  ctx.fillText(`${data.product}`, 177, 188); // Produk
  ctx.fillText(`${data.tujuan}`, 177, 228); // Tujuan
  ctx.fillText(`${data.nickname}`, 177, 270); // Nickname
  ctx.fillText(`${data.waktu}`, 86, 134); // Waktu

  // Serial number (SN), dengan pembungkus teks
  ctx.fillStyle = "#FCD201";
  const snLines = wrapText(data.sn, 50); // Maksimal 40 karakter per baris
  let startY = 313; // Titik awal untuk teks SN
  const lineSpacing = 20; // Jarak antar baris untuk SN

  snLines.forEach((line, index) => {
    ctx.fillText(line, 177, startY + (index * lineSpacing)); // Tambahkan teks pada setiap baris
  });

  // Simpan gambar invoice ke direktori
  const outputPath = path.join(__dirname, "db/invoice/", `${data.invoice}.png`);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputPath, buffer);

  return outputPath;
}


    
     async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
      
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + name + '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' +
        'END:VCARD'
      return client.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }
    const owned = `${global.nomerOwner}@s.whatsapp.net`
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const kiw = sender.split("@")[0]
    const isUser = pathUser.includes(m.kiw)
   const mentionByTag = (m && m.mtype === "extendedTextMessage" && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid) ? m.message.extendedTextMessage.contextInfo.mentionedJid : [];

const Input = Array.isArray(mentionByTag) && mentionByTag.length > 0 ? mentionByTag[0] : (q ? numberQuery : false);


    if (!client.public) {
      if (!m.key.fromMe) return
    }
    if (m.message) {
      console.log(chalk.red(chalk.bgBlack('[ PESAN ] => ')), chalk.white(chalk.bgBlack(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender.split("@")[0]) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat'), chalk.magenta(`\nJam :`) + time1)
    }

    function readCustomCommands() {
      try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }
      
      function generateSignature(key, unique_code, service, amount, valid_time) {
    return md5(key + unique_code + service + amount + valid_time + 'NewTransaction');
}
    function saveCustomCommands(commands) {
      fs.writeFileSync(jsonFilePath, JSON.stringify(commands, null, 2), 'utf8');
    }

    function addCustomCommand(groupID, command, response) {
      const customCommands = readCustomCommands();
      if (!customCommands[groupID]) {
        customCommands[groupID] = {};
      }
      customCommands[groupID][command] = response;
      saveCustomCommands(customCommands);
    }
      // Antilink
const isAntiLink = isGroup ? antilink.includes(from) : false
if (isGroup && isAntiLink && !isOwner && !isAdmins && isBotAdmins){
            if (chath.includes(`https://chat.whatsapp.com`)) {
                await client.sendMessage(from, { delete: m.key })
                m.reply(`🛡 *GROUP LINK DETECTOR* 🛡\n\nBudayakan baca Deskribsi grup ka, mari saling menghargai sesama seller`)
                let number = sender
client.groupParticipantsUpdate(from, [number], "remove")
            }
    }   
// Map untuk alias
const aliasMap = {
	// PRODUK GAMES
  "ml": { category: "Games", brand: "MOBILE LEGENDS", type: "Umum" },
  "wdp": { category: "Games", brand: "MOBILE LEGENDS", type: "Membership" },
  "ff": { category: "Games", brand: "FREE FIRE", types: ["Umum", "Membership"] },
  "pb": { category: "Games", brand: "POINT BLANK", type: "Umum" },
  "aov": { category: "Games", brand: "ARENA OF VALOR", type: "Umum" },
  "vl": { category: "Games", brand: "Valorant", type: "Umum" },
  "dr": { category: "Games", brand: "DRAGON RAJA - SEA", type: "Umum" },  
  "sm": { category: "Games", brand: "Sausage Man", type: "Umum" },  
  "gi": { category: "Games", brand: "Genshin Impact", type: "Umum" },
  "8bp": { category: "Games", brand: "8 Ball Pool", type: "Cash" },
  "lol": { category: "Games", brand: "League of Legends Wild Rift", type: "Umum" },
  "coc": { category: "Games", brand: "Clash of Clans", type: "Umum" },  
  "ss": { category: "Games", brand: "Super Sus", type: "Umum" },
  "tof": { category: "Games", brand: "Tower of Fantasy", type: "Umum" },
  "hsr": { category: "Games", brand: "Honkai Star Rail", type: "Umum" },
  "udw": { category: "Games", brand: "Undawn", type: "Umum" },
  "zp": { category: "Games", brand: "Zepeto", type: "Umum" },  
  "ab": { category: "Games", brand: "Arena Breakout", type: "Umum" },  
  "msa": { category: "Games", brand: "Metal Slug Awakening", type: "Umum" },
  "hok": { category: "Games", brand: "Honor of Kings", types: ["Umum", "Membership"] },
  "bs": { category: "Games", brand: "Blood Strike", type: "Umum" },
  "bcm": { category: "Games", brand: "Black Clover M", type: "Umum" },  
  "pgr": { category: "Games", brand: "Punishing Gray Raven", type: "Umum" },
  "pubg": { category: "Games", brand: "PUBG MOBILE", type: "Umum" },
  "pubgg": { category: "Games", brand: "PUBG MOBILE", type: "global" },
 "codm": { category: "Games", brand: "Call of Duty MOBILE", type: "Umum" },
    "lm": { category: "Games", brand: "Lords Mobile", type: "Umum" },
    
    // PRODUK PULSA
 "ptl": { category: "Pulsa", brand: "TELKOMSEL", type: "Umum" },
 "pis": { category: "Pulsa", brand: "INDOSAT", type: "Umum" },
 "pax": { category: "Pulsa", brand: "AXIS", type: "Umum" },
 "psm": { category: "Pulsa", brand: "SMARTFREN", type: "Umum" }, 
 "ptr": { category: "Pulsa", brand: "TRI", type: "Umum" },
 "pxl": { category: "Pulsa", brand: "XL", type: "Umum" }, 
 "pby": { category: "Pulsa", brand: "by.U", type: "Umum" },
   
 // PRODUK DATA
 "tld": { category: "Data", brand: "TELKOMSEL", types: ["Mini", "Cek Paket"] },
 "isd": { category: "Data", brand: "INDOSAT", types: ["Yellow", "Freedom Internet"] },
 "axd": { category: "Data", brand: "Axis", types: ["Mini", "Bronet", "Sulutra"] },
 "sfd": { category: "Data", brand: "SMARTFREN", types: ["Minii", "Nonstopi", "Unlimited Nonstopi", "Kuota"] },
 "trd": { category: "Data", brand: "TRI", types: ["AlwaysOn", "Happy"] },
 "xld": { category: "Data", brand: "XL", types: ["Mini", "Xtra Combo Flex"] },
    
 // PRODUK VOUCHER
 "vgp": { category: "Voucher", brand: "GOOGLE PLAY INDONESIA", type: "Umum" },
 "vgs": { category: "Voucher", brand: "GARENA", type: "Umum" },
 "vrz": { category: "Voucher", brand: "Razer Gold", type: "Umum" },
 "vst": { category: "Voucher", brand: "Steam Wallet (IDR)", type: "Umum" },
 "vup": { category: "Voucher", brand: "Unipin Voucher", type: "Umum" },
    
 // PRODUK E-MONEY
 "gpy": { category: "E-Money", brand: "GO PAY", type: "Customer" },
 "ovo": { category: "E-Money", brand: "OVO", type: "Umum" },
 "dna": { category: "E-Money", brand: "DANA", type: "Umum" },
 "shp": { category: "E-Money", brand: "SHOPEE PAY", type: "Umum" },
    
// PRODUK PLN
 "pln": { category: "PLN", brand: "PLN", type: "Umum" },    
   
// PRODUK TELPON & SMS
 "tlt": { category: "Paket SMS & Telpon", brand: "TELKOMSEL", types: ["Umum", "Telepon Pas"] },  
 "ist": { category: "Paket SMS & Telpon", brand: "INDOSAT", type: "Unlimited" },   
 "trt": { category: "Paket SMS & Telpon", brand: "TRI", type: "Umum" },  
 "axt": { category: "Paket SMS & Telpon", brand: "AXIS", types: ["Umum", "Mabrur"] },
 "xlt": { category: "Paket SMS & Telpon", brand: "XL", types: ["Umum", "Sesama", "Anynet"] },  

 // PRODUK MASA AKTIF
"mtl": { category: "Masa Aktif", brand: "TELKOMSEL", type: "Umum" }, 
"mis": { category: "Masa Aktif", brand: "INDOSAT", type: "Umum" },
"max": { category: "Masa Aktif", brand: "AXIS", type: "Umum" }, 
"mtr": { category: "Masa Aktif", brand: "TRI", type: "Umum" },
"mxl": { category: "Masa Aktif", brand: "XL", type: "Umum" },
  // Tambahkan alias lainnya jika diperlukan
};
    function handleCustomCommands(groupID, command, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const customResponse = customCommands[groupID][command.toUpperCase()];
        if (customResponse) {
          m.reply(customResponse);
        }
      }
    }

    if (isGroup && !isCmd) {
      const groupID = from;
      const customCommand = body.trim().toLowerCase();
      handleCustomCommands(groupID, customCommand, m.reply);
    }

    function listCustomCommands(groupID, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const commands = Object.keys(customCommands[groupID]);
        if (commands.length > 0) {
          let responseText =
            `┣» *🌟 LAYANAN GRUP 🌟*

┣» _Silahkan Ketik Kode Bercetak Tebal Untuk Menampilkan Harga_
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
┏━━━━━━━━━━━━━━━━━━❍
`;
          commands.forEach((command, index) => {
            responseText += `┣❏ 🛍️ ${command}\n`;
          });
                   responseText += `┗━━━━━━━━━━━━━━━━━━❍

*_${namaStore}_*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`
          m.reply(responseText)
        } else {
          m.reply("Custom Command belum ditambah di group ini");
        }
      } else {
        m.reply("Custom Command belum ditambah di group ini");
      }
    }
//FITUR AFK
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
    if (afk.checkAfkUser(ment, _afk)) {
    let getId2 = afk.getAfkId(ment, _afk)
    let getReason2 = afk.getAfkReason(getId2, _afk)
    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
    let heheh2 = ms(getTimee)
    m.reply(`Jangan tag dia bang, orangnya lagi afk.\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
    }
    }
	if (afk.checkAfkUser(m.sender, _afk)) {
    let getId = afk.getAfkId(m.sender, _afk)
    let getReason = afk.getAfkReason(getId, _afk)
    let getTime = Date.now() - afk.getAfkTime(getId, _afk)
    let heheh = ms(getTime)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./db/afk.json', JSON.stringify(_afk))
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
    }
}    
    switch (command) {
  
      case 'help': {
         
        const capt =
          `━━[ *${namaStore}* ✅ ]━━


『 𝗗𝗔𝗧𝗔 𝗕𝗢𝗧 』

» Bot Name : ${global.botName}
» Owner Name : ${global.ownerName} 

●──────────────
┣» [ *MENU UTAMA* ] ✅
┃» *PRODUK*       
┃» *LIST*    
┃» *ORDER*  
┃» *TPO*   
┃» *DAFTAR*        
┃» *DEPO*
┃» *BUKTI*     
┃» *PROFILE*  
┃» *RIWAYAT*
┃» *CEK*        
┃» *RANK*    
┃» *OWNER*  
┃» *CEKML*
┃» *MLREG*
┃» *CEKFF*  
┃» *CEKPLN*     
●──────────────

●──────────────
┣» [ *MENU OWNER* ] ✅ 
┃» *ADDSALDO*  
┃» *KURANGSALDO*   
┃» *ACCDEPO*      
┃» *UBAHROLE*       
┃» *DAFTARMEMBER*        
┃» *DASHBOARD*   
┃» *GETLAYANAN*  
┃» *PROFIT* 
┃» *DELINV*
●──────────────

●──────────────
┣» [ *MENU GROUP* ] ✅ 
┃» *ADDLIST*      
┃» *DELLIST*      
┃» *PROSES*       
┃» *DONE*        
┃» *LINKGC*   
┃» *HIDETAG*  
┃» *OPEN*  
┃» *CLOSE* 
┃» *JOIN*  
┃» *KICK*    
┃» *ANTILINK*
●──────────────`
        client.sendMessage(m.chat, {
          text: capt,
          contextInfo: {
            externalAdReply: {
              title: `${global.botName}`,
              thumbnailUrl: `${poster1}`,
              sourceUrl: `${linkGC}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, )
      }
      break
         
          
 
            
        

case 'produk' :           
case 'lpo': {
    // Langsung mengembalikan respons format yang diinginkan
    const response = `
┏━━『 *${namaStore}* 』━◧
┣» *🌟 LAYANAN GRUP 🌟*
┣» _Silahkan Ketik *GET* Sebelum Kode Produk_
   » Contoh : *GET ML*

┣» [ *MENU GAME* ]
┃🛍️ *GET ML*        [ MOBILE LEGENDS ]
┃🛍️ *GET WDP*     [ ML WDP ]
┃🛍️ *GET FF*          [ FREE FIRE ]
┃🛍️ *GET PUBG*    [ PUBG MOBILE ]
┃🛍️ *GET CODM*   [ CALL OF DUTY ]
┃🛍️ *GET GI*          [ GENSHIN IMPACT ]
┃🛍️ *GET HSR*      [ HONKAI STAR RAIL ]
┃🛍️ *GET MSA*      [ METAL SLUG ]
┃🛍️ *GET PB*         [ POINT BLANK ]
┃🛍️ *GET AB*         [ ARENA BREAKOUT ]
┃🛍️ *GET VL*         [ VALORANT ]
┃🛍️ *GET ZP*         [ ZEPETO ]
┃🛍️ *GET AOV*      [ ARENA OF VALOR ]
┃🛍️ *GET HOK*      [ HONOR OF KINGS ]
┃🛍️ *GET BLS*       [ BLOOD STRIKE ]

┣» [ *TOKEN LISTRIK* ]
┃🛍️ *GET PLN*    [ TOKEN LISTRIK ]

┣» [ *PULSA REGULER* ]
┃🛍️ *GET PTL*   [ PULSA TSEL]
┃🛍️ *GET PIS*    [ PULSA INDOSAT ]
┃🛍️ *GET PAX*   [ PULSA AXIS ]
┃🛍️ *GET PSM*   [ PULSA SMARTFREN ]
┃🛍️ *GET PTR*   [ PULSA TRI ]
┃🛍️ *GET PXL*   [ PULSA XL ]
┃🛍️ *GET PBY*   [ PULSA by.U ]

┣» [ *PAKET DATA* ]
┃🛍️ *GET TRD*     [ PAKET DATA TRI ]
┃🛍️ *GET XLD*    [ PAKET DATA XL ]
┃🛍️ *GET AXD*   [ PAKET DATA AXIS ]
┃🛍️ *GET ISD*     [ DATA INDOSAT ]

┣» [ *PAKET TELPON & SMS* ]
┃🛍️ *GET TLT*     [ TELP TELKOMSEL ]
┃🛍️ *GET TRT*    [ TELP TRI ]
┃🛍️ *GET IST*     [ TELP INDOSAT ]
┃🛍️ *GET AXT*   [ TELP AXIS ]
┃🛍️ *GET XLT*    [ TELP XL]

┣» [ *MASA AKTIF* ]
┃🛍️ *GET MTL*    [ TELKOMSEL ]
┃🛍️ *GET MAX*   [  AXIS ]
┃🛍️ *GET MIS*     [ INDOSAT ]
┃🛍️ *GET MTR*   [ TRI ]

┣» [ *VOUCHER GAME* ]
┃🛍️ *GET VGP*    [ GOOGLE PLAY ]
┃🛍️ *GET VGS*    [ GARENA ]
┃🛍️ *GET VRZ*    [ RAZER GOLD ]
┃🛍️ *GET VST*    [ STEAM ]
┃🛍️ *GET VUP*    [ UNIPIN ]

┣» [ *TOPUP E-MONEY* ]
┃🛍️ *GET DNA*    [ DANA ]
┃🛍️ *GET GPY*    [ GOPAY ]
┃🛍️ *GET OVO*    [ OVO ]
┃🛍️ *GET SHP*    [ SHOPEE PAY ]
    `;

    // Mengirimkan respons
    m.reply(response);
    return;
}

            
      case 'show':
case 'get': {
  const nomor = sender.split("@")[0];
  console.log('Sender:', sender);
  console.log('User Nomor:', nomor);

  // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(nomor);

  let userDoc;
  try {
    userDoc = await userRef.get();
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
  }

  if (!userDoc.exists) {
    return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
  }

  const userData = userDoc.data();

  // Ambil data produk dari file JSON
  let productData;
  try {
    productData = JSON.parse(fs.readFileSync('./db/datadigi.json', 'utf8'));
  } catch (error) {
    console.error('Error reading product data:', error);
    return m.reply('Terjadi kesalahan saat mengakses data produk. Silakan coba lagi nanti.');
  }

  let aliasKey = args[0] ? args[0].toLowerCase() : null;

  if (!aliasKey || !aliasMap.hasOwnProperty(aliasKey)) {
    return m.reply(`Produk "${aliasKey}" tidak dikenali. Masukkan yang valid.`);
  }

  const { category, brand, type, types } = aliasMap[aliasKey];
  const requestedCategory = category.toUpperCase();
  const requestedBrand = brand.toUpperCase();

  // Filter produk berdasarkan kategori, brand, dan tipe
  let matchingProducts = productData.filter(item =>
    item.brand.toUpperCase() === requestedBrand &&
    item.category.toUpperCase() === requestedCategory &&
    (types ? types.includes(item.type) : item.type.toUpperCase() === type.toUpperCase())
  );

  if (matchingProducts.length === 0) {
    return m.reply(`Tidak ada produk ditemukan untuk Produk "${aliasKey}".`);
  }

  matchingProducts.sort((a, b) => a.price - b.price);

  const configData = require('./db/config.js');
  const defaultMarkupPercentage = configData.defaultMarkupPercentage;

  let formattedResponse = `🛍️ *TOP UP ${requestedCategory} - ${requestedBrand}*\n*Status :* ✅ = Ready\n*Status :* ❌ = Close\n*Order Otomatis Ketik :* TPO PID TUJUAN\n*Order Dengan Saldo Ketik :* TP PID TUJUAN\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  matchingProducts.forEach(product => {
    const originalPrice = parseFloat(product.price);
    let markupPercentage = defaultMarkupPercentage;

    // Ambil markup berdasarkan role pengguna
    if (userData) {
      switch (userData.role) {
        case "GOLD":
          markupPercentage = marginGold;
          break;
        case "SILVER":
          markupPercentage = marginSilver;
          break;
        case "BRONZE":
          markupPercentage = marginBronze;
          break;
        case "OWNER":
          markupPercentage = marginOwner;
          break;
        default:
          break;
      }
    }

    const increasedPrice = originalPrice * (1 + markupPercentage);
    let adjustedPrice;
    
    // Pembulatan harga berdasarkan role pengguna
    if (userData.role === "BRONZE" || userData.role === "OWNER") {
      adjustedPrice = Math.round(increasedPrice / 100) * 100;
    } else if (userData.role === "SILVER" || userData.role === "GOLD") {
      adjustedPrice = Math.floor(increasedPrice);
    } else {
      adjustedPrice = increasedPrice; // Jika role tidak dikenali, gunakan harga asli tanpa pembulatan
    }

    const statusEmoji = product.seller_product_status && product.buyer_product_status ? '✅' : '❌';

    formattedResponse += `\n🛍️ *${product.product_name}*\n*PID :* *\`${product.buyer_sku_code}\`*\n*Harga :* Rp. ${adjustedPrice.toLocaleString()}\n*Status :* ${statusEmoji}\n▰▰▰▰▰▰▰▰▰▰▰▰▰`;
  });

  m.reply(formattedResponse);
}
break;






    
        
      case 'ket':
case 'detail': {
  // Ambil data produk dari file JSON
  let productData;
  try {
    productData = JSON.parse(fs.readFileSync('./db/datadigi.json', 'utf8'));
  } catch (error) {
    console.error('Error reading product data:', error);
    return m.reply('Terjadi kesalahan saat mengakses data produk. Silakan coba lagi nanti.');
  }

  // Ambil alias key dari argumen
  let aliasKey = args[0] ? args[0].toLowerCase() : null;

  if (!aliasKey || !aliasMap.hasOwnProperty(aliasKey)) {
    return m.reply(`Produk "${aliasKey}" tidak dikenali. Masukkan yang valid.`);
  }

  // Ambil detail kategori, brand, tipe, dan tipe lain dari aliasMap
  const { category, brand, type, types } = aliasMap[aliasKey];
  const requestedCategory = category.toUpperCase();
  const requestedBrand = brand.toUpperCase();

  // Filter produk berdasarkan kategori, brand, dan tipe
  let matchingProducts = productData.filter(item =>
    item.brand.toUpperCase() === requestedBrand &&
    item.category.toUpperCase() === requestedCategory &&
    (types ? types.includes(item.type) : item.type.toUpperCase() === type.toUpperCase())
  );

  if (matchingProducts.length === 0) {
    return m.reply(`Tidak ada produk ditemukan untuk Produk "${aliasKey}".`);
  }

  // Mengurutkan produk berdasarkan harga terendah
  matchingProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  // Markup percentages
  const bronzeMarkup = marginBronze;
  const silverMarkup = marginSilver;
  const goldMarkup = marginGold;

  // Fungsi untuk memformat harga
  const formatSaldo = (amount) => `${amount.toLocaleString()}`;

  // Membuat respons terformat
  let formattedResponse = `──〔 *${requestedBrand}* 〕──\n_Perbandingan Harga Setiap Role Reseller_\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  matchingProducts.forEach(product => {
    const originalPrice = parseFloat(product.price);

    const bronzePrice = originalPrice * (1 + bronzeMarkup);
    const silverPrice = originalPrice * (1 + silverMarkup);
    const goldPrice = originalPrice * (1 + goldMarkup);

    const bronze = Math.round(bronzePrice / 100) * 100;
    const silver = Math.floor(silverPrice);
    const gold = Math.floor(goldPrice);

    formattedResponse += `» *${product.product_name}*\n  - *Bronze*: Rp. ${formatSaldo(bronze)}\n  - *Silver*: Rp. ${formatSaldo(silver)}\n  - *Gold*: Rp. ${formatSaldo(gold)}\n\n`;
  });

  m.reply(formattedResponse);
}
break;





  case 'daftarmember': {
  if (!isOwner) return;

  // Ambil data pengguna dari Firestore
  const usersCollection = db.collection('users');
  const usersSnapshot = await usersCollection.get();

  if (usersSnapshot.empty) {
    m.reply('No users found.');
    return;
  }

  const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
  let totalSaldo = 0;
  let totalMembers = 0;
  let userList = '';

  usersSnapshot.forEach(doc => {
    const user = doc.data();
    totalMembers++;
    if (user.nomor !== global.nomerOwner) {
      totalSaldo += user.saldo;
    }
    userList += `» *Nomer :* ${user.nomor}\n`;
    userList += `» *Saldo :* ${formatSaldo(user.saldo)}\n`;
    userList += `» *Role :* ${user.role}\n\n`;
  });

  const header = `───〔 *Daftar Member* 〕──\n\n` +
                 `*Halo Owner :* ${global.ownerName}\n` +
                 `*Total Saldo Member :* ${formatSaldo(totalSaldo)}\n` +
                 `*Total Member Aktif :* ${totalMembers}\n\n*Daftar Member Aktif :*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  const response = header + userList;
  m.reply(response);
}
break;



            
case 'infouser': {
  const commandArgs = m.body.slice(9).trim(); // Mengambil argumen setelah 'infouser '

  // Pengecekan apakah nomor pengguna ada
  const rawUserNumber = commandArgs.trim();
  const userNumber = rawUserNumber.startsWith('@') ? rawUserNumber.slice(1) : rawUserNumber;  // Menghapus simbol @ jika ada

  if (!userNumber) {
    m.reply('Format perintah salah. Gunakan format: infouser <nomor_pengguna>');
    return;
  }

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', userNumber);
  const userSnapshot = await query.get();

  if (userSnapshot.empty) {
    m.reply(`Pengguna dengan nomor ${userNumber} tidak ditemukan.`);
    return;
  }

  // Mendapatkan data pengguna dari snapshot
  let userData = '';
  userSnapshot.forEach(doc => {
    const user = doc.data();
    userData += `───〔 *Info Pengguna* 〕──\n\n`;
    userData += `» *Nomor :* ${user.nomor}\n`;
    userData += `» *Saldo :* Rp. ${user.saldo.toLocaleString()}\n`;
    userData += `» *Role :* ${user.role}`;
  });

  m.reply(userData);
}
break;
case 'deluser': {
  const commandArgs = m.body.slice(8).trim(); // Mengambil argumen setelah 'deluser '

  // Pengecekan apakah nomor pengguna ada
  const rawUserNumber = commandArgs.trim();
  const userNumber = rawUserNumber.startsWith('@') ? rawUserNumber.slice(1) : rawUserNumber;  // Menghapus simbol @ jika ada

  if (!userNumber) {
    m.reply('Format perintah salah. Gunakan format: deluser @tag/nomor');
    return;
  }

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', userNumber);
  const userSnapshot = await query.get();

  if (userSnapshot.empty) {
    m.reply(`Pengguna dengan nomor ${userNumber} tidak ditemukan.`);
    return;
  }

  // Hapus data pengguna dari Firestore
  const batch = db.batch();
  userSnapshot.forEach(doc => {
    batch.delete(doc.ref);
  });

  try {
    await batch.commit();
    m.reply(`Data pengguna dengan nomor ${userNumber} berhasil dihapus.`);
  } catch (error) {
    console.error('Error deleting user:', error);
    m.reply(`Terjadi kesalahan saat menghapus data pengguna.`);
  }
}
break;


case 'uprole': {
  const nomor = sender.split("@")[0]; // Mengambil nomor pengguna dari pengirim perintah

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna (nomor)
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', nomor);
  const userSnapshot = await query.get();
    
    // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(nomor);
    
let userDoc;
  try {
    userDoc = await userRef.get();
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
  }
    
if (!userDoc.exists) {
    return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
  }

  // Mendapatkan data pengguna dari snapshot
  let userData;
  userSnapshot.forEach(doc => {
    userData = doc.data();
  });

  // Jika perintah hanya 'uprole', beri informasi biaya upgrade
  const commandArgs = m.body.slice(7).trim(); // Mengambil argumen setelah 'uprole '
  if (!commandArgs) {
   m.reply('✨ Mau lebih banyak keuntungan? Upgrade role sekarang!\n\n⚪ Ketik *Uprole silver* untuk upgrade ke SILVER hanya dengan Rp 30,000\n🟡 Ketik *Uprole gold* untuk upgrade ke GOLD dengan biaya Rp 50,000\n\nDan dapatkan akses ke layanan super cepat, serta tentunya harga yang jauh lebih murah!\n\nJangan lewatkan kesempatan untuk merasakan layanan terbaik dan keuntungan luar biasa. Bergabunglah menjadi reseller Gempay Topup sekarang juga dan jadilah bagian dari pengguna prioritas yang mendapatkan manfaat maksimal dari setiap transaksi! 🌟');
    return;
  }

  // Jika ada argumen, cek untuk upgrade role
  let upgradeCost = 0;
  let newRole = '';

  switch (commandArgs.toLowerCase()) {
    case 'silver':
      upgradeCost = 30000;
      newRole = 'SILVER';
      break;
    case 'gold':
      upgradeCost = 50000;
      newRole = 'GOLD';
      break;
    default:
      m.reply('Perintah tidak valid. Gunakan "Uprole silver" atau "Uprole gold".');
      return;
  }

  // Mendapatkan saldo pengguna
  const currentBalance = userData.saldo;

  // Pengecekan saldo cukup untuk upgrade
  if (currentBalance < upgradeCost) {
    m.reply(`Saldo Anda tidak mencukupi untuk upgrade ke ${newRole}. Biaya upgrade Rp ${upgradeCost.toLocaleString()}.\n\nSilahkan melakukan deposit saldo dengan cara ketik : Depo ${upgradeCost}`);
    return;
  }

  // Update saldo setelah upgrade
  const newBalance = currentBalance - upgradeCost;

  // Update data pengguna di Firestore
  await usersCollection.doc(userSnapshot.docs[0].id).update({
    saldo: newBalance,
    role: newRole
  });

  // Balas dengan konfirmasi upgrade
  m.reply(`Upgrade ke *Role ${newRole}* berhasil, saldo kamu terpotong sebesar *Rp ${upgradeCost.toLocaleString()}*.\n\nSilahkan ketik *Profil* untuk cek role terbaru`);
}
break;






 case 'kurangsaldo': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiw = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Kurangsaldo Nomor Nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const amountToRemove = parseFloat(args[1]);

  if (isNaN(amountToRemove) || amountToRemove <= 0) {
    return m.reply('Nilai saldo invalid');
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const sebelum = targetUser.saldo;
    const akhir = sebelum - amountToRemove;

    if (akhir < 0) {
      return m.reply('Saldo tidak mencukupi');
    }

    // Update data pengguna di Firestore
    await userRef.update({ saldo: akhir });

    const formatSaldo = (amount) => `${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = new Date().toLocaleTimeString();
    m.reply(`───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terakhir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terakhir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    },);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;


case 'addsaldo': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiw = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Addsaldo Nomor Nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const amountToAdd = parseFloat(args[1]);

  if (isNaN(amountToAdd) || amountToAdd <= 0) {
    return m.reply('Nilai saldo invalid');
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const sebelum = targetUser.saldo;
    const akhir = sebelum + amountToAdd;

    // Update data pengguna di Firestore
    await userRef.update({ saldo: akhir });

    const formatSaldo = (amount) => `${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = new Date().toLocaleTimeString();
    m.reply(`───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, );
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;

            

      case 'regist':
      case 'daftar': {
  const target = sender.split("@")[0];
  let userData = [];
  const db = admin.firestore();
  
  // Mendapatkan data user dari Firestore
  const userRef = db.collection('users').doc(target);
  const doc = await userRef.get();
  
  if (doc.exists) {
    return;
  }

  const defaultRole = 'BRONZE';
  const newUser = {
    nomor: target,
    saldo: 0,
    role: defaultRole,
  };

  // Menyimpan data user ke Firestore
  await userRef.set(newUser);

  return m.reply(`──〔 *REGISTRASI SUKSES* 〕─\n\n*Nomer :* ${target}\n*Saldo Awal :* 0\n*Role :* BRONZE\n\n*_Anda Sudah Bisa Menggunakan Sistem Topup dan Fitur Deposit Saldo Otomatis_*\n\n*_Contoh Penggunaan :_*\n*Order Otomatis Ketik :* TPO PID TUJUAN\n*Deposit Otomatis Ketik :* Depo Nominal`);
}
break;
      case 'ubahrole': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiwi = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Ubahrole Nomor Role*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const newRole = args[1];

  if (!newRole) return;

  if (!['gold', 'silver', 'owner', 'bronze'].includes(newRole.toLowerCase())) {
    return m.reply(`Role ${newRole} belum tersedia\nRole yang tersedia: BRONZE, SILVER, dan GOLD`);
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const awal = targetUser.role;

    // Update data pengguna di Firestore
    await userRef.update({ role: newRole.toUpperCase() });

    m.reply(`───〔 *UPDATE ROLE* 〕──\n\nRole Awal : ${awal}\nRole Baru : ${newRole.toUpperCase()}`);

    const capt = `───〔 *UPDATE ROLE* 〕──\n\nRole Awal : ${awal}\nRole Baru : ${newRole.toUpperCase()}`;

    // Kirim pesan ke target user
    client.sendMessage(kiwi, {
      text: capt,
    });
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;


      case 'profile':
      case 'profil':
case 'saldo': {
  const userNomor = sender.split("@")[0];

  // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(userNomor);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    return m.reply('Silahkan daftar dahulu');
  }

  const userProfile = userDoc.data();

  if (userProfile) {
    const { nomor, saldo, role } = userProfile;
    const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
    const profileMessage = `───〔 *Profile* 〕──\n\n*Username*: ${pushname}\n*Nomor:* ${nomor}\n*Saldo:* ${formatSaldo(saldo)}\n*Role:* ${role}`;
    m.reply(profileMessage);
  }
}
break;

case 'tf': {
  const senderNomor = sender.split("@")[0];

  if (args.length < 2) {
    return m.reply('Format Salah, yang benar : \n*Tf @tag/nomor nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');
  }

  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;
  const amountToTransfer = parseFloat(args[1]);

  if (isNaN(amountToTransfer) || amountToTransfer <= 0) {
    return m.reply('Nilai transfer invalid');
  }

  try {
    // Ambil data pengguna pengirim dari Firestore
    const senderRef = db.collection('users').doc(senderNomor);
    const senderDoc = await senderRef.get();

    if (!senderDoc.exists) {
      return m.reply('Anda belum terdaftar');
    }

    const senderUser = senderDoc.data();
    const saldoPengirim = senderUser.saldo;

    if (saldoPengirim < amountToTransfer) {
      return m.reply('Saldo tidak mencukupi untuk melakukan transfer');
    }

    // Ambil data pengguna penerima dari Firestore
    const targetRef = db.collection('users').doc(target);
    const targetDoc = await targetRef.get();

    if (!targetDoc.exists) {
      return m.reply(`Nomor tujuan ${target} belum terdaftar`);
    }

    const targetUser = targetDoc.data();
    const saldoPenerima = targetUser.saldo;
    const saldoPengirimAkhir = saldoPengirim - amountToTransfer;
    const saldoPenerimaAkhir = saldoPenerima + amountToTransfer;

    // Update data pengguna pengirim dan penerima di Firestore
    await senderRef.update({ saldo: saldoPengirimAkhir });
    await targetRef.update({ saldo: saldoPenerimaAkhir });

    const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss');

    m.reply(`──〔 *Transfer Saldo Berhasil* 〕──\n\n*Dari Nomor :* ${senderNomor}\n*Ke Nomor :* ${target}\n*Jumlah Transfer :* Rp. ${formatSaldo(amountToTransfer)}\n*Saldo Sekarang :* Rp. ${formatSaldo(saldoPengirimAkhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Saldo Masuk* 〕──\n\n*Dari Nomor :* ${senderNomor}\n*Jumlah :* Rp. ${formatSaldo(amountToTransfer)}\n*Saldo Sekarang :* Rp. ${formatSaldo(saldoPenerimaAkhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    const kiw = `${target}@s.whatsapp.net`;
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;

 
case 'rank': {
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));

  // Create a map to store product sales data
  const productSales = new Map();

  // Populate the productSales map
  transactionsData.forEach((trx) => {
    const productName = trx.item;
    const quantity = trx.quantity || 1; // Assuming quantity is 1 if not specified
    const totalAmount = trx.harga * quantity;

    if (!productSales.has(productName)) {
      productSales.set(productName, { quantity: 0, totalAmount: 0 });
    }

    productSales.get(productName).quantity += quantity;
    productSales.get(productName).totalAmount += totalAmount;
  });

  // Sort products by total quantity sold
  const rankedProducts = [...productSales.entries()]
    .sort((a, b) => b[1].quantity - a[1].quantity);

  // Create the response message
  let responseMessage = `◧━━ *🛍️${namaStore}🛍️* ━━◧\n🏆 *RANKING PRODUK*\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  rankedProducts.forEach((entry, index) => {
    const productName = entry[0];
    const quantity = entry[1].quantity;
    const totalAmount = entry[1].totalAmount;

    responseMessage += `\n*#Rank ${index + 1}*\nProduk: ${productName}\nJumlah Dibeli: ${quantity}\nTotal: Rp ${totalAmount.toLocaleString()}\n`;
  });

  m.reply(responseMessage);
  break;
}
            
            

case 'depom': {
    const paymentDepo = paymentKamu;
    const randomId = Math.floor(10000000 + Math.random() * 90000000);
    const depoCommand = m.text.split(' ');
    const isValidInput = depoCommand.length > 1 && /^\d+$/.test(depoCommand[1]);

    if (!isValidInput) {
        m.reply(`Format Salah atau Nominal Harus Angka\nFormat benar : \`\`\`Depo [Nominal]\`\`\`\n\`\`\`Contoh : Depo 1000\`\`\``);
        return;
    }

    const minimalNominal = 1000;
    const nominal = parseInt(depoCommand[1]);

    if (nominal < minimalNominal) {
        m.reply(`Nominal harus minimal ${minimalNominal}\nFormat benar : \`\`\`Depo [Nominal]\`\`\`\n\`\`\`Contoh : Depo 1000\`\`\``);
        return;
    }

    const biayaLayanan = nominal * 0.007;
    const saldoDiterima = nominal - biayaLayanan;
    const memberNumber = m.sender.split('@')[0];

    const depoData = {
        id: randomId,
        member: memberNumber,
        nominal: nominal,
        biayaLayanan: biayaLayanan,
        saldoDiterima: saldoDiterima,
        tanggal: new Date().toISOString(),
    };

    // Path file riwayat depo yang sudah ada
    const filePath = path.join(__dirname, 'db', 'riwayatdepo.json');

    let riwayatDepo = [];

    // Baca data yang sudah ada jika file riwayatdepo.json ada
    if (fs.existsSync(filePath)) {
        const existingData = fs.readFileSync(filePath, 'utf8');
        riwayatDepo = JSON.parse(existingData);
    }

    // Tambahkan data baru ke riwayat
    riwayatDepo.push(depoData);

    // Tulis kembali data ke file riwayatdepo.json
    fs.writeFileSync(filePath, JSON.stringify(riwayatDepo, null, 2));

    const formattedNominal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(nominal);
    const formattedBiayaLayanan = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(biayaLayanan);
    const formattedSaldoDiterima = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(saldoDiterima);

    let depositInfo = `[ *INFORMASI DEPOSIT* ]\n\n`;
    depositInfo += `*» ID :* ${randomId}\n`;
    depositInfo += `*» Member :* ${memberNumber}\n`;
    depositInfo += `*» Jumlah Bayar :* ${formattedNominal}\n`;
    depositInfo += `*» PAYMENT :*\n${paymentDepo}\n\n`;

    depositInfo += `_Silahkan transfer ke pembayaran yang disediakan dan kirimkan bukti transfer ke Admin dengan cara ketik *BUKTI ID*_\n*ID = ID DEPOSIT KAMU YA*\n\n`;
    depositInfo += `*_${namaStore}_*`;

    client.sendMessage(m.chat, { image: { url: linkQRIS }, caption: depositInfo }, { quoted: m });

    break;
}
            
 case 'pay':           
 case 'payment': {
    const capt = `${paymentKamu}`;
    client.sendMessage(m.chat, { image: { url: linkQRIS }, caption: capt }, { quoted: m });
    break;
}           
            
  case 'deposit':          
case 'depo': {
  const _0x1206a6=_0x10a2;(function(_0x45e4d1,_0x4f81cc){const _0x15646c=_0x10a2,_0x37b2c0=_0x45e4d1();while(!![]){try{const _0x26f2e1=-parseInt(_0x15646c(0xf5))/0x1+-parseInt(_0x15646c(0xea))/0x2*(-parseInt(_0x15646c(0xf6))/0x3)+parseInt(_0x15646c(0x122))/0x4+parseInt(_0x15646c(0xeb))/0x5*(parseInt(_0x15646c(0x101))/0x6)+parseInt(_0x15646c(0xef))/0x7*(-parseInt(_0x15646c(0x11b))/0x8)+-parseInt(_0x15646c(0xe5))/0x9*(-parseInt(_0x15646c(0x115))/0xa)+-parseInt(_0x15646c(0xde))/0xb;if(_0x26f2e1===_0x4f81cc)break;else _0x37b2c0['push'](_0x37b2c0['shift']());}catch(_0x3eb14b){_0x37b2c0['push'](_0x37b2c0['shift']());}}}(_0x2c11,0x7d275));function _0x10a2(_0x5e07c1,_0x3aaac7){const _0x2c1132=_0x2c11();return _0x10a2=function(_0x10a293,_0x245f47){_0x10a293=_0x10a293-0xdc;let _0x5a1e83=_0x2c1132[_0x10a293];return _0x5a1e83;},_0x10a2(_0x5e07c1,_0x3aaac7);}const nomor=sender[_0x1206a6(0x11f)]('@')[0x0],userRef=db[_0x1206a6(0xf9)](_0x1206a6(0xfd))['doc'](nomor),userDoc=await userRef[_0x1206a6(0x102)]();if(!userDoc['exists'])return m['reply'](_0x1206a6(0xf7));const ref_id=generateUniqueRefID(),apiUrl=_0x1206a6(0x119),jumlah=parseInt(args[0x0]);if(!jumlah||isNaN(jumlah)||jumlah<=0x63)return m['reply'](_0x1206a6(0x121));const formatSaldo=_0x226fad=>''+_0x226fad['toLocaleString'](),apiKey=''+APIKEY_PAYDISINI,service='11',valid_time='300',signatureString=''+apiKey+ref_id+service+jumlah+valid_time+'NewTransaction',signature=md5(signatureString),requestData={'key':apiKey,'request':_0x1206a6(0x114),'unique_code':ref_id,'service':service,'amount':jumlah,'note':_0x1206a6(0xf8),'valid_time':valid_time,'type_fee':'1','signature':signature},pendingDeposits=await db[_0x1206a6(0xf9)](_0x1206a6(0x113))[_0x1206a6(0xe2)]('nomor','==',nomor)[_0x1206a6(0xe2)](_0x1206a6(0xee),'==',_0x1206a6(0xdf))['get']();function _0x2c11(){const _0x1e891e=['4343705TiaDal','\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Deposit\x20di\x20cek\x20otomatis\x20dan\x20akan\x20langsung\x20masuk\x20ke\x20saldo\x20kamu,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat','──〔\x20*DETAIL\x20DEPOSIT*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','status','284655fhLWJa','application/x-www-form-urlencoded','Success','createLinearGradient','\x0a*»\x20Username\x20Deposit\x20:*\x20','sendMessage','61216oPDzoc','3ZdwEkY','Kamu\x20belum\x20terdaftar,\x20silahkan\x20ketik\x20*Daftar*','Pembayaran\x20pertama','collection','getContext','qr_content','balance','users','\x0a*»\x20Jumlah\x20Deposit\x20:*\x20','doc','#0060D4','6EYzyEI','get','data','Invalid\x20status\x20response:','msg','getImageData','\x0a*»\x20Waktu\x20:*\x20','amount','Maaf,\x20kamu\x20sudah\x20memiliki\x20deposit\x20yang\x20sedang\x20diproses...','addColorStop','toString','\x0a*»\x20Jumlah\x20Diterima\x20:*\x20Rp\x20','chat','json','reply','fillRect','Status\x20request\x20failed\x20with\x20status\x20','botName','deposits','new','9085530YARYzy','Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20deposit.','toBuffer','──〔\x20*DEPOSIT\x20SUKSES\x20!*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','https://paydisini.co.id/api/','POST','112HMOwIF','#FFFFFF','Terjadi\x20kesalahan\x20pada\x20server.','toCanvas','split','getTime','Format\x20yang\x20benar\x20adalah:\x20*Depo\x20Nominal*\x0aContoh:\x20*Depo\x2010000*\x0a\x0aMinimum\x20deposit\x20adalah\x20100.\x20\x0aNilai\x20deposit\x20tidak\x20boleh\x20mengandung\x20titik\x20atau\x20koma,\x20hanya\x20angka.','3853308elUErO','set','error','\x0a*»\x20Jumlah\x20Bayar\x20:*\x20Rp\x20','22271568PwGHDp','pending','──〔\x20*DEPOSIT\x20GAGAL*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','fillStyle','where','update','Gagal\x20membuat\x20transaksi:\x20','9rHYYGQ','success','*\x20telah\x20ditambah\x20ke\x20akun\x20kamu\x0a\x0a©\x20_','delete','length','854444HAavdp'];_0x2c11=function(){return _0x1e891e;};return _0x2c11();}if(!pendingDeposits['empty'])return m['reply'](_0x1206a6(0x109));const depoRef=db['collection'](_0x1206a6(0x113))[_0x1206a6(0xff)](ref_id);await depoRef[_0x1206a6(0x123)]({'nomor':nomor,'amount_requested':jumlah,'status':'pending'});async function processDeposit(){const _0x458330=_0x1206a6;try{const _0xd1ce3=await fetch(apiUrl,{'method':_0x458330(0x11a),'headers':{'Content-Type':_0x458330(0xf0)},'body':new URLSearchParams(requestData)[_0x458330(0x10b)]()}),_0x25a9bb=await _0xd1ce3[_0x458330(0x10e)]();if(_0x25a9bb[_0x458330(0xe6)]){const _0x3844ab=_0x25a9bb['data'][_0x458330(0xfb)],_0x2b55bd=0x1f4,_0x1a2cc0=createCanvas(_0x2b55bd,_0x2b55bd),_0x28654c=_0x1a2cc0[_0x458330(0xfa)]('2d');await QRCode[_0x458330(0x11e)](_0x1a2cc0,_0x3844ab,{'errorCorrectionLevel':'H','margin':0x1,'width':_0x2b55bd});const _0x53f40c=_0x28654c[_0x458330(0x106)](0x0,0x0,_0x2b55bd,_0x2b55bd),_0xb95147=_0x53f40c[_0x458330(0x103)][_0x458330(0xe9)],_0xdc8bf9=_0x28654c[_0x458330(0xf2)](0x0,0x0,_0x2b55bd,_0x2b55bd);_0xdc8bf9[_0x458330(0x10a)](0x0,'#0B1D33'),_0xdc8bf9[_0x458330(0x10a)](0x1,_0x458330(0x100)),_0x28654c['fillStyle']=_0x458330(0x11c),_0x28654c['fillRect'](0x0,0x0,_0x2b55bd,_0x2b55bd);for(let _0x39b9db=0x0;_0x39b9db<_0xb95147;_0x39b9db+=0x4){if(_0x53f40c[_0x458330(0x103)][_0x39b9db]<0x80){const _0x3bafe2=_0x39b9db/0x4%_0x2b55bd,_0xc761cf=Math['floor'](_0x39b9db/0x4/_0x2b55bd);_0x28654c[_0x458330(0xe1)]=_0xdc8bf9,_0x28654c[_0x458330(0x110)](_0x3bafe2,_0xc761cf,0x1,0x1);}}const _0x3fd7b4=_0x1a2cc0[_0x458330(0x117)](),_0x1aed61=_0x458330(0xed)+ref_id+_0x458330(0xf3)+pushname+_0x458330(0xdd)+formatSaldo(_0x25a9bb[_0x458330(0x103)][_0x458330(0x108)])+_0x458330(0x10c)+formatSaldo(_0x25a9bb[_0x458330(0x103)]['balance'])+_0x458330(0xec);client[_0x458330(0xf4)](m[_0x458330(0x10d)],{'image':_0x3fd7b4,'caption':_0x1aed61},{'quoted':m});let _0x526000=_0x25a9bb[_0x458330(0x103)][_0x458330(0xee)];const _0x119630=new Date()['getTime']();while(_0x526000!==_0x458330(0xf1)){await sleep(0x3e8);const _0x55d04b=''+apiKey+ref_id+'StatusTransaction',_0x2a9ddf=md5(_0x55d04b),_0x5aa9fd={'key':apiKey,'request':_0x458330(0xee),'unique_code':ref_id,'signature':_0x2a9ddf},_0x1457f4=await fetch(apiUrl,{'method':_0x458330(0x11a),'headers':{'Content-Type':_0x458330(0xf0)},'body':new URLSearchParams(_0x5aa9fd)[_0x458330(0x10b)]()});if(!_0x1457f4['ok']){console[_0x458330(0xdc)](_0x458330(0x111)+_0x1457f4[_0x458330(0xee)]),m[_0x458330(0x10f)](_0x458330(0x116)),await depoRef[_0x458330(0xe8)]();break;}const _0x24e13b=await _0x1457f4[_0x458330(0x10e)]();if(!_0x24e13b[_0x458330(0x103)]){console['error'](_0x458330(0x104),_0x24e13b),m[_0x458330(0x10f)]('Terjadi\x20kesalahan\x20pada\x20server.'),await depoRef['delete']();break;}_0x526000=_0x24e13b[_0x458330(0x103)][_0x458330(0xee)],console['log'](_0x526000);const _0x5a4702=new Date()[_0x458330(0x120)](),_0x24e71e=(_0x5a4702-_0x119630)/0x3e8;if(_0x24e71e>=0x12c){m[_0x458330(0x10f)](_0x458330(0xe0)+ref_id+'\x0a*»\x20Username\x20Deposit\x20:*\x20'+pushname+_0x458330(0xfe)+formatSaldo(_0x24e13b['data']['balance'])+'\x0a\x0a*Status\x20:\x20TIME\x20OUT*\x0a\x0aSesi\x20deposit\x20expired,\x20silahkan\x20deposit\x20ulang'),await depoRef[_0x458330(0xe8)]();break;}if(_0x526000===_0x458330(0xf1)){const _0x2adb97=parseInt(_0x24e13b[_0x458330(0x103)][_0x458330(0xfc)]),_0x16b044=_0x458330(0x118)+ref_id+'\x0a*»\x20Nomer\x20User\x20:*\x20'+nomor+_0x458330(0x107)+hariini+'*\x0a*»\x20Jam\x20:'+time1+'\x20WIB*\x0a\x0a*Status\x20:\x20'+_0x24e13b['data'][_0x458330(0xee)]+'*\x0a\x0aSaldo\x20sebesar\x20*'+formatSaldo(_0x24e13b[_0x458330(0x103)]['balance'])+_0x458330(0xe7)+global[_0x458330(0x112)]+'_';m[_0x458330(0x10f)](_0x16b044);const _0x16930b=await userRef[_0x458330(0x102)](),_0x861384=parseInt(_0x16930b['data']()['saldo'])+_0x2adb97;await userRef[_0x458330(0xe3)]({'saldo':_0x861384}),await depoRef[_0x458330(0xe8)]();break;}}}else m[_0x458330(0x10f)](_0x458330(0xe4)+_0x25a9bb[_0x458330(0x105)]),await depoRef['delete']();}catch(_0x36aade){console[_0x458330(0xdc)](_0x36aade),m[_0x458330(0x10f)](_0x458330(0x11d)),await depoRef['delete']();}}processDeposit();
}
break;







    


















case 'bukti': {
    const commandParts = m.text.split(' ');
    const idDeposit = commandParts[1];

    // Memastikan ID deposit diberikan
    if (!idDeposit) {
        m.reply('Anda harus memberikan ID deposit untuk mengirim bukti.\nFormat: `Bukti IDdeposit`');
        return;
    }

    const depositPath = path.join(__dirname, 'db', 'riwayatdepo.json');

    if (!fs.existsSync(depositPath)) {
        m.reply('Tidak ada riwayat deposit.');
        return;
    }

    // Membaca data dari file riwayatdepo.json
    const riwayatDepo = JSON.parse(fs.readFileSync(depositPath, 'utf8'));
    const deposit = riwayatDepo.find(item => item.id === parseInt(idDeposit));

    if (!deposit) {
        m.reply('ID deposit tidak ditemukan. Pastikan ID yang Anda masukkan sudah benar.');
        return;
    }

    // Memeriksa apakah pesan berisi gambar
    const isImage = m.mtype === 'imageMessage';
    const isQuotedImage = m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;

    if (!isImage && !isQuotedImage) {
        m.reply('Silakan kirim gambar dengan caption *#bukti* atau tag gambar yang sudah dikirim dengan caption *#bukti*.');
        return;
    }

    // Mengunduh dan menyimpan gambar
    const media = isImage ? m : m.message.extendedTextMessage.contextInfo.quotedMessage;
    const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}`);
     const buktiimage = `${buktiPath}.jpg`;

    await client.downloadAndSaveMediaMessage(media, buktiPath).catch(err => {
        console.error('Gagal mendownload media:', err);
        m.reply('Terjadi kesalahan saat mendownload bukti transfer. Silakan coba lagi.');
        return;
    });


    // Mengirim gambar bukti ke owner
    const caption_bukti = `
*INFO-DEPOSIT*
*ID Deposit:* ${deposit.id}
*Nomor Member:* ${deposit.member}
*Nominal:* Rp${deposit.nominal}
*Hari:* ${hariini}
*Jam:* ${time1} WIB

Mohon periksa dan konfirmasi.
`;

    const bukti_bayar = {
        image: fs.readFileSync(buktiimage),
        caption: caption_bukti,
    };

    const ownerChat = 'owner-chat-id';  // Ganti dengan ID chat owner
    await client.sendMessage(owned, bukti_bayar);

    // Memberi tahu pengguna bahwa bukti telah diterima
    m.reply('Terimakasih... Bukti transfer telah diterima. Mohon tunggu konfirmasi dari admin.');

    // Menghapus gambar setelah dikirim untuk keamanan
    fs.unlinkSync(buktiimage);

    break;
}

case 'accdepo': {
    if (!isOwner) return;
    const commandParts = m.text.split(' ');
    const idDeposit = parseInt(commandParts[1]);
    const decision = commandParts[2];

    if (isNaN(idDeposit)) {
        m.reply('ID deposit harus berupa angka.');
        return;
    }

    const depositPath = path.join(__dirname, 'db', 'riwayatdepo.json');

    if (!fs.existsSync(depositPath)) {
        m.reply('Tidak ada data deposit.');
        return;
    }

    let riwayatDepo = JSON.parse(fs.readFileSync(depositPath, 'utf8'));
    const depositIndex = riwayatDepo.findIndex(item => item.id === idDeposit);

    if (depositIndex === -1) {
        m.reply('ID deposit tidak ditemukan.');
        return;
    }

    const deposit = riwayatDepo[depositIndex];
    const userNumber = deposit.member + '@s.whatsapp.net';

    // Jika keputusan adalah "n", kirim pesan bahwa deposit ditolak
    if (decision === 'n') {
        client.sendMessage(userNumber, { text: `Maaf... Deposit dengan ID ${idDeposit} ditolak. Bukti transfer tidak valid. Silakan coba lagi.` });

        // Hapus data deposit dan bukti transfer
        riwayatDepo.splice(depositIndex, 1);
        fs.writeFileSync(depositPath, JSON.stringify(riwayatDepo, null, 2));

        const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}.jpg`);
        if (fs.existsSync(buktiPath)) {
            fs.unlinkSync(buktiPath);
        }

        m.reply(`Status deposit dengan ID ${idDeposit} telah ditolak.`);
        return;
    }

    // Jika keputusan adalah "y", tambahkan saldo ke akun pengguna
    if (decision === 'y') {
        const nominal = deposit.nominal;

        // Update saldo pengguna
        const userRef = db.collection('users').doc(deposit.member);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            m.reply(`Pengguna dengan nomor ${deposit.member} tidak ditemukan.`);
            return;
        }

        const targetUser = userDoc.data();
        const saldoSebelum = targetUser.saldo;
        const saldoSesudah = saldoSebelum + nominal;

        // Update saldo pengguna di Firestore
        await userRef.update({ saldo: saldoSesudah });

        // Kirim pesan ke pengguna tentang saldo yang ditambahkan
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const message = `Terimakasih... Saldo Anda telah diperbarui.\n*Saldo Terkini:* ${formatSaldo(saldoSesudah)}\n*Waktu:* ${new Date().toLocaleString()}`;

        client.sendMessage(userNumber, { text: message });

        // Hapus data deposit dan bukti transfer
        riwayatDepo.splice(depositIndex, 1);
        fs.writeFileSync(depositPath, JSON.stringify(riwayatDepo, null, 2));

        const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}.jpg`);
        if (fs.existsSync(buktiPath)) {
            fs.unlinkSync(buktiPath);
        }

        m.reply(`Status deposit dengan ID ${idDeposit} telah berhasil. Saldo pengguna telah diperbarui.`);
        return;
    }

    m.reply('Format perintah salah. Gunakan: `accdepo IDdeposit y` untuk menyetujui atau `accdepo IDdeposit n` untuk menolak.');
    break;
}


            
         
      case 'tp':
case 'order': {

  const nomor = sender.split("@")[0];
  const userDoc = await firestore.collection('users').doc(nomor).get();
  const userProfile = userDoc.data();
const userData = userDoc.data();
    
    // Menambahkan pemeriksaan format perintah di awal
  if (args.length < 2) {
    return m.reply(`Format Salah\n\nPetunjuk Penggunaan:\n\nUntuk produk Free Fire : \nFormat Order : *TP PID ID*\nContoh : *TP GPFF5 12345678*\n\nUntuk produk Mobile Legends : \nFormat Order : *TP PID ID SERVER*\nContoh : *TP GPML5 12345678 1234*\n\nUntuk produk lainnya: \nFormat Order : *TP PID TUJUAN*\nContoh : *TP TSEL5 085237859745*`);
  }
    
  if (!userProfile) {
    return m.reply(`Kamu belum terdaftar, silahkan ketik : *Daftar* untuk bisa mengakses.`);
  }

  // Cek waktu pemesanan terakhir
  const lastOrderTime = userProfile.lastOrderTime ? userProfile.lastOrderTime.toDate() : null;
  const currentTime = new Date();
  
  if (lastOrderTime && (currentTime - lastOrderTime) < 5000) { // 5000 ms = 5 detik
    return m.reply(`Harap tunggu 5 detik sebelum melakukan pemesanan lagi.`);
  }

  // Update waktu pemesanan terakhir
  userProfile.lastOrderTime = currentTime;
  await firestore.collection('users').doc(nomor).set(userProfile);

  const buyer_sku_code = args[0];
  const lowerCaseSkuCode = buyer_sku_code.toLowerCase();
  const isMobileLegends = lowerCaseSkuCode.includes("ml") || lowerCaseSkuCode.includes("wdp") || lowerCaseSkuCode.includes("wp"); // Cek apakah produk ML
  const isFreeFire = buyer_sku_code.toLowerCase().includes("ff"); // Cek apakah produk FF

  let customer_no; // Menyimpan tujuan, ID, atau ZoneID
  let customer_no2;
  let nickname; // Untuk menyimpan nickname ML/FF jika ada

  if (isMobileLegends) {
    // Untuk ML, format "TP KODEPRODUK ID ZONEID"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID SERVER*\nOrder Dengan Saldo : *TP PID ID SERVER*`);
    }
      
    if (args.length < 3) {
     return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID SERVER*\nOrder Dengan Saldo : *TP PID ID SERVER*`);
    }

    const id = args[1];
    const zone_id = args[2];
    customer_no = `${id}${zone_id}`;
    const { stalkml } = require("./lib/stalk-ml.js");

    const nicknameCheck = await stalkml(id, zone_id);

    if (nicknameCheck.status !== 200) { // Jika ID atau ZoneID tidak ditemukan
      return m.reply(`ID atau Server yang kamu masukkan tidak ditemukan. Coba lagi.`);
    }

    nickname = nicknameCheck.nickname; // Simpan nickname ML
  } else if (isFreeFire) {
    // Untuk FF, format "TP KODEPRODUK ID"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID*\nOrder Dengan Saldo : *TP PID ID*`);
    }

    const id = args[1];
    customer_no = id;
    customer_no2 = id;

    const { stalkff } = require("./lib/stalk-ff.js");

    const nicknameCheck = await stalkff(id);

    if (nicknameCheck.status !== 200) { // Jika ID FF tidak ditemukan
      return m.reply(`ID Free Fire yang kamu masukkan tidak ditemukan. Coba lagi.`);
    }

    nickname = nicknameCheck.nickname; // Simpan nickname FF
  } else {
    // Untuk produk non-ML dan non-FF, format "TP KODEPRODUK TUJUAN"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar adalah : \nOrder Otomatis : *TPO PID TUJUAN*\nOrder Dengan Saldo : *TP PID TUJUAN*`);
    }

    customer_no = args[1]; // Tujuan untuk produk non-ML dan non-FF
  }
     
  if (args.length < 1) {
    return m.reply(`Format Salah\nFormat yang benar adalah : \`\`\`TP KODEPRODUK TUJUAN\`\`\`\nContoh : TP PLN20 265382928`);
  }

  const productData = JSON.parse(fs.readFileSync("./db/datadigi.json", "utf8"));
  const product = productData.find(
    (prod) => prod.buyer_sku_code.toLowerCase() === buyer_sku_code.toLowerCase()
  );

  if (!product) {
    return m.reply(`Layanan ${buyer_sku_code} tidak ditemukan.`);
  }

  const originalPrice = parseFloat(product.price);
  let markupPercentage = defaultMarkupPercentage; // Marginal default

  // Hitung harga berdasarkan peran pengguna
  const userRole = userProfile.role;
  if (userRole) {
    if (userRole === "GOLD") {
      markupPercentage = marginGold;
    } else if (userRole === "SILVER") {
      markupPercentage = marginSilver;
    } else if (userRole === "BRONZE") {
      markupPercentage = marginBronze;
    } else if (userRole === "OWNER") {
      markupPercentage = marginOwner; // Tidak ada markup untuk owner
    }
  }

  const increasedPrice = originalPrice * (1 + markupPercentage);
    let adjustedPrice;
    
    // Pembulatan harga berdasarkan role pengguna
    if (userProfile.role === "BRONZE" || userProfile.role === "OWNER") {
      adjustedPrice = Math.round(increasedPrice / 100) * 100;
    } else if (userProfile.role === "SILVER" || userProfile.role === "GOLD") {
      adjustedPrice = Math.floor(increasedPrice);
    } else {
      adjustedPrice = increasedPrice; // Jika role tidak dikenali, gunakan harga asli tanpa pembulatan
    }

  if (userProfile.saldo < adjustedPrice) {
    return m.reply(`Maaf saldo kamu tidak cukup untuk melakukan transaksi ${product.product_name}.\n\nSilahkan melakukan deposit saldo dengan cara ketik : Depo Nominal`);
  }

  userProfile.saldo -= adjustedPrice; // Kurangi saldo pengguna
  await firestore.collection("users").doc(nomor).set(Object.assign({}, userProfile));

  const ref_id = generateUniqueRefID();
  const signature = crypto.createHash("md5").update(username + apiKey + ref_id).digest("hex");
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      buyer_sku_code: buyer_sku_code,
      customer_no: customer_no, // Sesuai dengan apakah ML, FF, atau produk lainnya
      ref_id: ref_id,
      sign: signature,
    }),
  };

  const response = await fetch("https://api.digiflazz.com/v1/transaction", config);
  const data = await response.json();

  m.reply(`*_Pesanan Kamu Sedang Diproses Otomatis Oleh Sistem, Harap Menunggu..._*`);

  let dataStatus = data.data.status;

  while (dataStatus !== "Sukses") {
    await sleep(1000);
    const retryResponse = await fetch("https://api.digiflazz.com/v1/transaction", config);
    const retryData = await retryResponse.json();
    dataStatus = retryData.data.status;

    if (dataStatus === "Gagal") {
      let capt;

      if (isMobileLegends && nickname) { // Respons untuk ML
        capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      } else if (isFreeFire && nickname) { // Respons untuk FF
        capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      } else { // Respons untuk produk non-ML dan non-FF
       capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      }
	
      m.reply(capt);
      userProfile.saldo += adjustedPrice; // Kembalikan saldo jika transaksi gagal
      await firestore.collection("users").doc(nomor).set(Object.assign({}, userProfile));

      // Simpan riwayat transaksi
      let transactions = [];
      if (fs.existsSync("./db/trx.json")) {
        const rawData = fs.readFileSync("./db/trx.json", "utf8");
        transactions = JSON.parse(rawData);
      }

      const newTransaction = {
        nomor: nomor,
        status: retryData.data.status,
        invoice: retryData.data.ref_id,
        item: product.product_name,
        rc: retryData.data.rc,
        tujuan: customer_no,
        harga: adjustedPrice,
        harga_pokok: originalPrice,
        waktu: `${time1} | ${hariini}`,
      };

      transactions.push(newTransaction);

      fs.writeFileSync(
        "./db/trx.json",
        JSON.stringify(transactions, null, 2)
      );

       const toOwn = `*TRANSAKSI GAGAL ⚠️*\n\n*» Nama :* ${pushname}\n*» Nomor :* ${m.sender.split("@")[0]}\n» *Produk :* ${product.product_name}\n» *Tujuan : ${customer_no}*\n\n_Harap Periksa Masalah Pada Pembelian_`; 
        
        // Mengirim pesan kepada pemilik tanpa delay
client.sendMessage(owned, {
  text: toOwn,
});
      break;
    } else if (dataStatus === "Sukses") {
      // Contoh data invoice
      const data = {
        invoice: retryData.data.ref_id,
        product: product.product_name,
        tujuan: customer_no,
        nickname: nickname,  
        harga: adjustedPrice,
        waktu: `${hariini}`,
        sn: retryData.data.sn,
      };

      const backgroundPath = path.join(__dirname, "assets", "BG.png"); // Path ke latar belakang
      const logoPath = `${linkLOGO}`; // Path ke logo

      generateInvoiceWithBackground(data, backgroundPath, logoPath).then((invoicePath) => {
        if (fs.existsSync(invoicePath)) {
          let capt;
          if (isMobileLegends && nickname) { // Respons untuk ML
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else if (isFreeFire && nickname) { // Respons untuk FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else { // Respons untuk produk non-ML dan non-FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          }
          // Kirim gambar invoice dengan latar belakang
          const imageMessage = {
            image: { url: invoicePath },
            caption: capt,
            quoted: m  
          };

          client.sendMessage(m.chat, imageMessage).then(() => {
      // Hapus file invoice setelah berhasil terkirim
      fs.unlinkSync(invoicePath);
    }).catch((err) => {
      console.error("Gagal mengirim gambar:", err);
    });
        } else {
          let capt;
          if (isMobileLegends && nickname) { // Respons untuk ML
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else if (isFreeFire && nickname) { // Respons untuk FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else { // Respons untuk produk non-ML dan non-FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          }
          m.reply(capt);
        }
      });

      let transactions = [];
      if (fs.existsSync("./db/trx.json")) {
        const rawData = fs.readFileSync("./db/trx.json", "utf8");
        transactions = JSON.parse(rawData);
      }
      const newTransaction = {
        nomor: nomor,
        status: retryData.data.status,
        invoice: retryData.data.ref_id,
        item: product.product_name,
        rc: retryData.data.rc,
        tujuan: customer_no,
        harga: adjustedPrice,
        harga_pokok: originalPrice,
        waktu: `${time1} | ${hariini}`,
      };
      transactions.push(newTransaction);
      fs.writeFileSync(
        "./db/trx.json",
        JSON.stringify(transactions, null, 2)
      );
      const toUser = `Kamu telah melakukan Pembelian *${product.product_name}*\n\n*» Jam* : ${time1} WIB\n*» Harga :* Rp ${adjustedPrice.toLocaleString()}\n*» Sisa Saldo :* Rp ${userProfile.saldo.toLocaleString()}\n\n*${namaStore}*`;
const profit = adjustedPrice - originalPrice; // Menghitung keuntungan
const toOwn = `*Report Transaksi*\n\n*» Nama :* ${pushname}\n*» Nomor :* ${m.sender.split("@")[0]}\n*» Harga Jual :* ${adjustedPrice}\n*» Harga Pokok :* ${originalPrice}\n*» Keuntungan :* ${profit}\n*» Jam:* ${time1} WIB\n» *Produk :* ${product.product_name}\n» *Tujuan : ${customer_no}*`;

// Mengirim pesan kepada user dengan delay 5 detik
setTimeout(() => {
  client.sendMessage(sender, {
    text: toUser,
  });
}, 5000);

// Mengirim pesan kepada pemilik tanpa delay
client.sendMessage(owned, {
  text: toOwn,
});
      break;
    }
  }
}
break;


case 'tpo': {
  const _0x23de3a=_0x4245;(function(_0x435aca,_0x527334){const _0x2d6756=_0x4245,_0x4dcb42=_0x435aca();while(!![]){try{const _0x57c809=-parseInt(_0x2d6756(0x143))/0x1+-parseInt(_0x2d6756(0x132))/0x2+-parseInt(_0x2d6756(0x189))/0x3+parseInt(_0x2d6756(0x193))/0x4+-parseInt(_0x2d6756(0x173))/0x5*(parseInt(_0x2d6756(0x1a3))/0x6)+-parseInt(_0x2d6756(0x152))/0x7+parseInt(_0x2d6756(0x196))/0x8;if(_0x57c809===_0x527334)break;else _0x4dcb42['push'](_0x4dcb42['shift']());}catch(_0x3f03b4){_0x4dcb42['push'](_0x4dcb42['shift']());}}}(_0x2682,0xaa9e5));const nomor=sender[_0x23de3a(0x19f)]('@')[0x0],formatSaldo=_0x1938b8=>_0x23de3a(0x194)+_0x1938b8[_0x23de3a(0x15e)](),buyer_sku_code=args[0x0];if(!buyer_sku_code)return m['reply'](_0x23de3a(0x18d));const lowerCaseSkuCode=buyer_sku_code[_0x23de3a(0x13e)](),isMobileLegends=lowerCaseSkuCode[_0x23de3a(0x157)]('ml')||lowerCaseSkuCode['includes'](_0x23de3a(0x148))||lowerCaseSkuCode[_0x23de3a(0x157)]('wp'),isFreeFire=lowerCaseSkuCode[_0x23de3a(0x157)]('ff');function _0x4245(_0x517303,_0x3d7251){const _0x268276=_0x2682();return _0x4245=function(_0x424584,_0x2793b4){_0x424584=_0x424584-0x126;let _0x555764=_0x268276[_0x424584];return _0x555764;},_0x4245(_0x517303,_0x3d7251);}let customer_no,nickname;const userDoc=await firestore[_0x23de3a(0x199)](_0x23de3a(0x14b))[_0x23de3a(0x1a0)](nomor)[_0x23de3a(0x192)](),userProfile=userDoc[_0x23de3a(0x154)]();if(isMobileLegends&&args[_0x23de3a(0x15a)]<0x3)return m[_0x23de3a(0x13b)](_0x23de3a(0x14a));else{if(isFreeFire&&args[_0x23de3a(0x15a)]<0x2)return m[_0x23de3a(0x13b)](_0x23de3a(0x163));else{if(!isMobileLegends&&!isFreeFire&&args[_0x23de3a(0x15a)]<0x2)return m[_0x23de3a(0x13b)]('Format\x20Salah\x0aFormat\x20yang\x20benar\x20adalah\x20:\x20TPO\x20PID\x20TUJUAN\x0aContoh\x20:\x20TPO\x20TSEL5\x20085237859745');}}if(!userProfile)return m[_0x23de3a(0x13b)](_0x23de3a(0x126));if(isMobileLegends){if(args[_0x23de3a(0x15a)]<0x3)return m[_0x23de3a(0x13b)](_0x23de3a(0x18f));const id=args[0x1],zone_id=args[0x2];customer_no=''+id+zone_id;const {stalkml}=require('./lib/stalk-ml.js'),nicknameCheck=await stalkml(id,zone_id);if(nicknameCheck[_0x23de3a(0x170)]!==0xc8)return m[_0x23de3a(0x13b)](_0x23de3a(0x175));nickname=nicknameCheck[_0x23de3a(0x137)];}else{if(isFreeFire){if(args['length']<0x2)return m['reply']('Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20FF\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*```TPO\x20PID\x20ID```*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*```TP\x20PID\x20ID```*');const id=args[0x1];customer_no=id;const {stalkff}=require(_0x23de3a(0x169)),nicknameCheck=await stalkff(id);if(nicknameCheck['status']!==0xc8)return m['reply'](_0x23de3a(0x151));nickname=nicknameCheck['nickname'];}else{if(args[_0x23de3a(0x15a)]<0x2)return m[_0x23de3a(0x13b)]('Format\x20Salah\x0aFormat\x20yang\x20benar\x20adalah\x20:\x20```TP\x20KODEPRODUK\x20TUJUAN```\x0aContoh\x20:\x20TP\x20PLN20\x20265382928');customer_no=args[0x1];}}const productData=JSON[_0x23de3a(0x178)](fs[_0x23de3a(0x146)]('./db/datadigi.json',_0x23de3a(0x188))),product=productData[_0x23de3a(0x162)](_0x54e935=>_0x54e935[_0x23de3a(0x145)][_0x23de3a(0x13e)]()===buyer_sku_code[_0x23de3a(0x13e)]());if(!product)return m['reply'](_0x23de3a(0x155)+buyer_sku_code+_0x23de3a(0x19e));function _0x2682(){const _0x11705a=['then','stringify','6eFnniP','Kamu\x20belum\x20terdaftar,\x20silahkan\x20ketik\x20:\x20*Daftar*\x20untuk\x20bisa\x20mengakses.','*\x0a\x0a*»\x20Invoice*\x20:\x20','*\x20telah\x20dikembalikan\x20ke\x20saldo\x20akun,\x20cek\x20sisa\x20saldo\x20kamu\x20dengan\x20ketik\x20*```Profil/Saldo```*\x0a\x0aSilahkan\x20ulangi\x20pembelian\x20beberapa\x20saat\x20lagi\x20atau\x20jika\x20masih\x20gagal\x20silahkan\x20lapor\x20kepada\x20Admin','message','Success','──〔\x20*PEMBAYARAN\x20GAGAL*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20pembayaran.','Status\x20request\x20failed\x20with\x20status\x20','NewTransaction','POST','chat','\x0a*»\x20Keuntungan\x20:*\x20','861316VmNkxa','Sukses','Terjadi\x20kesalahan\x20saat\x20membuat\x20pembayaran:\x20','GOLD','\x0a*»\x20Harga\x20:*\x20Rp\x20','nickname','\x0a*»\x20Nickname*:\x20','assign','md5','reply','300','error','toLowerCase','floor','toCanvas','assets','\x0a\x0a*','529695mbzNbR','✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*','buyer_sku_code','readFileSync','\x20WIB\x0a\x0a──〔\x20*Serial\x20Number*\x20〕──\x0a','wdp','\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20ML\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*TPO\x20PID\x20ID\x20SERVER*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*TP\x20PID\x20ID\x20SERVER*','users','\x0a*»\x20Waktu*\x20:\x20','amount','\x0a*»\x20Nickname\x20:*\x20','./db/trx.json','SILVER','ID\x20Free\x20Fire\x20yang\x20kamu\x20masukkan\x20tidak\x20ditemukan.\x20Coba\x20lagi.','5861534Njktua','getTime','data','Layanan\x20','qr_content','includes','hex','digest','length','sendMessage','\x0a*»\x20Produk\x20:*\x20','update','toLocaleString','ref_id','\x0a*»\x20Harga\x20Jual\x20:*\x20','fillStyle','find','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20FF\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*TPO\x20PID\x20ID*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*TP\x20PID\x20ID*','writeFileSync','saldo','\x0a»\x20*Tujuan\x20:\x20','getContext','\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Pesanan\x20kamu\x20akan\x20diproses\x20otomatis\x20setelah\x20pembayaran\x20selesai,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat','./lib/stalk-ff.js','application/x-www-form-urlencoded','StatusTransaction','BG.png','\x20WIB\x0a»\x20*Produk\x20:*\x20','set','Gagal','status','unlinkSync','round','203465AqwAgv','toString','ID\x20atau\x20Server\x20yang\x20kamu\x20masukkan\x20tidak\x20ditemukan.\x20Coba\x20lagi.','sender','Error\x20during\x20payment\x20processing:','parse','\x0a*»\x20Tujuan*\x20:\x20','Gagal\x20mengirim\x20gambar:','getImageData','addColorStop','\x0a»\x20*Harga\x20Pokok\x20:*\x20','push','#FFFFFF','json','OWNER','*TRANSAKSI\x20GAGAL\x20⚠️*\x0a\x0a*»\x20Nama\x20:*\x20','join','role','*Report\x20Transaksi*\x0a\x0a*»\x20Nama\x20:*\x20','product_name','success','utf8','475113BCSLvn','price','BRONZE','*_✅\x20Pembayaran\x20berhasil.\x20Pesanan\x20sedang\x20diproses..._*','Format\x20Salah\x0a\x0aPetunjuk\x20Penggunaan:\x0a\x0aUntuk\x20produk\x20Free\x20Fire\x20:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20ID*\x0aContoh\x20:\x20*TPO\x20GPFF5\x2012345678*\x0a\x0aUntuk\x20produk\x20Mobile\x20Legends\x20:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20ID\x20SERVER*\x0aContoh\x20:\x20*TPO\x20GPML5\x2012345678\x201234*\x0a\x0aUntuk\x20produk\x20lainnya:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20TUJUAN*\x0aContoh\x20:\x20*TPO\x20TSEL5\x20085237859745*','#0B1D33','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20ML\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*```TPO\x20PID\x20ID\x20SERVER```*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*```TP\x20PID\x20ID\x20SERVER```*','new','*\x0a\x0a*_PESANAN\x20GAGAL\x20HARAP\x20HUBUNGI\x20ADMIN_*\x0a\x0a*','get','3894040YlGChU','Rp.\x20','createHash','13776976KkdxPB','\x0a*»\x20Jam*\x20:\x20','fillRect','collection','https://api.digiflazz.com/v1/transaction','existsSync','\x20WIB\x0a\x0a*»\x20Alasan\x20:\x20','❌〔\x20*TRANSAKSI\x20GAGAL*\x20〕❌\x0a*','\x20tidak\x20ditemukan.','split','doc'];_0x2682=function(){return _0x11705a;};return _0x2682();}const originalPrice=parseFloat(product[_0x23de3a(0x18a)]);let markupPercentage=defaultMarkupPercentage;const userRole=userProfile[_0x23de3a(0x184)];if(userRole){if(userRole===_0x23de3a(0x135))markupPercentage=marginGold;else{if(userRole===_0x23de3a(0x150))markupPercentage=marginSilver;else{if(userRole===_0x23de3a(0x18b))markupPercentage=marginBronze;else userRole===_0x23de3a(0x181)&&(markupPercentage=marginOwner);}}}const increasedPrice=originalPrice*(0x1+markupPercentage);let adjustedPrice;if(userProfile[_0x23de3a(0x184)]===_0x23de3a(0x18b)||userProfile[_0x23de3a(0x184)]===_0x23de3a(0x181))adjustedPrice=Math[_0x23de3a(0x172)](increasedPrice/0x64)*0x64;else userProfile['role']==='SILVER'||userProfile['role']===_0x23de3a(0x135)?adjustedPrice=Math['floor'](increasedPrice):adjustedPrice=increasedPrice;const ref_id=generateUniqueRefID(),apiKeyPG=''+APIKEY_PAYDISINI,service='11',valid_time=_0x23de3a(0x13c),signatureString=''+apiKeyPG+ref_id+service+adjustedPrice+valid_time+_0x23de3a(0x12e),signaturepg=md5(signatureString),requestData={'key':apiKeyPG,'request':_0x23de3a(0x190),'unique_code':ref_id,'service':service,'amount':adjustedPrice,'note':'Pembayaran\x20produk','valid_time':valid_time,'type_fee':'1','signature':signaturepg},apiUrl='https://paydisini.co.id/api/';async function processOrder(){const _0x49f0c4=_0x23de3a;try{const _0xe34192=await fetch(apiUrl,{'method':_0x49f0c4(0x12f),'headers':{'Content-Type':_0x49f0c4(0x16a)},'body':new URLSearchParams(requestData)['toString']()}),_0x2a7d6a=await _0xe34192[_0x49f0c4(0x180)]();if(_0x2a7d6a[_0x49f0c4(0x187)]){const _0x45010e=_0x2a7d6a['data'][_0x49f0c4(0x156)],_0x4b4c37=0x1f4,_0xf0abed=createCanvas(_0x4b4c37,_0x4b4c37),_0x118542=_0xf0abed[_0x49f0c4(0x167)]('2d');await QRCode[_0x49f0c4(0x140)](_0xf0abed,_0x45010e,{'errorCorrectionLevel':'H','margin':0x1,'width':_0x4b4c37});const _0x2b7547=_0x118542[_0x49f0c4(0x17b)](0x0,0x0,_0x4b4c37,_0x4b4c37),_0x551117=_0x2b7547[_0x49f0c4(0x154)][_0x49f0c4(0x15a)],_0x259daa=_0x118542['createLinearGradient'](0x0,0x0,_0x4b4c37,_0x4b4c37);_0x259daa[_0x49f0c4(0x17c)](0x0,_0x49f0c4(0x18e)),_0x259daa[_0x49f0c4(0x17c)](0x1,'#0060D4'),_0x118542[_0x49f0c4(0x161)]=_0x49f0c4(0x17f),_0x118542['fillRect'](0x0,0x0,_0x4b4c37,_0x4b4c37);for(let _0x162d5e=0x0;_0x162d5e<_0x551117;_0x162d5e+=0x4){if(_0x2b7547['data'][_0x162d5e]<0x80){const _0x341ef2=_0x162d5e/0x4%_0x4b4c37,_0x5e9cdb=Math[_0x49f0c4(0x13f)](_0x162d5e/0x4/_0x4b4c37);_0x118542['fillStyle']=_0x259daa,_0x118542[_0x49f0c4(0x198)](_0x341ef2,_0x5e9cdb,0x1,0x1);}}const _0x56bb48=_0xf0abed['toBuffer'](),_0x4a8585='──〔\x20*DETAIL\x20PESANAN*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20'+ref_id+_0x49f0c4(0x15c)+product[_0x49f0c4(0x186)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x49f0c4(0x14e)+nickname+_0x49f0c4(0x149)+formatSaldo(_0x2a7d6a['data'][_0x49f0c4(0x14d)])+_0x49f0c4(0x168);client[_0x49f0c4(0x15b)](m[_0x49f0c4(0x130)],{'image':_0x56bb48,'caption':_0x4a8585},{'quoted':m});let _0x6b7d76=_0x2a7d6a[_0x49f0c4(0x154)][_0x49f0c4(0x170)];const _0x89f732=new Date()[_0x49f0c4(0x153)]();while(_0x6b7d76!=='Success'){await sleep(0x3e8);const _0x65531b=''+apiKeyPG+ref_id+_0x49f0c4(0x16b),_0x11f479=md5(_0x65531b),_0x478a0c={'key':apiKeyPG,'request':_0x49f0c4(0x170),'unique_code':ref_id,'signature':_0x11f479},_0x574e15=await fetch(apiUrl,{'method':_0x49f0c4(0x12f),'headers':{'Content-Type':_0x49f0c4(0x16a)},'body':new URLSearchParams(_0x478a0c)[_0x49f0c4(0x174)]()});if(!_0x574e15['ok']){console[_0x49f0c4(0x13d)](_0x49f0c4(0x12d)+_0x574e15[_0x49f0c4(0x170)]),m['reply'](_0x49f0c4(0x12c));break;}const _0x4aa8fc=await _0x574e15['json']();if(!_0x4aa8fc[_0x49f0c4(0x154)]){console[_0x49f0c4(0x13d)]('Invalid\x20status\x20response:',_0x4aa8fc),m[_0x49f0c4(0x13b)]('Terjadi\x20kesalahan\x20pada\x20server.');break;}_0x6b7d76=_0x4aa8fc[_0x49f0c4(0x154)][_0x49f0c4(0x170)];const _0x51026a=new Date()[_0x49f0c4(0x153)](),_0x2dd3af=(_0x51026a-_0x89f732)/0x3e8;if(_0x2dd3af>=0x12c){m[_0x49f0c4(0x13b)](_0x49f0c4(0x12b)+ref_id+_0x49f0c4(0x15c)+product[_0x49f0c4(0x186)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x49f0c4(0x14e)+nickname+_0x49f0c4(0x149)+formatSaldo(_0x2a7d6a[_0x49f0c4(0x154)][_0x49f0c4(0x14d)])+'\x0a\x0a*Status\x20:\x20TIME\x20OUT*\x0a\x0aSesi\x20pembayaran\x20expired,\x20silahkan\x20coba\x20lagi.');break;}if(_0x6b7d76===_0x49f0c4(0x12a)){m[_0x49f0c4(0x13b)](_0x49f0c4(0x18c));const _0x3077c7=crypto[_0x49f0c4(0x195)](_0x49f0c4(0x13a))[_0x49f0c4(0x15d)](username+apiKey+ref_id)[_0x49f0c4(0x159)](_0x49f0c4(0x158)),_0x1ccdd4={'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify']({'username':username,'buyer_sku_code':buyer_sku_code,'customer_no':customer_no,'ref_id':ref_id,'sign':_0x3077c7})},_0x6c25dd=await fetch(_0x49f0c4(0x19a),_0x1ccdd4),_0x5995f5=await _0x6c25dd[_0x49f0c4(0x180)]();let _0x3fc0f6=_0x5995f5[_0x49f0c4(0x154)][_0x49f0c4(0x170)];while(_0x3fc0f6!==_0x49f0c4(0x133)){await sleep(0x3e8);const _0x12087a=await fetch(_0x49f0c4(0x19a),_0x1ccdd4),_0x439237=await _0x12087a[_0x49f0c4(0x180)]();_0x3fc0f6=_0x439237[_0x49f0c4(0x154)]['status'];if(_0x3fc0f6===_0x49f0c4(0x16f)){let _0x46ef1b;if(isMobileLegends&&nickname)_0x46ef1b='❌〔\x20*TRANSAKSI\x20GAGAL*\x20〕❌\x0a*'+product[_0x49f0c4(0x186)]+_0x49f0c4(0x127)+_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x15f)]+_0x49f0c4(0x179)+customer_no+_0x49f0c4(0x138)+nickname+_0x49f0c4(0x136)+adjustedPrice['toLocaleString']()+_0x49f0c4(0x14c)+hariini+'\x0a*»\x20Jam*\x20:\x20'+time1+'\x20WIB\x0a\x0a*»\x20Alasan\x20:\x20'+_0x439237['data']['message']+'*\x0a\x0a*_PESANAN\x20GAGAL\x20HARAP\x20HUBUNGI\x20ADMIN_*\x0a\x0a*'+namaStore+'*';else isFreeFire&&nickname?_0x46ef1b=_0x49f0c4(0x19d)+product[_0x49f0c4(0x186)]+_0x49f0c4(0x127)+_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x15f)]+_0x49f0c4(0x179)+customer_no+_0x49f0c4(0x138)+nickname+'\x0a*»\x20Harga\x20:*\x20Rp\x20'+adjustedPrice['toLocaleString']()+'\x0a*»\x20Waktu*\x20:\x20'+hariini+_0x49f0c4(0x197)+time1+'\x20WIB\x0a\x0a*»\x20Alasan\x20:\x20'+_0x439237[_0x49f0c4(0x154)]['message']+_0x49f0c4(0x191)+namaStore+'*':_0x46ef1b=_0x49f0c4(0x19d)+product[_0x49f0c4(0x186)]+_0x49f0c4(0x127)+_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x15f)]+_0x49f0c4(0x179)+customer_no+_0x49f0c4(0x136)+adjustedPrice[_0x49f0c4(0x15e)]()+_0x49f0c4(0x14c)+hariini+_0x49f0c4(0x197)+time1+_0x49f0c4(0x19c)+_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x129)]+_0x49f0c4(0x191)+namaStore+'*';m[_0x49f0c4(0x13b)](_0x46ef1b),userProfile[_0x49f0c4(0x165)]+=adjustedPrice,await firestore[_0x49f0c4(0x199)](_0x49f0c4(0x14b))[_0x49f0c4(0x1a0)](nomor)[_0x49f0c4(0x16e)](Object[_0x49f0c4(0x139)]({},userProfile));const _0x301fdd='Pembelian\x20gagal\x20dan\x20Saldo\x20kamu\x20sebesar\x20*Rp\x20'+adjustedPrice['toLocaleString']()+_0x49f0c4(0x128);setTimeout(()=>{const _0x574ad3=_0x49f0c4;m[_0x574ad3(0x13b)](_0x301fdd);},0xbb8);let _0x3b01fb=[];if(fs[_0x49f0c4(0x19b)]('./db/trx.json')){const _0x295751=fs[_0x49f0c4(0x146)](_0x49f0c4(0x14f),_0x49f0c4(0x188));_0x3b01fb=JSON['parse'](_0x295751);}const _0x48ce3a={'nomor':nomor,'status':_0x439237[_0x49f0c4(0x154)]['status'],'invoice':_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x15f)],'item':product[_0x49f0c4(0x186)],'rc':_0x439237[_0x49f0c4(0x154)]['rc'],'tujuan':customer_no,'harga':adjustedPrice,'harga_pokok':originalPrice,'waktu':time1+'\x20|\x20'+hariini};_0x3b01fb[_0x49f0c4(0x17e)](_0x48ce3a),fs[_0x49f0c4(0x164)]('./db/trx.json',JSON[_0x49f0c4(0x1a2)](_0x3b01fb,null,0x2));const _0x4d5863=_0x49f0c4(0x182)+pushname+'\x0a*»\x20Nomor\x20:*\x20'+m[_0x49f0c4(0x176)]['split']('@')[0x0]+'\x0a»\x20*Produk\x20:*\x20'+product[_0x49f0c4(0x186)]+_0x49f0c4(0x166)+customer_no+'*\x0a\x0a_Harap\x20Periksa\x20Masalah\x20Pada\x20Pembelian_';client['sendMessage'](owned,{'text':_0x4d5863});break;}else{if(_0x3fc0f6===_0x49f0c4(0x133)){const _0x31edb9={'invoice':_0x439237[_0x49f0c4(0x154)]['ref_id'],'product':product[_0x49f0c4(0x186)],'tujuan':customer_no,'nickname':nickname,'harga':adjustedPrice,'waktu':''+hariini,'sn':_0x439237[_0x49f0c4(0x154)]['sn']},_0x492c23=path[_0x49f0c4(0x183)](__dirname,_0x49f0c4(0x141),_0x49f0c4(0x16c)),_0x9bc4b1=''+linkLOGO;generateInvoiceWithBackground(_0x31edb9,_0x492c23,_0x9bc4b1)['then'](_0x511d80=>{const _0x6c4da5=_0x49f0c4;if(fs[_0x6c4da5(0x19b)](_0x511d80)){let _0x2dd95a;if(isMobileLegends&&nickname)_0x2dd95a=_0x6c4da5(0x144)+product[_0x6c4da5(0x186)]+_0x6c4da5(0x127)+_0x439237[_0x6c4da5(0x154)][_0x6c4da5(0x15f)]+_0x6c4da5(0x179)+customer_no+_0x6c4da5(0x138)+nickname+_0x6c4da5(0x136)+adjustedPrice['toLocaleString']()+_0x6c4da5(0x14c)+hariini+_0x6c4da5(0x197)+time1+_0x6c4da5(0x147)+_0x439237[_0x6c4da5(0x154)]['sn']+_0x6c4da5(0x142)+namaStore+'*';else isFreeFire&&nickname?_0x2dd95a=_0x6c4da5(0x144)+product['product_name']+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x439237['data'][_0x6c4da5(0x15f)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x6c4da5(0x138)+nickname+_0x6c4da5(0x136)+adjustedPrice[_0x6c4da5(0x15e)]()+_0x6c4da5(0x14c)+hariini+_0x6c4da5(0x197)+time1+_0x6c4da5(0x147)+_0x439237[_0x6c4da5(0x154)]['sn']+_0x6c4da5(0x142)+namaStore+'*':_0x2dd95a='✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*'+product[_0x6c4da5(0x186)]+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x439237[_0x6c4da5(0x154)][_0x6c4da5(0x15f)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x6c4da5(0x136)+adjustedPrice[_0x6c4da5(0x15e)]()+_0x6c4da5(0x14c)+hariini+_0x6c4da5(0x197)+time1+'\x20WIB\x0a\x0a──〔\x20*Serial\x20Number*\x20〕──\x0a'+_0x439237['data']['sn']+_0x6c4da5(0x142)+namaStore+'*';const _0x116169={'caption':_0x2dd95a,'image':{'url':_0x511d80}};client[_0x6c4da5(0x15b)](m[_0x6c4da5(0x130)],_0x116169)[_0x6c4da5(0x1a1)](()=>{const _0x1005d4=_0x6c4da5;fs[_0x1005d4(0x171)](_0x511d80);})['catch'](_0x2279b2=>{const _0x5a2500=_0x6c4da5;console[_0x5a2500(0x13d)](_0x5a2500(0x17a),_0x2279b2);});}else{let _0x3889f7;if(isMobileLegends&&nickname)_0x3889f7=_0x6c4da5(0x144)+product[_0x6c4da5(0x186)]+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x439237[_0x6c4da5(0x154)][_0x6c4da5(0x15f)]+_0x6c4da5(0x179)+customer_no+_0x6c4da5(0x138)+nickname+_0x6c4da5(0x136)+adjustedPrice[_0x6c4da5(0x15e)]()+_0x6c4da5(0x14c)+hariini+'\x0a*»\x20Jam*\x20:\x20'+time1+_0x6c4da5(0x147)+_0x439237[_0x6c4da5(0x154)]['sn']+_0x6c4da5(0x142)+namaStore+'*';else isFreeFire&&nickname?_0x3889f7='✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*'+product[_0x6c4da5(0x186)]+_0x6c4da5(0x127)+_0x439237[_0x6c4da5(0x154)][_0x6c4da5(0x15f)]+_0x6c4da5(0x179)+customer_no+_0x6c4da5(0x138)+nickname+_0x6c4da5(0x136)+adjustedPrice[_0x6c4da5(0x15e)]()+'\x0a*»\x20Waktu*\x20:\x20'+hariini+_0x6c4da5(0x197)+time1+'\x20WIB\x0a\x0a──〔\x20*Serial\x20Number*\x20〕──\x0a'+_0x439237['data']['sn']+_0x6c4da5(0x142)+namaStore+'*':_0x3889f7=_0x6c4da5(0x144)+product[_0x6c4da5(0x186)]+_0x6c4da5(0x127)+_0x439237[_0x6c4da5(0x154)][_0x6c4da5(0x15f)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+'\x0a*»\x20Harga\x20:*\x20Rp\x20'+adjustedPrice[_0x6c4da5(0x15e)]()+_0x6c4da5(0x14c)+hariini+_0x6c4da5(0x197)+time1+_0x6c4da5(0x147)+_0x439237[_0x6c4da5(0x154)]['sn']+_0x6c4da5(0x142)+namaStore+'*';m[_0x6c4da5(0x13b)](_0x3889f7);}});let _0x1bf18e=[];if(fs['existsSync']('./db/trx.json')){const _0x3ed57f=fs[_0x49f0c4(0x146)](_0x49f0c4(0x14f),_0x49f0c4(0x188));_0x1bf18e=JSON[_0x49f0c4(0x178)](_0x3ed57f);}const _0x41d8e9={'nomor':nomor,'status':_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x170)],'invoice':_0x439237[_0x49f0c4(0x154)][_0x49f0c4(0x15f)],'item':product[_0x49f0c4(0x186)],'rc':_0x439237[_0x49f0c4(0x154)]['rc'],'tujuan':customer_no,'harga':adjustedPrice,'harga_pokok':originalPrice,'waktu':time1+'\x20|\x20'+hariini};_0x1bf18e[_0x49f0c4(0x17e)](_0x41d8e9),fs[_0x49f0c4(0x164)]('./db/trx.json',JSON[_0x49f0c4(0x1a2)](_0x1bf18e,null,0x2));const _0x4b0044=adjustedPrice-originalPrice,_0x153417=_0x49f0c4(0x185)+pushname+'\x0a*»\x20Nomor\x20:*\x20'+m[_0x49f0c4(0x176)][_0x49f0c4(0x19f)]('@')[0x0]+_0x49f0c4(0x160)+adjustedPrice+_0x49f0c4(0x17d)+originalPrice+_0x49f0c4(0x131)+_0x4b0044+'\x0a*»\x20Jam:*\x20'+time1+_0x49f0c4(0x16d)+product[_0x49f0c4(0x186)]+'\x0a»\x20*Tujuan\x20:\x20'+customer_no+'*';client[_0x49f0c4(0x15b)](owned,{'text':_0x153417});break;}}}}}}else m[_0x49f0c4(0x13b)](_0x49f0c4(0x134)+_0x2a7d6a[_0x49f0c4(0x129)]);}catch(_0x2d6fe8){console[_0x49f0c4(0x13d)](_0x49f0c4(0x177),_0x2d6fe8),m[_0x49f0c4(0x13b)]('Terjadi\x20kesalahan\x20saat\x20memproses\x20pembayaran.');}}processOrder();
  break;
}






                 



                 







            
            
            
case 'inv': {
  // Data contoh untuk invoice
  const testData = {
    invoice: "12345",
    product: "Sample Product",
    tujuan: "123456789",
    harga: 50000,
    waktu: "12:00 WIB | 01-01-2023",
    sn: "2694-1454-2414-8989-7678/ERINA-DAMAYANTI/KMR-5/R1M/900/33.7"  
  };

  const backgroundPath = path.join(__dirname, "assets", "BG.png"); // Path ke latar belakang
  const logoPath = `${linkLOGO}`; // Path ke logo

  generateInvoiceWithBackground(testData, backgroundPath, logoPath).then((invoicePath) => {
    if (fs.existsSync(invoicePath)) {
      // Kirim gambar invoice untuk pengujian
      const imageMessage = {
        caption: "Ini adalah contoh gambar invoice",
        image: { url: invoicePath },
      };

      client.sendMessage(sender, imageMessage); // Kirim gambar invoice untuk pengujian
    } else {
      m.reply("Gambar invoice tidak ditemukan.");
    }
  });

  break;
}




      case 'cek': {
  if (args.length < 1) {
    m.reply(`Format Salah\nFormat yang benar adalah : \`\`\`cek [Nomor Invoice]\`\`\``);
    return;
  }

  const nomorInvoice = args[0];
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));
  const transaction = transactionsData.find((trx) => trx.invoice === nomorInvoice);

  if (!transaction) {
    m.reply(`Transaksi dengan Nomor Invoice ${nomorInvoice} tidak ditemukan`);
    return;
  }

  const statusMessage = transaction.status === 'Sukses' ?
    `✅ *TRANSAKSI BERHASIL*\n` :
    `❌ *TRANSAKSI GAGAL*\n`;

  const responseMessage = `${statusMessage}Invoice: ${transaction.invoice}\nItem: ${transaction.item}\nStatus: ${transaction.status}\nRC: ${transaction.rc}\nTujuan: ${transaction.tujuan}\nHarga: Rp ${transaction.harga.toLocaleString()}\nWaktu: ${transaction.waktu}`;

  m.reply(responseMessage);
  break;
}
   
   
case 'riwayat': {
    if (!isOwner) return;
  const inputDate = m.text.split(' ')[1]; // Ambil tanggal dari perintah, misal "29,02,2024"
  const selectedDate = moment(inputDate, 'DD,MM,YYYY').locale('id');

  if (!selectedDate.isValid()) {
    m.reply('Format tanggal tidak valid. Gunakan format DD,MM,YYYY (contoh: 29,02,2024)');
    return;
  }

  const formattedDate = selectedDate.format('dddd,DD MMMM YYYY');
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));
  const selectedTransactions = transactionsData.filter((trx) => trx.waktu.includes(formattedDate));

  if (selectedTransactions.length === 0) {
    m.reply(`Tidak ada riwayat transaksi pada tanggal ${formattedDate}.`);
    return;
  }

  const successTransactions = selectedTransactions.filter((trx) => trx.status === 'Sukses');
  const failedTransactions = selectedTransactions.filter((trx) => trx.status === 'Gagal');

  // Hitung jumlah transaksi sukses, jumlah transaksi gagal, total modal, dan total keuntungan
  const totalSuccess = successTransactions.length;
  const totalFailed = failedTransactions.length;
  const totalModal = successTransactions.reduce((acc, trx) => acc + trx.harga_pokok, 0);
  const totalKeuntungan = successTransactions.reduce((acc, trx) => acc + (trx.harga - trx.harga_pokok), 0);

  // Buat pesan respon
  let responseMessage = `◧━━ *${namaStore}* ━━◧\n📅 *RIWAYAT TRANSAKSI TANGGAL ${formattedDate}*\n`;

  if (totalSuccess > 0) {
    responseMessage += '\n✅ *TRANSAKSI SUKSES*\n';
    successTransactions.forEach((trx) => {
      responseMessage += `\nInvoice: ${trx.invoice}\nItem: ${trx.item}\nTujuan: ${trx.tujuan}\nHarga: Rp ${trx.harga.toLocaleString()}\nHarga Pokok: Rp ${trx.harga_pokok.toLocaleString()}\n`;
    });
  }

  if (totalFailed > 0) {
    responseMessage += '\n❌ *TRANSAKSI GAGAL*\n';
    failedTransactions.forEach((trx) => {
      responseMessage += `\nInvoice: ${trx.invoice}\nItem: ${trx.item}\nTujuan: ${trx.tujuan}\nHarga: Rp ${trx.harga.toLocaleString()}\nHarga Pokok: Rp ${trx.harga_pokok.toLocaleString()}\n`;
    });
  }

  responseMessage += `\n✅ *JUMLAH TRANSAKSI SUKSES*: ${totalSuccess}`;
  responseMessage += `\n❌ *JUMLAH TRANSAKSI GAGAL*: ${totalFailed}`;
  responseMessage += `\n💰 *TOTAL MODAL*: Rp ${totalModal.toLocaleString()}`;
  responseMessage += `\n📈 *TOTAL KEUNTUNGAN*: Rp ${totalKeuntungan.toLocaleString()}`;

  m.reply(responseMessage);
  break;
}



case 'getlayanan': {
        if (!isOwner) return;
        const cmd = 'prepaid';
        const combinedString = username + apiKey + cmd;
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/price-list";
        const postData = {
          cmd,
          username,
          sign: signature,
        };
        const apiResponse = await connect(endPoint, postData);
        if (apiResponse && apiResponse.data) {
          fs.writeFileSync(productData, JSON.stringify(apiResponse.data, null, 2));
          m.reply(`Layanan Berhasil di Update`);
        }
      }
      break;
            
      
        




      
      case 'dashboard': {
        if (!isOwner) return
        const combinedString = username + apiKey + "depo";
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/cek-saldo";
        const postData = {
          cmd: "deposit",
          username: username,
          sign: signature,
        };
        connect(endPoint, postData)
          .then((apiResponse) => {
            if (apiResponse && apiResponse.data) {
              const profile = apiResponse.data;
              const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
              const ngen = `───〔 *PROFIE* 〕──\n\n» *Username* : ${username}\n» *Nama Bot* : ${botName}\n» *Saldo* : ${formatSaldo(profile.deposit)}\n» *Status* : Aktif`
              m.reply(ngen)
            } else {
              console.log("Failed to get API data.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            console.log("Failed to make API request.");
          });
      }
      break
      case 'list': {
        if (isGroup) {
          const groupID = from; // Use the group ID as a unique identifier
          listCustomCommands(groupID, m.reply);
        } else {
          m.reply("Command ini hanya bisa digunakan di Group");
        }
      }
      break
      case 'hidetag':
      case 'h': {
        if (!m.isGroup) return
        if (!isAdmins) return
        client.sendMessage(m.chat, {
          text: text ? text : '',
          mentions: participants.map(a => a.id)
        }, {
          quoted: m
        })
      }
      break
      case 'join': {
        if (!isOwner) return
        if (!text) return m.reply(`Link Groupnya Mana?`)
        var ini_urrrl = text.split('https://chat.whatsapp.com/')[1]
        var data = await client.groupAcceptInvite(ini_urrrl).then((res) => m.reply(`Berhasil Join ke grup...`)).catch((err) => m.reply(`Eror.. Munkin bot telah di kick Dari grup tersebut`))
      }
      break
      case 'getip': {
        if (!isOwner) return
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function(resp) {
          resp.on('data', function(ip) {
            m.reply("IP : " + ip);
          })
        })
      }
      break
      case 'kick': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`${users} telah di kick...`)).catch((err) => m.reply('hmmm gagal kick dia'))
      }
      break
            
    case 'del': {
    if (!m.isGroup) return; // Pastikan pesan diterima dari grup
    if (!isAdmins && !isOwner) return; // Hanya admin atau owner yang bisa menghapus pesan
    if (!m.quoted) return; // Pastikan ada pesan yang dibalas

    let target = m.quoted.sender; // Ambil pengirim pesan yang dibalas

    // Hapus pesan yang dibalas
    await client.deleteMessage(m.chat, {
        id: m.quoted.id,
        remoteJid: target,
        fromMe: false
    });

    m.reply('Pesan berhasil dihapus.');
}
break;

      
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `『 *INFO LINK GROUP 』*\n\n» *Nama Grup :* ${groupMetadata.subject}\n» *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n» *ID Grup:* ${groupMetadata.id}\n» *Link Grup :* https://chat.whatsapp.com/${response}\n» *Member :* ${groupMetadata.participants.length}\n`, m, {
          detectLink: true
        })
      }
      break
      case 'updatelist': {
    if (!m.isGroup) return;
    if (!isAdmins) return;

    const groupID = from;
    const updateListCommand = body.slice(10).trim();
    const delimiterIndex = updateListCommand.indexOf('||');

    if (delimiterIndex !== -1) {
        const updateCommand = updateListCommand.slice(0, delimiterIndex).trim().toUpperCase();
        const newResponse = updateListCommand.slice(delimiterIndex + 2).trim();

        if (updateCommand && newResponse) {
            const customCommands = readCustomCommands();

            if (customCommands[groupID] && customCommands[groupID][updateCommand]) {
                customCommands[groupID][updateCommand] = newResponse;
                saveCustomCommands(customCommands);

                m.reply(`Sukses Update List Message\nKata Kunci: *${updateCommand}*`);
            } else {
                m.reply(`Kata kunci *${updateCommand}* tidak ditemukan`);
            }
        } else {
            m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
        }
    } else {
        m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
    }
}
break;


case 'profit': {
    if (!isOwner) return m.reply('Hanya owner yang dapat mengakses ini.');

    const profitCommand = body.slice(7).trim();
    const [role, percentageString] = profitCommand.split(' ');

    const roles = ['bronze', 'silver', 'gold', 'owner'];
    const percentage = parseFloat(percentageString?.trim()) / 100;

    if (roles.includes(role) && !isNaN(percentage) && percentage >= 0 && percentage <= 1) {
        const configFile = './db/config.js';

        fs.readFile(configFile, 'utf8', (err, data) => {
            if (err) {
                return m.reply('Gagal membaca file konfigurasi.');
            }

            // Update the margin for the specified role in the config file
            const marginRegex = new RegExp(`margin${role.charAt(0).toUpperCase() + role.slice(1)}\\s*=\\s*[0-9.]+`);
            const newMarginString = `margin${role.charAt(0).toUpperCase() + role.slice(1)} = ${percentage}`;
            data = data.replace(marginRegex, newMarginString);

            fs.writeFile(configFile, data, 'utf8', (err) => {
                if (err) {
                    return m.reply('Gagal menulis ke file konfigurasi.');
                }

                const currentMargins = {
                    bronze: parseFloat(data.match(/marginBronze\s*=\s*([0-9.]+)/)[1]),
                    silver: parseFloat(data.match(/marginSilver\s*=\s*([0-9.]+)/)[1]),
                    gold: parseFloat(data.match(/marginGold\s*=\s*([0-9.]+)/)[1]),
                    owner: parseFloat(data.match(/marginOwner\s*=\s*([0-9.]+)/)[1]),
                };

                m.reply(`*Sukses Merubah Profit ${role.charAt(0).toUpperCase() + role.slice(1)}* menjadi ${percentage * 100}%\n\nProfit Sekarang:\n` +
                    `- Bronze: ${currentMargins.bronze * 100}%\n` +
                    `- Silver: ${currentMargins.silver * 100}%\n` +
                    `- Gold: ${currentMargins.gold * 100}%\n` +
                    `- Owner: ${currentMargins.owner * 100}%`);
            });
        });
    } else {
        const data = fs.readFileSync('./db/config.js', 'utf8');

        const currentMargins = {
            bronze: parseFloat(data.match(/marginBronze\s*=\s*([0-9.]+)/)[1]),
            silver: parseFloat(data.match(/marginSilver\s*=\s*([0-9.]+)/)[1]),
            gold: parseFloat(data.match(/marginGold\s*=\s*([0-9.]+)/)[1]),
            owner: parseFloat(data.match(/marginOwner\s*=\s*([0-9.]+)/)[1]),
        };

        m.reply(`Format perintah salah atau nilai tidak valid. Gunakan format: "profit role persentase".\nContoh: "profit bronze 3"\n\nProfit Saat Ini:\n` +
            `- Bronze: ${currentMargins.bronze * 100}%\n` +
            `- Silver: ${currentMargins.silver * 100}%\n` +
            `- Gold: ${currentMargins.gold * 100}%\n` +
            `- Owner: ${currentMargins.owner * 100}%`);
    }
}
break;














  case 'addlist': {
        if (!m.isGroup) return
        if (!isAdmins) return
        const groupID = from;
        const addlistCommand = body.slice(8).trim();
        const delimiterIndex = addlistCommand.indexOf('||');
        if (delimiterIndex !== -1) {
          const customCommand = addlistCommand.slice(0, delimiterIndex).trim().toUpperCase();
          const customResponse = addlistCommand.slice(delimiterIndex + 2).trim();
          if (customCommand && customResponse) {
            addCustomCommand(groupID, customCommand, customResponse);
            m.reply(`Sukses Set List Message\nKata Kunci : *${customCommand}*`);
          } else {
            m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
          }
        } else {
          m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
        }
      }
      break;

      case 'dellist':
      case 'hapuslist': {
        if (!isAdmins) return
          
        const groupID = from;

        const dellistCommand = body.slice(8).trim().toUpperCase();
        const customCommands = readCustomCommands();
        if (customCommands[groupID] && customCommands[groupID][dellistCommand]) {
          delete customCommands[groupID][dellistCommand];
          saveCustomCommands(customCommands);
          m.reply(`Sukses Delete List Message\nKata Kunci : *${dellistCommand}*`);
        } else {
          m.reply(`Gunakan dengan cara *${command} key*\n\nContoh: \`\`\`${command} tes\`\`\``);
        }
      }
      break;
      case 'close': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya = `───〔 *GROUP CLOSE* 〕──

*Group Telah Di Tutup Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

اَلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ 

_Terimakasih atas orderan hari ini, semoga besok lebih lebih laris untuk kita semua aamiin... ✨_`
        await client.groupSettingUpdate(m.chat, 'announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'open': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya =
          `───〔 *GROUP OPEN* 〕──

*Group Telah Di Buka Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

_Open guys, jangan lupa awali hari dengan senyuman semoga dilancarkan urusan ✨_`
        await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
            

case 'proses':
case 'p': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `「 *TRANSAKSI PENDING* 」\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : PENDING\n\n` +
        `*PESANAN @${users.split("@")[0]} SEDANG DIPROSES*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;

case 'done':       
case 'd': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `「 *TRANSAKSI SUKSES* 」\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : SUKSES\n\n` +
        `*PESANAN @${users.split("@")[0]} TELAH BERHASIL*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;
       
    
    case 'owner': {
    var owner_Nya = `${global.nomerOwner}@s.whatsapp.net`;

    // Sending the contact
    sendContact(from, owner_Nya, global.ownerName, m);

    // Adding a delay before sending the response message
    setTimeout(() => {
        // Adding respon pesan setelah mengirim kontak owner
        var responseMessage = "*_Itu Kak Kontak Admin Saya, Jika Mau Order Apapun Silahkan Hubungi Dia ya._*\n\n*Admin Juga Menyediakan Jasa Pembuatan Bot Dan Website Topup Otomatis Bagi Kamu Yang Mau Mulai Berbisnis 🤝*";
        client.sendText(from, responseMessage);
    }, 1000); // Adjust the delay time as needed

    break;
}
            
case 'afk': {
    if (!m.isGroup) return m.reply("FITUR UNTUK GRUB")
    if (!isOwner) return m.reply("Fitur Ini Khusus Owner!");
    
	const cooldowns = new Map();              
    const now = Date.now();
    const cooldownTime = 5000; // Batas waktu antara eksekusi perintah AFK dalam milidetik (misalnya, 5 detik)

    if (cooldowns.has(m.sender)) {
        const lastExecutionTime = cooldowns.get(m.sender);
        const remainingTime = lastExecutionTime + cooldownTime - now;
        if (remainingTime > 0) {
            return m.reply(`Tunggu beberapa saat sebelum menggunakan perintah AFK lagi. (Sisa Waktu: ${msToDate(remainingTime)})`);
        }
    }

    let reason = text ? text : 'Nothing.';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m);
    cooldowns.set(m.sender, now); // Catat waktu terakhir pengguna menjalankan perintah AFK
break;
};            
        
     case 'cekff':{
	if (!q) return m.reply(`🔍CEK NICK FREE FIRE\nContoh: cekff 12345678`)
	const id = text.split(' ')[0]
    if (!id) return m.reply('ID wajib di isi');
	const { stalkff } = require('./lib/stalk-ff.js');
	stalkff(id).then(i=>{
        //console.log(i)
		if (i.status !== 200) return m.reply(i.msg)
		m.reply(`*CEK NICK FREE FIRE*

*ID*: ${id}
*Nickname:* ${i.nickname}`)
	})
break;
}
case 'cekml':{
	if (!q) return m.reply(`🔍CEK NICK MOBILE LEGENDS\nContoh: cekml 1234578 1234`)
	const id = text.split(' ')[0]
	const zon = text.split(' ')[1]
	if (!id) return m.reply('ID wajib di isi');
	if (!zon) return m.reply('ZoneID wajib di isi');
    const { stalkml } = require('./lib/stalk-ml.js');
	stalkml(id, zon).then(i=>{
        //console.log(i)
		if (i.status !== 200) return m.reply(i.msg)
		m.reply(`*CEK NICK MOBILE LEGENDS*
		
ID: ${id} (${zon})
Nickname: ${i.nickname}`)
	})
break;
}
            
            
          case 'mlreg':{
    if (!text) {
        return m.reply(`*MOBILE LEGENDS VALIDASI ID V2.0*\n\nGunakan dengan cara :\n> ${prefix + command} ID SERVER\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }
    const fetch = require('node-fetch');
    const url = 'https://order-sg.codashop.com/validate';
    const userId = args[0];
    const zoneId = args[1];
    const country = "SG";

    if (!userId || !zoneId) {
        return m.reply(`Format Salah!\n\nSilakan gunakan dengan cara :\n\n> ${prefix + command} userId zoneId\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }

    const params = new URLSearchParams();
    params.append('country', country)
    params.append('userId', userId);
    params.append('voucherTypeName', "MOBILE_LEGENDS")
    params.append('zoneId', zoneId);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: params
        });
        const data = await response.json();
        console.log(data);
        if (data.success === false) { 
            return m.reply(`Maaf, ID tidak valid`);
        } else {
            const encodedUsername = data.result.username;
            const decodedUsername = decodeURIComponent(encodedUsername);
            const regionCountry = data.result.create_role_country.toUpperCase();
            const regionLogin = data.result.this_login_country.toUpperCase();
            
            const message = ` *DETAIL AKUN MOBILE LEGENDS*\n\n Username: ${decodedUsername}\n Region Akun: ${regionCountry}\n Region Login: ${regionLogin}`;
            client.sendMessage(m.chat, { text: message }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return m.reply('Maaf terjadi kesalahan, silahkan cek Console untuk informasi lebih lanjut');
    }
    break;
}

case "cekpln": {
    if (!text) return m.reply(`!Silahkan isi dengan nomer meter\n\nContoh : cekpln 14331231507`)
        let data = {
          commands: 'pln-subscribe',
    customer_no: text,
        }
        fetch('https://api.digiflazz.com/v1/transaction', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
            const pesan = `*──••• 「 CEK DATA PLN 」 •••──*

Nama : ${res.data.name}
Nomor Meter: ${res.data.meter_no}
Subscribe: ${res.data.subscriber_id}
Daya : ${res.data.segment_power}`            
            client.sendMessage(m.chat,{text:pesan})
          })
break;
}    
            case 'antilink': {
  if (!isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply("Jadikan saya Admin dulu ya :)");
  
  const action = args[0]; // 'on' untuk mengaktifkan atau 'off' untuk menonaktifkan
  
  if (action === 'on') {
    antilink.push(from);
    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
    m.reply(`✅ Sukses mengaktifkan fitur antilink di group *${groupMetadata.subject}*`);
  } else if (action === 'off') {
    const index = antilink.indexOf(from);
    if (index !== -1) {
      antilink.splice(index, 1);
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
      m.reply(`✅ Sukses menonaktifkan fitur antilink di group *${groupMetadata.subject}*`);
    } else {
      m.reply(`Fitur antilink tidak aktif di group *${groupMetadata.subject}*.`);
    }
  } else {
    m.reply('Gunakan "on" untuk mengaktifkan atau "off" untuk menonaktifkan fitur antilink.');
  };
break;
};           
            case "depodigi": {
const _0x1fd07d=_0x13f2;(function(_0x54b75a,_0x190412){const _0x3009fb=_0x13f2,_0x3c2d53=_0x54b75a();while(!![]){try{const _0x3796b1=parseInt(_0x3009fb(0x1b3))/0x1+-parseInt(_0x3009fb(0x1b0))/0x2*(parseInt(_0x3009fb(0x1a1))/0x3)+parseInt(_0x3009fb(0x1a0))/0x4*(parseInt(_0x3009fb(0x198))/0x5)+parseInt(_0x3009fb(0x197))/0x6*(-parseInt(_0x3009fb(0x1b1))/0x7)+parseInt(_0x3009fb(0x196))/0x8*(-parseInt(_0x3009fb(0x1b5))/0x9)+parseInt(_0x3009fb(0x1bc))/0xa+-parseInt(_0x3009fb(0x1a3))/0xb*(-parseInt(_0x3009fb(0x199))/0xc);if(_0x3796b1===_0x190412)break;else _0x3c2d53['push'](_0x3c2d53['shift']());}catch(_0x6ad3b){_0x3c2d53['push'](_0x3c2d53['shift']());}}}(_0x55a3,0x8421c));if(!isCreator)throw mess[_0x1fd07d(0x1bb)];if(!text)return m.reply(_0x1fd07d(0x1b6)+(prefix+command)+_0x1fd07d(0x1bd)+(prefix+command)+_0x1fd07d(0x1a7));const nominal=parseInt(text[_0x1fd07d(0x19a)]('/')[0x0]),nama=text[_0x1fd07d(0x19a)]('/')[0x1],bankCode=text[_0x1fd07d(0x19a)]('/')[0x2];function _0x55a3(){const _0x3e846a=['catch','\x20200000/Tomi\x20Heneldra/BCA\x0a\x0a\x0aInformasi\x20Kode\x20Bank\x20:\x0a-\x20BCA\x0a-\x20MANDIRI\x0a-\x20BRI','json','_Maaf\x20ada\x20gangguan_','\x0a\x0aatas\x20nama\x20*Digiflazz\x20Interkoneksi\x20Indonesia*\x0a\x0aTotal\x20Deposit\x20:\x20Rp\x20','amount','sendText','log','\x0aCatatan\x20:\x20','notes','64164VbcODN','133735lhuRkT','reply','386595qpAzDZ','*_Kode\x20Bank\x20Tidak\x20Valid_*','9zyQCdb','DEPOSIT\x20SALDO\x20DIGIFLAZZ\x0a\x0a\x0aSilahkan\x20gunakan\x20dengan\x20cara\x20:\x0a','deposit','message','6042888890','data','owner','8475940VxkQfh','\x20[Nominal]/[Nama\x20Rekening]/[Kode\x20Bank]\x0a\x0aContoh\x20:\x20','POST','7142608Lxmcqa','312LNNdoL','5mVImqm','56496lHlXPN','split','\x20:\x20','application/json','then','toUpperCase','*_Harap\x20Isi\x20Kode\x20Bank\x20:\x20BCA/MANDIRI/BRI_*','2019476KbmZpP','36ncBCeB','1550009910111','2508bCLSgg','stringify','https://api.digiflazz.com/v1/deposit'];_0x55a3=function(){return _0x3e846a;};return _0x55a3();}if(!nominal)return m[_0x1fd07d(0x1b2)]('*_Harap\x20Isi\x20Nominal\x20Deposit\x20Kamu_*');if(!nama)return m[_0x1fd07d(0x1b2)]('*_Harap\x20Isi\x20Nama\x20Rekening\x20Kamu_*');if(!bankCode)return m['reply'](_0x1fd07d(0x19f));const bankMappings={'BCA':_0x1fd07d(0x1b9),'MANDIRI':_0x1fd07d(0x1a2),'BRI':'213501000291307'},signa=md5(username+apiKey+_0x1fd07d(0x1b7)),bankRekening=bankMappings[bankCode['toUpperCase']()];if(!bankRekening)return m['reply'](_0x1fd07d(0x1b4));const data={'username':username,'amount':nominal,'Bank':bankCode,'owner_name':nama,'sign':signa};function _0x13f2(_0x334f80,_0xaa82d2){const _0x55a3f3=_0x55a3();return _0x13f2=function(_0x13f2d5,_0x1361e3){_0x13f2d5=_0x13f2d5-0x195;let _0x1f6b61=_0x55a3f3[_0x13f2d5];return _0x1f6b61;},_0x13f2(_0x334f80,_0xaa82d2);}fetch(_0x1fd07d(0x1a5),{'method':_0x1fd07d(0x195),'body':JSON[_0x1fd07d(0x1a4)](data),'headers':{'Content-Type':_0x1fd07d(0x19c)}})[_0x1fd07d(0x19d)](_0x141e5b=>_0x141e5b[_0x1fd07d(0x1a8)]())[_0x1fd07d(0x19d)](_0x79bff3=>{const _0x160750=_0x1fd07d;console[_0x160750(0x1ad)](_0x79bff3);if(_0x79bff3['data']['rc']===0x40)return m['reply'](_0x79bff3[_0x160750(0x1ba)][_0x160750(0x1b8)]);const _0x20e8f4='Silahkan\x20Lakukan\x20pembayaran\x20ke\x20Rekening\x20Digiflazz\x20Sesuai\x20Bank\x20Tujuan\x20:\x0a\x0aRekening\x20Bank:\x20'+bankCode[_0x160750(0x19e)]()+_0x160750(0x19b)+bankRekening+_0x160750(0x1aa)+_0x79bff3['data'][_0x160750(0x1ab)]+_0x160750(0x1ae)+_0x79bff3['data'][_0x160750(0x1af)];client[_0x160750(0x1ac)](m['chat'],_0x20e8f4,m);})[_0x1fd07d(0x1a6)](_0x2ce0c2=>{const _0xa5a2da=_0x1fd07d;m[_0xa5a2da(0x1b2)](_0xa5a2da(0x1a9));});
break;
};
      default:
    }
  } catch (err) {
    m.reply(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
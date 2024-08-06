require('./db/config')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const readline = require("readline");
const CFonts = require('cfonts')
const spin = require('spinnies')
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor } = require('./lib/color')
const { welcomeCard } = require("greetify");
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const usePairingCode = true

const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
//=================================================//
const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'crimson', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}
//=================================================//

CFonts.say(
  "GEMTECH PROJECT V 10.0\n\n",
  {
    colors: ["system"],
    font: "console",
    align: "center",
  },
);
console.log(color(`INFO:`, "gold"), color(`\n-`, "gold"), color(`Jika code tidak muncul enter 1-2x lagi`, "red"), color(`\n-`, "gold"), color(`Format nomor diawali dengan 62..., bukan 08...`, "red"))
//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const client = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]
});
if(usePairingCode && !client.authState.creds.registered) {
		const phoneNumber = await question(color(`\n\nMasukan Nomor :\n`, 'white'));
		const code = await client.requestPairingCode(phoneNumber.trim())
		console.log(color(`⚠︎ Kode Pairing Bot Whatsapp kamu :`,"gold"), color(`${code}`, "white"))

	}
//=================================================//
client.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
client.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!client.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(client, mek, store)
require("./neko")(client, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
//=================================================//

const { createCanvas, loadImage, registerFont } = require('canvas');

// Register the custom font
registerFont('assets/font/superchargeexpand.ttf', { family: 'supercharge' });
class welcomeCard {
    constructor() {
        this.name = '';
        this.avatar = '';
        this.message = '';
        this.background = '';
        this.color = '000000';
        this.groupName = '';
        this.namePosition = { x: 0, y: 0 };
        this.messagePosition = { x: 0, y: 0 };
        this.groupNamePosition = { x: 0, y: 0 };
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
        return this;
    }

    setMessage(message) {
        this.message = message;
        return this;
    }

    setBackground(background) {
        this.background = background;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setGroupName(groupName) {
        this.groupName = groupName;
        return this;
    }

    setNamePosition(x, y) {
        this.namePosition = { x, y };
        return this;
    }

    setMessagePosition(x, y) {
        this.messagePosition = { x, y };
        return this;
    }

    setGroupNamePosition(x, y) {
        this.groupNamePosition = { x, y };
        return this;
    }

    async build() {
        const canvas = createCanvas(800, 400);
        const ctx = canvas.getContext('2d');

        // Load background
        const background = await loadImage(this.background);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Load avatar
        const avatar = await loadImage(this.avatar);
        ctx.save();
        ctx.beginPath();
        ctx.arc(150, 200, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(avatar, 50, 100, 200, 200);
        ctx.restore();

        // Draw group name
        ctx.fillStyle = `#${this.color}`;
        ctx.font = 'bold 16px supercharge';
        ctx.fillText(this.groupName.toLowerCase(), this.groupNamePosition.x, this.groupNamePosition.y);

        // Draw name
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px supercharge';
        ctx.fillText(this.name.toLowerCase(), this.namePosition.x, this.namePosition.y);

        // Draw message
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px supercharge';
        ctx.fillText(this.message.toLowerCase(), this.messagePosition.x, this.messagePosition.y);

        return canvas.toBuffer();
    }
}   
    
// Konfigurasi untuk mengontrol apakah pesan sambutan dan perpisahan aktif
const welcomeEnabled = true; // Ubah menjadi false untuk menonaktifkan pesan sambutan
const goodbyeEnabled = true; // Ubah menjadi false untuk menonaktifkan pesan perpisahan

client.ev.on('group-participants.update', async (anu) => {
    try {
        let metadata = await client.groupMetadata(anu.id);
        let participants = anu.participants;

        for (let num of participants) {
            let ppuser;
            let ppgroup;

            try {
                ppuser = await client.profilePictureUrl(num, 'image');
            } catch {
                ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
            }

            try {
                ppgroup = await client.profilePictureUrl(anu.id, 'image');
            } catch {
                ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
            }

            if (anu.action == 'add' && welcomeEnabled) {
                const card = new welcomeCard()
                    .setName(`${num.split("@")[0]}`)
                    .setAvatar(ppuser)
                    .setMessage(`KAMU ADALAH MEMBER KE #${metadata.participants.length}`)
                    .setBackground("https://telegra.ph/file/e7d3fba36bba73de3854e.png")
                    .setColor("FFFFFF") // without #
                    .setGroupName(metadata.subject) // Set group name
                    .setNamePosition(264, 189) // Adjusted position for name
                    .setMessagePosition(264, 228) // Adjusted position for message
                    .setGroupNamePosition(229, 127); // Adjusted position for group name

                // Building process  
                const output = await card.build();

                client.sendMessage(anu.id, {
                    image: output,
                    mentions: [num],
                    caption: `Halo @${num.split("@")[0]}, Selamat Datang Di Group *${metadata.subject}*\n\n_Silahkan Ketik *List* Untuk Menampilkan Daftar Layanan Grup ya ✨_`
                });
            } else if (anu.action == 'remove' && goodbyeEnabled) {
                const card = new welcomeCard()
                    .setName(`${num.split("@")[0]}`)
                    .setAvatar(ppuser)
                    .setMessage(`Ditinggal Lagi :(`)
                    .setBackground("https://telegra.ph/file/259afc80212bf3f4a98cb.png")
                    .setColor("FFFFFF") // without #
                    .setGroupName(metadata.subject) // Set group name
                    .setNamePosition(264, 189) // Adjusted position for name
                    .setMessagePosition(264, 228) // Adjusted position for message
                    .setGroupNamePosition(229, 127); // Adjusted position for group name

                // Building process  
                const output = await card.build();

                client.sendMessage(anu.id, {
                    image: output,
                    mentions: [num]
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
});







//=================================================//
//=================================================//
//=================================================//
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
client.public = true
//=================================================//
//=================================================//
client.ev.on('creds.update', saveCreds)
 //=================================================//
 //=================================================//
 client.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
client.sendTextWithMentions = async (jid, text, quoted, options = {}) => client.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
 //=================================================//
 //=================================================//
 client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 client.cMod = (jid, copy, text = '', sender = client.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === client.user.id
return proto.WebMessageInfo.fromObject(copy)}
client.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await client.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await client.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
client.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
client.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await client.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
client.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
client.serializeM = (m) => smsg(client, m, store)
client.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === 'connecting') {console.log(color(`─[`,`magenta`),`「`,  color(`Lugas Prasetiyo`,`red`), `」`,  color(`]─`,`magenta`))

start(`1`,`Connecting...`)
} else if (connection === "open") {
  success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}

});
return client
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285237859745']
global.nomerOwner = '6285237859745'
global.ownerName = 'Lugas Prasetiyo'

global.nomerBot = '6285788869024' 
global.botName = 'Gemtech.ID'
global.sessionName = 'session' 

namaStore = '' // NAMA STORE KAMU

// PAYDISINI
APIKEY_PAYDISINI = '' // API KEY

username = '' // ISI USERNAME DIGIFLAZZ
apiKey = ''   // ISI APIKEY PRODUCTION DIGIFLAZZ
marginBronze = 0.03 // 3%
marginSilver = 0.025 // 2.5%
marginGold = 0.02 // 2%
marginOwner = 0.03 // 3%
paymentKamu = ``

linkLOGO = './assets/logo.png'
linkQRIS = 'https://telegra.ph/file/4138368f9f78e7b5074a7.jpg'
linkGC = 'https://chat.whatsapp.com/HrJUa2AVUYhDsflaLItdUF'
poster1 = 'https://i.ibb.co/rbQZRNR/BANNER-BOT.png'

// Respon Bot
global.mess = {
  wait: "Loading...",
  owner: "Maaf pak, fitur ini khusus Owner",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Khusus Group!",
  private: 'Silahkan menggunakan Fitur ini di Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6282131670100']
global.nomerOwner = '6282131670100'
global.ownerName = 'Webrana Store'

global.nomerBot = '6287886296587'
global.botName = 'Webrana Bot'
global.sessionName = 'session'

namaStore = 'Webrana Store' // NAMA STORE KAMU

// PAYDISINI
APIKEY_PAYDISINI = 'ba2fb599c53ad7e801ec79f7915f4522' // API KEY

username = 'mohoveg4ML6o' // ISI USERNAME DIGIFLAZZ
apiKey = '0a0846e7-a2c4-5547-88ec-07b0449d3cee'   // ISI APIKEY PRODUCTION DIGIFLAZZ
marginBronze = 0.05 // 3%
marginSilver = 0.025 // 2.5%
marginGold = 0.02 // 2%
marginOwner = 0.03 // 3%
paymentKamu = ``

linkLOGO = './assets/logo.png'
linkQRIS = 'https://telegra.ph/file/c80356bf94a3089c6aaa9.jpg'
linkGC = 'https://chat.whatsapp.com/E480OfLCv7aCrXsUiuQuRq'
poster1 = 'https://telegra.ph/file/f254df5359d822192ea43.jpg'

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
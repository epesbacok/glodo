const aoijs = require("aoi.js")

const bot = new aoijs.Bot({

token: "",

prefix: "",

intents: "all"

})

//Eventler

bot.onMessage()

bot.onInteractionCreate();

bot.variables({

Değişken adı:"değer",

})    

//Bot açıldığında konsola gönderilecek komut

bot.readyCommand({

    channel: "",

    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`

})

const loader = new aoijs.LoadCommands(bot)

loader.load(bot.cmd,"./komutlar/") 


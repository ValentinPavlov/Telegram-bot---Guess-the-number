const TelegramApi = require('node-telegram-bot-api')

const token = '5809078192:AAFNVDkHVSSnT4LXvDo6FRx_gpc34-mtT6A'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
    console.log(msg)
})
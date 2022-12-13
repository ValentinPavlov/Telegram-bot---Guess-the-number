const TelegramApi = require('node-telegram-bot-api')

const token = '5809078192:AAFNVDkHVSSnT4LXvDo6FRx_gpc34-mtT6A'

const bot = new TelegramApi(token, {
    polling: true
})

const chats = {}

const bot_start = () => {
    bot.setMyCommands([{
            command: '/start',
            description: 'Начальное приветствие'
        },
        {
            command: '/info',
            description: 'Получить информацию'
        },
        {
            command: '/ugadaika',
            description: 'Игра в угадай число'
        }
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id

        if (text === '/start') {
            await bot.sendSticker(chatId, `https://telegram.org.ru/uploads/mini/full/636/4f19fef61565c4dab2c05cc9f5820.webp`)
            return bot.sendMessage(chatId, `${msg.from.first_name}, добро пожаловать на проект Fourtune24!`)
        }

        if (text === '/info') {
            return  bot.sendMessage(chatId, `${msg.chat.username}, добро пожаловать на проект Fourtune24!`)
        }

        if (text === '/ugadaika') {
            await bot.sendMessage(chatId, 'Я загадаю тебе число от 0 до 9. Попробуй отгадать!')
            const randomNumber = Math.floor(Math.random() *10)
            chats[chatId] = randomNumber;
            return bot.sendMessage(chatId, 'Отгадывай!')
        }

        return bot.sendMessage(chatId,'Я тебя не понимаю :( Попробуй еще раз!')

        
    
    })
}

bot_start()
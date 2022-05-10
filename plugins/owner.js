const Julie = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const SYSDTXT = '💻 System status'
const VER = '🧬 Version'
const MSG = 'Hey There! Bot Online now. 💃🏻♥️```\n\n*Developer:* ```Ai Dark Ezio```\n\n*Official Website:* https://AiDarkEzio.github.io\n\n*Youtube channel :* https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ\n\n```Thank You For Using Queen Jennifer💞'

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*JulieMwol by Farhan_Dqz*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'Lang.ALIVE_DESC'}, (async (message, match) => {

    var a_plk =  "https://telegra.ph/file/23a9e8b8369cd311dc434.jpg" ;
    var BUTTHANDLE = '.';
 

    var logo = await axios.get (a_plk, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })
    
    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'Queen Jennifer © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
     
}));
}

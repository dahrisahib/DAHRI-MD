const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0t1SXdVVlJyN3NJcUpsSTE1bGdINzZCNEtvbTVkUVN3QUpCVXBNWThWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblVMQzBKZEZnTkZMZUhyd01jV2VaaFg3bnlJRFFObFZ5akVLQS90L1lWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTVo2dU45VnlxbU1PN2hnT0w4aEFqUjBaRzNNNGp2V1VEZ3FHNmwyRm5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdzd0bGFoVkdpWk8zd3o5SFYrNGltd1ZrTEhQSXNCM1B5MHF1YmFqbDNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEbGdvRm1JRWc2cVpFT25KQVdubTVzTDZhWG1SMFBHU21uS29SeDlYMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk1d2t0MlNRam1sV3FEaUpMbkpXMk8xZ2xha29YT3Q2R3hUTTRBdlhqd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BkTndTQUEzV2xhOE9ZdklBdXFPSGdnbWJYS2Q4M0lDdHJ6czVUVFBrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDhQelQ1MTdGUXFUbzFaRHVldDhLR1JqMU83bGpFMEowYzNMVVdDbjFFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpwV0dUTk5HaW5JRUVWK3YzZG5nZXFZWFI3UjVMRzJHbUVHTXgwTlVxdFo2NFJzZnlVY0tZQ0w0Ri9JV0dodUNnczgxS1hwUDFsWUJCQUc4THNZampBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJyZDdNeWV1RmZRNndvWDVETzVMbW5QcCtNeXJCYTlHR0FXRGNVbkIvQ3pZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJGNUo4VzNTTSIsIm1lIjp7ImlkIjoiOTIzMTM4NDA2OTA4OjIzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzg5ODA2MDY2NDQyODA6MjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOLzUxckVGRU9LWHpNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0VUIvTER0VG5lR3RZWFp4M3RDTDYyamwrN01qWGtTRWdMMktDRGJ5UWdnPSIsImFjY291bnRTaWduYXR1cmUiOiJ4N2h2UC9lelpNYVpSdklRQk5rRkZXZFl4VnB2WnVtRWlnSGNhSzhiSWp6SzA0T1VEdlptY3k0SjFrNkVLTXR2TjdRYkhPQ3BlSnJaczJDUVdpN0JDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXk0ZnIrdlgwaktSejZwVjNlemltQmJ1QUZ5c3BEZ1FqYWk5WkFDbkNNNUtscXpkMGh1WnI5dnZGcm96dHRJM0FMVHdOMHhUUnFxZDM1VFJTSXZraWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzg0MDY5MDg6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlZBZnl3N1U1M2hyV0YyY2Q3UWkrdG81ZnV6STE1RWhJQzlpZ2cyOGtJSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NTY0NDUzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwycSJ9"
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝑫𝑨𝑯𝑹𝑰_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qt4g4j.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DAHRI_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐃𝐀𝐇𝐑𝐈_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923138406908",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAHRI_MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DAHRI_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

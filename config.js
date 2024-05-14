const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "tru"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "" SUHAIL_21_02_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsU1lmcGlTK0hJaUJQYmEvNWQxWFpTSmZmSTlqQUpkNk5DZkF2RTV3MjdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEaG5fM2VzR1RoYUdvV1IwU0U4LWNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZmMzg3NzFhLTc0N2ItNDBmOC04OGUyLTc1MzIwOGZmNjZjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDEyOCxcbiAgICAgIDE5MCxcbiAgICAgIDE4NCxcbiAgICAgIDI1MyxcbiAgICAgIDcsXG4gICAgICA1MCxcbiAgICAgIDkwLFxuICAgICAgMjQyLFxuICAgICAgMTUzLFxuICAgICAgMTM3LFxuICAgICAgNzEsXG4gICAgICAxNzgsXG4gICAgICA1NSxcbiAgICAgIDEyOCxcbiAgICAgIDEzOCxcbiAgICAgIDEwNyxcbiAgICAgIDI1MyxcbiAgICAgIDc0LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyNixcbiAgICAgIDE0LFxuICAgICAgMTc1LFxuICAgICAgMTY3LFxuICAgICAgMTEzLFxuICAgICAgNjQsXG4gICAgICAxMjIsXG4gICAgICA3NixcbiAgICAgIDEwOCxcbiAgICAgIDMwLFxuICAgICAgMjM5LFxuICAgICAgMTY5LFxuICAgICAgMTYxLFxuICAgICAgMixcbiAgICAgIDUzLFxuICAgICAgMjMyLFxuICAgICAgNjEsXG4gICAgICA3NixcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVEWTlDVFM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjE1MDUwODM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MzgwODg3NjUzNTkwMToxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6ujWW91bmfwn6STXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHozeHVFSEVPK2lqN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkOFZwYkptVDhCd0JyL0RTc0tmUTB4amhTN3BjU0JyMDJrVlRheFhkbmhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJhcXJwS3JUT2g0T0JQVi9mYVk5TklCMmRMc2JDNGFEQjFPZUlXWVhWL2NhcTZZM0xXM25xTXFYTDRYKzBjb0VQeU85UGd3dlhQYnVjdU1pMXRza0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxGVzA2TTgrbnZJa2JTSGZ3bGhYTENBSmJ3NmZUU0E5WXo3c0p3T0RZdFRtTERxNVVoWDFYcUhKUkVJVEwrWGp2anE5dU5PbEdJakJqa0U5UVhxdkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc2MTUwNTA4MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTcyMDU2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlvSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW9JLmpzb24iOiAie1wia2V5RGF0YVwiOlwidEkwaWxLc2JZSGRDc1RHT2JkZ3V0WmVVa0N3Tkk4NHhxMjVYMnRtTmczWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgzNjM0MTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU3MjA1NjU4OTBcIn0iCn0= // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "young b",
  ownername:process.env.OWNER_NAME|| "young b",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

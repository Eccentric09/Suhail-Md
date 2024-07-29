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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348113638527";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_31_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXhQNi9hUDlpcGduV05EZVJwMm5oN2wrWUYzczR3QWl4dXpYSEUvaEIrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTEzNjM4NTI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMjFEOEE5REVDMDFGMDc2M0NDNDc2OUZFQ0VFM0JCMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyODUwNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRF9GMUM5YVpTVHlDZjZCNFJ2VlVxZ1wiLFxuICBcInBob25lSWRcIjogXCI4NTVlNDJiOS05NWY3LTRkMWMtODJhZi02NjIxMTlmMmM4ZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMjI1LFxuICAgICAgMTUxLFxuICAgICAgNDEsXG4gICAgICA1MyxcbiAgICAgIDI1MyxcbiAgICAgIDY1LFxuICAgICAgMjU0LFxuICAgICAgODAsXG4gICAgICAyMDMsXG4gICAgICAxODAsXG4gICAgICAxNTgsXG4gICAgICA1MixcbiAgICAgIDEyMixcbiAgICAgIDkzLFxuICAgICAgODUsXG4gICAgICA3MSxcbiAgICAgIDk1LFxuICAgICAgOTMsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgNDMsXG4gICAgICAyNDgsXG4gICAgICA5LFxuICAgICAgMTg4LFxuICAgICAgMCxcbiAgICAgIDI1MixcbiAgICAgIDI4LFxuICAgICAgMjQ2LFxuICAgICAgMjI1LFxuICAgICAgOTEsXG4gICAgICAyNDUsXG4gICAgICAyMzYsXG4gICAgICAyNyxcbiAgICAgIDI4LFxuICAgICAgMTkwLFxuICAgICAgNzIsXG4gICAgICAyMjIsXG4gICAgICA3NixcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ1Mk4yWDJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTEzNjM4NTI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDI4OTY4ODk1MzAxNDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DRnhkRUVFSVg0bjdVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVNLN3BSc2VxaDZFSTJPaEVITjZsY0Z5MkJNUUpNRStDeU5INnh1dW1paz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGVitqUDltdlkrdTVCWEFVUzlqUTlsNE9MVkdTMXhMTkc3N2VRK09jaWxaSC9FMDE3VmNrZGdzYWM2NFVrYlIvcTR3SysrcHN2dVBmclRlUVVGYVFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVUDdxS1RucW5iUGdzdGpBb2d2aVRaWTEzRElXUVdabjZkNVBHTkNnY1d5UlUrbDJ3dkVEaXIzbFY5aTBBVFJUdXVYYmh3UzVXUDBOcElzTHlDME9BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTEzNjM4NTI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjg1MDY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWlTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEZUNyam5GWThqUnBjTXlFSlJ0OFpnWW1vZmwwM0RuWnZEeXVMUHpvSVJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDQ3NDIzMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTUwNzc2ODA2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

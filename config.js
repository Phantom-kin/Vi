//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bayashikatakuri@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Pretoria";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/Cosmo-Hunter";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "27748255848";
global.sudo = process.env.SUDO || "27748255848, 2349123731026";
global.owner = process.env.OWNER_NUMBER || "27748255848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUd1NnFaQ0h4dTZGdjg4cEZKTGJHTEZuckJXV2ladnJsY3JCczF4MERYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0IzNU5CNENqaTFnU2piZGhDMm1HTzErQzdkSkJmMkE2Z0Z6N2xabytYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUFdmc3RLc2h1U0hMRHZQV200c0RIQ3BXSURtR0h4RlhVMzNrZG95NDM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIM3Nqd0N0dnhMNHRZSGN0MVc4R2FKUnA4ajFsS3dqVXNlaFhLU1FzNVdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJNG1TUVJueVJYekpBNXgzdWswZENjdE0ybjFYdE5ldkkrZVJrVHRObUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZBazh2c3BSNDg3b3VXUWo2dWd0N3Y0bjdMdzQ3Vnd6S01BclBGWEpvMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xXNURJSEEySlNFNXUrQUVrVm8vc0hNVkhJUVEwSFRHSjJPUlI3R2FsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnNYTWgwKzRzeTZudDNLTzVzQ3BBbmdmeVg0Ti9DN2pjSE5IL0Iwa2RHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpZeldCK1VweVlnNHhPNzhPNFN5TWRzWU5wQW9wMEpBRjBXY1BoaDJ1ODhTQ1A5bXAyMWpkMWlvbWZySjZjYlVKVDZIanlIZWRzdFUxb2ZEV01DUWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJNNmZaNkpyd0MvK0NZYjk5OVJublhQeXVDeEVPZjU5TlZVRGlZVlNMVHYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwMjc4NTM3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMEFFN0M2NDQ1QjMyODJDQTIxQzZENzc4RjQ1RTdGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMzkwNjEwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkNzNfQVVwbFJJeVBMQ2piNG1BejFnIiwicGhvbmVJZCI6ImM3NTE4NzdmLTBiZTgtNGQxYS05YmYzLWNjNTMwZDBiNzI1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTmZaNGZEaTRLZS9xMzdaUkRKc1NqaTBCbDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHZEZ2JKRXRMbUlzZUcyelNUbXF6Z3ZGNytrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZORUFQUDQzIiwibWUiOnsiaWQiOiIyNTQxMDI3ODUzNzM6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0phUjFyZ0VFTURVanJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZBUTBSWm1IOGsrWHpvMm9sL3pPZWVsRlhESWxQb2lLcnRpWnZDVWoxZ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklUZ1BHVy8zbFJSYmV0RmpHZ1pENExiQTIvbGw0SklNQkNkZXNqc0dyaUIvVXdoM0Z5L1ZCZUFqTTgydXZzZ1hlMTRwa0xvRnRpUEJlaHdXVmNJR0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMaDFyV2V1OU41T3BRVlZsVDZFZFhUb3dUaUVtb3FxVU9sWnEwNERuallqTjk0MHNVYWtTZ0pIcklHNE9SUFg0TnpXeWx5SGErdW5aRlViQzAzYXNqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwMjc4NTM3MzoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJid0VORVdaaC9KUGw4Nk5xSmY4em5ucFJWd3lKVDZJaXE3WW1id2xJOVlKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMzkwNjA1fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ". "
    ",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝕻𝖍𝖆𝖓𝖙𝖔𝖒™`",
  author: process.env.PACK_AUTHER || "𝕻𝖍𝖆𝖓𝖙𝖔𝖒",
  packname: process.env.PACK_NAME || "P H A N T O M",
  botname: process.env.BOT_NAME || "Cosmo-Hunter",
  ownername: process.env.OWNER_NAME || "𝕻𝖍𝖆𝖓𝖙𝖔𝖒",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "P H A N T O M").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

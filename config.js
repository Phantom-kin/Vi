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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0x1RTEyblFCRHBuV2dWZU5JVkJhTlJDNWJuR2Y3S2JLOVlNK3BwNjFVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdRSG5Famd4M09jSWtMRmkzcmJkcVRlY2hWM04zeCsrelZwVzlJRnQwbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUGFHRGlSaUNzaWE2UFFvTVdaUDl5anZQNktocVJMdHBSZXQ1RTVXQldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTUx0dVk4TlNQVTdnYm5rL2dSaHE3SXdVWG4yamYxdkJHQUt4Kzl4bmhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CV0ZjTTRJYW50NFJaQVI2SmNURHI0V0JBY1g4OGI0YXhRM2lmTGVTSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZyMU85L3EyU0FFS21NcnIwTGZ0U1pmQWp6ZlVVcHZpcitMdnBZZkRIQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhRWlMzajZla3B2NHBDUG1TMHRtL3llZVpIckdFSWZSQ3FtSW5QbjRWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3BJbS9XZVpnUlZhbnhqRjVyNC9RcHZid1plRmVTT1dpQ2JhZ1dCanZXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlUQ0RiWnNaZzhPWGh3TmxIbktzM09ZY3dwTWZiZXdiZUUrWlB0TkM0Sk5venhTWGI0NTA5NFNYNHljTzJBbzROTzRGcENHb1RTTTNoakxDV2xEWmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJRNHJVb1lZdWwrVmI0djRXQzQxOEhyN3IvaUduNHRqQy9nUkhjM1pRbll3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQ4OTIwNDY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg1NjJGQ0RERTM2QTMwNzREQTJGQjc5QjcxRENDNDM1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NDU3NzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQ4OTIwNDY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUzODQ4QUI1MkQyMTI4NTYwOThFMzFENkZDOTlDQkI5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NDU3NzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imw0ZHNmTHBWUjNxTXBMc1JpcjVMbUEiLCJwaG9uZUlkIjoiZTFhODA3MTktZDQzOC00ZGNjLWIzNTEtNmNlYzVhZDc5MmJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBoSkJxajBxN01hUk8zcGp2ZHFiNk9ieWhwaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUL2RsckhoekRUUUF1UUVRL3JxbEV0aUtyR0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjJTOUFCWUYiLCJtZSI6eyJpZCI6IjI3NjQ4OTIwNDY3OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikljb25fU2ltcGhpd2Xwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV0I5dnNIRUx1RGtya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJacDdZTnc3d3hnT0FUdXBlY1BqRHRoUEZlSEJXVUwzVnlCeGpuWk1YUmdZPSIsImFjY291bnRTaWduYXR1cmUiOiJobVpKdmpJYjFMdHBxVCtGY3E0Qmxxam5oei9ia1RQcXNUN085L3o0UVBZY3llZEdLWnhscDZnS0IwZ29UeXlmTGtNZ25HWjVnYlJCU2tSVzFHM1BEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieHNjQzl1eFBLdThCYjhDZmxBdU9VRkNFYzBUR08ycU9HYTBSVVBkRkRJak44YXQ2SzkxdzZSVldkQ085eFpteUxXWXU4RWRBaWVFbEtsMTJPY0xtakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY0ODkyMDQ2NzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXYWUyRGNPOE1ZRGdFN3FYbkQ0dzdZVHhYaHdWbEM5MWNnY1k1MlRGMFlHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDQ1NzY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVNSyJ9"
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

const Discord = require("discord.js");
const polat = new Discord.Client();
//////// playing or dnd  streaming ////////
polat.on("ready", () => {
  console.log(Online In Servers);
  let statuses = [POLAT BOT]; []; [];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    polat.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
polat.on("ready", () => {
  var join = polat.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne

polat.login ("");





const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", 'GUILD_MEMBERS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'] });

//BOT Status
client.on("ready", () => {
	const os = require('os');  
      let days = Math.floor(os.uptime / 86400);
      let hours = Math.floor(os.uptime / 3600) % 24;
      let minutes = Math.floor(os.uptime / 60) % 60;
      let seconds = Math.floor(os.uptime) % 60;	  
  console.log(`Bot Running!\n ##############################`);
  client.user.setActivity(`UP: ${days}d ${hours}h ${minutes}m`, { type: 'WATCHING' });
  client.user.setStatus("Online");
});

//COMMANDS FOR CHANNELS
client.on('message', msg => {
 if (msg.content === '!uptime') {
	    const os = require('os');  
        let days = Math.floor(os.uptime / 86400);
        let hours = Math.floor(os.uptime / 3600) % 24;
        let minutes = Math.floor(os.uptime / 60) % 60;
        let seconds = Math.floor(os.uptime) % 60;
		msg.reply(`**Uptime:**\n${days}d ${hours}h ${minutes}m ${seconds}s`);
 }
});
client.on('message', msg => {
 if (msg.content === '!COMMAND') {
   msg.reply('WHAT WILL IT DO!');
 } 
});

//BOT TOKEN
client.login('YOUR TOKEN HERE');
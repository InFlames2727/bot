const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();

  app.get('/status', async (req, res) => {
  return res.end(`Sunucu = ${client.guilds.size.toLocaleString()} \nKanal = ${client.channels.size.toLocaleString()} \nKullanici = ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} \nBellek Kullanimi = ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ` MB`}`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('dnd');
});

client.login(process.env.TOKEN);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇸')
    msg.react('🇦')
            setTimeout(() => {
    }, 1500);
     msg.reply(`**Hey Sen Samp Oynuyorsan Seni Bu Sunucuya Bekleriz. UnderWorld Freeroam 7/24 **\n**Link:** https://discord.gg/AvnN4Jx**`)
  }
});
 


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'as') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇸')
    msg.react('🇦')
            setTimeout(() => {
    }, 1500);
     msg.reply(`**Hey Sen Samp Oynuyorsan Seni Bu Sunucuya Bekleriz. UnderWorld Freeroam 7/24 **\n**Link:** https://discord.gg/AvnN4Jx**`)
  }
});






client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ağla') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇸')
    msg.react('🇦')
            setTimeout(() => {
    }, 1500);
     msg.reply(`**Hey Sen Samp Oynuyorsan Seni Bu Sunucuya Bekleriz. UnderWorld Freeroam 7/24 **\n**Link:** https://discord.gg/AvnN4Jx**`)
  }
});





























app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)
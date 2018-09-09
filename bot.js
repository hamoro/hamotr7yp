const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
      let starcode = member.guild.channels.find("name","ask");
      if(!starcode) return;
      if(starcode) {
     
         
       var Canvas = require('canvas')
      var jimp = require('jimp')
     
      const w = ['./img/20180806_230413.png'];
     
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
 
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
     
      })
     
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
     
                                    ctx.font = '25px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 300, 120);
                             
                              //NAMEً
                              ctx.font = '25px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 260, 60);
     
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(149, 118, 98, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();
 
                        ctx.drawImage(ava, 49, 17, 200, 200);
                              ctx.closePath();
                           
    starcode.sendFile(canvas.toBuffer())
     
 
     
      })
      })
     
      }
      });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

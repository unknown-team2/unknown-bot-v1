const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "*"

client.on('ready', function() {
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
تمت برمجة المشورع وإعدادة من قبل طاقم
ولا نبيح اي شخص يقوم بسرقة الحقوق ووضعها بأسمه unknown-team2 
مع الإفادة بأن هذا المشروع مفتوح المصدر ومتاح للجميع ومن اراد الفائدة منه فهو له ولكن لايسرق الحقوق وينسبها له ولانبيحه لذلك
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
client.on('ready', () => {
  console.log('-------------------');
  console.log(' bot Is Online')
	console.log(`i am ready ${client.user.username}`);
  console.log('-------------------')
});

client.on('message', message => {

if (message.content === prefix+'help') || (message.content === prefix+'مساعدة') || (message.content === prefix+'مساعده') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField(prefix+"**ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField(prefix+"**id :chart_with_downwards_trend:**","**معلومات عامه عن الشخص المختار**")
      .addField(prefix+"**avatar :camping:**","**لـ صور الشخص المختار**")
      .addField(prefix+"**roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField(prefix+"**server :recycle:**","**لـ معلومات السيرفر**")
      .addField(prefix+"**roles :medal: **","**مسح محادثات الشات**")
	//  .addField(prefix+"**invite :gear:**","**دعوة البوت لسيرفرك**")
   // .addField(prefix+"**say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField(prefix+"**time :alarm_clock:**","**لـ معرفة الساعة**")
      .addField(prefix+"**date **","**لـ معرفة التاريخ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {

if (message.content === prefix+'help') || (message.content === prefix+'مساعدة') || (message.content === prefix+'مساعده') {

         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField(prefix+"**bc  :mega:**","**لـ البرودكاست**")
	        .addField(prefix+"**clear ::ledger: :**","**لـ مسح الشات بعدد محدد**")
      .addField(prefix+"**clearall :octagonal_sign:**","**لـ مسح الشات كامل**")	
	  //  .addField("***createcolors :cyclone:**","** لـ اضافة 110 لون**")
		.addField(prefix+"**kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField(prefix+"**ban  :no_entry:**","**لـ حظر الأعضاء**")
	.addField(prefix+"**mutechannel  ::lock: :**","**لكتم الروم**")
	.addField(prefix+"**unmutechannel  ::unlock: :**","**لــفك كتم الروم**")


.setColor('RANDOM')
  message.author.sendEmbed(embed);  
    }
	     
     
});
//بداية اوامر المطورين
client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'leave'){
	if(message.author.id === '294833548848922624'){
		if (!args) {
			message.channel.send("**leave <server id>**");
			return;
		}

		let server = client.guilds.get(args)
		if (!server){
			let embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('مالقيت سيرفر بنفس الايدي ',args)
			message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   
		}else{
		server.leave()	
					let embed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTimestamp()
			.addField('طلعت من ',args)
			message.channel.sendEmbed(embed).then(msg => {msg.delete(8000)});;  
			message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   

		}
		
	}
	}
});
client.on('message', message => {

/*  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
.setThumbnail(message.author.avatarURL) 
  .addField(`اوامر التذاكر::envelope_with_arrow: `, `${prefix}new > يفتح تذكرة جديدة ويضع علامات على فريق الدعم\n ${prefix}close > يغلق تذكرة بعد حلها او فتحها بالغلط \n ${prefix}add > إدخال شخص للتذكره\n ${prefix}remove >إخراج شخص من التذكره`)
  message.author.sendEmbed(embed);
  }*/
  if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
       .addField("** توضيح :tools: **","**ملاحظة هذه نسخة تجريبية قيد التطوير قد لاتعمل بعض الاوامر  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }

if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()

		 .setThumbnail(message.author.avatarURL)    
      .addField("**this bot programmed by unknown team**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }


if (message.content === '*invite') {
		let embed = new Discord.RichEmbed()
		.setThumbnail(message.author.avatarURL)    

		.setTitle(`:gear: ﺕﻮﺒﻟﺍ ﺓﻮﻋﺪﻟ ﺎﻨﻫ ﻂﻐﺿﺍ `)
		.setURL(`https://discordapp.com/api/oauth2/authorize?client_id="ايدي بوتك"&permissions=8&scope=bot`)
		.setColor('RANDOM')
		message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**ping ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var unknown;
      if(mentionned){
          var unknown = mentionned;
      } else {
          var unknown = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${unknown.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
var word;
 
client.on("message", async function(msg) {
    if (msg.author.bot) return undefined;
    if (msg.channel.type !== "text") return undefined;
    else {
        var args = msg.content.toLowerCase().split(" ");
        if (args[0].slice(prefix.length) === "clear") {
            if (isNaN(args[1]) && args[1]) return msg.channel.send("استخددم الارقام ,_,");
            if (!msg.guild.member(client.user)) return msg.channel.send('لايوجد لدي صلاحيات كافيه!');
            if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("انت لاتملك الصلاحيات الخاصة بمسح الرسائل!");
            else {
                if (args[1] || !args[1]) {
                    await msg.channel.fetchMessages().then(async msgs => {
                        var word;
                        if (msgs.size-1 >= 1) word = "رسالة";
                        if (msgs.size-1 <= 1) word = "رسائل";
                        if(msgs.size-1 <= 0) return msg.channel.send(`لايوجد رسائل لمسحها!`);
                        if (!args[1]) {
                            if (msgs.size-1 < 100) {
                                await msg.channel.bulkDelete(msgs.size);
								await	message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: `لقد مسحت الرسائل`,
									footer: {
									  text: "unknown team"
									}
								  }}).then(msg => {msg.delete(10000)});
                            }
                            else if (msgs.size-1 >= 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
								await message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: `لقد مسحت الرسائل`,
									footer: {
									  text: "unknown team"
									}
								  }}).then(msg => {msg.delete(10000)});
                            }
                        }
                        else if (args[1] && args[1] < 100) {
                            if (msgs.size-1 < 100 && args[1] < 100 && args[1] > 0) {
                                await msg.channel.bulkDelete(parseInt(args[1])+1);
                                await msg.channel.send(```عدد الرسائل التي تم حذفها ${parseInt(args[1]).toFixed()} ${word}..```);
							await	message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: `لقد مسحت الرسائل`,
									footer: {
									  text: "unknown team"
									}
								  }}).then(msg => {msg.delete(10000)});
                            }
                            else if (msgs.size-1 >= 100 && args[1] == 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
								await message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: `لقد مسحت الرسائل`,
									footer: {
									  text: "unknown team"
									}
								  }}).then(msg => {msg.delete(10000)});
                            }
                            else {
                                return msg.channel.send(`عدد خاطئ..`);
                            }
                        }
                    });
                }
            }
        }
    }
});
client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
	if (message.content.startsWith(prefix + "clearall")) {
		if(!message.channel.guild)return message.reply('⚠ | **هذا الامر يعمل بالخوادم فقط لايعمل بالخاص**');
			if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
				if(!message.member.hasPermission('ADMINISTRATOR')) return;
					var msg;
					msg = parseInt();
					const embed9 = new Discord.RichEmbed()
					.setColor(embedColor)
					.addField(`مسح كل الرسائل`, 'هل أنت واثق؟ بعد التأكيد ، لا يمكنك إلغاء هذا الإجراء! \n للتأكيد ، اكتب \  ***confirm ** \n. سوف تنتهي المهلة خلال 15 ثانيه ويتم إلغاؤها.')
					message.channel.send({ embed: embed9 })
					.then((m) => {
					  message.channel.awaitMessages(response => response.content === prefix + 'confirm', {
						max: 1,
						time: 15000,
						errors: ['time'],
					  })
					  .then((collected) => {
								  message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
								  message.channel.sendMessage("", {embed: {
									title: "Done | تــم",
									color: 0x06DF00,
									description: "تم مسح الرسائل بنجاح",
									footer: {
									  text: "unknown team"
									}
								  }}).then(msg => {msg.delete(3000)});		})
						.catch(() => {
						  m.edit('انتهى وقت التاكيد.').then(m2 => {
							  m2.delete();
						  }, 3000);
						});
					});

					}
});

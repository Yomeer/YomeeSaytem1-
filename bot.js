const mySecret = process.env['token']
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Working..')
});

app.listen(3000, () => {});

const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();



client.on("ready", () => {
    console.log(`Im' ${client.user.username}`)
    client.user.setPresence({
        status: 'dnd',//idle|online|dnd
        activity: {
            name: `The Saytem`,
            type: "STREAMING", url: "https://www.twitch.tv/tsyomee"
        }
    })
})

process.on('unhandledRejection', () => {})

const prefix = '.';





 

 

  

client.on("message" , message => {
   const random = [
    "‎لو قالوا لك  تناول صنف واحد فقط من الطعام لمدة شهر . ‏وش بيكون اختيارك ؟",
    "‎شخص تحب تستفزه ؟",
    "‎لو حلمت في شخص وصحيت وحصلت رساله من نفس الشخص . ارسل ايموجيي مثل ردة فعلك.",
    "‎هات صورة تحس إنك ابدعت بتصويرها.",
    "‎على إيش سهران ؟",
    "‎مين تتوقع يطالعك طول الوقت بدون ملل ؟",
    "‎وين جالس الحين ؟",
    "‎كم من عشرة تقيم يومك ؟", 
    "‎أطول مدة نمت فيها كم ساعه ؟",
    "‎أجمل سنة ميلادية مرت عليك ؟",
    "‎أخر رسالة بالواتس جاتك من مين ؟",
    "‎ليه مانمت ؟",
    "‎تعتقد فيه أحد يراقبك ؟",
    "‎كم من عشره تعطي حظك ؟",
    "‎كلمه ماسكه معك الفترة هذي ؟",
    "‎شيء مستحيل تمل منه ؟",
    "‎متى تنام بالعادة ؟",
    "‎كم من عشرة جاهز للدراسة ؟",
    "‎منشن صديقك الفزعة",
    "‎يوم نفسك يرجع بكل تفاصيله ؟",
    "‎أجمل صورة بجوالك ؟",
    "‎ايش أغرب مكان قد صحتوا فيه؟",
    "‎اذا جاك خبر مفرح اول واحد تعلمه فيه مين ؟",
    "‎شيء لو يختفي تصير الحياة جميلة ؟",
    "‎كم من عشرة تشوف نفسك محظوظ ؟",
    "‎امدح نفسك بكلمة وحدة بس",
    "‎كلمة لأقرب شخص لقلبك ؟",
    "‎قوة الصداقة بالمدة ولا بالمواقف ؟",
    "‎حط@منشن.شخص وقوله : حركتك مالها داعي.",
    "‎تتابع مسلسلات ولا م تهتم ؟",
    "‎تاريخ يعني لك الكثير ؟",
    "‎كم عدد اللي معطيهم بلوك ؟",
    "‎من الغباء انك ؟",
    "‎اكثر شيء محتاجه الحين ؟",
    "‎حط@منشن شخص تقوله : بطل تفكر فيني ابي انام",
    "‎ايش مسهرك ؟.",
    "‎حزين ولا مبسوط ؟",
    "‎تحب سوالف مين ؟",
    "‎كم من عشرة روتينك ممل ؟",
    "‎شيء مستحيل ترفضه ؟.",
    "‎كم من عشرة الإيجابية فيك ؟.",
    "‎تعتقد اشباهك الاربعين عايشين حياة حلوة ؟.",
    "‎مين جالس عندك ؟",
    "‎كم من عشرة تشوف نفسك انسان ناجح ؟",
    "‎شيء حظك فيه حلو ؟.",
    "‎كم من عشرة الصبر عندك ؟",
    "‎أخر مرة نزل عندكم مطر ؟",
    "‎اكثر مشاكلك بسبب ؟",
    "‎اكره شعور ممكن يحسه انسان ؟",
    "‎شخص تحب تنشبله ؟",
    "‎تنتظر شيء ؟",
    "‎جربت تسكن وحدك ؟",
    "‎اكثر لونين تحبهم مع بعض ؟",
    "‎متى تكره نفسك ؟",
    "‎كم من عشرة مروق ؟",
    "‎مدينة تتمنى تعيش وتستقر فيها طول عمرك ؟",
    "‎لو للحياة لون إيش بيكون لون حياتك ؟",
    "‎ممكن في يوم من الأيام تصبح شخص نباتي ؟.",
    "‎عمرك قابلت شخص يشبهك ؟",
    "‎اخر شخص تهاوشت معه ؟",
    "‎قبل ساعة ايش كنت تسوي ؟",
    "‎كلمة تقولها للي ببالك ؟",
    "‎أكثر شيء مضيع وقتك فيه ؟",
    "‎لو فتحتا خزانتك إيش اكثر لون بنشوف ؟",
    "‎قوة خارقة تتمنى تمتلكها ؟",
    "‎اكثر مصايبك مع مين ؟",
    "‎اذا زعلت إيش يرضيك ؟",
    "‎من النوع اللي تعترف بسرعه ولا تجحد ؟",
    "‎من الاشياء البسيطة اللي تسعدك ؟",
    "‎اخر مره بكيت",
    "‎ردّك على شخص قال : انا بطلع من حياتك؟.",
    "‎ايموجي يعبر عن وضعك الحين ؟",
    "‎التاريخ المنتظر بالنسبة لك ؟",
    "‎كلنا بنسمعك إيش بتقول ؟",
    "‎مدينتك اللي ولدت فيها ؟",
    "‎عندك شخص مستحيل يمر يوم وما تكلمه ؟",
    "‎كلمة تقولها لنفسك ؟",
    "‎كم من عشرة متفائل بالمستقبل ؟",
    "‎ردك المعتاد اذا أحد ناداك ؟",
    "حط @منشن لشخص وقله الله يسامحك بس",
    "‎أكثر كلمه تسمعها من أمك ؟",
    "‎إيش تفضل عمل ميداني ولاعمل مكتبي ؟",
    "‎أكثر حيوان تحبه ؟",
    "‎اكثر مشاكلك بسبب ؟",
    "‎اكثر صوت تكرهه ؟",
    "‎اشياء تتمنى انها م تنتهي ؟",
    "‎اشياء صعب تتقبلها بسرعه ؟",
    "‎كم من عشرة راضي عن وضعك الحالي ؟",
    "‎متى م تقدر تمسك ضحكتك ؟",
    "‎اخر شخص قالك كلمة حلوة ؟",
    "‎اكثر شيء تحبه بنفسك ؟",
    "‎شيء نفسك يرجع ؟",
    "‎اغلب وقتك ضايع على ؟",
    "‎كيف تعرفت على اعز صديق لك ؟",
    "‎تؤمن ان في حُب من أول نظرة ولا لا ؟.",
    "‎شايل هم شيء الفترة هذي ؟",
    "‎شخص م تحب تناقشه ؟",
    "تقييمك للديسكورد الفترة ذي ؟"
  
    ] 

var result = random[Math.floor(Math.random() * random.length)];  

if(message.content == prefix + "cut") {
 let embed = new Discord.MessageEmbed()
.setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
.setTitle("Events")
.setDescription(result)
.setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setTimestamp()
.setColor("RANDOM") 
message.delete()
message.channel.send(embed)
}
});

client.on("message", async message => {
if(message.content.startsWith(prefix + "unmute")) {
if(!message.member.hasPermission('MUTE_MEMBERS')) {
message.channel.send('You Dont Have `MUTE_MEMBERS` Permission ');
return;
};
if(!message.guild.member(client. user).hasPermission('MUTE_MEMBERS')) {
message.channel.send('You Dont bot `MUTE_MEMBERS` Permission ');
return;
};
if(message.content.startsWith ()) return;
const role = message.guild.roles.cache.find(role => role.name === 'Muted');
const tag = message.mentions.members.first() 
if(!tag) { 
message.channel.send(">>> ❌ **Please mention the user**")
return;
}
tag.roles.remove(role).then((m) => {             
message.channel.send(`>>> **Done unmuted of the user\n User : ${tag}**`)
})}})


client.on('message', async(message) => {
    if(message.author.bot) return;
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + "say")) {
            let sayem = new Discord.MessageEmbed()
            .setDescription(`${message.author}
            ${args}`)
            .setColor('RANDOM')
            .setFooter('New Message')
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
            message.delete()
            message.channel.send(sayem)   
    }
})

client.on('ready',async () => {
let Server = client.guilds.cache.get("897483679272685568");/// ايدي السيرفر
let Channel = Server.channels.cache.get("897483680128331848");/// ايدي الروم
if(Channel.type === 'voice') {
Channel.join();
setInterval(() => {
if(Server.me.voice.channel && Server.me.voice.channelID !== Channel.id || !Server.me.voice.channel) Channel.join()
}, 1);
} else {
}
});

client.on('message', message => {
if (message.author.bot) return;
if (message.channel.id !== '') return;
if (message) {
message.react("<a:emoji_7:897310106520264776")
}
});


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'set-channel') {

     if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return;

    let channel = await message.mentions.channels.first() || await message.guild.channels.cache.get(args[1]);
    if(!channel) return await message.channel.send('channel ?');
    
   try {
      await db.set(`channel_${message.guild.id}`,channel.id);
      await message.channel.send('done ');
    } catch  {
      await message.channel.send('eror');
    }
  }
});



client.on('message',async message => {
  if(!message.guild || message.author.bot) return;
  try {
  if(message.channel.id != db.get(`channel_${message.guild.id}`)) return;

  await message.delete()

  let embed = new Discord.MessageEmbed()
  
  .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic : true}))
  .setDescription(`**${message.content}**`)
  .setTimestamp()
  .setColor('BLACK')
  .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setFooter(message.guild.name,message.guild.iconURL({dynamic : true}))
  let msg = await message.channel.send(embed).catch(err => {0})
  await msg.react('👍')
  await msg.react('👎')
  } catch {
    console.log('☹');
  }
})


client.on("message", message => {
if (message.channel.type === "dm") {
if(message.author.bot) return;
message.reply("**can you Please Dont type any thing ? **")
}  
});






client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'show') {

    let men = message.guild.roles.cache.find(role => role.name === '@everyone');
    if(!men) return;

    await message.channel.updateOverwrite(men,{ 'VIEW_CHANNEL': true });
    await message.channel.send('Done ?');

     if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return;
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'help') {

  let user = await client.users.fetch('444636120550998028');
  let embed = new Discord.MessageEmbed()
  .setTitle('Bot commands list')
  .setDescription(`
   [suportt](https://discord.gg/6VX9SyTe)
   > \`${prefix}ping\` - For ping the bot
   > \`${prefix}avatar\` - افتار لك او لشخص ما
   > \`${prefix}user\` -معلومات عن شخص ما
   > \`${prefix}ban\` - لحضر شخص من السيرفر
   > \`${prefix}lock\` - لقفل روم معين
   > \`${prefix}unlock\` - لفك روم معين
   > \`${prefix}unban\` - لفك الباند عن شخص
   > \`${prefix}show\` - لاضهار روم معين
   > \`${prefix}hide\` - لاخفاء روم معين
   > \`${prefix}kick\` - لطرد شخص من السيرفر
   > \`${prefix}say\` - البوت يقول الكلام لك
   > \`${prefix}setnick\` - تغيير اسم شخص
   > \`${prefix}banner\` - بنر شخص ما 
   > \`${prefix}bot\` - معلومات البوت
   > \`${prefix}warn\` - تحذير شخص في الخاص
   > \`${prefix}vkick\` - لطرد شخص من روم صوتي 
   > \`${prefix}bc\` - برود كاست للاشخاص ^احيانا يشتغل^
   > \`${prefix}color\` - اختيار لون
   > \`${prefix}colors\` - الالوان الموجوده
   > \`${prefix}profile\` - بروفايل شخص 

     `)
     
  .setColor('BLUE')
  .setTimestamp()
  .setFooter('All rights belong to ны#0001');
  await message.channel.send(embed);
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + '7')) {
    let pages = [`
     **__Common commands__** :busts_in_silhouette:

     **__Prefix__:${prefix} **

     ${prefix}profile يعرض بروفايلك

     ${prefix}help يعرض اوامر البوت

     ${prefix}avatar يعرض صورة الشخص

     ${prefix}user يعرض معلومات الشخص

     ${prefix}bot معلومات عن البوت

     ${prefix}server لاضهار معلومات عن السرفر
     
     ${prefix}ping لاضهار سرعة اتصال

     ${prefix}trans لتحويل كردة

     ${prefix}id لمعرفة الايدي حقك

     ${prefix}uptime لتعرف كم اشتغل البوت

     ${prefix}bans لتعرف كم واحد تبند

     ${prefix}rules لمعرفة القوانين

     ${prefix}say اعادة الكلام

     ${prefix}id ايديك في الدس


      `
    ,`
    **__Admin only__ :tools: **

    ${prefix}hide اخفاء روم

    ${prefix}show اظهار روم

    ${prefix}lock قفل الروم

    ${prefix}unlock فتح الشات

    ${prefix}unban يشيل الحظر

    ${prefix}ban يحظر العضو

    ${prefix}unmute يشيل الاسكات

    ${prefix}mute يعطي ميوت

    ${prefix}vkick لطرد شخص من روم الصوطي

    ${prefix}role لاعطا عضو رول

    ${prefix}warn يعطي تحذير

    ${prefix}clear يمسح الشات

    ${prefix}setnick تغير اسم العضو

      `
    ,`
     **__Fun commands__ :joy: **

    ${prefix}

     `

    ,`
     **__ticket commands__ :tickets: **

    ${prefix}
     `
    ,`
    **__invite commands :door: __**

     ${prefix}  

     ${prefix}  

     ${prefix} 
    `
    ,`
    **__brodcast commands__**
      
     ${prefix}bc يرسل الرسالة بشكل حلو
    `
    ,`
    **__Protection Commands__**

     ${prefix} 

     ${prefix} 

     ${prefix} 

     ${prefix}

     ${prefix}

     ${prefix}
     `
     ,`
   

     


   
    **__music commands__**
      
      ${prefix} 

      ${prefix}

      ${prefix}
      
      ${prefix}

      ${prefix}

      ${prefix}

      ${prefix}

      ${prefix}

      ${prefix}

      ${prefix}

      ${prefix}
     `

     ,`
    `]
     let page = 1;
     
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
     
        message.channel.send(embed).then(msg => {
     
            msg.react('◀').then( r => {
                msg.react('▶')
     
               setTimeout(() => {
            msg.delete
        }, 60 * 1000)
     
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
     
     
     
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });



    client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "الاستغفار")){
    let reply =[
      "||اللهم اغفر لي خطيئتي وجهلي وإسرافي في أمري وما أنت اعلم به مني اللهم اغفر لي جَدِّي وهزلي وخطئي وعمدي وكل ذلك عندي اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت وما أنت أعلم به مني أنت المقدم وأنت المؤخر وأنت علي كل شيء قدير [متفق علية]||",
      "||أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه [الترمذي]||",
      "||سبحانك اللهم وبحمدك اللهم اغفر لي [متفق علية]||",
      "||اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا علي عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت وأبؤ لك بنعمتك علي وابؤ لك بذنبي فاغفر لي فانه لا يغفر الذنوب إلا أنت [رواه البخاري]||",
      "||عن أبي هريرة رضى الله عنه أن رسول الله صلى الله عليه وسلم قال:”ينـزلُ ربُّنا تبارَكَ وتعالى كلّ ليلةٍ إلى سماءِ الدنيا, حينَ يَبقى ثُلثُ الليلِ الآخرُ فيقولُ: مَن يدعوني؟ فأستجيبَ لهُ, من يسألُني؟ فأعطِيَه, من يستغفرُني؟ فأغفر له. رواه البخاري||",
      "||اللهم أنت ربي لا إله إلا أنت، خلقْتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعتُ، أعوذ بك من شر ما صنعتُ، أبوء لك بنعمتك عليّ، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت” قال: “من قالها بالنهار موقنًا بها، فمات من يومه قبل أن يُمْسِي؛ فهو من أهل الجنة، ومن قالها من الليل، وهو موقن بها، فمات قبل أن يُصْبِح؛ فهو من أهل الجنة”. رواه البخاري.||",
      "||عن أنس رضى الله عنه قال سمعت رسول اللهصلى الله عليه وسلم يقول: “قال الله يا ابنَ آدمَ! إنّك ما دَعوتَني ورجَوتَني, غفرتُ لكَ عَلَى ما كانَ منكَ, ولا أُبَالي, يا ابنَ آدَمَ! لو بلَغَتْ ذنُوبُكَ عنَانَ السَّماءِ, ثمّ استغفرتَنِي غفرتُ لكَ, ولا أُبَالي, يا ابن آدَمَ إنّكَ لو أتَيتنِي بِقُرَابِ الأرضِ خطَايَا ثمّ لقِيتَني لا تُشرِكُ بي شيئاً, لأتيتُك بقُرابها مغفرةً. [صحيح الترمذي]||",
      "||عن أبي سعيد الخدري رضى الله عنه عن النبي صلى الله عليه وسلم قال: قال إبليسُ: وعَزّتك لا أبرح أُغوي عبادك ما دامت أرواحهم في أجسادهم فقال: وعِزّتي وجلالي, لا أزال أغفرَ لهم ما اسْتغفروني [صحيح الترغيب]||",
      "||قُلِ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الغفور الرحيم. [متفق عليه]||",
      "||سيد الاستغفار أن تقول: اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. وَمَنْ قَالَهَا مِنَ النَّهَارِ مُوقِنًا بِهَا،   فَمَاتَ مِنْ يَوْمِهِ قَبْلَ أَنْ يُمْسِيَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ، وَمَنْ قَالَهَا مِنَ اللَّيْلِ وَهُوَ مُوقِنٌ بِهَا، فَمَاتَ قَبْلَ أَنْ يُصْبِحَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ. [رواه البخاري].||",
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});



client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    var user = message.guild.member (message.mentions.members.first() || message.author);
      const embed = new Discord.MessageEmbed()
  .setColor("RANDOM") 
   .addField(`ID USER : [ ${user.id} ]`,`${user.user}`)
   .setThumbnail(user.user.avatarURL())
  .setFooter(`- Requested By: ${message.author.tag}`)
  message.channel.send({embed});
      }
  });


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'hide') {

    let men = message.guild.roles.cache.find(role => role.name === '@everyone');
    if(!men) return;

    await message.channel.updateOverwrite(men,{ 'VIEW_CHANNEL': false });
    await message.channel.send('تم اخفاء الشات');

     if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return;
  }
});


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'unlock') {

    let men = message.guild.roles.cache.find(role => role.name === '@everyone');
    if(!men) return;

    await message.channel.updateOverwrite(men,{ 'SEND_MESSAGES': true });
    await message.channel.send('تم فتح الشات 🔓');

     if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return;
  }
});


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if(command === 'lock') {

    let men = message.guild.roles.cache.find(role => role.name === '@everyone');
    if(!men) return;

    await message.channel.updateOverwrite(men,{ 'SEND_MESSAGES': false });
    await message.channel.send('تم قفل الشات 🔒  ');

     if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return;
  }
});


client.on('message', message => {
    if(!message.guild) return;
    if (message.content.startsWith(prefix + 'avatar')) {
    let args = message.content.split(' ').slice(1).join(' ');
    let user = message.mentions.users.first() || message.guild.members.cache.get(args) || message.author;
    let userAvatar = user.displayAvatarURL({dynamic: true, size: 512, format: 'png'});
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.username, user.displayAvatarURL({dynamic:true}))
    .setImage(userAvatar)
    .setDescription(`** [Avatar Link](${userAvatar}) **`)
    .setColor("RANDOM")
    .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
    message.channel.send(embed)
    }
})


client.on("message", message => {
  if(message.content === (prefix + "ping")) {
    message.channel.send(`**${client.ws.ping} ms**`) 
  }})










client.on('message', message => {
  if(message.author.bot)return;
  if (message.content.startsWith(prefix + 'طرد') || message.content.startsWith(prefix + 'kick')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick({
            reason: "No reason",
          })
          .then(() => {
           const embed = new Discord.MessageEmbed()
           .setColor("black")
          .setTitle(`**✅ ${user.tag} kicked from the server! ✈️**`)
          message.channel.send(embed);
          })
          .catch(err => {
            message.reply(`🙄 - I couldn't ban that user. Please check my permissions and role position.`);
            console.error(err);
          });
      } else {
        message.reply(`**🙄 - I can't find <@847789179294842880> in the ban list**`);
      }
    } else {
const embed = new Discord.MessageEmbed()
.setColor("black")
.setTitle("**Command: Kick**")
.setDescription(`
Kick a member.
 
**Usage:**
${prefix}kick (user) (reason)
 
**Examples:**
${prefix}kick ${message.author}
${prefix}kick ${message.author} spamming`)
message.channel.send(embed);
    }
  }
});




client.on("message", message => {
    let command = message.content.split(" ")[0];
    if (command == prefix + "unban") {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('❌ You Dont Have Premission \`Ban\`');
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('❌ I Dont Have Premission \`Ban\`');
        let user = message.content.split(" ").slice(1).join(" ");
      if (user == "all") {
        message.guild.fetchBans().then(bans => {
            bans.cache.forEach(ban => {
            message.guild.members.unban(ban);
          });
        });
        return message.channel.send(`☑️ Unbanned all members `);
      }
      if (!user)
        return message.channel.send(embed = new Discord.MessageEmbed()
        .setTitle(`Help!`)
        .setColor("black")
        .addField(`\`Ex\``, `\`${prefix}unban 772546533203247115\` | for unban member in the list`, false)
        .addField(`\`Ex\``, `\`${prefix}unban all\` | for unban all members in the list`, false)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL()))
      message.guild.members.unban(user).then(m => {
        message.channel.send(`☑️ Done Unbanned \`${m.username}\``);
    }).catch(err => {
            message.channel.send(`> ❌ Err Can't Found \`${user}\` In The List`);
        });
    }
});


client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")){
        if(!normal.member.hasPermission('BAN_MEMBERS')) return normal.channel.send("You don't have permissions")
           if(!normal.guild.me.hasPermission('BAN_MEMBERS')) return normal.channel.send("I don't have permissions")
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.channel.send(`**Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')} **`)
                if (member.id === normal.author.id)return normal.reply(`**You can't ban yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't ban me dumbass**`)
                     if(!member.bannable) return normal.channel.send(`**The member role is higher than me**`);

         await member.ban({reason:`He/She just got bannned`})
        normal.channel.send(`**${member.user.username} Has been BANNNED ✈**`)
    } 
})

client.on("message", async message => {
if(message.content.startsWith(prefix + "mute")) {
if(!message.member.hasPermission('MUTE_MEMBERS')) {
message.channel.send('You Dont Have `MUTE_MEMBERS` Permission ');
return;
};
if(!message.guild.member(client. user).hasPermission('MUTE_MEMBERS')) {
message.channel.send('You Dont bot `MUTE_MEMBERS` Permission ');
return;
}
if(message.content.startsWith ()) return;
const role = message.guild.roles.cache.find(role => role.name === 'Muted');
if(!role)  {
message.guild.roles.create({data: { 
name: 'Muted',
permissions: [],
color: 'blue'}})}
const tag = message.mentions.members.first() 
let args = message.content.split(" ")
if(!tag) { 
message.channel.send(">>> ❌ **Please mention the user**")
return;
}

tag.roles.add(role).then((m) => {
message.channel.send(`>>> **Done muted of the user\n User : ${tag}**`)
var time = args[2]
setTimeout(() => {
tag.roles.remove(role);
}, ms(time))
return 
})}})


client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "uptime")){
    var embed = new Discord.MessageEmbed()
    .setDescription(`${pretty(client.uptime)}`)
    .setColor(badboy.member.displayHexColor)
    badboy.channel.send(embed)
  }
})


const pretty = require("pretty-ms");





client.on('message', bader=> {
  if (bader.content === "خط"||bader.content === "لاين"|| bader.content === "line" ) {
 if(!bader.member.roles.cache.has('926141157652725821')) return;//عشان بس رتبه محدده تستعمل الامر
        bader.delete()
    bader.channel.send('https://cdn.discordapp.com/attachments/885327294724452401/917111213073244191/-----.gif');
  }
});




client.on("message", message => {
  if (message.content === prefix + 'allbots') {
    let u = message.guild.members.cache
      .filter(k => k.user.bot)
      .map(h => `<@${h.id}>`)
      .join(`\n`)

    message.channel.send(`**There Is ${message.guild.members.cache.filter(j => j.user.bot).size} Bots Server !**\n${u}`).catch(j => {
      message.channel.send('There is An Error')
    })

  }
})

client.on("message", message => {
    if (message.content.startsWith(prefix + "setnick")) {
      if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("You Dont Have Permission")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username === args[1])
      if (!member) return message.reply(`Type User Example: ${prefix}setnick @user`)
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if (!nick) {
        g.setNickname(member.username)
      }
      g.setNickname(nick)
      const l = g.nickname || member.username
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
        .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
        .setTitle("New NickName:")
        .addField(`User Nick Change`, `${member}`, true)
        .addField(`Befor:`, `**${l}**`, true)
        .addField(`After:`, `**${nick}**`, true)


        .setFooter(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
        .setTimestamp()
      message.channel.send(embed)
    }
})






client.on("message", message =>{
  if (message.content.startsWith(prefix + "bot")){
    let ahmed = new Discord.MessageEmbed()
    .setTitle("Bot Info")
    .addField(`**Name :**`,`${client.user.tag}`, true)
    .addField(`**Ping :**` ,`${client.ws.ping}`, true)
    .addField(`**Servers :**`,`${client.guilds.cache.size}`, true)
    .addField(`**Users :**`, `${client.users.cache.size}`,true)
    .addField(`**Channels :**`,`${client.channels.cache.size}`,true)
    .addField(`**ID :**`,`${client.user.id}`, true)
    .setThumbnail(`${message.author.avatarURL({dynamic:true})}`)
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
    .setFooter(message.author.username, client.user.avatarURL({dynamic:true}))
    .setTimestamp()
    .setColor(`#2f3136`)
    message.lineReply(ahmed)
  }
});

setInterval(() => {
  const channelid = "919547057952395324" ////Channel Id
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);

client.on("message", message => {
    if (message.content.includes("كلب") || message.content.includes("غبي"))
        message.delete();
});




 let roomid =  "855868433747673088";//ايدي الروم  
 let oomid =  "855868434959826959";//ايدي الروم  
client.on("message", message => { // تقديم اداره
  if(message.content.startsWith(prefix + "تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = client.channels.cache.get(roomid);
            if(channel) {
            message.channel.send(`**Loading | جاري التحميل **`).then( (m) =>{
              m.edit(`**<@${message.author.id}> Name | اسمك **`)
              m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(`**Loading | جاري التحميل**`).then( (m) =>{
                      m.edit(`**<@${message.author.id}> Age|عمرك**`)
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send(`**Loading | جاري التحميل **`).then( (m) =>{
                            m.edit(`***<@${message.author.id}>  Account Age|عمر حسابك في الديسكورد**`)
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send(`**Loading | جاري التحميل**`).then( (m) =>{
                                  m.edit(`***<@${message.author.id}>  you agree to the rules of the staff | هل ستوافق علئ قوانين الاداره**`)
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send(`**Loading | جاري التحميل **`).then( (m) =>{
                                        m.edit(`***<@${message.author.id}> Duration of your reaction | مدة تفاعلك **`)
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(`**Wait The Owners **`).then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL()) 
                          .setColor('#c3cdff')
                        .setTitle(`\`Apply Administartion\` \n سوف يتم الرد عليك قريبا من الادارة , \n > ID: ${message.author.id}`)
                        .addField('> \`Name:\`', ` ** ${name} ** ` , true)
                        .addField('> \`Age:\`', ` ** ${age} ** ` , true)
                        .addField('> \`Your period of stay Discord:\`',`** ${ask} ** ` , true)
                        .addField('> \`Do you know all the laws:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`Duration your reaction: ?\`',` ** ${ask3} ** ` , true)
                        .addField('> __Your Account Created: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });


 


client.on("message", message => {
if(message.content.startsWith(prefix + "banner")){
  const args = message.content.slice(" ").trim().split(/ +/);
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!user){
  message.channel.send(`https://api.abderrahmane300.repl.co/banner/${message.author.id}`)
} if(user){
if(user.user.bot) return message.channel.send("Bots not Have banners :(")
message.channel.send(`https://api.abderrahmane300.repl.co/banner/${user.id}`);
}      
}
})


client.on("message" , Leon => {
if(Leon.content === "برب")

Leon.channel.send(" <a:Fireblue:884061458143543307> تيت ياقلبي لا تتأخر /ي")
});

client.on("message" , Leon => {
if(Leon.content === "السلام عليكم")

Leon.channel.send("وعليكم السلام ورحمة الله وبركاته")
});

client.on("message" , Leon => {
if(Leon.content === "الرسالة")

Leon.channel.send("الرد")
});

client.on("message" , Leon => {
if(Leon.content === "الرسالة")

Leon.channel.send("الرد")
});

client.on("message",Baltra => {
    if(Baltra.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(Baltra.author.username,Baltra.author.avatarURL())
  .setThumbnail(Baltra.author.avatarURL())
  .setTitle("Info User")
  .addField('``Name``', ` ${Baltra.author.tag} `, true)
  .addField('``ID``', ` ${Baltra.author.id} `, true)  
  .addField('``Created At``', ` ${Baltra.author.createdAt.toLocaleString()} `, true)
  .setTimestamp(); 
  Baltra.channel.send(embed)
  }
  });



client.on('message', msg => {
if(msg.content == (prefix + "invite")) {
let embed = new Discord.MessageEmbed()
.setAuthor(`Requested by : ${msg.author.tag}` , msg.author.avatarURL({dynamic:true}))
.setTitle(`:arrow_right: Invite Me`)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client. user.id}&permissions=0&scope=bot`)
.setTimestamp()
msg.channel.send(embed)
msg.react(`☑`)
}
});

client.on('message', msg => {
if(msg.content.startsWith(prefix + "report")){
const reason = msg.content.split(" ").slice(2).join(" ");
let reportschannel = msg.guild.channels.cache.find(channel => channel.name === "report");
if(!reportschannel) return msg.channel.send("لا استطيع العثور على روم الابلاعات");
const user = msg.mentions.users.first();user
if(!user) return msg.channel.send("منشن العضو");
if(!reason) return msg.channel.send("اكتب السبب");
  if (user.id == msg.author.id)
        return msg.channel.send("لا تسطيع الابلاغ على نفسك")

              if(user.bot) return msg.channel.send("لا تسطيع الابلاغ عن بوت")

if(msg.author.bot || !msg.guild) return msg.reply("this command for server only")

const embed = new Discord.MessageEmbed()
.setTitle("ابلاغ جديد")
.addField("العضو", `${user.username}`)
.addField("السبب", `${reason}`)
.addField("اسم المبلغ", `${msg.author.username}`)
.addField("ايدي المبلغ", `${msg.author.id}`)
.setFooter("ابلاغ جديد")

reportschannel.send(embed)
msg.channel.send("تم ارسال ابلاغك بنجاح")
}

})

client.on('message', async message => {
  if(message.content.startsWith(prefix + 'vkick')){
    const args = message.content.slice(0).trim().split(/ +/)
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[1])
    if(!message.channel.guild || message.author.bot) return;
    if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
    return message.channel.send("You Need \`MOVE_MEMBERS\` Permissions");
    if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
    return message.channel.send(`Im Need \`MOVE_MEMBERS\` Permissions`);
    if(!message.member.voice.channel)
    return message.channel.send("Your are not in voice channel");
    if(!user)
    return message.channel.send(`
مثال:
${prefix}vkick @'ны'.#0001
${prefix}vkick 837922694535184436
`);
    if(!message.guild.member(user).voice.channel)
    return message.channel.send(`This User Is Not in Voice Channel`);
    await user.voice.kick();
    message.channel.send(`${user.user} Has Been Kickd From **Voice**`);
  }
})

client.on('message', message =>{
    if(message.content === prefix +"ha"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: false}).then(() => {
      });
    })
    message.channel.send(`تم اخفاء جميع الرومات`)
    }
});


client.on('message', message =>{
    if(message.content === prefix +"sh"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.channel.send(`تم اظهار جميع الرومات`)
    }
});



client.on('message', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`**Server Bans Counter:** ${bans.size} `))
      .catch(console.error);
  }
});




client.on('message', message => {
  if(message.content.startsWith(prefix + "j")) {
    
      
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Help \n prefix : ${prefix}`)
    .addField('**🌍 General Commands** ',`\`command 1 , command 2 , command 3 \``)
    .addField('**🔧 Admin Commands**',`\command 1 , command 2 , command 3\``)
    .addField('🎮 Fun Commands',`\`command 1 , command 2 , command 3\``)
      .addField('**💵 Economy / Credits**',`\`command 1 , command 2 , command 3\``)
      .addField('🛡️ Protection Commands ',`\`command 1 , command 2 , command 3\``)
      .addField('🎵 Music Commands', `\`command 1 , command 2 , command 3\``)
      .setImage('https://data.whicdn.com/images/336959274/original.gif')
    .setAuthor(client.user.tag , client.user.avatarURL())
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setFooter(`Requested By ${message.author.tag}` , message.author.avatarURL({dynamic:true}))
    
    message.channel.send(embed)
    message.react('✅')
    
  } 
}) 





client.on('message', layerCoding => {
let command = layerCoding.content.toLowerCase().split(" ")[0];
if (command == `${prefix}rules` || command == `${prefix}القوانين` || command == `${prefix}قانون`) {
   if (layerCoding.author.bot) return;
    var angelo = new Discord.MessageEmbed()
    .setTitle(`rules of ${layerCoding.guild.name}`)
.setDescription(`
\`R1\`- **ممنوع السب**
\`R2\`- **ممنوع السبام بجميع أنواعه**
\`R3\`- **ممنوع نشر الروابط**
\`R4\`- **احترام الأعضاء**
\`R5\`- **يُمنع إرسال ملفات غير الصور والفيديوهات**
\`R6\`- **يُمنع التدخل في شؤون الإدارة**
\`R7\`- يُمنع طلب أي شيء حرفياً سواء رتب او كريدت او** **نيتروهات 
\`R8\`- **يُمنع التحدث في السياسة او الأديان**
\`R9\`- **عدم التنمر على اي احد من الأعضاء**
\`R10\`- **ممنوع الازعاج في الرومات الصوتية**
\`R11\`- **يُمنع بيع أي شيء حرفياً في السيرفر**
`)
.setColor("GOLD")
    .setThumbnail(layerCoding.guild.iconURL({dynamic: true}))
    layerCoding.channel.send(angelo)
  }
});



client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addField(`Error :x:`, `Please type your broadcast message !`)
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache
      .filter(m => m.presence.status !== "online")
      .forEach(m => {
        if (m.user.bot) return;
        m.send(`${args}\n ${m}`)
          .then(() => {
            console.log(`I Could Send To : ${m.user.tag} ✅`);
          })
          .catch(function() {
            console.log(`I Couldn't Send To : ${m.user.tag} ❌ `);
          });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `📬 : تـم ارسـال رسـالـتـك الـى : \`${
          message.guild.members.cache.filter(
            m => m.presence.status !== "online"
          ).size
        }\` `
      )
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`جـاري الارسال الرساله الى جميع الاعضاء ..`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "obc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addField(`Error :x:`, `Please type your broadcast message !`)
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        if (m.user.bot) return;
        m.send(`${args}\n ${m}`)
          .then(() => {
            console.log(`I Could Send To : ${m.user.tag} ✅`);
          })
          .catch(function() {
            console.log(`I Couldn't Send To : ${m.user.tag} ❌ `);
          });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `📬 : تـم ارسـال رسـالـتـك الـى : \`${
          message.guild.members.cache.filter(
            m => m.presence.status !== "offline"
          ).size
        }\` `
      )
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`جـاري الارسال الرساله الى جميع الاعضاء ..`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }
});


client.on("guildMemberAdd", member => {
  let id = member.user.id;
  let m = member.user;
  var embed = new Discord.RichEmbed()
    .setThumbnail(m.avatarURL)
    .setImage("")
    .addField(
      `<a:NW:620727189528117258><a:NE:620727187196215306><a:NL:620727189272526876><a:NC:620727189184446501><a:NO:620727189205155840><a:NM:620727189154955265><a:NE:620727187196215306>`,
      `<@${id}>`
    )
    .addField(" **__Welcome To Server__**", `**${member.guild.name}**`)
    .addField("**انت العضو رقم** ", `${member.guild.memberCount} `)
    .setColor("RANDOM");
  var channel = member.guild.channels.find("✨・𝗪𝗲𝗹𝗰𝗼𝗺𝗲", "s"); //تعديل مهم اسم روم الولكم
  if (!channel) return;
  channel.send({ embed: embed });
});



const topics = require("topics.js")//npm i topics.js
client.on('message', message => {
  if(message.content.startsWith(prefix + "lo")){
  message.channel.send(new Discord.MessageEmbed().setDescription(topics.Lo()).setColor('BLACK').setThumbnail(message.author.avatarURL({dynamic: true})).setAuthor(message.author.tag).setFooter(message.guild.name,message.guild.iconURL({dynamic: true})))


  
  }
});


require('discord-reply');
client.on('message', message => {
if(message.content.startsWith(prefix + 'server')){
const embed = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setTitle(`${message.guild.name} Info`)
.setColor('RANDOM')
.addField(`Server Name`, `${message.guild.name}`, true)
.addField(`Server ID  🆔`, `${message.guild.id}`, true)
.addField(`Server OwnerShip 🔰`, `<@${message.guild.ownerID}>`, true)
.addField(`Server Members 🔢`, `${message.guild.memberCount}`, true)
.addField(`Server Channels #⃣`, `${message.guild.channels.cache.size}`, true)
.addField(`Server Region 🌍`, `${message.guildregion}`, true)
.addField(`Server Created At 🕛`, `<t:${parseInt(message.guild.createdAt / 1000)}:R>`, true)
.setFooter(`Requested By: ${message.author.tag}`)
message.lineReplyNoMention(embed)
}
});  


client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = new Discord.MessageEmbed()
          .setColor('#ffffff')
          .setImage(`https://api.probot.io/profile/${uus.id}`)
        message.channel.send(id)
      }
      );
    }
    });


const bruh =require("discord-tts-ar");

    client.on("message",msg=>{
        if(msg.content.startsWith(`${prefix}mm`)){
            const args = msg.content.split(" ").slice(1).join(' ');
            if(!args)return msg.channel.send(`Type Something To Say (In Arabic)`);
            const broadcast = client.voice.createBroadcast();
            var channel = msg.member.voice.channel;
            if(!channel)return msg.channel.send(`You Have To Be In A Voice Channel First !`);
            channel.join().then(connection => {
                broadcast.play(bruh.getVoiceStream(args));
                const dispatcher=connection.play(broadcast);
            });
        }
    });


client.on('message', layer => {
  if (layer.content.startsWith(prefix + "slap")) {
    var user1 = layer.mentions.members.first()
    var user2 = layer.author
    if (!user1) return layer.channel.send("** Plese mention someone to slap.**");
 if (user1.id == layer.author.id) return layer.channel.send("**You cannot slap yourself**")
    let embed = new Discord.MessageEmbed()
    .setDescription(`**    ${user1} are slaped By ${user2}**`)
    .setColor("BLACK")
    .setFooter(`Requested by ${layer.author.tag}`, `${layer.author.avatarURL({dynamic : true})}`)
    .setImage(`https://cdn.discordapp.com/attachments/801526558464409691/816389676750340127/Li9mx3A.gif`)
    layer.channel.send(embed)
  }
});



client.on('guildMemberAdd', message => {
if (message.guild.id === "913715186039394324")//Server Id
{
const role = message.guild.roles.cache.find(rol => rol.id == '915192775950086174');//role id 
message.roles.add(role);
}
});

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.channel.guild) return; 
  let args = message.content.split(' ');  
  let command = args.shift().toLowerCase()
  if(command === prefix + `color` || command === 'لون') {
        if(isNaN(args)) return message.channel.send('🙄 - Please choose color number')
        let role = message.guild.roles.cache.find(r => r.name == args)
        if(!role) return message.channel.send('🙄 - Wrong color number')
        message.member.roles.cache.filter(rolee => !isNaN(rolee.name)).forEach(role => {
            message.member.roles.remove(role)
        })
            if (message.member.roles.cache.has(role.id)) {
              message.member.roles.remove(role).then(() => {
                return message.channel.send('✅ - Color removed successfully.');
              });
            } else {
              message.member.roles.add(role).then(() => {
                    return message.channel.send('✅ - Color has been changed successfully.');
       });
    }}
  if(command === prefix + `colors` || command === 'الوان') {
      let roles = message.guild.roles.cache.filter(r => !isNaN(r.name)) .sort((a,b) => b.name - a.name).map(c => c.name).join("\n")
      message.channel.send(` 📜 - __** List Colors **__ \n\`\`\`${roles}\`\`\``)
  }
})



client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "llk")) {
    if (message.author.id == message.guild.ownerID) {
      message.author
        .send(
          `   
\`الاوامر العامة\` :postbox:
\`${prefix}bot\` : لعرض معلومات عن البوت 
\`${prefix}user\` : لعرض معلومات عنك 
\`${prefix}avt\` :يعرض لك صورت  اي شخص عن طريق الايدي 
\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه 
\`${prefix}color\` : لأختيار لونك في السيرفر 
\`${prefix}colors\` : غير لونك 
\`${prefix}inf\` : عدد الدعوات للسيرفر

\`الاوامر الإدارية\` :stars:
\`${prefix}ban\` : لحظر شخص من السيرفر
\`${prefix}kick\` : لطرد شخص من السيرفر
\`${prefix}unlock\` : لفتح الشات
\`${prefix}lock\` : لقفل الشات 
\`${prefix}mute\` : لإسكات شخص
\`${prefix}unmute\` : لـ فك إسكات شخص
\`${prefix}say\` : البوت يكرر كلامك
\`${prefix}ls\` : لإظهار جميع بوتات السيرفر


\`\`اوامر التقديم\`\` :pencil: 
\`${prefix}room1\` : لعمل روم التقديمات
\`${prefix}room2\` : لعمل روم القبول والرفض
\`لقبول تقديم عضو : \`${prefix}قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
لرفض عضو : ${prefix}رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`

  `
        )
        .then(() => {
          message.author.send(`

\`أوامر الكريدت\` :credit_card: 
\`${prefix}credits\` : لمعرفة رصيدك  
\`${prefix}daily\` : لأخذ جائزة يومية
\`يمكن التحويل من شخص لشخص + يزيد الكريدت فقط من امر دايلي\`

\`أوامر الموسيقى \` :notes:
\`${prefix}Play\` : تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`${prefix}Pause\` : ايقاف مؤقت الاغنية
\`${prefix}Resume\` : اكمال الاغنية 
\`${prefix}stop\` : لأيقاف الأغنية وخروج البوت من الروم
\`${prefix}forceskip\` : لتخطي الأغنية بشكل مباشر
\`${prefix}Queue\` : عرض القائمة 
\`${prefix}skipto\` : لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`${prefix}Skip\` : تخطي للاغنية التالية 
\`${prefix}Volume\` : تغيير الصوت [vol] 
\`${prefix}np\` : عرض مايتم تشغيله الان [np] 
\`${prefix}repeat\` : تكرار الاغنية 

\`أوامر الحماية\` :closed_lock_with_key:
\`${prefix}settings limitsban\` : تحدد العدد الي تبيه لو حد بند  البوت يبنده 
\`${prefix}settings limitskick\` : تحدد العدد الي تبيه لو حد طرد 3 او 4 البوت يبنده 
\`${prefix}settings limitsroleD\` : تحدد العدد الي تبيه لو حد مسح رول 3 او 4 البوت يبنده 
\`${prefix}settings limitsroleC\` : تحدد العدد الي تبيه لو حد صنع روم 3 او 4 البوت يبنده 
\`${prefix}settings limitschannelD\` : تحدد العدد الي تبيه لو حد مسح روم 3 او 4 البوت يبنده 
\`${prefix}settings limitstime\` : تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة البوت يبنده
\`${prefix}antibots on\` : منع دخول بوتات
\`${prefix}antibots off\` : السماح للبوتات بالدخول
\`شرح البوت \` : <https://youtu.be/6B9nrQp02Rk>
`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    } else {
      message.author
        .send(
          `   
\`الاوامر العامة\` :postbox:
\`${prefix}bot\` : لعرض معلومات عن البوت 
\`${prefix}user\` : لعرض معلومات عنك 
\`${prefix}avt\` :يعرض لك صورت  اي شخص عن طريق الايدي
\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه 
\`${prefix}color\` : لأختيار لونك في السيرفر 
\`${prefix}colors\` : غير لونك 
\`${prefix}inf\` : عدد الدعوات للسيرفر
\`${prefix}رابط\` : اكتب رابط بالشات يجيك رابط السيرفر خاص

\`الاوامر الإدارية\` :stars:
\`${prefix}clear\` : لمسح الشات 
\`${prefix}ban\` : لحظر شخص من السيرفر
\`${prefix}kick\` : لطرد شخص من السيرفر
\`${prefix}open\` : لفتح الشات
\`${prefix}close\` : لقفل الشات 
\`${prefix}mute\` : لإسكات شخص
\`${prefix}unmute\` : لـ فك إسكات شخص
\`${prefix}new\` : فتح التكت
\`${prefix}closet\` : لحذف روم التكت
\`${prefix}say\` : البوت يكرر كلامك
\`${prefix}move\` : لسحب الشخص الى روومك
\`${prefix}reply\` : لصنع رد تلقائي
\`${prefix}setLog\` : لتحديد روم السجلات 
\`${prefix}setby\` : تحديد روم المغادرة
\`${prefix}setWelcomer <channel name>\` : لتحديد روم الولكم 
\`${prefix}setMessage\` : لتحديد رسالة الترحيب 
\`${prefix}setVc\` <channel name> : لتحديد روم الفويس اونلاين 
\`${prefix}vc off\` : لإغلاق روم الفويس اونلاين
\`${prefix}ls\` : لإظهار جميع بوتات السيرفر
\`${prefix}role\` : لاعطاء شخص رتبة
\`${prefix}role all\` : لـ إعطاء الجميع رتبة معينة

\`\`اوامر التقديم\`\` :pencil: 
\`${prefix}room1\` : لعمل روم التقديمات
\`${prefix}room2\` : لعمل روم القبول والرفض
\`${prefix}لقبول تقديم عضو : \`قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
 ${prefix}لرفض عضو : رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`



  `
        )
        .then(() => {
          message.author.send(`

\`أوامر الكريدت\` :credit_card: 
\`${prefix}credits\` : لمعرفة رصيدك  
\`${prefix}daily\` : لأخذ جائزة يومية
\`يمكن التحويل من شخص لشخص + يزيد الكريدت فقط من امر دايلي\`

\`أوامر الموسيقى \` :802623808699367436:
\`${prefix}Play\` : تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية [p]
\`${prefix}Pause\` : ايقاف مؤقت الاغنية
\`${prefix}Resume\` : اكمال الاغنية 
\`${prefix}stop\` : لأيقاف الأغنية وخروج البوت من الروم
\`${prefix}forceskip\` : لتخطي الأغنية بشكل مباشر
\`${prefix}Queue\` : عرض القائمة 
\`${prefix}skipto\` : لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة
\`${prefix}Skip\` : تخطي للاغنية التالية 
\`${prefix}Volume\` : تغيير الصوت [vol] 
\`${prefix}np\` : عرض مايتم تشغيله الان [np] 
\`${prefix}repeat\` : تكرار الاغنية 
\`شرح البوت \` : <https://youtu.be/6B9nrQp02Rk>

`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ba') {

    try {
    let user = await message.mentions.members.first() || await client.users.fetch(args[0]);

    let embed1 = new Discord.MessageEmbed()
    .setImage(`https://api.abderrahmane300.repl.co/banner/${message.author.id}.gif`);

    if(!user) return message.reply(embed1).catch(err => undefined);

    let embed2 = new Discord.MessageEmbed()
    .setImage(`https://api.abderrahmane300.repl.co/banner/${user.id}.gif`);
    if(user) return message.reply(embed2).catch(err => undefined);

    } catch {
      await message.channel.send('id/mentions user/ ?')
    }
  }
});







client.on("channelCreate", channel => {
channel.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channelc = client.channels.cache.get(channel_create)
let embed = new Discord.MessageEmbed()
.setTitle('Channel Create')

.addField(`Channel Name:`, [` ${channel.name}  `])
.addField(`By : `,`<@${userID}>`)
.addField(`Channel`, `<#${channel.id}>`)
.setTimestamp()
.setColor(`BLUE`)
channelc.send(embed)
})
})


client.on("channelDelete", channel => {
channel.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channelc = client.channels.cache.get(channel_delete)
let embed = new Discord.MessageEmbed()
.setTitle('Channel Delete')

.addField(`Channel Name:`, [` ${channel.name}  `])
.addField(`By : `,`<@${userID}>`)
.setTimestamp()
.setColor(`BLUE`)
channelc.send(embed)
})
})


client.on("roleCreate", role => {
role.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channel = client.channels.cache.get(role_create)
let embed = new Discord.MessageEmbed()
.setTitle('Role Create')

.addField(`Role Name:`, [` ${role.name}  `])
.addField(`By : `,`<@${userID}>`)
.setTimestamp()
.setColor(`BLUE`)
channel.send(embed)
})
})


client.on("roleDelete", role => {
role.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channel = client.channels.cache.get(role_delete)
let embed = new Discord.MessageEmbed()
.setTitle('Role Delete')

.addField(`Role Name:`, [` ${role.name}  `])
.addField(`By : `,`<@${userID}>`)
.setTimestamp()
.setColor(`BLUE`)
channel.send(embed)
})
})


const lineReply = require("discord-reply")
const owner = 'ايدي حقك'
client.on('message', message=> {
  if(message.content.startsWith(prefix + "setstatus")){
        if(message.author.id !== owner) return;

    const args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply("اكتب الحالة الجديدة")
    
 message.lineReply(new Discord.MessageEmbed().setDescription(`[1] Playing
[2] Listening
[3] Streaming
[4] Watching
[0] Cancel`))
   message.channel.awaitMessages(m => m.author.id == message.author.id, { max: 1, time: 20000 }).then(collected => {
     if (collected.first().content.toLowerCase() == '1') {
       message.lineReply(new Discord.MessageEmbed().setDescription('تم تغيير الحالة إلى PLAYING')),
         client.user.setActivity(args, {type: "PLAYING"})
       
     } else if (collected.first().content.toLowerCase() == '2') {
       message.lineReply(new Discord.MessageEmbed().setDescription('تم تغيير الحالة إلى LISTENING'))
         client.user.setActivity(args, {type: "LISTENING"})
       
     } else if (collected.first().content.toLowerCase() == '3') {
       message.lineReply(new Discord.MessageEmbed().setDescription('تم تغيير الحالة إلى STREAMING')).
         client.user.setActivity(args, {type: "STREAMING"})
      
     } else if (collected.first().content.toLowerCase() == '4') {
       message.lineReply(new Discord.MessageEmbed().setDescription('تم تغيير الحالة إلى WATCHING'))
         client.user.setActivity(args, {type: "WATCHING"})
       
     } else if (collected.first().content.toLowerCase() == '0') {
       message.lineReply(new Discord.MessageEmbed().setDescription('تم الإلغاء'))
     }
   }).catch(() => {
     message.lineReply(new Discord.MessageEmbed().setDescription('مر الوقت اللازم على الآمر'))
   })
 

}
})


client.on('message', async(message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  if(message.channel.type === 'dm') return;
if(command === 'مسح') {
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
    if(message.channel.type === 'dm') return;
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`> usage : ${prefix}delete [ammount of messages]`))
    if(isNaN(args)) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('> numbers only!!'))
    if(args[0] > 100 || args[0] <= 0) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('> max number 100 & min number 1'))
    message.channel.bulkDelete(args[0], true).then(() => {
  message.channel.send(`Deleted ${args[0]} messages.`).then(msg => msg.delete({timeout:3000}));
})
  }
})

client.login(process.env.token).catch(err => {console.log('Token Not Working..')});

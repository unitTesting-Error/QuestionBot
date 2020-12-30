
const Discord = require("discord.js");

const client = new Discord.Client();

var fs = require('fs');

const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/iqdv912oc/"
});

const yts = require("yt-search");
const ytdl = require('ytdl-core');


client.on("ready",()=>{
sent_holiday_message()
});


function sent_holiday_message(){
    setInterval(function(){
        var d = new Date();
        let month = d.getMonth()
        let date = d.getDate()
        let mmdd = month.toString() + "-"+date.toString();
        fs.readFile("inforamtion.json",(err,data)=>{
            let json = JSON.parse(data)
            if(mmdd in json["Holiday"]){
                client.channels.cache.get("750395242368204972").send(json["Holiday"][mmdd]);
            }
        })
    }, 43200000)
}

//when someone send a message
client.on("message",(receivedMessage) =>{
    //channel id for school 780571908064280596
    //channel id for testing 771619758943764493
    if (receivedMessage.attachments.size > 0 && (receivedMessage.channel.id == "780571908064280596" || receivedMessage.channel.id == "771619758943764493") ){
       receivedMessage.attachments.forEach(element => {
           const url = element.url;
           model.classify({
               imageUrl: url,
           }).then((predictions) => {
               console.log("Predictions:", predictions);
               for(let stuff of predictions){
                   receivedMessage.reply(stuff["class"]+": " + String(stuff["score"]*100));
               }
               let item1 = predictions[0]["score"]
               let item2 = predictions[1]["score"]
               if(item2 >item1){
                   receivedMessage.reply(predictions[1]["class"])
               }else{
                   receivedMessage.reply(predictions[0]["class"])
               }
               
            //    receivedMessage.reply(predictions)
            //    receivedMessage.reply(predictions[1])
           }).catch((e) => {
               console.log("ERROR", e);
           });
       });

    }

    if(receivedMessage.content[0] == "`"){


        let command = receivedMessage.content.split("`");
        let primary = command[1];
        let usablecommand = primary.split(" ");
        console.log(primary);
        if(usablecommand[0] == "p"){
            usablecommand.shift()
            let secondary = usablecommand.join(" ");
            const voicechannel = receivedMessage.member.voice.channel;
            if(!voicechannel){
                return receivedMessage.reply("Be in a voice channel please");
            }
            console.log(secondary);
            receivedMessage.reply("ok "+ secondary +" is playing now");
            voicechannel.join()
            getYT_URL(secondary).then(item =>{
                play(voicechannel,item,receivedMessage);
            });
        }

        if(usablecommand[0]=="leave"){
            const voicechannel = receivedMessage.member.voice.channel;
            voicechannel.leave();
        }
    

    }




})
async function getYT_URL (secondary){
    const video = await yts(secondary);
    const video_list = video.videos.slice(0,1);
    return video_list[0].url
}

async function play(channel,url,message){
    let connect = await channel.join();
    const stream = ytdl(url);
    const dispatcher = connect.play(stream);
    dispatcher.on("end",() =>{
    channel.leave();
    message.channel.send("Done");
    });
}
//login the bot
// client.login(process.env.token);
client.login("NzgwMjE3MDMwNzYyNTYxNTg2.X7r3uw.d1tPDkjbLeHaYk36lgDD1THu_8Q");
//node questionbot.js 
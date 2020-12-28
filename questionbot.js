
const Discord = require("discord.js");

const client = new Discord.Client();

var fs = require('fs');

const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/iqdv912oc/"
});

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

    if (receivedMessage.attachments.size > 0 && receivedMessage.channel.id == "780571908064280596" ){
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




})

//login the bot
client.login(process.env.token);
//node questionbot.js 
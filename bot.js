// const schedule = require('node-schedule');
//
// //
const Discord = require('discord.js');
const client = new Discord.Client();
//
//
// const CSE116_Jesse = '770800149471035407';
// const CSE116_Nasrin = '';
// const CSE191_Nasrin = '';
// const CSE191_Knepley = '';
//
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // console.log(CSE116_Jesse);
    // setInterval(()=>{
    //     const d = new Date();
    //     const NewDay = new Weekly_reminder(d.getDay());
    //     // console.log(NewDay);
    //     NewDay.run();
    // },60000)
});
//
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    if(msg.content.startsWith("!") || msg.author.id == "531799714589442068" ){
        if(msg.toLowerCase() == "!purr"){
            const MessMessage = ["bi*ch", "meow", "purrr","?"]
            msg.channel.send(MessMessage[Math.floor(math.random()*MessMessage.length)])
        }else if(msg.content.toLowerCase().contains("test") && msg.content.toLowerCase().contains("100")){
            msg.reply("bad test bro")
        }
    }
});
//
client.login(process.env.token);
//
// // function officeHour(className,TaName,Channel,timeInbetween){
// //     const Message = "Office Hour for "+className+", "+ TaName+" has started."
// //     SentChannel(Channel,Message)
// //     const EndMessage = "Office Hour for "+className+", "+ TaName+" has ended."
// //     setTimeout(()=>{SentChannel(Channel,EndMessage)},timeInbetween)
// // }
//
// class WeekDay{
//     constructor(){
//         // this.DateObject = new Date();
//         // this.Hours = this.DateObject.getHours();
//         // this.Minutes = this.DateObject.getMinutes();
//         // this.weekDay = this.DateObject.getDay();
//     }
//
//
//     classStarting(className,channel){
//         const Message = className + " is starting soon"
//         SentChannel(channel,Message)
//     }
//
//     runningOfficeHourCse191(){
//         // console.log("Hello")
//     }
// }
//
// class Monday extends WeekDay{
//     constructor() {
//         super()
//     }
//
//     runningOfficeHourCse191(){
//         const CSE191nasrinTA1 = schedule.scheduleJob({hour: 12, minute: 30, seconds:0,dayOfWeek: 1}, function(){
//             officeHour("CSE191","Nasrin Akhter",CSE191_Nasrin,5400000)
//         });
//
//         const CSE191nasrinTA2 = schedule.scheduleJob({hour: 9, minute: 30,seconds:0, dayOfWeek: 1}, function(){
//             officeHour("CSE191","Zhanghexuan Ji",CSE191_Nasrin,7200000)
//         });
//
//         const CSE191nasrinTA3 = schedule.scheduleJob({hour: 14, minute: 0, seconds:0, dayOfWeek: 1}, function(){
//             officeHour("CSE191","Anthony Hom",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191nasrinTA4 = schedule.scheduleJob({hour: 16, minute: 0, seconds:0,dayOfWeek: 1}, function(){
//             officeHour("CSE191","Kyung Won Lee",CSE191_Nasrin,7200000)
//         });
//
//         const CSE191nasrinTA5 = schedule.scheduleJob({hour: 15, minute: 0, seconds:0,dayOfWeek: 1}, function(){
//             officeHour("CSE191","Eshan Chowdhury",CSE191_Nasrin,3600000)
//         });
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour: 8, minute: 0, seconds:0,dayOfWeek: 1}, function(){
//             officeHour("CSE116","Marcos, Mike (Discord)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 1}, function(){
//             officeHour("CSE116","Sia(Zoom)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA3 = schedule.scheduleJob({hour: 15, minute: 0,seconds:0, dayOfWeek: 1}, function(){
//             officeHour("CSE116","Hannah(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA4 = schedule.scheduleJob({hour: 16, minute: 0,seconds:0, dayOfWeek: 1}, function(){
//             officeHour("CSE116","Logan(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA5 = schedule.scheduleJob({hour: 17, minute: 0,seconds:0,dayOfWeek: 1}, function(){
//             officeHour("CSE116","Matt(Zoom)",CSE116_Jesse,3600000)
//         });
//
//     }
// }
//
//
// class Tuesday extends WeekDay{
//     constructor() {
//         super();
//     }
//     runningOfficeHourCse191(){
//         const CSE191TA1 = schedule.scheduleJob({hour:14,minute:0,seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE191","Neel",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191TA2 = schedule.scheduleJob({hour:9,minute:30,seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE191","Sonawane Priya Sanjay",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191TA3 = schedule.scheduleJob({hour:11,minute:0,seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE191","Michael Morgenthal",CSE191_Nasrin,7200000)
//         });
//
//         const CSE191TA4 = schedule.scheduleJob({hour:16,minute:0,seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE191","Nitish",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191TA5 = schedule.scheduleJob({hour:9,minute:0,seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE191","Swati Suresh",CSE191_Nasrin,3600000)
//         });
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour: 8, minute: 0,seconds:0, dayOfWeek: 2}, function(){
//             officeHour("CSE116","Marcos(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 2}, function(){
//             officeHour("CSE116","Nicholas(Discord)",CSE116_Jesse,5400000)
//         });
//
//         const CSE116jessesTA3 = schedule.scheduleJob({hour: 13, minute: 0,seconds:0, dayOfWeek: 2}, function(){
//             officeHour("CSE116","Rin(Discord)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA4 = schedule.scheduleJob({hour: 15, minute: 0, seconds:0,dayOfWeek: 2}, function(){
//             officeHour("CSE116","Shadman(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA5 = schedule.scheduleJob({hour: 17, minute: 0,seconds:0, dayOfWeek: 2}, function(){
//             officeHour("CSE116","Lana(Discord)",CSE116_Jesse,5400000)
//         });
//
//         const CSE116jessesTA6 = schedule.scheduleJob({hour:18, minute: 0,seconds:0,dayOfWeek: 2},function(){
//             officeHour("CSE116","Jon R(Zoom)",CSE116_Jesse,10800000)
//         });
//     }
//
// }
//
// class Wednesday extends WeekDay{
//     constructor() {
//         super();
//     }
//     runningOfficeHourCse191(){
//         const CSE191TA1 = schedule.scheduleJob({hour:10,minute:0,seconds:0,dayOfWeek: 3}, function(){
//             officeHour("CSE191","Nasrin Akhter",CSE191_Nasrin,3600000)
//         });
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour: 8, minute: 0, seconds:0,dayOfWeek: 3}, function(){
//             officeHour("CSE116","Mike(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour: 9, minute: 0,seconds:0, dayOfWeek: 3}, function(){
//             officeHour("CSE116","Hannah(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA3 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 3}, function(){
//             officeHour("CSE116","Sia(Zoom)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA4 = schedule.scheduleJob({hour: 12, minute: 0,seconds:0, dayOfWeek: 3}, function(){
//             officeHour("CSE116","Logan(Zoom)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA5 = schedule.scheduleJob({hour: 15, minute: 0,seconds:0, dayOfWeek: 3}, function(){
//             officeHour("CSE116","Lana(Discord)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA6 = schedule.scheduleJob({hour:15, minute: 0,seconds:0,dayOfWeek: 3},function(){
//             officeHour("CSE116","Sia(Zoom)",CSE116_Jesse,10800000)
//         });
//     }
//
// }
//
// class Thursday extends WeekDay{
//     constructor() {
//         super();
//     }
//     runningOfficeHourCse191(){
//         const CSE191TA1 = schedule.scheduleJob({hour:10,minute:30,seconds:0,dayOfWeek: 4}, function(){
//             officeHour("CSE191","Anthony Hom",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191TA2 = schedule.scheduleJob({hour:14,minute:0,seconds:0,dayOfWeek: 4}, function(){
//             officeHour("CSE191","Neel",CSE191_Nasrin,3600000)
//         });
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 4}, function(){
//             officeHour("CSE116","Jon R(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 4}, function(){
//             officeHour("CSE116","Marcos(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA3 = schedule.scheduleJob({hour: 19, minute: 0,seconds:0, dayOfWeek: 3}, function(){
//             officeHour("CSE116","Jesse(Zoom)",CSE116_Jesse,10800000)
//         });
//
//
//     }
//
// }
//
// class Friday extends WeekDay{
//     constructor() {
//         super();
//     }
//     runningOfficeHourCse191(){
//         const CSE191TA1 = schedule.scheduleJob({hour:10,minute:0,seconds:0,dayOfWeek: 5}, function(){
//             officeHour("CSE191","Sonawane Priya Sanjay",CSE191_Nasrin,3600000)
//         });
//
//         const CSE191TA2 = schedule.scheduleJob({hour:9,minute:0,seconds:0,dayOfWeek: 5}, function(){
//             officeHour("CSE191","Swati Suresh",CSE191_Nasrin,3600000)
//         });
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour: 8, minute: 0,seconds:0, dayOfWeek: 5}, function(){
//             officeHour("CSE116","Mike(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour: 9, minute: 0, seconds:0,dayOfWeek: 5}, function(){
//             officeHour("CSE116","Hannah(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA3 = schedule.scheduleJob({hour: 10, minute: 0,seconds:0, dayOfWeek: 5}, function(){
//             officeHour("CSE116","Sia(Zoom)",CSE116_Jesse,10800000)
//         });
//
//         const CSE116jessesTA4 = schedule.scheduleJob({hour: 12, minute: 0, seconds:0,dayOfWeek: 5}, function(){
//             officeHour("CSE116","Matt(Zoom)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA5 = schedule.scheduleJob({hour: 15, minute: 0,seconds:0, dayOfWeek: 5}, function(){
//             officeHour("CSE116","Shadman(Discord)",CSE116_Jesse,3600000)
//         });
//
//         const Testing = schedule.scheduleJob({hour: 21, minute: 28, seconds:0,dayOfWeek: 5}, function(){
//             officeHour("CSE116","Testing",CSE116_Jesse,3600000)
//             // console.log("hello")
//         });
//     }
//
// }
//
//
// class Saturday extends WeekDay{
//     constructor(){
//         super();
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour:10,minute:0,seconds:0,dayOfWeek:6},function(){
//             officeHour("CSE116","Nicholas(Discord)",CSE116_Jesse,3600000)
//         });
//
//         const CSE116jessesTA2 = schedule.scheduleJob({hour:9,minute:3,second:0,dayOfWeek:6},function(){
//             officeHour("CSE116","Nicholas(Discord)",CSE116_Jesse,3600000)
//             // console.log("Hello")
//         });
//
//     }
// }
//
// class Sunday extends WeekDay{
//     constructor(){
//         super();
//     }
//     runningOfficeHourCse116(){
//         const CSE116jessesTA1 = schedule.scheduleJob({hour:12,minute:0,seconds:0,dayOfWeek:7},function(){
//             officeHour("CSE116","Nicholas(Discord)",CSE116_Jesse,3600000)
//         });
//     }
// }
//
// class Weekly_reminder{
//     constructor(weekday){
//         const ListWeek = [new Sunday,new Monday, new Tuesday(),new Wednesday(), new Thursday(),new Friday,new Saturday()]
//         this.state = ListWeek[weekday]
//     }
//     run(){
//         this.state.runningOfficeHourCse116()
//         this.state.runningOfficeHourCse191()
//     }
// }
//
//  function SentChannel(Channel,text){
// client.channels.fetch(Channel)
//     .then(chal =>{
//         chal.send(text)
//         }
//     )
// }

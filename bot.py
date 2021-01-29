import discord
import calendar   #using calendar modular to add daily goals and adding zoom meetings by times after getting own server
import schedule
import time
import datetime
import os 
client = discord.Client()
token = os.getenv("token")

# def web_scrap(url_link):
#     webpage = urllib.request.urlopen(url_link)
#     content = webpage.read()
#     soup = BSoup(content, "html.parser")
#     img = soup.find_all("img", class_="_2_tDEnGMLxpM6uOa2kaDB3 ImageBox-image media-element _1XWObl-3b9tPy64oaG6fax")
#     output = []
#     for item in img:
#         output.append(item["src"])
#     print(output)
#     return output


async def Sent_me(message):
    me = await client.fetch_user(309423380527054861)
    await me.send(message)

class Week_day:
    def __init__ (self,wname):
        self.name = wname

    def Cse191LR(self):
        Sent_me("Class CSE191LR Recitation is starting now")

    def Cse191LR_Lecture(self):
        Sent_me("Class CSE191LR Lecture is starting now")

    def CSE116LLB(self):
        Sent_me("Class CSE116 Recitation is starting now")

    def CSE116LLB_Lecture(self):
        Sent_me("Class CSE116 Lecture is starting now")
    
    def CSE116LLB_Lab(self):
        Sent_me("Class CSE116 Lab is starting now")

    def MTH142_Lecture(self):
        Sent_me("Class CSEMTH142 Lecture is starting now")

    def MTH142(self):
        Sent_me("Class CSEMTH142 Recitation is starting now")

    def addClass(self):
        print("override this and add class")

class Mday(Week_day):

    def addClass(self):
        schedule.every().monday.at("11:30").do(self.Cse191LR_Lecture)
        schedule.every().monday.at("13:50").do(self.CSE116LLB_Lecture)
        schedule.every().monday.at("18:30").do(self.Cse191LR)
        print("wake up is herer")

        while True:
            schedule.run_pending()
            time.sleep(60)


class Tday(Week_day):
    def addClass(self):
        print("In addClass function")
        schedule.every().tuesday.at("10:18").do(Testing)
        schedule.every().tuesday.at("10:00").do(self.MTH142_Lecture)
        
        while True:
            schedule.run_pending()
            time.sleep(60)


class Wday(Week_day):
    def addClass(self):
        schedule.every().wednesday.at("11:30").do(self.Cse191LR_Lecture)
        schedule.every().wednesday.at("13:50").do(self.CSE116LLB_Lecture)

        while True:
            schedule.run_pending()
            time.sleep(60)


class Thday(Week_day):
    def addClass(self):
        schedule.every().thursday.at("10:00").do(self.MTH142_Lecture)
        schedule.every().thursday.at("14:00").do(self.CSE116LLB_Lab)

        while True:
            schedule.run_pending()
            time.sleep(60)


class Fday(Week_day):
    def addClass(self):
        schedule.every().friday.at("11:30").do(self.Cse191LR_Lecture)
        schedule.every().friday.at("13:50").do(self.CSE116LLB_Lecture)

        while True:
            schedule.run_pending()
            time.sleep(60)


class Satday(Week_day):
    pass


class Sunday(Week_day):
    pass


day_of_the_week = [Mday("Monday"), Tday("Tusday"), Wday("Wednesday"), Thday("Thusday"), Fday("Friday"), Satday("saturday"), Sunday("Sunday")]

class constant_running:
    def __init__(self):
        self.state = day_of_the_week[datetime.datetime.today().weekday()]
        print(self.state)

    def Doing_schedule(self):
        self.state.addClass()

def Running_dailySchedule():
    daily = constant_running()
    daily.Doing_schedule()
    
def Testing():
    print("hi")

@client.event
async def on_ready():
    print("bot is ready")
    schedule.every().day.do(Running_dailySchedule())
    while True:
        schedule.run_pending()
        time.sleep(10800)
    
    

@client.event
async def on_message(message):
    print("hey I got a message!")
    print(message.content)
    #message from seashell bot
    #bot can not sent message to another bot
    if(message.author.id == 774436163180036106):
        if(message.content == "wake up"):
            Running_dailySchedule()


client.run(token)


from wxpy import *
import threading
from time import sleep
from datetime import datetime


bot = Bot('./tempfile',2,None,None,None,None)


def heartbeat(reciver):
    while True:
        sleep(15)
        print('heartbeat')
        reciver.send('Heartbeat msg : '+ datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


tuling = Tuling (api_key='739f8aed47d34dd78fa46de2085527df')
#mainClient=bot.groups().search('一盘炒粿条的故事')[0]
myself = bot.self
#t1=threading.Thread(target = heartbeat ,args=(myself,),name= 'heartbeat')
#t1.start()
#t1.join()
tester = bot.friends().search('高晓思')[0]


@bot.register()
def printall(msg):
    print(msg)
    return 
    
@bot.register([tester],TEXT)
def autochat(msg):
    print('msg we recieve: '+msg)
    return tuling.do_reply(msg)

embed()

# mainClient.send('这里是来自bot的测试信息')

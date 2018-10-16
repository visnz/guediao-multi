from wxpy import *
import threading
from time import sleep
from datetime import datetime
import router


bot = Bot('./tempfile',2,None,None,None,None)


#def heartbeat(reciver):
#    while True:
#        sleep(15)
#        print('heartbeat')
#        reciver.send('Heartbeat msg : '+ datetime.now().strftime("%Y-%m-%d %H:%M:%S"))



myself = bot.self
tester = bot.friends().search('水桶')[0]
router=router()

@bot.register()
def printall(msg):
    print(msg)
    router.reply(msg)
    return

@bot.register(tester,None,True,True,True)
def replyvisn(msg):



embed()

# mainClient.send('这里是来自bot的测试信息')

# tuling = Tuling (api_key='739f8aed47d34dd78fa46de2085527df')
#mainClient=bot.groups().search('一盘炒粿条的故事')[0]

#t1=threading.Thread(target = heartbeat ,args=(myself,),name= 'heartbeat')
#t1.start()
#t1.join()
from wxpy import *
import threading
from time import sleep
from datetime import datetime

def guediaobot():
    bot = Bot(None,2,None,None,None,None)
    #mainClient=bot.groups().search('一盘炒粿条的故事')[0]
    myself = bot.self
    t1=threading.Thread(target = heartbeat ,args=(myself,),name= 'heartbeat')
    t1.start()
    t1.join()

def heartbeat(reciver):
    while True:
        sleep(5)
        reciver.send('Heartbeat msg : ',datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


if __name__ == '__main__':
    guediaobot()
# mainClient.send('这里是来自bot的测试信息')

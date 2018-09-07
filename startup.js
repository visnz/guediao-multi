//=========初始化模块==========
const fs = require('fs');
const config=JSON.parse(fs.readFileSync('./config.json'));
const Log=require('log'),log=new Log(config.DEBUG_MODE?'debug':'warning', fs.createWriteStream('wechat.log'));
//加载log模块

if(config)log.info('配置文件获取成功: '+'./config.json')
log.info('Log、Config初始化完成')
//=========初始化模块==========

//加载数据存储模块
const data=JSON.parse(fs.readFileSync(config.DATAKEEPER_PATH));
log.info("获取数据存储文件："+config.DATAKEEPER_PATH)
log.debug(data.MSG)


//加载微信模块
const Wechat = require('wechat4u');
const qrcode = require('qrcode-terminal');
let bot;
let username;

// 尝试获取本地登录数据，免扫码
try {bot = new Wechat(require('./sync-data.json'));} catch (e) {bot = new Wechat();}
if (bot.PROP.uin) {bot.restart();} else {bot.start();}

// 生成二维码
bot.on('uuid', uuid => {
    qrcode.generate('https://login.weixin.qq.com/l/' + uuid, {
        small: true
    });
    log.alert('二维码链接：', 'https://login.weixin.qq.com/qrcode/' + uuid);
});

// 登录成功
bot.on('login', () => {
    log.alert('系统信息：登录成功');
    fs.writeFileSync('./sync-data.json', JSON.stringify(bot.botData));
});

// 登出成功
bot.on('logout', () => {
    log.alert('登出成功');
    fs.unlinkSync('./sync-data.json');
});

bot.on('contacts-updated', contacts => {
    if (!username) {
        log.info('联系人数量: ', Object.keys(bot.contacts).length);
        if (bot.Contact.getSearchUser('布吉岛').length) {
            username = bot.Contact.getSearchUser('布吉岛')[0].UserName;
            log.info('获取目标用户成功: ', username);
        }
    }
});


bot.on('message', msg => {
  if(message.isSendBy(username))
  switch (msg.MsgType) {
    case bot.CONF.MSGTYPE_TEXT:
      log.info("你铭铭又发来信息啦"+msg);
      break
    case bot.CONF.MSGTYPE_TEXT:
      break
    case bot.CONF.MSGTYPE_RECALLED:
      break
  }
})

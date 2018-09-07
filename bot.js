const Wechat = require('wechat4u');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
let log;
exports.setLogger=(logger)=>{log=logger}


let bot;
let username;

// 尝试获取本地登录数据，免扫码
try {
    bot = new Wechat(require('./sync-data.json'));
} catch (e) {
    bot = new Wechat();
}

if (bot.PROP.uin) {
    bot.restart();
} else {
    bot.start();
}

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
        // console.log('联系人数量: ', Object.keys(bot.contacts).length);
        if (bot.Contact.getSearchUser('水桶').length) {
            username = bot.Contact.getSearchUser('水桶')[0].UserName;
            console.log('获取目标用户成功: ', username);
        }
    }
});

// bot.on('message', msg => {
//   if(message.isSendBy(username))
//   switch (msg.MsgType) {
//     case bot.CONF.MSGTYPE_TEXT:
//       console.log(msg);
//       break
//     default:
//       break
//   }
// })
if (username) {
bot.sendMsg('hello',username)
            .catch(err => {
                bot.emit('send error', err);
            });
}

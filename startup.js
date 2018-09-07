
const configFilePath='./config.json'
//指定配置文件位置

var config=JSON.parse(require('fs').readFileSync(configFilePath));
//读取配置文件

const logMode=config.DEBUG_MODE?'debug':'warning'

const fs = require('fs')
  , Log = require('log')
  , log = new Log(logMode, fs.createWriteStream('wechat.log'));
//加载log模块

if(config)log.debug('Config fetch successfully: '+configFilePath)
log.debug('Running Mode: '+logMode)


//加载主要模块
const wechatBot=require('./bot.js')

wechatBot.setLogger(log)

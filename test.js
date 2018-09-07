


let fs = require('fs')
  , Log = require('log')
  , log = new Log('error', fs.createWriteStream('wechat.log'));

log.debug('preparing email');
log.info('sending email');
log.error('failed to send email');

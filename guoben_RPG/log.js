var fs = require('fs');
function now(log){
  var date =new Date();
  var ret=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  var tolog=ret+": "+log;
  console.log(tolog);
  fs.appendFile('./server.log', tolog+"\n",  function(err) {if (err) {
       return console.error(err);
     }
   });
}
function scriptSave(tolog){
  fs.appendFile('./router.js', tolog+"\n",  function(err) {if (err) {
       return console.error(err);
     }
   });
}
exports.now=now;
exports.scriptSave=scriptSave;

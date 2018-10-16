var server = require("./server");
var router = require("./router");
var fs = require('fs');


var route ={}
  route["/"]=router.root;
  route["/LjlAcQ8a7GKw26jVfDrkt358"]=router.consoleA;
  route["/a9db8b8f297bdbd27a868fad"]=router.marryskymap;
  route["/15de7f656cd11ab8fbbb4e36"]=router.alliskymap;
  route["/cc363582d7b890041307cbae"]=router.powerskymap;

router.init("45.63.120.84",8888);

server.start(router,route);

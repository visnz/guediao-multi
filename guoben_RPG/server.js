var http =require("http");
var url =require("url");
var log =require("./log");

function start(router,route){
http.createServer(function(req,rsp){
  var pathname = url.parse(req.url).pathname;
  router.route(route,pathname,rsp)


  req.setEncoding("utf8");
    req.addListener("data", function(postDataChunk) {
      var postData ="";
      postData += postDataChunk;
      console.log("截获POST请求："+postData);
      router.POSTroute(route,pathname,rsp,postData);
      //console.log("Received POST data chunk '"+postDataChunk + "'.");
    });
    req.addListener("end", function() {
    });

}).listen(8888);
  log.now("服务器启动，监听端口: 8888");
}

exports.start=start;

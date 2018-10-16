var core = require("./core");
var querystring = require('querystring');
var log = require("./log");
var trans={}
  trans["/ActorIdentityKey1cpHd1L8UC"]=1;
  trans["/ActorIdentityKey2gu0RuHzdW"]=2;
  trans["/ActorIdentityKey34iVZeRJUD"]=3;
  trans["/ActorIdentityKey4tqVF3IVDg"]=4;
  trans["/ActorIdentityKey5SRlVKihD9"]=5;
  trans["/ActorIdentityKey6hNbb1ByQE"]=6;
  trans["/ActorIdentityKey7ZAjBV9NEs"]=7;
  trans["/ActorIdentityKey8Q3MyZAjBD"]=8;
  trans["/ActorIdentityKey9A8J9aggHY"]=9;
  trans["/ActorIdentityKeyAqViQtc8DI"]=10;
  trans["/ActorIdentityKeyB1LpNhDHdC"]=11;
  trans["/ActorIdentityKeyCuHuyZ0YRW"]=12;
  trans["/ActorIdentityKeyDeR0sQ0VZD"]=13;
  trans["/ActorIdentityKeyEtVXEIqVFg"]=14;
  trans["/ActorIdentityKeyFSh1ziRlV9"]=15;
  trans["/ActorIdentityKeyGH4DKBNbbE"]=16;
  trans["/ActorIdentityKeyHEVFJ9Q1Bs"]=17;
  trans["/ActorIdentityKeyIBZAA84jyD"]=18;
  trans["/ActorIdentityKeyJHag3M8J9Y"]=19;
  trans["/ActorIdentityKeyKQtm4PoqVF"]=20;
  trans["/ActorIdentityKeyLH7wZsd1L8"]=21;
  trans["/ActorIdentityKeyM0bQCZRuHz"]=22;
  trans["/ActorIdentityKeyNDs2PsfeRJ"]=23;
  trans["/ActorIdentityKeyOVF3IVDs2y"]=24;
  trans["/ActorIdentityKeyPlkCy1Csih"]=25;
  trans["/ActorIdentityKeyQbdVNsb1By"]=26;
  trans["/ActorIdentityKeyRjBVoJCd9N"]=27;
  trans["/ActorIdentityKeySMywbJgZAj"]=28;
  trans["/ActorIdentityKeyTJ9btzjagg"]=29;
  //trans["/ActorIdentityKeyUNWh3DmqV3"]=30;
  //trans["/ActorIdentityKeyVwd7dca15L"]=31;
  //trans["/ActorIdentityKeyW0iQtqVF3I"]=29;

var addr,port;

function root(rsp){

}
function playerInfo(index,rsp){
  log.now(" 查询角色信息 "+index)

  rsp.writeHead(200,{"Content-Type":"html"});
  rsp.write(core.personalInfo(addr,port,index));
  rsp.end();
}
function consoleA(rsp){
  var html='';
  html='<!DOCTYPE html><html lang=\"zh\"><head>    <meta charset=\"UTF-8\">    <title>游戏控制台</title>    <h1>游戏控制台</h1></head><body>    <fieldset>        <legend>初始类</legend>        （若重复对同一玩家或领地进行提交，则覆盖之前提交）        <form action=\"http://'+addr+':'+port+'/setPlayerName\" method=\"post\">            <func>创建玩家名称</func>玩家编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            玩家名称：<input type=\"text\" name=\"count\" required>            <input type=\"submit\" value=\"命名\">        </form>        <form action=\"http://'+addr+':'+port+'/setLandName\" method=\"post\">            <func>创建领地名称</func>领地编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            领地名称：<input type=\"text\" name=\"count\" required>            <input type=\"submit\" value=\"命名\">        </form>        <form action=\"http://'+addr+':'+port+'/setCharacter\" method=\"post\">            <func>选择玩家身份</func>玩家编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            玩家身份：            <select name=\"count\">                <option value=\"1\">骑士</option>                <option value=\"2\">女士</option>                <option value=\"3\">商人</option>            </select>            <input type=\"submit\" value=\"确认\">        </form>        <form action=\"http://'+addr+':'+port+'/gameStart\" method=\"post\">            <func>                <input type=\"submit\" value=\"游戏开始\">                <input type=\"radio\" name=\"count\" value=\"1\">Yes                <input type=\"radio\" name=\"count\" value=\"0\" checked>No            </func>        </form>        <form action=\"http://'+addr+':'+port+'/gameSave\" method=\"post\">            <func>                <input type=\"submit\" value=\"存储进度\">                <input type=\"radio\" name=\"count\" value=\"1\">Yes                <input type=\"radio\" name=\"count\" value=\"0\" checked>No            </func>        </form>        <form action=\"http://'+addr+':'+port+'/gameLoad\" method=\"post\">            <func>                <input type=\"submit\" value=\"读取进度\">                <input type=\"radio\" name=\"count\" value=\"1\">Yes                <input type=\"radio\" name=\"count\" value=\"0\" checked>No            </func>        </form>    </fieldset>    <fieldset>        <legend>增长类</legend>        （填写负值则为减少，上下限为十万）        <form action=\"http://'+addr+':'+port+'/addArmy\" method=\"post\">            <func>玩家兵力</func>玩家编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            兵力：<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>            <input type=\"submit\" value=\"提交\">        </form>        <form action=\"http://'+addr+':'+port+'/addMoney\" method=\"post\">            <func>玩家金钱</func>玩家编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            金钱：<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>            <input type=\"submit\" value=\"提交\">        </form>        <form action=\"http://'+addr+':'+port+'/addLandArmy\" method=\"post\">            <func>领地兵力</func>领地编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            兵力：<input type=\"number\" name=\"count\" min=\"-99999\"  max=\"99999\"  required>            <input type=\"submit\" value=\"提交\">        </form>        <form action=\"http://'+addr+':'+port+'/addLandMoney\" method=\"post\">            <func>领地金钱</func>领地编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            金钱：<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>            <input type=\"submit\" value=\"提交\">        </form>        <form action=\"http://'+addr+':'+port+'/addScore\" method=\"post\">            <func>玩家分数</func>玩家编号：            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            分数：<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>            <input type=\"submit\" value=\"提交\">        </form>    </fieldset>    <fieldset>        <legend>关系类</legend>        <fieldset>            <legend>无向关系</legend>            <form action=\"http://'+addr+':'+port+'/marriage\" method=\"post\">                <func>结婚</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>与玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                <input type=\"submit\" value=\"结婚\">            </form>            <form action=\"http://'+addr+':'+port+'/alliance\" method=\"post\">                <func>联盟</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>与玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                <input type=\"submit\" value=\"联盟\">            </form>            <form action=\"http://'+addr+':'+port+'/breakRelation\" method=\"post\">            <func>翻脸</func>玩家            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>与玩家            <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"翻脸\">        </form>        </fieldset>        <fieldset>            <legend>有向关系</legend>            <form action=\"http://'+addr+':'+port+'/transMoney\" method=\"post\">                <func>转账</func>从玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>到玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                转账<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>                <input type=\"submit\" value=\"转账\">            </form>            <form action=\"http://'+addr+':'+port+'/transArmy\" method=\"post\">                <func>转兵</func>从玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>到玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                转账<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>                <input type=\"submit\" value=\"转兵\">            </form>            <form action=\"http://'+addr+':'+port+'/transLand\" method=\"post\">                <func>割地</func>领地                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>                交给<input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>玩家                <input type=\"submit\" value=\"提交\">            </form>            <form action=\"http://'+addr+':'+port+'/sendArmy\" method=\"post\">                <func>存兵</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>                把<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>兵                存入领地<input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                <input type=\"submit\" value=\"提交\">            </form>            <form action=\"http://'+addr+':'+port+'/sendMoney\" method=\"post\">                <func>存钱</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>                把<input type=\"number\" name=\"count\" min=\"-99999\" max=\"99999\" required>钱                存入领地<input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                <input type=\"submit\" value=\"提交\">            </form>            <form action=\"http://'+addr+':'+port+'/battle\" method=\"post\">                <func>进攻</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>向玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>发起                <input type=\"submit\" value=\"进攻\">            </form>            <form action=\"http://'+addr+':'+port+'/siege\" method=\"post\">                <func>攻占</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>向城池                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>发起                <input type=\"submit\" value=\"攻占\">            </form>            <form action=\"http://'+addr+':'+port+'/playerToDead\" method=\"post\">                <func>致死玩家</func>玩家                <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>让玩家                <input type=\"number\" name=\"id2indexB\" min=\"1\" max=\"29\" required>                <input type=\"submit\" value=\"扑街\">            </form>        </fieldset>    </fieldset>    <fieldset>        <legend>重置类</legend>        <form action=\"http://'+addr+':'+port+'/playerRebirth\" method=\"post\">            <func>玩家重生</func>            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"一键造人\">        </form>        <form action=\"http://'+addr+':'+port+'/playerMoneyClear\" method=\"post\">            <func>清空玩家财产</func>玩家            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"一键清空\">        </form>        <form action=\"http://'+addr+':'+port+'/playerArmyClear\" method=\"post\">            <func>清空玩家兵力</func>玩家            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"一键清空\">        </form>        <form action=\"http://'+addr+':'+port+'/landMoneyClear\" method=\"post\">            <func>清空领地财产</func>领地            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"一键清空\">        </form>        <form action=\"http://'+addr+':'+port+'/landArmyClear\" method=\"post\">            <func>清空领地兵力</func>领地            <input type=\"number\" name=\"id2indexA\" min=\"1\" max=\"29\" required>            <input type=\"submit\" value=\"一键清空\">        </form>        <form action=\"http://'
  +addr+':'+port+
  '/resetAllRelationship\" method=\"post\">            <func>                <input type=\"submit\" value=\"一键清空所有领地关系\">                <input type=\"radio\" name=\"count\" value=\"1\">Yes                <input type=\"radio\" name=\"count\" value=\"0\" checked>No            </func>        </form>        <form action=\"http://'+addr+':'+port+'/resetAllOwnership\" method=\"post\">            <func>                <input type=\"submit\" value=\"一键清空所有领地的拥有者\">                <input type=\"radio\" name=\"count\" value=\"1\">Yes                <input type=\"radio\" name=\"count\" value=\"0\" checked>No            </func>        </form>    </fieldset>    <fieldset>        <legend>全局类</legend>    </fieldset></body></html>';
  rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  rsp.write(html);
  rsp.end();

}
function skymap(relation){
  var html='';
  html='<!DOCTYPE html>  <html style=\"height: 100%\">  <head>      <meta charset=\"utf-8\">      <meta name=\"viewpoint\" content=\"width=device-width,initial-scale=1.0,maximun-scale=1.0,user-scalable=no\" >  </head>  <body style=\"height: 100%; width:auto\" >    <div id=\"container\" style=\"height: 100%\"></div>    <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/echarts.min.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts-gl/echarts-gl.min.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts-stat/ecStat.min.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/extension/dataTool.min.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/map/js/world.js\"></script>  <script type=\"text/javascript\" src=\"http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/simplex.js\"></script>  <script type=\"text/javascript\" src=\"http://echarts.baidu.com/gallery/vendors/echarts/echarts.js\"></script>    <script type=\"text/javascript\">      var dom = document.getElementById(\"container\");      var myChart = echarts.init(dom);      var app = {};      option = null;        option = {          title: {              text: \"'+(
  (relation==1)?"联盟":"婚姻")+
  '阵营关系网\"          },          tooltip: {},          animationDurationUpdate: 1500,          animationEasingUpdate: \"quinticInOut\",          series : [              {                  type: \"graph\",                  layout: \"none\",                  symbolSize: 45,                  roam: true,                  label: {                      normal: {                          show: true                      }                  },                  edgeSymbol: [ \"none\", \"none\" ],                  edgeSymbolSize: [4, 6],                  edgeLabel: {                      normal: {                          textStyle: {                              fontSize: 40                          }                      }                  },                  data: [                      {name: \"1\", x: 298  *4+600,   y: 0    *4+600                  },{name: \"2\", x: 291  *4+600,   y: -64  *4+600                  },{name: \"3\", x: 270  *4+600,   y: -125 *4+600                  },{name: \"4\", x: 237  *4+600,   y: -180 *4+600                  },{name: \"5\", x: 193  *4+600,   y: -227 *4+600                  },{name: \"6\", x: 139  *4+600,   y: -263 *4+600                  },{name: \"7\", x: 79   *4+600,   y: -287 *4+600                  },{name: \"8\", x: 16   *4+600,   y: -297 *4+600                  },{name: \"9\", x: -48  *4+600,   y: -294 *4+600                  },{name: \"10\", x: -110 *4+600,   y: -277 *4+600                  },{name: \"11\", x: -167 *4+600,   y: -247 *4+600                  },{name: \"12\", x: -216 *4+600,   y: -205 *4+600                  },{name: \"13\", x: -255 *4+600,   y: -154 *4+600                  },{name: \"14\", x: -282 *4+600,   y: -96  *4+600                  },{name: \"15\", x: -296 *4+600,   y: -29  *4+600                  },{name: \"16\", x: -296 *4+600,   y: 29   *4+600                  },{name: \"17\", x: -282 *4+600,   y: 96   *4+600                  },{name: \"18\", x: -255 *4+600,   y: 154  *4+600                  },{name: \"19\", x: -216 *4+600,   y: 205  *4+600                  },{name: \"20\", x: -167 *4+600,   y: 247  *4+600                  },{name: \"21\", x: -110 *4+600,   y: 277  *4+600                  },{name: \"22\", x: -48  *4+600,   y: 294  *4+600                  },{name: \"23\", x: 16   *4+600,   y: 297  *4+600                  },{name: \"24\", x: 79   *4+600,   y: 287  *4+600                  },{name: \"25\", x: 139  *4+600,   y: 263  *4+600                  },{name: \"26\", x: 193  *4+600,   y: 227  *4+600                  },{name: \"27\", x: 237  *4+600,   y: 180  *4+600                  },{name: \"28\", x: 270  *4+600,   y: 125  *4+600                  },{name: \"29\", x: 291  *4+600,   y: 64   *4+600                  }],                         links: ['+
  search(relation)+
    '],label: { normal: {show: true  }  },    lineStyle: {                normal: {                          color: \"#666\",                          width: 8,                          curveness: 0.4                      }                  }              }          ]      };      if (option && typeof option === \"object\") {          myChart.setOption(option, true);      }  </script>  </body>  </html>';
    return html;
}

function marryskymap(rsp){
    var html=skymap(2);
    rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    rsp.write(html);
    rsp.end();
}
function alliskymap(rsp){
    var html=skymap(1);
    rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    rsp.write(html);
    rsp.end();
}
function powerskymap(rsp){
    var html='';
    for(var i=0;i<29;i++){
      html+='<p>角色ID: '+(i+1)+' '+core.getInfo("playerName",i)+' '+core.getInfo("playerCharacter",i)+'  金钱: '+core.getInfo("playerMoney",i)+' '+core.getInfo("playerIncome",i)+'每分钟  兵力：'+core.getInfo("playerArmy",i)+
      ' 分数：'+core.getInfo("playerScore",i)+' 拥有领地：'+ core.getInfo("allMyLand",i)+'(请自加1)</p>';
    }
    for(var i=0;i<29;i++){
      html+='<p>领地ID: '+(i+1)+' '+core.getInfo("landName",i)+'拥有者：'+(parseInt(core.getInfo("landOwnership",i))+1)+' 金钱：'+ core.getInfo("landMoney",i)+' 兵力：'+core.getInfo("landArmy",i)+'</p>';
    }
    rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    rsp.write(html);
    rsp.end();
}
function search(relation){
  var ret='';
  for (var i=0; i<29; i++){
    for (var j=i; j<29; j++){
      if(core.getInfo("relationship",i,j)==relation)
      ret+='{source: \"'+(i+1)+'\", target: \"'+(j+1)+'\"},'
    }
  }
  return ret.slice(0,ret.length-1);
}


function route(route,pathname,rsp){
  if(pathname!=="/favicon.ico"){
    console.log("普通路由激活 : "+pathname);
  }
  if(pathname.length!=27){
    return (typeof route[pathname] === 'function')?route[pathname](rsp):"404 Not found";
  }
  playerInfo(trans[pathname],rsp);
}
function POSTroute(route,pathname,rsp,postData){
  if(pathname.split("/").length==2){
    simplePOSTroute(pathname,rsp,postData);
  }else{
    multiPOSTroute(pathname,rsp,postData);
  }


}

function simplePOSTroute(pathname,rsp,postData){
  log.now("Post路由激活 : "+pathname+" "+postData);

  //解析post
  var body=querystring.parse(postData);
  console.log("postData解析:",body);
  var a=parseInt(body.id2indexA)-1;
  var b=parseInt(body.id2indexB)-1;
  var c=body.count==undefined?NaN:body.count;
  var funcname=pathname.slice(1,pathname.length);
  var runn="调用函数： getInfo(\""+funcname+"\","+a+","+b+","+c+")";
  log.scriptSave("core.getInfo(\"" + funcname + "\",\"" + a + "\",\"" + b + "\",\"" + c + "\");");
  console.log(runn);

  var ret=core.getInfo(pathname.slice(1,pathname.length),a,b,c);

  //设置返回内容
  rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  rsp.write('<h1>'+postData+'</h1>');
  rsp.write('<h1>'+runn+'</h1>');
  rsp.write('<h1>'+ret+'</h1>');

  rsp.end();
}

function multiPOSTroute(pathname,rsp,postData){
  switch(pathname.split("/")[2]){
    case "landInfo":{
      rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
      rsp.write(core.multiGetLandInfo(parseInt(querystring.parse(postData).id2indexA)-1));
      rsp.end();
      break;
    }
    case "relationship":{
      var s=querystring.parse(postData);
      var re=core.getInfo("relationship",parseInt(s.id2indexA)-1,parseInt(s.id2indexB)-1);
      var na=(re==0)?"无关系":((re==1)?"联盟":"婚姻");
      rsp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
      rsp.write('<h1>'+na+'</h1>');
      rsp.end();
        break;
    }

  }
}


function init(iaddr,iport){
  addr=iaddr;
  port=iport;
}
exports.root=root;
exports.consoleA=consoleA;
exports.marryskymap=marryskymap;
exports.powerskymap=powerskymap;
exports.alliskymap=alliskymap;
exports.route=route;
exports.POSTroute=POSTroute;
exports.init=init;

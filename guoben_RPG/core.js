 var cppnode=require("./build/Release/EmpireTycoon");
var log = require("./log");
var get={}
  //个人信息类
  get["playerName"]="getPlName";  //id2index
  get["playerTitle"]="getTitle";  //id2index
  get["playerCharacter"]="getCharacter"; //id2index
  get["playerMoney"]="getMoney";  //id2index
  get["playerIncome"]="getIncome";  //id2index
  get["playerArmy"]="getArmy";  //id2index
  get["playerScore"]="getScore";  //id2index
  //领地类
  get["allMyLand"]="getAllMyLand";  //id2index
  get["landName"]="getLdName";  //id2index
  get["landMoney"]="getLdMoney";  //id2index
  get["landArmy"]="getLdArmy";  //id2index
  get["landOwnership"]="getLdOwner";  //id2index
  //关系类
  get["relationship"]="getRelation"; //id2index,id2index

  //控制台效果
  //初始类
  get["setPlayerName"]="inputPlName"; //id2index,string
  get["setCharacter"]="inputCharacter"; //id2index,int

  get["setLandName"]="inputLdName"; //id2index,string
  get["gameStart"]="start"; //count
  get["gameLoad"]="load"; //count
  get["gameSave"]="save"; //count
  //增长类
  get["addArmy"]="addArmy"; //id2index,int
  get["addMoney"]="addMoney"; //id2index,int
  get["addLandArmy"]="addLandArmy"; //id2index,int
  get["addLandMoney"]="addLandMoney"; //id2index,int
  get["addScore"]="addScore"; //id2index,int

  //关系类
  //有向关系
  get["transMoney"]="giveMoney";   //id2index,int,id2index
  get["transArmy"]="giveArmy";   //id2index,int,id2index
  get["transLand"]="giveLand";   //id2index,int,id2index
  get["sendMoney"]="sendMoney";  //id2index,int,id2index
  get["sendArmy"]="sendArmy";  //id2index,id2index
  get["battle"]="battle";  //id2index,id2index
  get["siege"]="siege";  //id2index,id2index
  get["playerToDead"]="plDead";  //id2index,id2index
  //无向关系
  get["marriage"]="marriage"; //id2index,id2index
  get["alliance"]="alliance"; //id2index,id2index
  get["breakRelation"]="breakRelation"; //id2index,id2index
  //重置类
  get["playerRebirth"]="plRebirth"; //id2index
  get["playerMoneyClear"]="plMoneyEmpty"; //id2index
  get["playerArmyClear"]="plArmyEmpty"; //id2index
  get["landMoneyClear"]="ldMoneyEmpty"; //id2index
  get["landArmyClear"]="ldArmyEmpty"; //id2index
  get["resetAllRelationship"]="resetRelation";  //count
  get["resetAllOwnership"]="resetLandowned";  //count

// function getInfo(operate,param1){
//   // var ret=operate+"("+param1+","+param2+")";
//   // return ret;
//   console.log("single function ");
//   return getInfo(operate,param1,null);
// }
function getInfo(operate,param1,param2,param3){
  // var ret=operate+"("+param1+","+param2+")";
  // return ret;

   var cppret=cppnode.hello(get[operate],String(param1),String(param2),
   //(typeof param3==='string')?param3.toString():param3
   String(param3)
 );

   //console.log("\""+operate+"\"方法调用 cppnode \""+get[operate]+"("+param1+","+param2+","+param3+")\" 返回:"+cppret);
   // console.log("getInfo方法调用检查：typeof operate： "+typeof operate);
   // console.log("getInfo方法调用检查：typeof param1： "+typeof param1);
   // console.log("getInfo方法调用检查：typeof param2： "+typeof param2);
   // console.log("getInfo方法调用检查：typeof param3： "+typeof param3+" "+param3);
   // console.log("getInfo方法调用检查：typeof cppret： "+typeof cppret);
   return cppret;
}
// function get(operate,param1,param2,param3){
//   var cppret=cppnode.hello(get[operate],param1,param2,param3);
//   console.log(cppret);
//   return cppret;
// }
function refresh(){
  log.now("调用后台刷新，结算金钱"+cppnode.hello("round",NaN,NaN,"1"));
}
function save(){
  log.now("调用后台存储，保存数据"+cppnode.hello("save",NaN,NaN,"1"));
}



function personalInfo(addr,port,playerIndex){
  var searchID=parseInt(playerIndex)-1;
  console.log("个人信息面板搜寻ID："+searchID);
  var html="";
  html+='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>个人面板</title><h1 align="center">个人面板</h1><button onclick="location.reload();">刷新数据</button><p /></head><body><fieldset><legend>个人信息</legend><p>编号：'+
    playerIndex+
  '</p><p>名称：'+
    getInfo("playerName",searchID)+
  '</p><p>身份：'+
    getInfo("playerCharacter",searchID)+
  '</p><p>金钱：'+
    getInfo("playerMoney",searchID)+
  '</p><p>收入：每分钟'+
    getInfo("playerIncome",searchID)+
  '</p><p>兵力：'+
    getInfo("playerArmy",searchID)+
  '</p><p>分数：'+
    getInfo("playerScore",searchID)+
  '</p></fieldset><fieldset><legend>我的领地</legend>'+
    getMyLand(getInfo("allMyLand",searchID))+
  '<form action="http://'+addr+':'+port+'/multi/landInfo" method="post"><p><func>查询领地信息：</func>领地编号<input type="number" name="id2indexA" min="1" max="29" required><input type="submit" value="查询"></p></form></fieldset><fieldset><legend>个人关系</legend>    <form action="http://'+addr+':'+port+'/multi/relationship" method="post">查询<select name="id2indexA"><option value="'+playerIndex+'" checked>我</option></select>与<input type="number" name="id2indexB" min="1" max="29" required>的关系<input type="submit" value="查询"></form></fieldset></body></html>';





    return html;
}

function getMyLand(landsString){
  //var landsString="0,1,5,6,";
  if(landsString=='')return '<p>无拥有领地</p>';
  var rets=landsString.slice(0,landsString.length-1).split(",");
  var landInfo='';
  for(land in rets){
    landInfo+='<fieldset><legend>领地'+
    (parseInt(land)+1)+
    '</legend><p>领地编号：'+
    (parseInt(rets[land])+1)+
    '</p><p>名称：'+
    getInfo("landName",rets[land],null)+
    '</p><p>金钱：'+
    getInfo("landMoney",rets[land],null)+
    '</p><p>兵力：'+
    getInfo("landArmy",rets[land],null)+
    '</p></fieldset>';
  }
  return landInfo;
}

function turnName(funcName){
  return get[funcName];
}

function multiGetLandInfo(index){
  log.now("领地综合查询：index="+index);
  var intindex=parseInt(index);
  return '<fieldset><legend>领地'+
  '</legend><p>领地编号：'+
  (intindex+1)+
  '</p><p>领地名称：'+
  getInfo("landName",intindex,null)+
  '</p><p>领地拥有者：'+
  getInfo("landOwnership",intindex,null)+
  '</p><p>金钱：'+
  getInfo("landMoney",intindex,null)+
  '</p><p>兵力：'+
  getInfo("landArmy",intindex,null)+
  '</p></fieldset>';
}

setInterval(function(){
  refresh();//new round
},60000);

// setInterval(function(){
//   save();
// },10000);
exports.refresh=refresh;
exports.save=save;
exports.get=get;
exports.getInfo=getInfo;
exports.personalInfo=personalInfo;
exports.multiGetLandInfo=multiGetLandInfo;
exports.turnName=turnName;

#define num 29
#define startMoney 2000
#define startArmy 500
#define su "successful"
#ifndef EMPIRETYCOON_H_INCLUDED
#define EMPIRETYCOON_H_INCLUDED
#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <fstream>
#include <string>
#include <sstream>
using namespace std;

class player
{
public:
    string name;
    int score;
    int money;
    int character;
    int income;
    int army;//兵力
    string title;
    bool landOwned[num];//领地所有关系
    player()
    {
        name = ""; score = 0; money = 0;army = 0; character = 0;
        income = 0;title = "";
        for(int i=0;i<num;i++){landOwned[i] = 0;}
    }
};

class land
{
public:
    string name;
    string title;
    int money;
    int army;
    int owner;
    land(){name = "";string title = ""; money = 0; army = 0; owner = -1;}
};
class All{
public:
    int relation[num][num];//玩家关系
    player pl[num];//玩家组
    land ld[num];//领地组
    string TitleOfLand[32]{"的领主**","的首领**","的元首**","的看门人**","的郡主**","的大人**","的长老**","的守护者**","的首领**","的看门人**","的郡主**","的领主**","的大人**","的总督**","的看门人**","的长老**","的郡主**","的首领**","的守护者**","的大人**","的郡主**","的守护者**","的大人**","的长老**","的看门人**","的首领**","的守护者**","的长老**","的看门人**","的首领**","的总督**","的首领**"};
    All(){
        for(int i=0;i<num;i++)
        {
            for(int k=0;k<num;k++)
            {
                relation[i][k] = 0;
            }
        }
    }
    void str2int(int &int_temp,const string &string_temp){
        stringstream stream(string_temp);
        stream>>int_temp;
    }

    void int2str(const int &int_temp,string &string_temp){
        stringstream stream;
        stream<<int_temp;
        string_temp=stream.str();
    }
    string resetRelation(int p){//重置所有领主关系
        if(!p)return "cancel";
        else{
        for(int i=0;i<num;i++)
        {
            for(int k=0;k<num;k++)relation[i][k] = 0;
        }
        return "successful";}
    }
    string resetLandowned(int p){//重置所有领地所有权
        if(!p)return "cancel";
        else{
    for (int i=0;i<num;i++)
    {
        for(int k=0;k<num;k++)pl[i].landOwned[k] = 0;
    }
    return "successful";}
    }
    string getTitle(int i){//获取玩家头衔，返回字符串
    pl[i].title="";
    for(int j=0;j<num;j++){
        if(pl[i].landOwned[j]){
                pl[i].title.append(ld[j].name);
                //pl[i].title.append("的首领**");
                pl[i].title.append(TitleOfLand[j]);
                }
        else continue;
    }//获取头衔
    return pl[i].title;}
    bool moneyIsEmpty(int i){//检查现金是否为空
       if(!pl[i].money)return true;
       else return false;}
    string getPlName(int i)
    {
        return pl[i].name;
    }
    int getScore(int i){//获取玩家分数
      return pl[i].score;}
    int getMoney(int i){//获取玩家现金
      return pl[i].money;}
    int getIncome(int i){//获取玩家收入**

      return pl[i].income;}
    int getArmy(int i){//获取玩家兵力
      if(moneyIsEmpty(i))pl[i].army = 0;
      return pl[i].army;}

    int getLandMoney(int i){//获取领地金钱
      return ld[i].money;}
    string getCharacter(int i){//获取玩家角色
        if (pl[i].character==1) return "骑士";
        else if (pl[i].character==2) return "小姐";
        else if (pl[i].character==3) return "商人";
        else return "error";
    }
    int getLandArmy(int i){//获取领地士兵
      return ld[i].army;}
    string getLdName(int i){//获取领地名称
      return ld[i].name;}
    int getLdOwner(int i){//获取领地所有人
      return ld[i].owner;}
    string getAllMyLand(int i){//获取玩家所有领地
      string allland;
      string l = "";
      for(int k=0;k<num;k++)
      {
          if(pl[i].landOwned[k]){int2str(k,l);allland.append(l);allland.append(",");}
      }
      return allland;
    }
    int getRelation(int i,int k){//获取玩家关系
      return relation[i][k];}
    string inputPlName(int i,string n){//输入玩家姓名
       pl[i].name = n;
       return su;}
    string inputCharacter(int i,int k){//输入玩家角色
       pl[i].character = k;
       return su;}
    string inputLdName(int i,string n){//输入领地名称
       ld[i].name = n;
       return su;}
    string addArmy(int i,int n){//添加兵力，参数为整数
    pl[i].army += n;
       return su;}
    string addMoney(int i,int n){//添加金钱，参数为整数
    pl[i].money += n;
       return su;}
    string addLandMoney(int i,int n){//添加领地金钱，参数为整数
    ld[i].money += n;
       return su;}
    string addLandArmy(int i,int n){//添加领地兵力，参数为整数
    ld[i].army += n;
       return su;}
    string addScore(int i,int n){//添加分数，参数为整数
    pl[i].score += n;
       return su;}
    string giveMoney(int i,int k,int n){//转账，参数为整数
    if(pl[i].money<n)return "too much money";
    pl[i].money -= n;pl[k].money +=n;
       return su;}
    string giveArmy(int i,int k,int n){//转移士兵
       if(n>pl[i].army)return "too many soldiers";
       pl[i].army -= n;
       pl[k].army += n;
       return su;}
    string giveLand(int land,int k){//转移领地
       int i = ld[land].owner;
       if (i==-1) return "no owner";
       else{
       pl[i].landOwned[land] = 0;
       pl[k].landOwned[land] = 1;
       ld[land].owner = k;}
       return su;}
    string sendMoney(int i,int land,int n){//存放金钱
        if(((n>0)&&(pl[i].money<n))||(n+ld[land].money<0))return "too much money";
        pl[i].money -= n;
        ld[land].money += n;
       return su;}
    string sendArmy(int i,int land,int n){//存放士兵
        if(((n>0)&&(pl[i].army<n)||n+pl[i].army<0))return "too many soldiers";
        pl[i].army -= n;
        ld[land].army += n;
       return su;}
    string marriage(int i,int k){//两个玩家结婚
    relation[i][k] = 2;relation[k][i] = 2;
    pl[i].score += 10; pl[i].score += 5;
       return su;}
    string alliance(int i,int k){//两个玩家结盟
    relation[i][k] = 1;relation[k][i] = 1;
    pl[i].score+=5;pl[k].score+=5;
       return su;}
    string breakRelation(int i,int k){//两个玩家关系重置
    relation[i][k] = 0;relation[k][i] = 0;
       return su;}
    string plMoneyEmpty(int i){//玩家现金清零
    pl[i].money = 0;
       return su;}
    string plArmyEmpty(int i){//玩家士兵清零
    pl[i].army = 0;
      return su;}
    string ldMoneyEmpty(int i){//领地现金清零
    ld[i].money = 0;
      return su;}
    string ldArmyEmpty(int i){//领地士兵清零
    ld[i].army = 0;
      return su;}
    string plDead(int fr,int to){//玩家死亡
      pl[fr].score += 10;
      for(int j=0;j<num;j++){
        relation[j][to] = 0;
        relation[to][j] = 0;
      }
      pl[to].army = 0;pl[to].money = 0;
      return su;}

    string plRebirth(int i){
        pl[i].money = startMoney;pl[i].army = startArmy;
        getTitle(i);
        getIncome(i);
        return su;}
    string battle(int i,int k){//玩家野战
      int attactPool[num];
      int attactforce = 0;
      for (int j=0;j<num;j++)
      {
          if(j==i){attactPool[j] = pl[j].army;}
          else if(relation[i][j]==1){attactPool[j] = pl[j].army/2;}
          else if(relation[i][j]==2){attactPool[j] = pl[j].army;}
          else attactPool[j] = 0;
      }//计算攻方参战兵力
      int defendPool[num];
      int defendforce = 0;
      for (int j=0;j<num;j++)
      {
          if(j==k){defendPool[j] = pl[j].army;}
          else if(relation[k][j]==1){defendPool[j] = pl[j].army/2;}
          else if(relation[k][j]==2){defendPool[j] = pl[j].army;}
          else defendPool[j] = 0;
      }//添加守方参战兵力
      for(int j=0;j<num;j++)
      {
          attactforce+=attactPool[j];
          defendforce+=defendPool[j];
      }//计算双方总兵力
      int allforce = attactforce+defendforce;
      int minforce = 0;
      int maxforce = 0;
      int differece = 0;
      int many = 0;
      if(attactforce>=defendforce) many = i;
      else many = k;
      if(attactforce<=defendforce){minforce = attactforce; maxforce = defendforce;}
      else {minforce = defendforce; maxforce = attactforce;}
      differece = maxforce - minforce;
      int victor = -1;
      int result = differece*100/allforce;

      if(pl[i].character==1)result -= 2;
      if(pl[k].character==1)result += 2;//骑士加成

      //cout<<"差值计算结果"<<result<<endl;
      if(result>10){victor = many;}
      else {
            srand(time(NULL));
            result = rand()%100;
            //cout<<"随机计算结果"<<result<<endl;
            if(result<50)victor = i;
            else victor = k;}
      //计算战果

      for(int j=0;j<num;j++)
      {
          srand(time(NULL));
          pl[j].army -= minforce*(rand()%defendforce)/allforce*attactPool[j]/attactforce;
          //srand(time(0));
          pl[j].army -= minforce*(rand()%attactforce)/allforce*defendPool[j]/defendforce;
          if(pl[j].army<0)pl[j].army = 0;
      }//清算战损
      for(int j=0;j<num;j++)
      {
          if(j==victor)pl[j].score+=12;
          else if(relation[victor][j]==1)pl[j].score+=6;
          else if(relation[victor][j]==2)pl[j].score+=8;
          else pl[j].score +=0;
      }//结算胜方得分
      string win = pl[victor].name;
      return win.append(" won the battle");}

    string siege(int i,int land){//玩家攻城
        int siegeforce = pl[i].army;
        int landforce = ld[land].army;
        int allforce = siegeforce+landforce;
        int minforce;
        int maxforce;
        int difference;
        int many;
        if(siegeforce<=landforce){minforce = siegeforce; maxforce = landforce; many = land;}
        else {minforce = landforce; maxforce = siegeforce; many = i;}
        difference = maxforce - minforce;
        int result = difference*100/allforce;
        bool iswin = 0;

        if(pl[i].character==1)result -= 2;//骑士加成
        if(i==land)result -= 2;//同属领地加成

        //cout<<"差值计算结果"<<result<<endl;
        if(result>15) iswin = 1;
        else{
                srand(time(NULL));
                result = rand()%100;
                //cout<<"随机计算结果"<<result<<endl;
                if(result<50)iswin = 1;
        }
        //计算结果
        srand(time(NULL));
        pl[i].army -= minforce*(rand()%siegeforce)/allforce*siegeforce/allforce;
        if(pl[i].army<0)pl[i].army = 0;
        //srand(time(0));
        ld[land].army -= minforce*(rand()%allforce)/allforce*landforce/allforce;
        if(ld[land].army<0)ld[land].army = 0;
        //计算战损

        string force = pl[i].name;

        if(iswin){
             pl[ld[land].owner].landOwned[land] = 0;
             pl[i].landOwned[land] = 1;
             ld[land].owner = i;
             pl[i].score += 8;
             return force.append(" has taken the land");}//计算得分、领地所有权
        else return force.append(" has failed the battle");}
    string save(){//保存数据
        freopen("rpgdata.txt","w",stdout);
        /*for(int i=0;i<num;i++)
        {
            cout<<pl[i].army<<" "<<pl[i].character<<" "<<pl[i].income<<" "<<pl[i].money<<" "<<pl[i].score<<endl;
            cout<<pl[i].name<<endl;
            cout<<pl[i].title<<endl;
            cout<<pl[i].landOwned[0];
            for(int k=1;k<num;k++)cout<<" "<<pl[i].landOwned[k];
            cout<<endl;
        }//保存玩家组
        for(int i=0;i<num;i++)
        {
            cout<<ld[i].army<<" "<<ld[i].money<<" "<<ld[i].owner<<endl;
            cout<<ld[i].name<<endl;
        }//保存领地组
        for(int i=0;i<num;i++)
        {
            cout<<relation[i][0];
            for(int k=1;k<num;k++)cout<<" "<<relation[i][k];
            cout<<endl;
        }//保存关系组
        cout<<"data end"<<endl;*/
        for(int i=0;i<num;i++)
        {
            cout<<pl[i].name<<" "<<pl[i].character<<" "<<pl[i].score<<" "<<ld[i].name<<endl;
        }
        fclose(stdout);
        freopen("CON","w",stdout);
        return "data saved";
    }
    string load(){//读取数据

        freopen("rpgdata.txt","r",stdin);
        /*for(int i=0;i<num;i++)
        {
            cin>>pl[i].army>>pl[i].character>>pl[i].income>>pl[i].money>>pl[i].score;
            cin>>pl[i].name;
            cin>>pl[i].title;
            for(int k=0;k<num;k++)cin>>pl[i].landOwned[k];
        }//读取玩家组
        for(int i=0;i<num;i++)
        {
            cin>>ld[i].army>>ld[i].money>>ld[i].owner;
            cin>>ld[i].name;
        }//读取领地组
        for(int i=0;i<num;i++)
        {
            for(int k=0;k<num;k++)cin>>relation[i][k];
        }//读取关系组*/
        for(int i=0;i<num;i++)
        {
            cin>>pl[i].name>>pl[i].character>>pl[i].score>>ld[i].name;
        }
        fclose(stdin);
        freopen("CON","r",stdin);
        return "data loaded";
    }

    string start(){//回合开始,所有信息填完才能调用

        for(int i=0;i<num;i++){pl[i].army = startArmy; pl[i].money = startMoney;}
        for(int j=0;j<num;j++)
        {
            if(pl[j].character==1)pl[j].army += 50;//骑士初始加成
            else if(pl[j].character==3)pl[j].money += 100;//商人初始加成
            else pl[j].money +=0;
            ld[j].army = 200;
        }
        save();
        return "game started, reset all data";
    }
    string round(){//刷新回合
       for(int i=0;i<num;i++){
        for(int j=0;j<num;j++)
          {
          if(pl[i].landOwned[j])pl[i].score++;
          if(relation[i][j]>0)pl[i].score++;
          }//刷新分数

        pl[i].income = 0;
        for(int j=0;j<num;j++){if(pl[i].landOwned[j])pl[i].income+=(ld[j].money)/5;}
        if(pl[i].character==3)pl[i].income*12/10;//商人收入加成
        for(int j=0;j<num;j++){if(relation[i][j]>0)pl[i].income-=5;}
        pl[i].income-=(pl[i].army/10);//刷新收入

      }

        for(int j=0;j<num;j++)
        {
            pl[j].money += pl[j].income;
            if(pl[j].money<0)pl[j].money = 0;
            if(pl[j].army<0)pl[j].army = 0;
            getArmy(j);
            getIncome(j);
            getTitle(j);
        }
        save();
        //load();
        return "new round";
    }

    string engine(string i, string p1,string p2,string p3){//调用函数;
        int itemp1,itemp2,itemp3;
        str2int(itemp1,p1);
        str2int(itemp2,p2);
        str2int(itemp3,p3);
        //参数类型装换
        if(i=="resetRelation")return resetRelation(itemp3);
        else if(i=="resetLandowned")return resetLandowned(itemp3);
        else if(i=="getTitle")return getTitle(itemp1);
        else if(i=="getPlName")return getPlName(itemp1);
        else if(i=="getLdName") return getLdName(itemp1);
        else if(i=="getAllMyLand") return getAllMyLand(itemp1);
        else if(i=="inputPlName") return inputPlName(itemp1,p3);
        else if(i=="inputLdName") return inputLdName(itemp1,p3);
        else if(i=="inputCharacter") return inputCharacter(itemp1,itemp3);
        else if(i=="addArmy") return addArmy(itemp1,itemp3);
        else if(i=="addMoney") return addMoney(itemp1,itemp3);
        else if(i=="addLandArmy") return addLandArmy(itemp1,itemp3);
        else if(i=="addScore") return addScore(itemp1,itemp3);
        else if(i=="giveMoney") return giveMoney(itemp1,itemp2,itemp3);
        else if(i=="giveArmy") return giveArmy(itemp1,itemp2,itemp3);
        else if(i=="giveLand") return giveLand(itemp1,itemp3);
        else if(i=="sendMoney") return sendMoney(itemp1,itemp2,itemp3);
        else if(i=="sendArmy") return sendArmy(itemp1,itemp2,itemp3);
        else if(i=="marriage") return marriage(itemp1,itemp2);
        else if(i=="alliance") return alliance(itemp1,itemp2);
        else if(i=="breakRelation") return breakRelation(itemp1,itemp2);
        else if(i=="plMoneyEmpty") return plMoneyEmpty(itemp1);
        else if(i=="plArmyEmpty") return plArmyEmpty(itemp1);
        else if(i=="getCharacter") return getCharacter(itemp1);
        else if(i=="ldMoneyEmpty") return ldMoneyEmpty(itemp1);
        else if(i=="plDead") return plDead(itemp1,itemp2);
        else if(i=="plRebirth") return plRebirth(itemp1);
        else if(i=="battle") return battle(itemp1,itemp2);
        else if(i=="siege") return siege(itemp1,itemp2);
        else if(i=="start") return start();
        else if(i=="round") return round();
        else if(i=="getScore") { string k;int2str(getScore(itemp1),k);return k;}
        else if(i=="getMoney") { string k;int2str(getMoney(itemp1),k);return k;}
        else if(i=="getIncome") { string k;int2str(getIncome(itemp1),k);return k;}
        else if(i=="getArmy") { string k;int2str(getArmy(itemp1),k);return k;}
        else if(i=="getLdMoney") { string k;int2str(getLandMoney(itemp1),k);return k;}
        else if(i=="getLdArmy") { string k;int2str(getLandArmy(itemp1),k);return k;}
        else if(i=="getLdOwner") { string k;int2str(getLdOwner(itemp1),k);return k;}
        else if(i=="getRelation") { string k;int2str(getRelation(itemp1,itemp2),k);return k;}
        else if(i=="save") return save();
        else if(i=="load") return load();
        else return "unknown funtion";
    }
};
#endif // EMPIRETYCOON_H_INCLUDED

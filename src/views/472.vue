<template>
    <div>
      <!--第二个导航栏-->
     <div class="menu">
          <ul class="pnav">
              <li>
                <router-link class="pnav-4" to="/dynamic" title="全部动态">全部动态</router-link>  
               </li>
              <li>
                <router-link class="pnav-1" to="/media" title="媒体报道">媒体报道</router-link>   
              </li>
              <li>
                <router-link class="pnav-3" to="/recent" title="新品动态">新品动态</router-link>   
              </li>
              <li>
               <router-link class="pnav-2" to="/news01" title="最新资讯">最新资讯</router-link>    
              </li>
          </ul>     
        </div>
     <!--第二个导航栏结束--> 
      <!--最大的外层div-->
     <div class="news">
     <!--第一层始于爱-->
       <h1 class="news-1">品牌丨克服底妆问题 什么妆前乳竟然堪比“磨皮滤镜”？</h1>
       <br>
       <span>化妆品观察</span>
       <br>
       <br>
       <span class="news-2">2019/09/26 | 媒体报道</span> 
        <hr> 
     <!--第一层始于爱结束-->
        <!--中国美妆网-->
         <div class="news-3">
            <br>
            <br>
            <span>底妆的重要性早已不言而喻。</span>
             <br> 
             <br>     
            <span>作为彩妆中渗透率最高的品类，底妆在消费者中间的认知度和接受度最为成熟，品类细分程度也更高。同时，底妆也是整个脸部妆容的灵魂，打造出一个精致无暇的妆面，是每一个爱美女性的追求。</span>     
             <br>
             <br>
             <span>但底妆不均、浮粉、脱妆等问题，也是许多女性化妆的最大痛点。从这个角度而言，真珠美学近期上市的磨皮滤镜小粉管（全称：丝柔臻颜妆前乳，以下简称小粉管），正是为了解决消费者这一痛点而生。</span>
         </div>
         <br>
         <br>
          <!--中国美妆网结束-->
         <!--纯图片-->
         <img class="news-img1" src="../assets/20190926102434_81586.jpg" alt=""><br><br>
          <div class="news-4">
           <p class="news-4_3">妆前乳的作用</p><br><br>
             <span>一般来说，消费者想化出一个完美的底妆，需要三步：第一步使用妆前产品修饰皮肤，隐形毛孔，同时控油保湿，从而令底妆更加服帖；第二步才是使用粉底类产品上妆；第三步则用定妆类产品定妆，让妆容更加持久。</span><br><br>
             <span>妆前乳的作用，通俗地讲就好比墙壁的底漆，许多建筑工人在刷墙前会用底漆填平墙上的瑕疵和小坑洞，让后续上色更加平滑，妆前乳，也是用在粉底类产品之前，起到填平毛孔、修饰肤色、控油保湿以及持妆等作用，从而让后续底妆更好上妆，也更加服帖。。</span>
            <br>
            <br>
          </div>
          <img class="news-img1" src="../assets/20190926102502_71788 (1).jpg" alt=""><br><br>
           <div class="news-4">
          <span class="news-5"></span>
          <span>但从国内市场现状来看，粉底类和定妆类产品往往更加热门，妆前产品并没有得到足够的关注。多数国产品牌在推出底妆产品时，往往主打的是粉底类和定妆类产品，妆前产品仅被当做连带品推出，品类主体感不强。</span><br><br>
          <span>而市场上知名度和口碑较好的妆前产品，大多以国际一线品牌和日韩品牌为主，国产品牌里少有比较知名的妆前产品。</span>
            <br>
            <br>
            <span>在这样的背景下，真珠美学小粉管的推出，显然带来了一股新气象。</span>  
            <br>
            <br>
          </div> 
            <div class="news-6">
            <router-link class="news-6-1" to="/dynamic">最新动态</router-link>
            <span>|</span>
            <router-link class="news-6-1" to="/news01">最新资讯</router-link>
            <span>|</span>
            <span>品牌丨克服底妆问题 什么妆前乳竟然堪比“磨皮滤镜”？</span>
        </div>
        <!--最大的外层div结束-->
    </div>
 </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
.menu{
    height:70px; width:942px;
    border-top:1px solid #d5d2d5;
    margin: 0 auto;
}
.pnav{
    display:flex;
    justify-content:center;
}
.pnav>li{
    width:235px;
    text-align: center;
    line-height:70px ;
}
.pnav-1{
   color:#f1dde8;
   font-size:18px;  
}
.pnav-2,.pnav-3,.pnav-4{
    color:#6c6c6c;
    font-size:18px;
}
.pnav-2:hover,.pnav-3:hover,.pnav-4:hover{
    color:#f1dde8 ;
}
/*最大的外层div*/
.news{
    margin: 0 auto;
    overflow: hidden;
    width: 942px;
    background: #fff;
    padding: 18px 0;
    text-align: center;
    margin-top: 45px;
}
/*最大的外层div结束*/
/*第一层始于爱*/
.news-1{
    color:#242424;
    font-size: 24px;
    font-weight: 400;
}
.news-2{
    display: inline-block;
     color:#737373;
    font-size:16px;
    margin-bottom:5px;
}
/*第一层始于爱结束*/
/*中国美妆网 */
.news-3>span{
   color:#454545;
   font-size:12px;
}

/*中国美妆网结束 */
/** */
.news-img1{
  width:1203px;height:1195px;
  margin-bottom: 5px;
}
.news-img2{
  width:750px;height:1000px;
  margin-bottom: 5px;
}
.news-img3{
  width:750px;height:500px;
  margin-bottom: 5px;
}
.news-img4{
  width:750px;height:500px;
  margin-bottom: 5px;
  margin-left:-31px;
}
.news-img5{
  width:750px;height:1125px;
  margin-bottom: 5px;
  margin-left:-31px;
}
.news-5{
  display: inline-block;
  width:0;height:0;
  border:7px solid #000;
  border-top-color:transparent;
  border-left-color:transparent;
  border-right-color:transparent;
  position: relative;
  top:-1px;;left:-2px;
}
.news-4_1{
    color:#00A0E9;
    font-size:30px;
}
.news-4_2{
   color:#00A0E9;
   font-size:12px;  
}.news-4_3{
   color:#F01D64;
   font-size:17px;
   font-weight:600;  
}
.news-4>span{
  color:#454545;
  font-size:12px;
}
.news-6{
  width:600px;
  margin-left:0px;
  margin:50px 0;
  color:#666666;
}
.news-6-1{
  color:#666666;
}
.news-6>span{
  padding:0 5px;
}

/*纯图片结束 */
</style>
<template>
  <div class="footWrap">
    <div class="footer">
       <div class="footer-1">
          <img class="footer-1-1" title="真珠美学" src="../assets/flogo.png" alt="">
          <img class="footer-1-2" title="真珠美学APP" src="../assets/app.png" alt="">
      </div>
       <div class="footer-2">
        <ul class="footer-2-1">
            <li>
                 <router-link class="footer-2-1_1" title="所有产品Products" to="/products">所有产品<br>Products</router-link>
             </li>
            <li>
                 <router-link class="footer-2-1_1" title="品牌故事Brand Story" to="/index">品牌故事<br>Brand Story</router-link>
            </li>
            <li>
                 <router-link class="footer-2-1_1" title="最新动态What's New" to="/dynamic">最新动态<br>What's New</router-link>
            </li>
            <li>
                 <router-link class="footer-2-1_1" title="皮肤管理中心Skin Care Center" to="/regulate">皮肤管理中心<br>Skin Care Center</router-link>
            </li>
            <li>
                 <router-link class="footer-2-1_1" title="关于我们About us" to="/add">关于我们<br>About us</router-link>
            </li>
        </ul> 
        <div class="footer-2-2">
          <div class="footer-2-2_1">
            <ul>
                <li>
                  <router-link class="footer-2-2_1-1" title="护肤" to="/skin">护肤</router-link>  
                </li>
                <li>
                   <router-link class="footer-2-2_1-1" title="彩妆" to="/ammy">彩妆</router-link> 
                </li>
                <li>
                    <router-link  class="footer-2-2_1-1" title="饮品" to="/drink">饮品</router-link>
                </li>
                <li>
                    <a class="footer-2-2_1-1" title="防伪查询" href="#">防伪查询</a>
                </li>
            </ul>    
          </div>    
          <div class="footer-2-2_2">
            <ul>
                <li>
                  <router-link class="footer-2-2_2-1" title="新品动态" to="/recent">新品动态</router-link>
                </li>
                <li>
                  <router-link class="footer-2-2_2-2" title="皮肤管理中心" to="/regulate">皮肤管理中心</router-link>
                </li>
                <li>
                 <router-link class="footer-2-2_2-3" title="联系我们" to="/add">联系我们</router-link>   
                </li>
                <li>
                 <router-link class="footer-2-2_2-4" to="/media">媒体报道</router-link>   
                </li>
                <li>
                 <router-link class="footer-2-2_2-5" title="店铺加盟" to="/add">店铺加盟</router-link>   
                </li>
                <li>
                 <router-link class="footer-2-2_2-6" title="加入我们" to="/add01">加入我们</router-link>   
                </li>
            </ul>  
         </div>
        </div>
          <div class="footer-2-3">
           <ul class="footer-2-3-1">
               <li>
                 <a class="footer-2-3-1_1" title="常见问题" href="#">常见问题<br>FAQ</a>  
               </li>
               <li>
                 <a class="footer-2-3-1_1" title="联系我们" href="#">联系我们<br>Contact</a>    
               </li>
               <li>
                 <a class="footer-2-3-1_1" title="法律条款" href="/add">法律条款<br>Privacy Policy</a>    
               </li>
               <li>
                 <router-link class="footer-2-3-1_1" title="关注我们" to="/">关注我们<br>Follow us</router-link>    
               </li>
               <li>
                 <a href="https://zhenzhumeixue.tmall.com/">
                  <img title="天猫" src="../assets/tmall.png" alt="">     
                </a>
                <ul>
                    <li><img src="../assets/tmallewm.png"  alt=""></li>
                </ul>    
               </li>
               <li>
                 <router-link to="/">
                 <img title="微博二维码" src="../assets/weibo.png" alt="">     
                </router-link> 
                  <ul>
                    <li><img src="../assets/weiboewm.png"  alt=""></li>
                </ul>   
               </li>
               <li>
                 <router-link to="/">
                <img title="微信二维码" src="../assets/weixin.png" alt="">   
                </router-link> 
                 <ul>
                    <li><img src="../assets/wxewm.png"  alt=""></li>
                </ul>   
               </li>
               <li>
                 <router-link to="/">
                  <img title="抖音二维码" src="../assets/douyin.png" alt="">
                </router-link> 
                 <ul>
                    <li><img src="../assets/tiktok.png"  alt=""></li>
                </ul>   
               </li>
           </ul>
           <div class="fnav9">
            ©2018 PEARLOSOPHY. ALL RIGHTS RESERVED
            </div>
            <div class="fnav10">
                <a title="法律条款" class="fnav10-1" href="#">
                    <img class="fnav10-img" src="../assets/icon.png" alt="">
                    沪ICP备16043339号-1 
                </a>
            </div>
            <div class="fnav11">
               <a title="法律条款" class="fnav10-1" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202011223">
                    <img class="fnav10-img2" src="../assets/icon2.png" alt="">
                   沪公网备：31011202011223号 
              </a>  
            </div>   
         </div>  
       </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.footWrap{
    width:100%;height:650px;
    background:#f1f1f1;
}
.footer{
    width:1130px;height:430px;
    padding-top:50px;
    margin:0 auto;
    display: flex;
    justify-content:space-around;
}
.footer-1{
    width:190px;
    text-align: center;
}
.footer-1-1{
    width:190px;height:190px;
}
.footer-1-2{
    width:143px;height:198px;
    margin-top:-136px;
}
.footer-2{
     width:700px;
}
.footer-2-1{
    display:flex;
    justify-content:start;
}
.footer-2-1>li{
   padding-right:13px;
}
.footer-2-1>li:not(:first-child){
    padding-left:13px;
}
.footer-2-1_1{
    color: #232323;
    font-size: 18px;
}
.footer-2-2{
    height:112px;
    display:flex;
    justify-content: start;
    margin-top:20px;
}
.footer-2-2_1{
   width:150px;height:112px; 
}
.footer-2-2_2{
    width:400px;height:112px;
    margin-left:75px;
}
.footer-2-2_1-1{
    color:#232323;
    font-size:18px;
    cursor: pointer;
}
.footer-2-2_2>ul li{
   float:left;
}
.footer-2-2_2-1,.footer-2-2_2-3{
    color:#232323;
    font-size: 18px;
}
.footer-2-2_2-2{
    color:#232323;
    font-size: 18px;
    padding:0 60px;
}
.footer-2-2_2-4{
    color:#232323;
    font-size: 18px;
}
.footer-2-2_2-5{
    color:#232323;
    font-size: 18px;
    padding:0 60px;
}
.footer-2-2_2-6{
    color:#232323;
    font-size: 18px;
    padding-left:36px;
}
.footer-2-3{
    height:157px;width:756px;
    margin-top:40px;
}
.footer-2-3-1{
    display:flex;
    justify-content:start;
}
.footer-2-3-1>li:first-child{
    padding-right:10px;
}
.footer-2-3-1>li:nth-child(2){
    padding: 0 10px;
}
.footer-2-3-1>li:nth-child(3){
    padding: 0 10px;
}
.footer-2-3-1>li:nth-child(4){
    padding: 0 30px;
}
.footer-2-3-1>li:nth-child(5){
    padding: 0 22px;
}
.footer-2-3-1>li:nth-child(6){
    padding: 0 22px;
}
.footer-2-3-1>li:nth-child(7){
    padding: 0 22px;
}
.footer-2-3-1>li:nth-child(8){
    padding: 0 22px;
}
.footer-2-3-1_1{
    color:#232323;
    font-size: 18px;
}
.footer-2-3-1>li{
   position: relative;
}
.footer-2-3-1>li:nth-child(5)>ul>li>img{
  width:202px;height:97px;
}
.footer-2-3-1>li:nth-child(5)>ul{
    position:absolute;
    top:-122px;left:-2px;
    z-index:-1;
    opacity:0;
    transition:all 1S linear;
}
.footer-2-3-1>li:nth-child(5):hover>ul{
    opacity:1;
    top:-100px;
    z-index:1;
}
.footer-2-3-1>li:nth-child(6)>ul>li>img{
  width:202px;height:97px;
}
.footer-2-3-1>li:nth-child(6)>ul{
    position:absolute;
    top:-122px;left:-2px;
    z-index:-1;
    opacity:0;
    transition:all 1S linear;
}
.footer-2-3-1>li:nth-child(6):hover>ul{
    opacity:1;
    top:-100px;
    z-index:1;
}
.footer-2-3-1>li:nth-child(7)>ul>li>img{
  width:202px;height:97px;
}
.footer-2-3-1>li:nth-child(7)>ul{
    position:absolute;
    top:-122px;left:-2px;
    z-index:-1;
    opacity:0;
    transition:all 1S linear;
}
.footer-2-3-1>li:nth-child(7):hover>ul{
    opacity:1;
    top:-100px;
    z-index:1;
}
.footer-2-3-1>li:nth-child(8)>ul>li>img{
  width:202px;height:97px;
}
.footer-2-3-1>li:nth-child(8)>ul{
    position:absolute;
    top:-122px;left:-2px;
    z-index:-1;
    opacity:0;
    transition:all 1S linear;
}
.footer-2-3-1>li:nth-child(8):hover>ul{
    opacity:1;
    top:-100px;
    z-index:1;
}
.fnav9{
    width: 700px; height: 40px;
    font-size:18px;
    color: #232323;
    padding:20px 0;
}
.fnav10{
    float: left;
    padding:25px 0;
    cursor: pointer;
}
.fnav10-1{
    color:#232323;
    font-size:18px;
}
.fnav10-img{
    width:30px;height:36px;
}
.fnav11{
    float: left;
    padding:40px 30px;
    cursor: pointer;
}
</style>
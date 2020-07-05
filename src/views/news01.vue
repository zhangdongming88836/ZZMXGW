<template>
        <div>
        <!--第一个大图片-->
       <div class="zw">
         <img src="../assets/1555470433457669446.jpg" alt="" title="花蜜私语护手霜礼盒">  
     </div> 
     <!--第一个大图片结束-->
     <!--第二个导航栏-->
     <div class="menu">
          <ul class="pnav">
              <li>
                <router-link class="pnav-4" to="/dynamic" title="全部动态">全部动态</router-link>  
               </li>
              <li>
                <router-link class="pnav-2" to="/media" title="媒体报道">媒体报道</router-link>   
              </li>
              <li>
                <router-link class="pnav-3" to="/recent" title="新品动态">新品动态</router-link>   
              </li>
              <li>
               <router-link class="pnav-1" to="" title="最新资讯">最新资讯</router-link>    
              </li>
          </ul>     
        </div>
     <!--第二个导航栏结束-->
      <div class="dynamic-list">
           <ul >
               <li class="dynamic-list-1">
                 <div>
                     <router-link to="/news">
                         <img class="dynamic-list-img" src="../assets/15774427971119988806.jpeg" alt="">
                     </router-link>
                 </div>
                 <div class="dynamic-list-1_1">
                   <span>2019/12/26 | 最新资讯</span><br>
                   <router-link class="dynamic-list-1_2" to="/news" title="始于爱，成于心，2019真珠美学“一路精彩”">始于爱，成于心，2019真珠美学“一路精彩”</router-link><br>
                   <router-link class="dynamic-list-1_3" to="/news" title="始于爱，成于心，2019真珠美学“一路精彩”">点击查看</router-link>
                </div> 
                <!--2--> 
               </li>
                <li class="dynamic-list-1">
                 <div>
                     <router-link to="/chinoiserie">
                         <img class="dynamic-list-img" src="../assets/1577442095917059784.jpeg" alt="">
                     </router-link>
                 </div>
                 <div class="dynamic-list-1_1">
                   <span>2019/12/23 | 最新资讯</span><br>
                   <router-link class="dynamic-list-1_2" to="/chinoiserie" title="中国风、国潮装…… 真珠美学的这场盛典美“炸”了">中国风、国潮装…… 真珠美学的这场盛典美“炸”了</router-link><br>
                   <router-link class="dynamic-list-1_3" to="/chinoiserie" title="中国风、国潮装…… 真珠美学的这场盛典美“炸”了">点击查看</router-link>
                </div>  
               </li>
               <!---->
               <!--3--> 
               
                <li class="dynamic-list-1">
                 <div>
                     <router-link to="/489.html">
                         <img class="dynamic-list-img" src="../assets/15774409851883354290.png" alt="">
                     </router-link>
                 </div>
                 <div class="dynamic-list-1_1">
                   <span>2019/12/22 | 最新资讯</span><br>
                   <router-link class="dynamic-list-1_2" to="/489.html" title="《A Woman Makes A Plan》新书发布：Maye Musk畅">《A Woman Makes A Plan》新书发布：Maye Musk畅</router-link><br>
                   <router-link class="dynamic-list-1_3" to="/489.html" title="《A Woman Makes A Plan》新书发布：Maye Musk畅">点击查看</router-link>
                </div>  
               </li> 
               </ul>
            </div>
             <br>
             <br>
             <br>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.zw{
   width:942px;height:449px; 
    
   margin:50px auto; 
}
.zw>img{
  width:942px;height:449px;
}
/*第一个大图片结束 */
/*第二个导航栏 */
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
/*第二个导航栏 结束*/
/*动态列表 */
.dynamic-list{
   margin: 0 auto;
    overflow: hidden;
    width: 742px;
    margin-top: 25px;
}
.dynamic-list-1{
    display: flex;
    justify-content:start;
    border-bottom:1px solid #d5d2d5;
     margin-bottom: 15px;
}
.dynamic-list-img{
    width:220px; height:113px;
}
.dynamic-list-1_1{
    width:498px;
    margin-left:20px;
}
.dynamic-list-1_1>span{
    display: block;
    color:#636363;
    font-size:12px;
    margin-bottom:10px;
}
.dynamic-list-1_2{
    display: block;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#636363;
    font-size:22px;
}
.dynamic-list-1_3{
    display: block;
    color: #666666;
    font-size: 12px;
    margin-top:10px;
    text-align: right;
}
/*动态列表结束 */
</style>
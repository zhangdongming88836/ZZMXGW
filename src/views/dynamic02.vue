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
                <router-link class="pnav-1" to="" title="全部动态">全部动态</router-link>  
               </li>
              <li>
                <router-link class="pnav-2" to="" title="媒体报道">媒体报道</router-link>   
              </li>
              <li>
                <router-link class="pnav-3" to="/recent" title="新品动态">新品动态</router-link>   
              </li>
              <li>
               <router-link class="pnav-4" to="/news01" title="最新资讯">最新资讯</router-link>    
              </li>
          </ul>     
        </div>
     <!--第二个导航栏结束-->
     <!--动态列表-->
        <div class="dynamic-list">
           <ul >
               <li class="dynamic-list-1">
                 <div>
                     <router-link to="/news">
                         <img class="dynamic-list-img" src="../assets/1552445484753553204.jpeg" alt="">
                     </router-link>
                 </div>
                 <div class="dynamic-list-1_1">
                   <span>2019/03/12 | 媒体报道</span><br>
                   <router-link class="dynamic-list-1_2" to="/news" title="3年吸引32万人成为忠诚代理 真珠美学如何诠释珍">3年吸引32万人成为忠诚代理 真珠美学如何诠释珍</router-link><br>
                   <router-link class="dynamic-list-1_3" to="/news" title="3年吸引32万人成为忠诚代理 真珠美学如何诠释珍">点击查看</router-link>
                </div> 
                <!--2--> 
               </li>
                <li class="dynamic-list-1">
                 <div>
                     <router-link to="">
                         <img class="dynamic-list-img" src="../assets/15524454871467247373.jpeg" alt="">
                     </router-link>
                 </div>
                 <div class="dynamic-list-1_1">
                   <span>2019/02/28 | 媒体报道</span><br>
                   <router-link class="dynamic-list-1_2" to="" title="从一支洗面奶开始，真珠美学如何用三年开创行业">从一支洗面奶开始，真珠美学如何用三年开创行业</router-link><br>
                   <router-link class="dynamic-list-1_3" to="" title="从一支洗面奶开始，真珠美学如何用三年开创行业">点击查看</router-link>
                </div>  
               </li> 
            </ul>
            </div>
             <div class="paging">
         <ul class="paging-1">
           <li>
               <router-link class="paging-1_1" to="/dynamic01">上一页</router-link>  
             </li> 
             <li>
              <router-link class="paging-1_1"  to="/dynamic">1</router-link>    
             </li>
             <li>
              <router-link class="paging-1_1"  to="dynamic01">2</router-link>    
             </li>
             <li>
               <router-link class="paging-1_2"  to="">3</router-link>   
             </li>
            <!-- <li>
              <router-link class="paging-1_1"  to="">下一页</router-link>    
             </li>-->
         </ul>
     </div>
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
/*分页查询 */
.paging{
    width:742px;
    padding-top:20px;
    padding-bottom: 90px;
    margin:auto;
}
.paging-1{
    width: 173px;
    display: flex;
    justify-content: space-around;
    padding:0 8px;
    margin: 0 2px;
    margin:auto;
   
}
.paging-1_1{
    display:block;
    color:#666666;
    font-size:12px;
    transition: all 0.5s;
}
.paging-1_1:hover{
   color:#ffdfe0;
    font-size:16px;
}
.paging-1_2{
   display:block;
   color:#666666;
   background:#ffdfe0 ;
  font-size:15px; 
}
/*分页查询结束*/
</style>
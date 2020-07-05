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
                <router-link class="pnav-3" to="/dynamic" title="全部动态">全部动态</router-link>  
               </li>
              <li>
                <router-link class="pnav-2" to="/media" title="媒体报道">媒体报道</router-link>   
              </li>
              <li>
                <router-link class="pnav-1" to="" title="新品动态">新品动态</router-link>   
              </li>
              <li>
               <router-link class="pnav-4" to="/news01" title="最新资讯">最新资讯</router-link>    
              </li>
          </ul>     
        </div>
     <!--第二个导航栏结束--> 
     <br>
     <br>
     <br>
      <div style="width:895px; margin:15px auto;">
       <video src="../assets/x.mp4" controls></video>
     </div>
      <br>
     <br>
     <br>
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
/*第一个大图片 */
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
</style>
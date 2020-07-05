<template>

      <div class="topWrap">
        <router-link class="top-img-1" to="/" title="真珠美学pearlosophy"></router-link>
         <div class="nav">
           <ul>
             <li>
               <router-link to="/products" class="nav-1"  title="所有产品(Products)"></router-link>
               <ul>
                <li><router-link class="nav-2" to="/skin">护肤</router-link></li> 
                <li><router-link class="nav-2" to="/ammy">彩妆</router-link></li> 
                <li><router-link class="nav-2" to="/drink">饮品</router-link></li> 
                </ul>
             </li>
             <li>
                 <router-link to="/index" class="nav-1"  title="品牌故事(Brand Story)" ></router-link>
             </li>
             <li>
                 <router-link to="/dynamic" class="nav-1" title="最新动态(What'New)"></router-link>
             </li>
             <li>
                 <router-link to="/regulate" class="nav-1" title="皮肤管理中心(Skin Care Center)"></router-link>
             </li>
             <li>
                 <router-link to="/add" class="nav-1" title="关于我们(About Us)"></router-link>
               <ul>
                <li><router-link class="nav-2"  to="/add">公司地址</router-link></li> 
                <li><router-link class="nav-2" to="/add01">加入我们</router-link></li> 
              </ul>
             </li>
           </ul>
         </div>
      </div>

 
</template>
<script>

export default {
}
</script>
<style scoped>
.topWrap{
  width:100%;height:155px;
  border-bottom:1px solid #dcd5d2;
}
.top-img-1{
  display:block;
  width:233px;height:68px;
  background:url(../assets/logo.png);
  background-size: 100% 100%;
  margin:0 auto;
}
.top-img-1:hover{
  width:233px;height:68px;
  background:url(../assets/logo3.png);
  background-size: 100% 100%;
}

.nav{
  width:962px;height:85px;
  margin:0 auto;
}
.nav>ul{
  display: flex;
  justify-content:space-between;
}
.nav>ul>li{
  width:192px;height:85px;
 }
.nav>ul>:first-child{
  background:url("../assets/nav01.png");
  background-size:100% 100%;
}
.nav>ul>:last-child{
  background:url("../assets/nav05.png");
  background-size:100% 100%;
}
.nav>ul>:nth-child(2){
  background:url("../assets/nav02.png");
  background-size:100% 100%;
}
.nav>ul>:nth-child(3){
  background:url("../assets/nav03.png");
  background-size:100% 100%;
}
.nav>ul>:nth-child(4){
  background:url("../assets/nav04.png");
  background-size:100% 100%;
}
.nav>ul>:first-child:hover{
  background:url("../assets/nav1.png");
  background-size:100% 100%;
  cursor: pointer;
}
.nav>ul>:last-child:hover{
  background:url("../assets/nav5.png");
  background-size:100% 100%;
  cursor: pointer;
}
.nav>ul>:nth-child(2):hover{
  background:url("../assets/nav2.png");
  background-size:100% 100%;
  cursor: pointer;
}
.nav>ul>:nth-child(3):hover{
  background:url("../assets/nav3.png");
  background-size:100% 100%;
  cursor: pointer;
}
.nav>ul>:nth-child(4):hover{
  background:url("../assets/nav4.png");
  background-size:100% 100%;
  cursor: pointer;
}
.nav-1{
  display: inline-block;
  width:100%;height: 100%;
}
.nav>ul>li>ul{
  width:192px;height:0px;
  text-align: center;
  overflow: hidden;
  transition:all .5s linear;
  cursor: pointer;
  background:#fff;
  position: relative;
  z-index: 1;
}
.nav>ul>li:first-child:hover>ul{
  height:65px;
}
.nav-2{
  color:rgba(0, 0, 0, 0.3);
}
.nav-2:hover{
 color:rgba(0, 0, 0, 0.7);
}
.nav>ul>li>ul>li:hover{
  background:#fdf4f8;
}
.nav>ul>li:last-child>ul{
  width:192px;height:0px;
  text-align: center;
  overflow: hidden;
  transition:all .5s linear;
  cursor: pointer;
}
.nav>ul>li:last-child:hover>ul{
  height:40px;
}
</style>
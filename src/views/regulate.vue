<template>
      <div>
      <div class="zhong">
          <div class="zhong1">
              pearlosophy真珠美学皮肤管理中心正式开业于2018年10月
              <br>
            位于上海大虹桥核心CBD商业区，地理位置便利，环境舒心惬意
          </div>
          <div class="zhong2">
          <ul  >
              <li class="zhong2-1">
                <router-link to="" class="zhong2-img"></router-link>   
              </li>
              <li class="zhong2-1">
                 <router-link to="" class="zhong2-img1">
                  </router-link>   
              </li>
              <li class="zhong2-1">
                 <router-link to="" class="zhong2-img2">
                </router-link>   
              </li>
          </ul>
          </div>
       </div>
       <div class="zhong3">
              <img class="zhong3-img" src="../assets/zhong.png" alt="">
              <br>
              <br>
              我们优选全球皮肤管理行业前沿的专属定制高端仪器，以帮助应对各种肌肤需求；同时秉承真珠美学
              <br>
              一贯的3P原则，护肤品依旧由世界级工厂研发制造，确保产品有效。专业的皮肤管理团队，
              <br>
              一对一面诊会谈，给到专属护肤建议，贴心的服务体验。我们坚信，科技美肤，奢享更有效。
          </div>
    </div>
   
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .zhong{
    height: 650px;
    overflow: hidden;
    background: url(../assets/center.jpg) no-repeat center 0;
    background-size: 1920px 590px;
}
.zhong1{
    width: 600px;
    height: 46px;
    text-align: center;
    margin: 0 auto;
    margin-top: 425px;
    color: #666666;
    font-size: 16px;
    line-height: 25px;
}
.zhong2{
    width: 846px;
    height: 143px;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
}
.zhong2>ul{
    display: flex;
    justify-content: space-around;
}
.zhong2-1 {
    width: 270px;height: 143px;
    margin-right: 3px;
    text-align: center;
}
.zhong2-img{
    display:inline-block;
    width:143px;height:143px;
    background-image: url(../assets/l.png) ;
    background-size: 100% 100%;
    transition: all 0.3s;
}
.zhong2-img:hover{
   background-image: url(../assets/l2.png) ;
   background-size: 100% 100%; 
}
.zhong2-img1{
    display:inline-block;
    width:143px;height:143px;
    background-image: url(../assets/m.png) ;
    background-size: 100% 100%;
    transition: all 0.3s;
}
.zhong2-img1:hover{
   background-image: url(../assets/m2.png) ;
   background-size: 100% 100%; 
}
.zhong2-img2{
    display:inline-block;
    width:143px;height:143px;
    background-image: url(../assets/r.png) ;
    background-size: 100% 100%;
}
.zhong2-img2:hover{
   background-image: url(../assets/r2.png) ;
   background-size: 100% 100%; 
}
.zhong3{
    width: 800px;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    color:#666666;
    padding-bottom: 80px;
    font-size: 16px;
    line-height: 25px;
}
.zhong3-img{
    width:24px;height:23px;
}

</style>
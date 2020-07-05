<template>
    <div>
        <!--1-->
        <rotate></rotate>
        <!--2-->
       <h2 class="slide-top">
         Products
         <br>
        <span>产品</span>
       </h2>
       <!--3-->
       <div class="option">
          <ul>
              <li>
                <router-link to="">
                 <img class="option-img1"  src="../assets/pro1.png" alt="">    
                </router-link>  
              </li>
              <li>
                <router-link to="">
                <img class="option-img2"  src="../assets/pro2.png" alt="">   
                </router-link>    
              </li>
              <li>
                <router-link to="">
                  <img class="option-img3" src="../assets/pro3.png" alt="">    
                </router-link>    
              </li>
          </ul>   
       </div>
         <!--5-->
        <h2 class="slider">
          Brand Story
          <br>
         <span>品牌故事</span>
        </h2> 
          <!--5-->
        <div class="ys11">
            <div class="ys11-1">
                <router-link to="">
                    <img class="ys11-1_1" src="../assets/madewith.png" title="madewith" alt="">
                </router-link>
            </div>
            <div class="ys11-2">
               pearlosophy
               <span>真珠美学为2016年成立的轻奢美妆护肤品牌
               </span> 
            </div>
            <div class="ys11-3">
                品牌推崇“女性独立而美”的生活方式以及“始于爱，成于心”的品牌理念
                <br>
                使用来自世界各地的珍贵原料，迅速成为现代女性追崇的美妆护肤品牌。
            </div>
            <div class="ys11-4">
                <ul>
                    <li>
                       Pure Lngredients
                        <br>
                       纯真的成分 
                    </li>
                    <li>
                      Place Of Origin
                      <br>
                      来源地证明  
                    </li>
                    <li>
                       Proven Formulation
                       <br>
                       证实过的配方 
                    </li>
                </ul>
            </div>
        </div>
        <!--6-->
        <h2 class="slider">
           Star Product
           <br>
           <span>明星产品 </span>
        </h2>
        <!--7-->
        <div class="mxcp">
            <router-link to="">
                <img class="mxcp-1" src="../assets/xmn.jpg" alt="">
            </router-link>
        </div>
        <div class="mxcp2">
            <router-link to="">
                <img class="mxcp-1" src="../assets/bb.jpg" alt="">
            </router-link>
        </div>
        <div class="mxcp3">
            <router-link to="">
                <img class="mxcp-1" src="../assets/bb2.jpg" alt="">
            </router-link>
        </div>
        <!--8-->
        <h2 class="slider">
            Skin Care Center
            <br>
          <span>皮肤管理中心</span>  
        </h2>
        <!--9-->
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
import rotate from "../components/rotate.vue"
export default {
  components:{rotate}, 
}
</script>
<style scoped>
 .flickers{
    width: 1280px;
    height: 494px;
    background-color: #e6e6e6;
    overflow: hidden;
    margin: 0 auto;
    background-image: url(../assets/bbg.jpg);
 }
/*....2.... */
.slide-top{
    font-size: 30px;
    color:#666666;
    font-weight: normal;
    margin-top: 38px;
    text-align: center;
    height: 126px;
    text-transform: Capitalize;
}
.slide-top>span{
    display: block;
    font-size: 18px;
    font-weight: normal;
    line-height: 20px;
    text-transform: capitalize;
}
/*.......3........*/ 
.option>ul{
   width:846px;
   margin:0 auto;
   overflow: hidden;
   display: flex;
   justify-content: space-between;
}
.option>ul>li:first-child{
    width:277px;height:353px;
    background: url(../assets/pro1s1.png) no-repeat center 0;
    background-color: #f4f4f4;
    background-size: 100% 100%;
}
.option>ul>li:first-child:hover{
    background: url(../assets/pro1s.png) no-repeat center 0;
    background-color:#fff7fa;
    background-size: 100% 100%;
}
.option>ul>li:last-child{
    width:277px;height:353px;
    background: url(../assets/pro2s1.png) no-repeat center 0;
    background-color: #f4f4f4;
    background-size: 100% 100%;
}
.option>ul>li:last-child:hover{
    background: url(../assets/pro2s.png) no-repeat center 0;
    background-color:#fff7fa; 
    background-size: 100% 100%;
}
.option>ul>li:nth-child(2){
    width:277px;height:353px;
    background: url(../assets/pro3s1.png) no-repeat center 0;
    background-color: #f4f4f4;
    background-size: 100% 100%;
}
.option>ul>li:nth-child(2):hover{
     background: url(../assets/pro3s.png) no-repeat center 0;
    background-color:#fff7fa; 
    background-size: 100% 100%;
}
.option-img1{
    width:277px;height:353px;
    transition:all 0.5s linear;
}
.option-img1:hover{
  transform: scale(1.1);
}
.option-img2{
    width:277px;height:353px;
    transition:all 0.5s linear;
}
.option-img2:hover{
  transform: scale(1.1);
}
.option-img3{
    width:277px;height:353px;
    transition:all 0.5s linear;
}
.option-img3:hover{
  transform: scale(1.1);
}
/*...4... */
.slider{
    font-size: 30px;
    color:#666666;
    font-weight: 350;
    margin-top: 58px;
    text-align: center;
    height: 126px;
    text-transform: Capitalize;
}
.slider>span{
   font-size:18px;
}
/*...5... */
.ys11{
    width: 100%;
    height: 562px;
    overflow: hidden;
    background: url(../assets/abg.jpg) no-repeat center 0;
    background-size: 1920px 100%;
    text-align: center;
    margin-top: -52px;
}
.ys11-1{
   width:190px;height:87px;
    margin:auto;
    margin-top:150px;
}
.ys11-1_1{
     width:190px;height:87px;
     cursor: pointer;
}
.ys11-2{
    width:614px ;height:19px;
    color:#666666;
    font-size:16px;
    margin:auto;
    margin-top:60px;
}
.ys11-2>span{
    font-weight:bold;
}
.ys11-3{
    margin-top:20px;
    color: #666666;
    font-size:16px;
}
.ys11-4{
    width:561px;
    margin:auto;
    margin-top:30px;
}
.ys11-4>ul{
   display:flex;
   justify-content: center;
}
.ys11-4>ul>li{
    color: #666666;
    font-size:14px;
    padding:0 20px;
}
/*7 */
.mxcp{
    width: 965px;
    margin: auto;
}
.mxcp-1{
   width: 965px;height:498px; 
}
.mxcp2{
    width: 965px;
    margin: auto;
}
.mxcp3{
    width: 965px;
    margin: auto;
    margin-top:-4px;
}
/*9 */
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
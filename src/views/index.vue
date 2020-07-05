<template>
   <div>
       <div class="menu">
           <ul>
               <li>
                <router-link to="" class="menu-2" title="品牌介绍 Brand Introduction">品牌介绍 Brand Introduction</router-link>  
               </li>
               <li>
                   <router-link to="/soi" class="menu-1" title="灵感来源 Inspiration">灵感来源 Inspiration</router-link> 
               </li>
               <li>
                   <router-link to="/founder" class="menu-1" title="真珠美学创始人 TheFounder">真珠美学创始人 TheFounder</router-link> 
               </li>
           </ul>
       </div>
       <!-- 大背景图片-->
       <div class="yspic">
          <img class="yspic-img" title="madewith" src="../assets/madewith.png" alt="">
         <div class="yspic-1">
             Brand Introduction
             <br>
            <span class="yspic-1-1">品牌介绍</span>
         </div>
           <div class="yspic-2">
             pearlosophy真珠美学在2016年由 Peggy Sun成立，一个以珍珠为灵感来源的轻奢美妆护肤品牌，真珠美学推崇「女性独立而美」的生活方式以及「始于爱，成于心」的品牌理念。
             <br>
             <br>
             独特的产品优势，使真珠美学得以利用口碑传播和迅速崛起的新媒体渠道，领跑美妆行业的新型便捷销售模式，让无数女性实现了「人格、事业」双独立，完成从外貌到人生的全方位蜕变  
           </div>
           <div class="yspic-3">
             Pearlosophy is a leading luxury beauty & skincare brand created by beauty entrepreneur Peggy Sun in 2016.The brand's ideology is based on empowering women and creating a“beautiful and independent ” lifestyle. All products are “Made with Love” and are created using the highest quality ingredients sourced from all around the world.
             <br>
             Pearlosophy has resonated greatly with the mainstream female consumer audience in a very short time period and continues to gain hundreds of devoted followers, customers, and affiliates every day. Dedicated to her craft, founder Peggy has visited the top cosmetic factories in the world, in order to offer customers the most professional and effective skincare experience. Peggyʼs pursuit of beauty has made pearlosophy into one of the most popular international skincare brands in the mere span of 2 years.
             <br>
             Based on a modern social media-influenced business model, pearlosophy leads the beauty industry by exploring new ways to communicate, market, demonstrate, and resonate with thousands of users via social media platforms, helping countless women recognize and reclaim their beauty and independence.
           </div>
           <div class="yspic-4">
               Brand History
               <br>
               <span class="yspic-4-1">品牌历程</span>
           </div>
       </div>
       <!--品牌介绍的超大图片-->
       <div class="History">
           <img class="History-img" src="../assets/History.jpg" alt="">
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.menu{ widows:100%;height:70px;}
.menu>ul{
    width:962px;
    margin:0 auto;
    display:flex;
    justify-content: space-around;
    text-align: center;
    line-height: 70px;
    font-size: 18px;
}
.menu-1{
    color:#6c6c6c;
}
.menu-2{
    color:#f1dde8;
}
.menu-1:hover{
    color:#f1dde8;
}
/*大背景图片*/
.yspic{
    width:100%;height:812px;
    background-image:url(../assets/aboutbg2.jpg);
    background-size: 100% 100%;
    text-align: center;
}
.yspic-img{
    width:190px;height:87px;
    margin-top:50px;
}
.yspic-1{
    font-size: 30px;
    color:rgba(0, 0, 0, 0.5);
    font-weight: normal;
    text-transform: Capitalize;
    margin-top:50px;
}
.yspic-1-1{
    font-size: 18px;
    color:rgba(0, 0, 0, 0.5);
}
.yspic-2{
    width:740px;
    margin:0 auto;
    margin-top: 15px;
    font-size: 16px;
    color:#666666;
}
.yspic-3{
    width: 740px;
    margin:0 auto;
    text-align: left;
    margin-top: 30px;
    font-size: 14px;
    color:#666666;
}
.yspic-4{
    font-size: 30px;
    color:#666666;
    font-weight: normal;
    padding-top: 35px;
    text-align: center;
    height: 60px;
    text-transform: Capitalize;
    margin-top: 50px; 
}
.yspic-4-1{
    font-size:18px;
}
/*品牌介绍超大图片*/
.History{
  text-align: center;
} 
.History-img{
    width:1200px;
    
}
</style>
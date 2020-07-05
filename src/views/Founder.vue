<template>
    <div>
       <div class="menu3">
           <ul>
               <li>
                <router-link to="/index" class="menu3-1" title="品牌介绍 Brand Introduction">品牌介绍 Brand Introduction</router-link>  
               </li>
               <li>
                   <router-link to="/soi" class="menu3-1" title="灵感来源 Inspiration">灵感来源 Inspiration</router-link> 
               </li>
               <li>
                   <router-link to="" class="menu3-2" title="真珠美学创始人 TheFounder">真珠美学创始人 TheFounder</router-link> 
               </li>
           </ul>
       </div>
       <h2 class="slide_top">
           The Founder
           <br>
         <span>真珠美学创始人</span>
       </h2> 
       <div class="ys2">
         <div class="ys2-2"> 
             <div class="ys2-3"></div>
          <div class="ys2-1">
             <span>
               企业家
               <br>
               新时代女性生活方式推崇者 
            </span>
            <br>
            <br>
            PeggySun潜心投入护肤美妆行业多年，因为对“美”的苛刻坚持，PeggySun走访了世界各地的美妆护肤品原料供应及生产厂商，只为给消费者带来更安全有效的护肤及美妆体验。 
             <br>
             PeggySun于2016年创立轻奢美妆护肤品牌Pearlosophy真珠美学，推动了“社交媒体”新商业模式的发展，将“女性经济独立”以及“爱己，爱人”的品牌理念传达给消费者，改变了现代女性的理念与生活方式的同时推动了中国美妆行业的发展。
             <br>
             <br>
             Peggy sun has fully embraced the cosmetics industry for years. In order to offer customers with more professional and effective skincare experience, Peggy Sun has visited cosmetics suppliers and factories all over the world.
             <br>
             <br>
             Peggy Sun created her own brand pearlosophy in 2016 which is a premium beauty brand. Based on modern social media influenced business model, Peggy Sun helped countless women recognize and reclaim their beauty and independence.
          </div>
          <div class="ys2-4"></div>
       </div>
       </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.menu3{ widows:100%;height:70px;}
.menu3>ul{
    width:962px;
    margin:0 auto;
    display:flex;
    justify-content: space-around;
    text-align: center;
    line-height: 70px;
    font-size: 18px;
}
.menu3-1{
    color:#6c6c6c;
}
.menu3-2{
    color:#f1dde8;
}
.menu3-1:hover{
    color:#f1dde8;
}
/*创始人介绍*/ 
.slide_top{
    height: 126px;
    text-align: center;
    color:#666666;
    font-size: 30px;
    font-weight: normal
}
.slide_top>span{
    display: inline-block;
    font-size: 18px;
}
.ys2{
    height: 748px;
    overflow: hidden;
    background: url(../assets/abg22.jpg) no-repeat center 0;
    margin-top: -50px;
    background-size: 1920px 648px;
}
.ys2-2{
    width: 100%;
    margin-top:104px;
     display: flex;
    justify-content: space-between;
}
.ys2-3{
   width:30px;
}
.ys2-4{
   width:260px;
}
.ys2-1{
   width:600px;
   color:#666666;
   line-height: 22px;
}
.ys2-1>span{
    color:#666666;
    font-size:18px;
    font-weight:bold;
}
</style>
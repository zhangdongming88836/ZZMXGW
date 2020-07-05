<template>
     <div>
        <div class="menu2">
           <ul>
               <li>
                <router-link to="/index" class="menu2-1" title="品牌介绍 Brand Introduction">品牌介绍 Brand Introduction</router-link>  
               </li>
               <li>
                   <router-link to="" class="menu2-2" title="灵感来源 Inspiration">灵感来源 Inspiration</router-link> 
               </li>
               <li>
                   <router-link to="founder" class="menu2-1" title="真珠美学创始人 TheFounder">真珠美学创始人 TheFounder</router-link> 
               </li>
           </ul>
       </div>
         <div class="Inspiration">
             <h2>
                Inspiration
                <br>
                <span>灵感来源</span> 
             </h2>
             <img src="../assets/Inspiration-logo.png" alt="">
             <div class="Inspiration-text">
                 A beauty inspired by pearl :
                 <br>
                 The natural essence
                 <br>
                 The transforming power
                 <br>
                 The divine treasure for the human …
                 <br>
                 <br>
                 A beauty empowering you to glow, succeed and flourish.
                 <br>
                 It’s about freedom and achievement, for the fulfillment of Chinese women.
                </div>
                <div class="Inspiration-logo2">
                 <img src="../assets/Inspiration-logo2.png" alt="">
              </div>
              <div class="Inspiration-text2">
                  真珠美学，灵感源于珍珠：
                  <br>
                  凝萃天然精华
                  <br>
                  幻化美的能量
                  <br>
                  犹如上帝之泪，赋予人类神圣的珍宝
                  <br>
                  <br>
                  由内到外，赋活光彩
                  <br>
                  见证中国女性的成长与蜕变
                  <br>
                  祈愿她们活出自我，成就自我
              </div>
              <div class="Inspiration-logo3">
                  <img src="../assets/Inspiration-logo3.png" alt="">
              </div>
              <div class="Inspiration-text2">
                  Pearl Is Where We Start
                  <br>
                  <span>珍珠是我们一切的起点</span>
              </div>
              <ul>
                  <li>
                      <img src="../assets/Inspirations1.jpg" alt="">
                      <span>
                          Symbol Of Purity
                          <br>
                          珍珠象征纯净
                      </span>
                  </li>
                  <li>
                      <img src="../assets/Inspirations2.jpg" alt="">
                      <span>
                          Symbol Of Light
                          <br>
                          珍珠象征光明
                      </span>
                  </li>
                  <li>
                      <img src="../assets/Inspirations3.jpg" alt="">
                      <span>
                          Symbol Of Love
                          <br>
                          珍珠象征爱
                      </span>
                  </li>
              </ul>
         </div>
         <div class="info-main">
             <h2>3P Principles</h2>
             <br>
             <span>产品原则</span>
         </div>
         <div class="flexslider" @mouseenter="stop" @mouseleave="start">
           <ul class="flexslider-1" :style="mystyle" :class="ulClass">
             <li v-for="(elen,cm) of list" :key="cm">
               <img :src="elen.src" alt="" class="flexslider-img">
               <p class="flexslider-p">{{elen.p}}<br>
                  <span>{{elen.span}}</span>
               </p>
             </li>
              <li class="flexe">
               <img src="../assets/1546515231630427173.jpg" alt="" class="flexslider-img">
               <p class="flexslider-p">天然珍珠提取物是品牌的核心成份，采用高级珍珠有效提取物，配合各种天然植物成份，作为真珠美学的产品研发基础，坚持用最纯真的成份，不接受有环境污染的成份，不使用对皮肤有刺激的成份，这是品牌发展的第一原则。<br>
                  <span>The core ingredient of the brand is extracts from natural pearls. We use advanced effective pearl extracts imported from other countries with numbers of natural plant extracts as product development base of Pearlosophy. We insist to use the most pure ingredients, refuse to use environmentally polluted,irritating and allergic ingredients, which is the primary principle of brand development.</span>
               </p>
             </li>
           </ul>
            <ul class="flexslider-4">
              <li  v-for="(elen,idk) of list" :key="idk" :class="idk==index?'mmk':''" @click="cd(idk)"></li>  
            </ul>
         </div>
          <div class="flexslider-1-2" @click="ca(-1)"></div>
          <div class="flexslider-1-3" @click="ca(1)"></div>
     </div>
</template>
<script>
export default {
    data(){
        return{
            cc:null,
            mm:true,
            ulClass:{tan:true},
            index:0,
            width:743,
            list:[
                {src:require("../assets/1546515231630427173.jpg"),
                 p:"天然珍珠提取物是品牌的核心成份，采用高级珍珠有效提取物，配合各种天然植物成份，作为真珠美学的产品研发基础，坚持用最纯真的成份，不接受有环境污染的成份，不使用对皮肤有刺激的成份，这是品牌发展的第一原则。",
                 span:"The core ingredient of the brand is extracts from natural pearls. We use advanced effective pearl extracts imported from other countries with numbers of natural plant extracts as product development base of Pearlosophy. We insist to use the most pure ingredients, refuse to use environmentally polluted,irritating and allergic ingredients, which is the primary principle of brand development."
                },
                {src:require("../assets/153952608620857.jpg"),
                 p:"所有的原料都具备来源地的证明，我们坚持不用来历不明的原料或没有原产地证明的原料。这样的原则令我们可以有效的跟踪，所有产品里面成份和原料的来源地，确保有效控制原料无污染和无感染，不仅在生产或运输过程都有详细的跟踪和控制",
                 span:"Place of origin certificates can be applied to all raw materials Our firm principle on rejecting materials with unknown source of origin or without place or origin certificate allows us to trace effectively place of origin of ingredients and raw materials to all products, which ensures effective control of raw material pollution and affecti on, detailed trace and control are applicable through entire process of production and transportation."
                },
                {src:require("../assets/153952594119875.jpg"),
                 p:"一个好产品不仅给我们带来很好的使用感觉，最重要的是产品具备应有的功能，我们追求的不是夸张的描述产品的效果，只追求把产品应该达到的效果做到极致，让使用者有爱不释手的体验，配方必须经过时间和科学方法证实，其所描述的功效绝对不做对皮肤有害和无效的产品，务求达到使用者的完全认可和满意。",
                 span:"A good product not only gives us a good feeling of use, the most important thing is the product should have the function, we are not pursuing the exaggeration to describe the effect of the product, only the pursuit of the product should achieve the ultimate effect, so that use There is a love of the experience, the formula must be time and scientific methods to confirm that the efficacy of the descriptionof the skin is absolutely not harmful and invalid products, in order to achieve the user's full recognition and satisfaction."
                },
            ]
        }
    },
    computed:{
       mystyle(){
           var marginLeft=-this.width*this.index+"px";
           return{marginLeft}
       }
    },
    methods:{
        stop(){
            clearInterval(this.cc)
        },
        start(){
          this.cc=setInterval(() => {
              this.ca(1);
          },3000);
        },  
      ca(e){
         if(this.mm==true){
             this.mm=false;
          if(this.index==0&&e==-1){
            this.ulClass.tan=false;
            setTimeout(()=>{
             this.index=this.list.length;
             setTimeout(()=>{
              this.ulClass.tan=true;
              this.index+=e;
              setTimeout(()=>{
                  this.mm=true;
              },200)
             },50)
            },50)  
          }else if(this.index==this.list.length-1&&e==1){
              this.index+=e;
              setTimeout(()=>{
                this.ulClass.tan=false;
                setTimeout(()=>{
                    this.index=0;
                    setTimeout(()=>{
                      this.ulClass.tan=true;
                      setTimeout(()=>{
                          this.mm=true;
                      })
                    },50)
                },50)
              },600)
          }else{
              this.index+=e;
              setTimeout(()=>{
               this.mm=true;
              },600)
          }
          
        }
        },
        cd(e){
           if(this.mm){
               this.index=e;
               this.mm=false;
               setTimeout(()=>{
                   this.mm=true;
               })
           } 
        }
      },
 
}
</script>
<style scoped>
.menu2{ widows:100%;height:70px;}
.menu2>ul{
    width:962px;
    margin:0 auto;
    display:flex;
    justify-content: space-around;
    text-align: center;
    line-height: 70px;
    font-size: 18px;
}
.menu2-1{
    color:#6c6c6c;
}
.menu2-2{
    color:#f1dde8;
}
.menu2-1:hover{
    color:#f1dde8;
}
/* 大背景图片*/ 
.Inspiration{
     width: 100%;
    height: 1200px;
    margin: 0 auto;
    text-align: center;
    background: url(../assets/aboutbg.jpg)no-repeat center 0;
    background-size: 1920px 650px;
}
.Inspiration>h2{
    height: 95px;
    font-size: 30px;
    font-weight:400;
    padding-top: 35px;
    text-align: center;
    height: 60px;
    text-transform: Capitalize;
    color:#666666;
}
.Inspiration>h2>span{
    color:#666666;
    font-size:18px;
    font-weight:400;
    margin-top:10px;
}
.Inspiration>img{
    width:136px;height:23px;
    margin-top:248px;
}
.Inspiration-text{
    margin: 0 auto;
    margin-top: 10px;
    color:#666666;
    font-size: 16px;
    line-height: 25px;
    height: 200px;
    width: 600px;
    border-bottom: 1px solid #5e5e5e;
}
.Inspiration-logo2>img{
    width:87px;height:20px;
    margin:0 auto;
    margin-top:20px;
}
.Inspiration-text2{
    margin: 0 auto;
    margin-top: 10px;
    color:#666666;
    font-size: 16px;
    line-height: 25px;
    width: 600px;
}
.Inspiration-logo3>img{
    width:29px;height:29px;
    margin:0 auto;
    margin-top:25px;
}
.Inspiration-text2{
    margin: 0 auto;
    margin-top: 10px;
    color:#666666;
    font-size: 18px;
    line-height: 25px;
    width: 600px;
    text-transform: Capitalize;
}
.Inspiration-text2>span{
    font-size:14px;
}
.Inspiration>ul{
    width: 698px;
    height: 175px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
}
.Inspiration>ul>li>img{
    width:214px;height:122px;
}
.Inspiration>ul>li>span{
    display: block;
    color: #606060;
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
    text-transform: Capitalize;
}
.info-main{
    width:962px;height:95px;
    margin:0 auto;
    text-align: center;
    color:#666666;
}
.info-main>h2{
    font-size: 30px;
    font-weight: 350;
    padding-top: 35px;
    text-align: center;
    height: 60px;
    text-transform: Capitalize;
}
.flexslider{
    overflow: hidden;
    width: 743px;
    margin: 0 auto;
    text-align: center;
    margin:70px auto;
    height: 480px;
    position:relative;
}
.flexslider-1{
    width: 2980px;height:467px; 
    position: relative;
}
.flexslider-1>li{
  width: 743px;height:467px; 

  float: left;
}
.flexslider-img{
   width: 743px;height:269px;
}
.flexslider-p{
 width: 743px;height:154px;
     font-weight: normal;
    font-size: 16px;
    color: #8a8a8a;
    text-align: left; 
}
.flexslider-p>span{
    font-size: 14px;
}
.flexslider-1-2{
    width: 50px;height: 50px;
    background-image:url(../assets/prev.png);
     position: relative;
    top:-190px; left:467px;
    z-index: 2;
    cursor: pointer;
}
.flexslider-1-3{
    width: 50px;height: 50px;
    background-image:url(../assets/next.png);
    position: relative;
    top:-240px; right:-1396px;
    cursor: pointer;
    z-index: 2;
}
.flexslider-4{
    display: flex;
    width: 743px;
    justify-content: center;
    position: absolute;
    top:469px; left: 0px;
    z-index: 2;
}
.flexslider-4>li{
    width: 10px;height: 10px;
    background:#f1dde8;
    border-radius: 50%;
    margin:0 5px;
}
.flexslider-4>.mmk{
   background: #f3a6d7;
}
.tan{
    transition: all 0.5s linear;
}
</style>
<template>
   <div>
     <div>
       <img v-if="fa" src="../assets/153965685916265.jpg" alt="" class="detail-img">  
       <img v-else-if="fb" src="../assets/153965685110854.jpg" alt="" class="detail-img">  
       <img v-else-if="fc" src="../assets/153965684328123.jpg" alt="" class="detail-img">  
       <img v-else src="../assets/15396567473109.jpg" alt="" class="detail-img">  
    </div>
    <div class="small-boxx"> 
    <div class="small-box" @mouseleave="start" @mouseenter="stop">
    <div class="small-box-3"  :style="ulStyle" :class="ulClass">
      <div v-for="(ever,im) of list" :key="im" class="small-box-3-1">
      <img :src="ever.src" alt=""  @click="aa">  
      <img :src="ever.src1" alt="" @click="bb">  
      <img :src="ever.src2" alt="" @click="cc">  
      <img :src="ever.src3" alt="" @click="dd"> 
      </div> 
   </div>
   <ul class="small-box1">
     <li v-for="(ever,idx) of list" :key="idx" :class="idx==i?'acb':''"  @click="gb(idx)"></li>
   </ul>
   </div>
     <div class="small-box-1"><img src="../assets/prev.png" alt="" @click="fn(-1)"></div> 
      <div class="small-box-2"><img src="../assets/next.png" alt="" @click="fn(1)"></div> 
   </div> 
   <!--轮播下的-->
   <div class="contact">
     <ul class="contact-1">
       <li>
         <router-link class="contact-1-1" to="/add" title="公司地址 Find US">公司地址 Find US</router-link>
       </li>
       <li>
         <router-link class="contact-1-2" to="" title="加入我们 Join US">加入我们 Join US</router-link>
       </li>
     </ul> 
  </div>
  <div class="mkk">
    <h3 class="mkk-1">
        Join Us <br>
        <span>加入我们</span>
    </h3>
    <div class="mkk-2"></div>
    <p class="mkk-3">上海梵蓉网络科技有限公司(以下简称梵蓉网络)坐落于上海大虹桥商圈，于2016年由创始人Peggy婷姐成立，旗下拥有真珠美学品牌。<br>
       pearlosophy真珠美学推崇“女性独立而美”的生活方式，秉承“始于爱，成于心”的品牌理念，坚持从世界各地甄选珍贵的原料研发<br>
       产品，并由此迅速成为了现代女性追崇的轻奢美妆护肤品牌。
       目前，我们仍在不断探索，以国t际视野结合更好的资源优势，将最棒的产品与服务带给消费者。我们期待更多志同道合的人才加
        入，共同为诚信有爱的护肤品市场竭尽之力！期待你的加入。<br>
       目前在开放职位详见下方：</p>
    <add02></add02>
</div>
</div> 
</template>
<script>
import add02 from "../components/add02.vue"
export default {
       data(){
     return{
       fa:true,
       fb:false,
       fc:false,
       i:0,
       canClite:true,
       width:805,
       ulClass:{menuuu:true},
       timer:null,
       list:[
         {
           src:require("../assets/1540539635371792921.jpg"),
           src1:require("../assets/1540539653888672360.jpg"),
           src2:require("../assets/15405396481374007930.jpg"),
           src3:require("../assets/1540539658636281936.jpg"),
        },
         {
           src:require("../assets/1540539635371792921.jpg"),
           src1:require("../assets/1540539653888672360.jpg"),
           src2:require("../assets/15405396481374007930.jpg"),
           src3:require("../assets/1540539658636281936.jpg"),
        },
         {
           src:require("../assets/1540539635371792921.jpg"),
           src1:require("../assets/1540539653888672360.jpg"),
           src2:require("../assets/15405396481374007930.jpg"),
           src3:require("../assets/1540539658636281936.jpg"),
        },
         {
           src:require("../assets/1540539635371792921.jpg"),
           src1:require("../assets/1540539653888672360.jpg"),
           src2:require("../assets/15405396481374007930.jpg"),
           src3:require("../assets/1540539658636281936.jpg"),
        },
        
       ]
     }
   },
 computed:{
    ulStyle(){
      var marginLeft=-this.i*this.width+"px";
      return{marginLeft}
    }
  },    
  methods:{
     ff(){
         map.centerAndZoom(new BMap.Point(121.321662,31.202864), 17); 
        },
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(() => {
          this.fn(1)
      },3000);
    },
    aa(){this.fa=true,this.fc=false,this.fb=false},
    bb(){this.fb=true,this.fa=false,this.fc=false},
    cc(){this.fc=true,this.fa=false,this.fb=false},
    dd(){this.fa=false,this.fb=false,this.fc=false},
    fn(e){
      if(this.canClite){
        this.canClite=false;
         if(e==-1&&this.i==0){
            this.ulClass.menuuu=false;
           setTimeout(()=>{
             this.i=this.list.length;
             setTimeout(()=>{
               this.ulClass.menuuu=true;
               this.i+=e;
               setTimeout(()=>{
               this.canClite=true;
               })
             },50)
           },50)
         }else if(e==1&&this.i==this.list.length-1){
             this.i+=e;
             setTimeout(()=>{
               this.ulClass.menuuu=false;
               setTimeout(()=>{
                 this.i=0;
                 setTimeout(()=>{
                   this.ulClass.menuuu=true
                   setTimeout(()=>{
                     this.canClite=true;
                   })
                 },1500)
               },50)
             },50)
         }else{
           this.i+=e;
           setTimeout(()=>{
             this.canClite=true;
           },1500)
         }
      }
    },
    gb(e){
      if(this.canClite){
        this.i=e;
        this.canClite=false;
        setTimeout(()=>{
        this.canClite=true;
        })
      }
    },
  },
 


components:{add02}

}
</script>
<style scoped>
.detail-img{
    margin: 0 auto;
    text-align: center;
    height: 536px;
}

.small-box{
    width:805px;height: 200px;
    margin:0 auto;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-bottom:1px solid #898784;
}
.small-box1{
  margin:25px  0;
 position: relative;
 left:364px;
}
.small-box1>li{
  width:10px;height:10px;
  background: #f1dde8;
  border-radius: 50%;
  margin:0 5px;
  float: left;
  cursor: pointer;
}
.small-box1>.acb{
  background: #f3a6d7;
}
.small-boxx{
  position: relative;
}
.small-box-1{
  position: absolute;
  top:50px;left:423px;
  cursor: pointer;
}
.small-box-2{
  position: absolute;
  top:50px;left:1421px;
  cursor: pointer;
}
.small-box-3{
  width:600%;height: 134px;
}
.menuuu{
  transition: all 1.5s linear;
}
.small-box-3-1{
  float: left;
}
/*轮播下的 */
.contact{
    width: 962px;
/*  height: 1160px; */
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
}
.contact-1{
  display: flex;
  justify-content: center;
}
.contact-1>li{
  margin:0 50px;
}
.contact-1-1{
  color:#6c6c6c;
  font-size: 18px;
}
.contact-1-2{
  color:#f1dde8;
  font-size: 18px;
}
.contact-1-1:hover{
  color:#f1dde8;
}
.contact-2{
  width:860px;
  margin-top:70px;
}
.contact-3{
  color: #666666;
  font-size:16px;
}
.mkk{
    width: 962px;
    margin:0 auto;
    text-align: center;
}
.mkk-1{
    margin-top:60px;
    color:#666666;
    font-size: 30px;
    font-weight: 400;
}
.mkk-1>span{
    font-size: 18px;
}
.mkk-2{
     height: 317px;
    overflow: hidden;
    background: url(../assets/recuitment.jpg) no-repeat center 0;
    margin-top: 30px;
    margin-bottom: 20px;
    background-size: 1920px 317px;
}
.mkk-3{
    color:#666666;
    font-size: 16px;
}

</style>
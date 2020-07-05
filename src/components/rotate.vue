<template>
    <div>
       <div class="rotate"> 
         <div class="menu" @mouseenter="stop" @mouseleave="start">
            <div class="menuss" :class="ulClass" :style="ulStyle">
             <div v-for="(ever,i) of list" :key="i"  class="menussb" >  
            <div class="menu1" >{{ever.title}}</div>
            <div class="menu2">{{ever.msg}}</div>
            <div class="menu3" @click="fn(-1)"></div>
            <div class="menu4" @click="fn(1)"></div>
            <ul class="menu5">
                <li v-for="(ever,idx) of list" :key="idx" :class="idx==index?'act':''" @click="fc(idx)"></li>
            </ul>
           <ul  class="menu6">
               <li><img :src="ever.src" alt=""></li>
          </ul>
          </div>
             <div class="menussb" >  
            <div class="menu1" >{{list[0].title}}</div>
            <div class="menu2">{{list[0].msg}}</div>
           <ul  class="menu6">
               <li><img :src="list[0].src" alt=""></li>
          </ul>
          </div>
     <!---->
        </div> 
         
        <!---->
        </div> 
       </div>    
        
    </div> 
</template>
<script>
export default {
   data(){
       return{
           mm:942,
           ulClass:{menuuu:true},
           index:0,
           list:[
               {src:require("../assets/1584343551704731434.jpg"),
                title:"灯泡肌 耀你亮",
                msg:"light up"},
               {src:require("../assets/1575863283897611660.jpg"),
                title:"丝滑滋养发膜",
                msg:"一触难忘的顺滑轻盈"},
               {src:require("../assets/157370141429723682.jpg"),
                title:"精魅自动眉笔",
                msg:"“眉”力四射 轻松勾画"},
               {src:require("../assets/1569307473904466735.png"),
                title:"丝柔臻颜妆前乳",
                msg:"我的“磨皮滤镜”"},
               {src:require("../assets/15464867581958721584.jpg"),
                title:"焕活肌底精华液",
                msg:"从源头唤醒肌肤生机"},
               {src:require("../assets/1542249773358314064.jpg"),
                title:"携手共赢 · 与美同行",
                msg:"Made With Love"},
               ],
               canClick:true,
               timer:null
             }
 },
  computed:{
      ulStyle(){
          var marginLeft=-this.index*this.mm+"px";
          return {marginLeft}
      }
  },
  methods:{
      stop(){
          clearInterval(this.timer);
      },
      start(){
          this.timer=setInterval(()=>{
              this.fn(1);
          },3000)
      },
      fn(i){
          if(this.canClick){
             this.canClick=false;
             if(i==-1&&this.index==0){
                 this.ulClass.menuuu=false;
                 setTimeout(()=>{
                     this.index=this.list.length;
                     setTimeout(()=>{
                         this.ulClass.menuuu=true;
                         this.index+=i;
                    setTimeout(()=>{
                        this.canClick=true;
                    },200)
                     },50)
                 },50)
             }else if(i==1&&this.index==this.list.length-1){
                 this.index+=i;
                  setTimeout(()=>{
                      this.ulClass.menuuu=false;
                      setTimeout(()=>{
                          this.index=0;
                          setTimeout(()=>{
                              this.ulClass.menuuu=true;
                              setTimeout(()=>{
                               this.canClick=true;
                              })
                          },50)
                      },50)
                  },500)
             }else{
                 this.index+=i;
                 setTimeout(()=>{
                     this.canClick=true
                 },600)
             }
          }
      },
      fc(i){
          if(this.canClick){
              this.index=i;
              this.canClick=false;
              setTimeout(()=>{
                 this.canClick=true;
              },600)
          }
      }
  }
}
</script>
<style scoped>
.rotate{
    width: 1280px;
    height: 494px;
    background-color: #e6e6e6;
   overflow: hidden;
    margin: 0 auto;
    background-image: url(../assets/bbg.jpg);
}
.menu{
    width: 942px;
    height:477px;
   overflow: hidden;
    margin: 0 auto; 
    position: relative;
}
.menuss{
  width: 700%;
  height:477px;
   overflow: hidden;
    /* margin-left:0px;*/ 
}
.menuuu{
    transition: all 0.5s linear;
}
.menussb{
    float: left;
    width: 942px;
    height:477px;
   /*overflow: hidden;*/
    margin: 0 auto; 
}
.menu1{
    padding: 0px 0px;
    font-size: 22px;
    line-height: 1.995em;
    text-align: center;
    margin-top:30px; 
}
.menu2{
    font-weight: 300;
    color: #242424;
    font-size: 14px;
    text-align: center;
}
.menu3{
    width:85px;height:48px;
    background-image: url(../assets/arrow-left-dark.png);
    background-repeat: no-repeat;
    background-position:top;
    position: absolute;
    top:48px; left:203px;
    z-index: 1;
    cursor: pointer;
}
.menu4{
    width:85px;height:48px;
    background-image: url(../assets/arrow-right-dark.png);
    background-repeat: no-repeat;
    background-position:top;
    position:absolute;
    top:48px; left:645px;
    z-index: 1;
    cursor: pointer;
}
.menu5{
    position: absolute;
    left:396px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 15px 15px;
}
.menu5>li{
    width: 8px;height: 8px;
    margin:0 6px;
    border-radius: 50%;
    background:#f1dde8;
    cursor: pointer;
}
.menu5>li:hover{
    background: #f3a6d7;
}
.menu5>.act{
    background: #f3a6d7;
}
.menu6{
    height: 344px;
    margin-left:0px;
   margin-top:40px;
}
.menu6>li{
    float: left;
    cursor: pointer;
}
.menu6>li>img{
    width:939px ;height: 344px;
}
.tan{
    transition: all 0.5s linear;
}
</style>
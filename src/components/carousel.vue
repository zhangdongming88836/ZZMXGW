<template>
    <div>
     <div class="header2"></div>
        <!--1-->
        <div class="example">
            <div class="ft-varousel" @mouseenter="stop" @mouseleave="start">
             <ul class="ft-varousel-4" :style="ulStyle" :class="ulClass">
               <li v-for="(ever,im) of list" :key="im"><img :src="ever.src" alt=""></li>  
             </ul>
             <div>
             <div class="ft-varousel-1"><img src="../assets/prev.png" alt="" @click="fn(-1)"></div>
             <div class="ft-varousel-2"><img src="../assets/next.png" alt="" @click="fn(1)"></div>
              <ul class="ft-varousel-3">
                  <li v-for="(ever,idx) of list" :key="idx" :class="idx==i?'acb':''" @click="fc(idx)"></li>
              </ul>
             </div>
            </div>
        </div>
   </div>
</template>
<script>
export default {
   data(){
       return{
           i:0,
           width:942,
           canClick:true,
           ulClass:{menuuu:true},
           timer:null,
           list:[
               {src:require("../assets/15722560401736622364.jpg")},
               {src:require("../assets/15722560401736622364.jpg")},
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
         stop(){clearInterval(this.timer)},
         start(){
            this.timer= setInterval(() => {
                 this.fn(1);
             },3000 );
         },
       fn(e){
           if(this.canClick){
               this.canClick=false;
               if(e==-1&&this.i==0){
                   this.ulClass.menuuu=false;
                   setTimeout(()=>{
                       this.i=this.list.length;
                       setTimeout(()=>{
                           this.ulClass.menuuu=true;
                           this.i+=e;
                           setTimeout(()=>{
                              this.canClick=true; 
                           })
                       },50)
                   },200)
               }else if(e==1&&this.i==this.list.length-1){
                   this.i+=e;
                   //setTimeout(()=>{
                       //this.ulClass.menuuu=false;
                       setTimeout(()=>{
                           this.i=0;
                           setTimeout(()=>{
                               this.ulClass.menuuu=true;
                               setTimeout(()=>{
                                   this.canClick=true
                               })
                           },200)
                       },50)
                  // },50)
               }else{
                   this.i+=e;
                   setTimeout(()=>{
                       this.canClick=true;
                   })
               }
           }
       },
       fc(e){
           if(this.canClick){
               this.i=e;
               this.canClick=false;
               setTimeout(()=>{
                   this.canClick=true;
               },200)
           }
       }
   },
}
</script>
<style scoped>
.header2{
    width:942px;height:60px;
    margin:0 auto;
}
/*1 */
.example{
    width: 942px;
    height: 433px;
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
}
.ft-varousel{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #fff;
    border-bottom-color: #dcd5d2;
    position: relative;
}
.ft-varousel-1{
    position:absolute;
    top:377px; left:286px;
    cursor: pointer;
}
.ft-varousel-2{
   position:absolute;
    top:377px; left: 611px;
    cursor: pointer;  
}
.ft-varousel-3{
    position: absolute;
    top:397px;left:463px;
}
.menuuu{
 transition:all 0.5s linear;
}
.ft-varousel-3>li{
    width:5px;height: 5px;
    background: #f1dde8;
    border-radius: 50%;
    float: left;
    margin: 0 5px;
}
.ft-varousel-3>.acb{
   background: #f3a6d7; 
}
.ft-varousel-4{
    width:400%;height: 367px;
}
.ft-varousel-4>li{
    float: left;
}
.ft-varousel-4>li>img{
    width: 942px;height: 367px;
}
</style>
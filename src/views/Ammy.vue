<template>
     <div>
         <carousel></carousel>
     <div class="blk-main">
         <!--1-->
         <div class="menu">
          <ul class="pnav">
              <li>
                <router-link class="pnav-2" to="/products" title="全部all">全部产品</router-link>  
               </li>
              <li>
                <router-link class="pnav-3" to="/skin" title="护肤 skin Care">护肤 Skin Care</router-link>   
              </li>
              <li>
                <router-link class="pnav-1" to="" title="彩妆 make up">彩妆 Make Up</router-link>   
              </li>
              <li>
               <router-link class="pnav-4" to="/drink" title="饮品 drinks">饮品 Drinks</router-link>    
              </li>
          </ul>     
        </div>
        <!--1-->
         <!--3-->
          <h3 class=" mk01">
              Make Up
                <br>
               <span>彩妆</span>
          </h3>
         <div class="xbanner">
             <img src="../assets/2.jpg" alt="">
         </div>
     <div class="cp1b-3n-ts">
             <!--6.1-->
          <div class="nts3">  
                 <!--6.1.1-->
                <div class="nts3-1">
                     <div class="nts3-b" title="五色眼蜜宝贝眼颊盘5C eye & cheek baby">
                         <router-link to="">
                         <img src="../assets/15415900171034502159.jpg" alt="" class="nts3-1_1" >
                         </router-link>
                     </div>
                     <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="五色眼蜜宝贝眼颊盘5C eye & cheek baby">
                       五色眼蜜宝贝眼颊盘
                       <br>
                      5C eye & cheek baby
                      </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">￥168 / 7.5g</h6>
                       <div class="nts3-1_2-1">
                       <img class="nts3-1_2-1-img" src="../assets/15406256081816946886.png" alt=""  @click="f1()">
                        <img class="nts3-1_2-1-img" src="../assets/1540625498398156498.png" alt=""  @click="f2()">
                       <img class="nts3-1_2-1-img" src="../assets/15406254841387962355.png" alt=""  @click="f3()">
                      <span class="nts3-1_2-1-span">{{msg}}</span>
                      </div>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="五色眼蜜宝贝眼颊盘5C eye & cheek baby">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                 </div> 
                 <!--6.1.2-->
                <div class="nts3-1">
                     <div class="nts3-b" title="丝柔臻颜妆前乳Flawless matifying primer">
                         <router-link to="">
                         <img src="../assets/15693070211200559225.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                      <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="丝柔臻颜妆前乳Flawless matifying primer">
                       丝柔臻颜妆前乳
                       <br>
                     Flawless matifying primer
                       </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">¥188 / 30ml</h6>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="丝柔臻颜妆前乳Flawless matifying primer">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                 </div>
             </div> 
             <!--6.2-->
           <div class="nts4"> 
                 <!--6.2.1-->
               <div class="nts3-1">
                     <div class="nts3-b" title="精魅自动眉笔Precision Brow Pencil">
                         <router-link to="">
                         <img src="../assets/1573795635649726637.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                      <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="精魅自动眉笔Precision Brow Pencil">
                      精魅自动眉笔
                      <br>
                      Precision Brow Pencil
                        </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">¥168 / 0.35g</h6>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="精魅自动眉笔Precision Brow Pencil">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                 </div> 
                 <!--6.2.2--> 
                    <div class="nts3-1">
                     <div class="nts3-b" title="三色细管口红3C X-Slim lipsticks">
                         <router-link to="">
                         <img src="../assets/1541590002791889744.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                  <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="三色细管口红3C X-Slim lipsticks">
                      三色细管口红
                      <br>
                      3C X-Slim lipsticks
                      </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">￥138 / 200ml</h6>
                       <div class="nts3-1_2-1">
                       <img class="nts3-1_2-1-img" src="../assets/1540625498398156498.png" alt=""  @click="s1()">
                        <img class="nts3-1_2-1-img" src="../assets/15406254841387962355.png" alt=""  @click="s2()">
                       <img class="nts3-1_2-1-img" src="../assets/15406256081816946886.png" alt=""  @click="s3()">
                      <span class="nts3-1_2-1-span">{{nodel}}</span>
                      </div>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="三色细管口红3C X-Slim lipsticks">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                     </div>
                 </div> 
                 <!---->
               <div class="nts5">
                    <div class="nts3-1">
                     <div class="nts3-b" title="菁彩随行便携式刷具套组3-piece mini brush set">
                         <router-link to="">
                         <img src="../assets/15415899872113518510.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                      <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="菁彩随行便携式刷具套组3-piece mini brush set">
                        菁彩随行便携式刷具套组
                        <br>
                        3-piece mini brush set
                        </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">￥198 / 3pcs</h6>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="菁彩随行便携式刷具套组3-piece mini brush set">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                 </div> 
                 <!--6.2.2--> 
                    <div class="nts3-1">
                     <div class="nts3-b" title="丝绒柔滑哑光唇膏Silky Matte Lipstick">
                         <router-link to="">
                         <img src="../assets/15415899761454897832.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                  <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="丝绒柔滑哑光唇膏Silky Matte Lipstick">
                      丝绒柔滑哑光唇膏
                      <br>
                       Silky Matte Lipstick
                        </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">￥198 / 3.8g</h6>
                       <div class="nts3-1_2-1">
                       <img class="nts3-1_2-1-img" src="../assets/15406257112144700342.png" alt=""  @click="q1()">
                      <span class="nts3-1_2-1-span">{{model}}</span>
                      </div>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="丝绒柔滑哑光唇膏Silky Matte Lipstick">
                       </router-link>
                      </h5> 
                    </div>
                 </div>
                </div>
            </div>
            <!---->
            <div class="nts6">
                 <div class="nts3-1">
                     <div class="nts3-b" title="防晒亮白BB霜Wonder Beauty Cream SPF46 PA+++">
                         <router-link to="">
                         <img src="../assets/1541589957264438886.jpg" alt="" class="nts3-1_1">
                         </router-link>
                     </div>
                      <div class="nts3-1_2">
                        <div class="nts3-a"> 
                        <h4>
                       <router-link to="" class="cp1b-3n-ts1-2_1" title="防晒亮白BB霜Wonder Beauty Cream SPF46 PA+++">
                        防晒亮白BB霜
                        <br>
                        <span class="cp1b-3n-ts1-2_1-1">
                         Wonder Beauty Cream SPF46 PA+++
                         </span>
                        </router-link>
                        </h4>
                        <h6 class="cp1b-3n-ts1-2_2">￥238 / 30ml</h6>
                        <div class="nts3-1_2-1">
                       <img class="nts3-1_2-1-img" src="../assets/1540625731131897806.png" alt=""  @click="w1()">
                      <span class="nts3-1_2-1-span">{{moom}}</span>
                        </div>
                        <h5>
                       <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="防晒亮白BB霜Wonder Beauty Cream SPF46 PA+++">
                       </router-link>
                      </h5> 
                     </div>
                     </div>
                 </div> 
            </div>
            </div>
             <div class="sour1"></div>
             <div class="sour2">
               <router-link to="/pearlosophy" class="sour2-1" >主页</router-link>
               <span>|</span>
               <router-link to="/products" class="sour2-1">所有产品</router-link>
               <span>|</span>
               <a href="#top" class="sour2-1">彩妆 Make Up</a>
             </div>
        </div>
        </div>
</template>
<script>
import carousel from "../components/carousel.vue"
export default {
  components:{carousel}  
}
</script>
<style scoped>
.blk-main{
    width:1200px;
    margin:0 auto;
}
/*2 */
.menu{
    height:70px;
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
/*3 */
.mk01{
    font-size: 30px;
    color:#666666;
    font-weight: 350;
    margin-bottom: 25px;
    margin-top: 25px;
    text-align: center;
    text-transform: Capitalize;
}
.mk01>span{
    display:block;
     font-size: 18px;
    color:#666666;
}
/*4 */
.xbanner{
   text-align: center;
}
.xbanner>img{
    width:942px;height:181px;
}
/*最大的div */
.cp1b-3n-ts{
  width:940px;
  margin:0  auto;
  margin-top:20px;
}
.nts3{
  display:flex;
  justify-content: space-between;
}
/*6.1.1 */
.nts3-1{
    width:459px;height:268px;
    display:flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom:50px;
}
.nts3-1_1{
    width:223px;height:264px;
}
.nts3-1_2{
    width:200px;height:268px;
}
.nts3-b{
   position: relative;
}
.nts3-b::after,.nts3-b::before{
     position: absolute;
     content:"";
     z-index: 1;
     width:0px;height:0px;
     border:1px solid transparent;
     transition: all 0.5s ;
}
.nts3-b::after{
    bottom: 0px;
    right: 0px;
}
.nts3-b:hover::after{
     width:223px;height:264px;
    border-bottom-color: #727272; 
    border-right-color: #727272;
}
.nts3-b::before{
    top: 0px;
    left: 0px;
}
.nts3-b:hover::before{
     width:223px;height:264px;
    border-top-color: #727272; 
    border-left-color: #727272;
}
/** */
.cp1b-3n-ts1-2{
   height: 171px;
   margin-top:10px;
   text-align: center;
}
.cp1b-3n-ts1-2_1{
    color:#727272;
    font-size:14px;
    font-weight: 350;
}
.cp1b-3n-ts1-2_1-1{
  width:200px;height:15px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
   white-space: nowrap;
  color:#727272;
  font-size:14px;
}
.cp1b-3n-ts1-2_1:hover{
    color:#000;
}
.cp1b-3n-ts1-2_2{
    color:#666666;
    font-size:14px;
    padding:14px 0;
    font-weight: 350;
}
.cp1b-3n-ts1-2_3{
    width:71px;height:32px;
}
.nts3-1_2{
    width:200px;height:268px;
}
.nts3-a{
    margin-top:93px;
}
.nts3-1_2-1{
    widows: 200px;height: 26px;
    margin-bottom:10px;
}
.nts3-1_2-1-img{
   widows:19 px;height:19 px;
   margin-right:10px ;
}
.nts3-1_2-1-img2{
   widows:19 px;height:19 px;
   margin-right:10px ;
}
.nts3-1_2-1-img:hover{
    border:1px solid #727272;
    border-radius:3px;
}
.nts3-1_2-1-span{
    color:#666666;
    font-size:14px;
    margin-left:5px ;
}
/*6.2 */
.nts4{
    margin-top:80px;
    display: flex;
    justify-content: space-between;
}
.nts5{
    margin-top:80px;
    display: flex;
    justify-content: space-between;  
}
.nts6{
    margin-top:80px;
    display: flex;
    justify-content: space-between;
    border:1px solid transparent;
    border-bottom-color:#dcd5d2;
}
/** */
.sour1{
    margin: 0 auto;
    height: 43px;
    width: 43px;
    background-image: url(../assets/fx.png);
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top:80px;
}
.sour2{
  margin-top:50px;
  margin-bottom:80px;
}
.sour2-1{
    font-size: 16px;
    line-height: 24px;
    color: #737373;
}
.sour2-1:hover{
  color: #000;
}
.sour2>span{
  line-height: 24px;
  color: #737373;
  padding:0 5px;
}
</style>
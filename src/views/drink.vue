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
                <router-link class="pnav-4" to="/ammy" title="彩妆 make up">彩妆 Make Up</router-link>   
              </li>
              <li>
               <router-link class="pnav-1" to="" title="饮品 drinks">饮品 Drinks</router-link>    
              </li>
          </ul>     
        </div>
           <div class="beverage">
             <h3 class=" mk01">
              Drinks
               <br>
            <span>饮品</span>
          </h3>
         <div class="xbanner">
             <img src="../assets/3.jpg" alt="">
         </div> 
          <!---->
            <div class="beverage-1"> 
              <div class="cp1b-3n-ts1">
              <div class="cp1b-3n-ts1-b" title="茶树花绿茶果味饮料Tea Blossom Green Tea Fruity Drink" >
                  <router-link to="">
                    <img class="cp1b-3n-ts1-1" src="../assets/15423645072142557246.png" alt="" >  
                  </router-link>
              </div>
              <div class="cp1b-3n-ts1-2">
                <h4>
                    <router-link to="" class="cp1b-3n-ts1-2_1" title="茶树花绿茶果味饮料Tea Blossom Green Tea Fruity Drink">
                   茶树花绿茶果味饮料
                   <br>
                Tea Blossom Green Tea Fruity Drink
                </router-link>
                </h4>
                <h6 class="cp1b-3n-ts1-2_2">￥368 / 50ml x 10</h6>
                <h5>
                    <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="茶树花绿茶果味饮料Tea Blossom Green Tea Fruity Drink">
                    </router-link>
                </h5>
              </div>
          </div>
           <div class="cp1b-3n-ts1">
              <div class="cp1b-3n-ts1-b" title="胶原蛋白果味饮料Collagen Fruity Drink" >
                  <router-link to="">
                    <img class="cp1b-3n-ts1-1" src="../assets/15410502921739947519.png" alt="" >  
                  </router-link>
              </div>
              <div class="cp1b-3n-ts1-2">
                <h4>
                    <router-link to="" class="cp1b-3n-ts1-2_1" title="胶原蛋白果味饮料Collagen Fruity Drink">
                  胶原蛋白果味饮料
                  <br>
                 Collagen Fruity Drink
               </router-link>
                </h4>
                <h6 class="cp1b-3n-ts1-2_2">￥258 / 50ml x 8</h6>
                <h5>
                    <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="胶原蛋白果味饮料Collagen Fruity Drink">
                    </router-link>
                </h5>
              </div>
          </div>
           <div class="cp1b-3n-ts1">
              <div class="cp1b-3n-ts1-b" title="石榴红藜果蔬饮料Pomegranate Red Quinoa Fruity Drink" >
                  <router-link to="">
                    <img class="cp1b-3n-ts1-1" src="../assets/15410576811917950346.png" alt="" >  
                  </router-link>
              </div>
              <div class="cp1b-3n-ts1-2">
                <h4>
                    <router-link to="" class="cp1b-3n-ts1-2_1" title="石榴红藜果蔬饮料Pomegranate Red Quinoa Fruity Drink">
                  石榴红藜果蔬饮料
                  <br>
                Pomegranate Red Quinoa Fruity Drink
                 </router-link>
                </h4>
                <h6 class="cp1b-3n-ts1-2_2">￥288 / 50ml x 8</h6>
                <h5>
                    <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="石榴红藜果蔬饮料Pomegranate Red Quinoa Fruity Drink">
                    </router-link>
                </h5>
              </div>
          </div>
         </div>
          <!---->
           <div class="beverage-2">
             <div class="cp1b-3n-ts1">
              <div class="cp1b-3n-ts1-b" title="莓蔬发酵饮料Fermented Berry Vegetable Drink" >
                  <router-link to="">
                    <img class="cp1b-3n-ts1-1" src="../assets/15410576862013265770.png" alt="" >  
                  </router-link>
              </div>
              <div class="cp1b-3n-ts1-2">
                <h4>
                    <router-link to="" class="cp1b-3n-ts1-2_1" title="莓蔬发酵饮料Fermented Berry Vegetable Drink">
                  莓蔬发酵饮料
                  <br>
                Fermented Berry Vegetable Drink 
              </router-link>
                </h4>
                <h6 class="cp1b-3n-ts1-2_2">￥258 / 50ml x 8</h6>
                <h5>
                    <router-link to="">
                        <img class="cp1b-3n-ts1-2_3" src="../assets/more.png" alt="" title="莓蔬发酵饮料Fermented Berry Vegetable Drink">
                    </router-link>
                </h5>
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
               <a href="#top" class="sour2-1">饮品 Drinks</a>
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
/*********** */
.cp1b-3n-ts{
  width:940px;
  margin:0  auto;
  margin-top:20px;
}
/*5.1*/
.cp1b1{
  display:flex;
  justify-content: space-between;
  /*flex-wrap:wrap;*/
  /*align-content:center;*/
}
/*5.2 *//*5.3 *//*5.4*//*5.5*//*5.6 */
.cp1b2,.cp1b3,.cp1b4,.cp1b5,.cp1b6{
  display:flex;
  justify-content: space-between;
  /*flex-wrap:wrap;*/
  /*align-content:center;*/
  margin-top:60px;
}
.cp1b7{
    display:flex;
  justify-content: space-between;
  /*flex-wrap:wrap;*/
  /*align-content:center;*/
  margin-top:60px;
  border:1px solid transparent;
  border-bottom-color: #dcd5d2;
}
.cp1b-3n-ts1{
    width: 302px;height: 409px;
}
.cp1b-3n-ts1-1{
    width: 301px;
    height: 246px;
    margin: 0 auto;
    border: 1px solid #fff7fd;
}
.cp1b-3n-ts1-b{
    position: relative;
}
.cp1b-3n-ts1-b::before,.cp1b-3n-ts1-b::after{
   position: absolute;
    content: ' ';
    width:0px;
    height:0px;
    z-index: 1;
    border: 1px solid transparent;
    transition:all 0.5s;
    cursor: pointer;
}
.cp1b-3n-ts1-b::before{
    margin-top:1px;
    margin-left:-1px;
}
.cp1b-3n-ts1-b::before{
    top:0px;left:0px;
}
.cp1b-3n-ts1-b::after{
   right: 0px;bottom: 0px;
}
.cp1b-3n-ts1-b:hover::before{
     width:301px;
     height:246px;
     border-top-color:#727272;
     border-left-color:#727272;
}
.cp1b-3n-ts1-b:hover::after{
    width:301px;
    height:246px;
    border-bottom-color:#727272;
    border-right-color:#727272;
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
/*......       */
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

/*饮品 */
.beverage{
    width:942px;
    margin-top:100px;
    margin: 0 auto;
    border-top:1px solid #dcd5d2;
    border-bottom:1px solid #dcd5d2;
}
/*饮品第一个div */
.beverage-1{
  display: flex;
  justify-content: space-between;
  margin-top:20px;
}
.beverage-2{
  display: flex;
  justify-content: space-between;
  margin-top:80px;
  margin-bottom:80px;
}
/*单独心图片 */
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
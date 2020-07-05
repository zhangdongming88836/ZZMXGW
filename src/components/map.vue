<template>
 <div>
        <h3 class="contact-5">
          Find Us <br>
          <span>公司地址</span>
        </h3>
        <div class="contact-6">
          <div class="contact-6-1">
            <span class="contact-6-1_2">真珠美学公司</span><br>
            <span class="contact-6-1_3">上海虹桥万科中心</span><br>
            <div class="contact-9">
            <span class="contact-6-1_1" to="" @click="fcc">在地图上显示</span>
            </div>
          </div>
          <div class="contact-6-2">
            <p class="contact-6-2-1">上海市闵行区申长路988号虹桥万科中心8号楼7楼，201107 <br>
              7F,Tower 8 Vanke Center,No.988,Shenchang Road,<br>
              Minhang District,Shanghai,201108,PRC</p>
              <span class="contact-6-2-2">021 33288200</span>
          </div>
       </div>
        <hr class="contact-8">
          <div  class="contact-7">
          <div class="contact-6-1">
            <span class="contact-6-1_4">真珠美学皮肤管理中心</span><br>
            <span class="contact-6-1_5">上海虹桥天地</span><br>
            <div class="contact-9">
            <span class="contact-6-1_1" to="" @click="ff">在地图上显示</span>
          </div>
          </div>
          <div class="contact-6-2">
            <p class="contact-6-2-1">上海市闵行区申长路688号 虹桥天地 2F(优衣库隔壁) <br>
                                     2F,Hongqiao Tiandi, No.688, Shenchang Road,<br>
                                     Minghang District, Shanghai, 201107,PRC,</p>
              <span class="contact-6-2-2">021 33288200</span>
          </div>
        </div>
        <div class="contact-10">
         
        <div id="map" style="width:582px;height:297px;"></div>
       </div>
     
 </div>
</template>
<script>
export default {
    methods:{
        ff(){
         map.centerAndZoom(new BMap.Point(121.32124,31.20099), 17); 
        },
        fcc(){
         map.centerAndZoom(new BMap.Point(121.321662,31.202864), 17); 
        }
    },
   mounted(){
         function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("map");//在百度地图容器中创建一个地图
        var point = new BMap.Point(121.321662,31.198905);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
   
   }
    
    //标注点数组
    var markerArr = [{title:"虹桥万科中心8号楼7楼",content:"地址：上海市闵行区申长路988号",point:"121.321662|31.202864",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
		 ,{title:"虹桥天地&nbsp;2F(优衣库隔壁)",content:"地址：上海市闵行区申长路688号",point:"121.32124|31.20099",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("../assets/map001.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图   
   }

}
</script>
<style scoped>
.contact-10{
  width: 582px;
  height: 297px;
  margin:0 auto;
}
.contact-5{
  color:#666666;
  font-size: 30px;
  font-weight: 400;
  margin-top:164px;
}
.contact-5>span{
  color:#666666;
  font-size:18px;
}
.contact-6{
  width: 649px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top:60px;
}
.contact-7{
  width: 649px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin:15px auto;
  
}
.contact-6-1{
  width: 180px;height: 90px;
  
}
.contact-6-2{
  width: 400px;height: 90px;
    background-image: url(../assets/wkzxs.png);
    background-size: 100%;
    background-position: left top;
    background-repeat: no-repeat;
    font-size: 12px;
}
.contact-6-1_2{
  color:#666666;
  font-size: 16px;
  margin-left: -82px;
}
.contact-6-1_3{
  color:#666666;
  font-size: 14px;
  margin-left: -67px;
}
.contact-6-1_4{
  color:#666666;
  font-size: 16px;
  margin-left: -20px;
}
.contact-6-1_5{
  color:#666666;
  font-size: 14px;
  margin-left: -94px;
}
.contact-6-1_1{
  width:81px;height: 18px;
  font-size: 14px;
  color: #ffb4d7;
  font-style: italic;
   cursor: pointer;
}
.contact-6-2-1{
  text-align: left;
  margin-left:32px;
  color:#666666
}
.contact-6-2-2{
  display: block;
  width: 370px;
  margin-left:-100px;
  margin-top:4px;
  color:#666666;
  font-size:16px;
}
.contact-8{
 width: 649px;
 margin:0px auto;
}
.contact-9{
  margin-top:10px;
  margin-left:-93px;
}
</style>
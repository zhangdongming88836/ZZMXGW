import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:"/index",
     component:()=>import(/*webpackChunkName"index"*/ "../views/index.vue")
    },
    {path:"/soi",
     component:()=>import(/*webpackChunkName:"soi"*/ "../views/soi")},
    {path:"/founder",
    component:()=>import(/*webpackChunkName:"founder"*/ "../views/Founder.vue")},
    {path:"/",
    component:()=>import(/*webpackChunkName:"pearlosophy"*/ "../views/pearlosophy.vue")},
    {path:"/regulate",
    component:()=>import(/*webpackChunkName:"regulate"*/ "../views/regulate.vue")},
    {path:"/products",
    component:()=>import(/*webpackChunkNmae:"products"*/ "../views/products.vue")},
    {path:"/skin",
    component:()=>import(/*webpackChunkName:"skin"*/ "../views/skin.vue")},
    {path:"/ammy",
    component:()=>import(/*webpackChunkName:"ammy"*/ "../views/Ammy.vue")},
    {path:"/drink",
    component:()=>import(/*webpackChunkName:"drink"*/ "../views/drink.vue")},
    {path:"/dynamic",
    component:()=>import(/*webpackChunkName:"dynamic"*/ "../views/Dynamic.vue")},
    {path:"/dynamic01",
    component:()=>import(/*webpackChunkName:"dynamic01"*/ "../views/Dynamic01.vue")},
    {path:"/dynamic02",
    component:()=>import(/*webpackChunkName:"dynamic02"*/ "../views/dynamic02.vue")},
    {path:"/news",
    component:()=>import(/*webpackChunkName:"news"*/ "../views/News.vue")},
    {path:"/news01",
    component:()=>import(/*webpackChunkName:"news01"*/ "../views/news01.vue")},
    {path:"/recent",
    component:()=>import(/*webpackChunkName:"recent"*/ "../views/recent.vue")},
    {path:"/media",
    component:()=>import(/*webpackChunkName:"media"*/ "../views/media.vue")},
    {path:"/media01",
    component:()=>import(/*webpackChunkName:"media01"*/ "../views/media01.vue")},
    {path:"/chinoiserie",
    component:()=>import(/*webpackChunkName:"chinoiserie"*/ "../views/Chinoiserie.vue")},
    {path:"/489.html",
    component:()=>import(/*webpackChunkName:"book"*/ "../views/489.vue")},
    {path:"/484.html",
    component:()=>import(/*webpackChunkName:"TMT"*/ "../views/484.vue")},
    {path:"/483.html",
    component:()=>import(/*webpackChunkName:"economics"*/ "../views/483.vue")},
    {path:"/480.html",
    component:()=>import(/*webpackChunkName:"Beauty"*/ "../views/480.vue")},
    {path:"/477.html",
    component:()=>import(/*webpackChunkName:"make"*/ "../views/477.vue")},
    {path:"/475.html",
    component:()=>import(/*webpackChunkName:"adorn"*/ "../views/475.vue")},
    {path:"/472.html",
    component:()=>import(/*webpackChunkName:"trousseau"*/ "../views/472.vue")},
    {path:"/471.html",
    component:()=>import(/*webpackChunkName:"liquid"*/ "../views/471.vue")},
    {path:"/add",
    component:()=>import(/*webpackChunkName:"add"*/ "../views/add.vue" )
  },
    {path:"/add01",
    component:()=>import(/*webpackChunkName:"add01"*/ "../views/add01.vue")},
  ]
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

export default router

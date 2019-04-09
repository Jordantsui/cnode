import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {     //都叫main是因为main会映射到App.vue中
      name:'root',
      path:'/',
      components:{
        main:PostList           //根组件
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:name',       //id是从Postlist.vue传递过来的
      //为什么是这个路径？？？？
      components:{
        main:Article,
        slidebar:SlideBar              //Article组件和SlideBar组件要同时出现在页面上
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',         //name是传递过来的参数
      //同理，为什么是这个路径？？？？
      components:{
        main:UserInfo
      }
    }
  ]
})

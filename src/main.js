// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'    
//这个文件夹里只有index.js一个文件，而且此文件里未见router？？？？
//大概可解释为：此文件输出一个对象，而 main.js 将该对象引进，并命名为 router
import Axios from 'axios'     //先安装axios，再引入（由于很多地方要用到，所以放在main.js里全局引入）


Vue.prototype.$http = Axios;     //第三步，将Axios挂载到vue原型上（之后就可以用 this.$http发送请求了）
Vue.config.productionTip = false

//eslint-disable no-new
new Vue({
  el: '#app',
  router,         //是 router:router, 的缩写版
  components: { App },       //App 这个组件的名字，来源于 App.vue 里export default里的name
  template: '<App/>'        //这种写法之前没讲，将组件里的东西替换到页面上！！！
  //components 和 template的位置也很奇怪，这里没有给组件再命名，index.html 也没有用到组件的名字，
  //直接将<div id="app"></div>整个元素替换！！！

  //此Vue实例在这里注入了路由 router
  //由于 router 内规定了各路由的主组件（main）
  //因此 App.vue 内的 router-view 就放置了对应路由的组件
})
Vue.filter('formatDate', function (str) {      //关于最终回复时间的过滤器
    if (!str) return ''
    var date = new Date(str)   //生成一个Date对象
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
      return ''
    } else if ((time / 1000 < 30)) {
      return '刚刚'
    } else if (time / 1000 < 60) {
      return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前'
    } else {
      return parseInt(time / 31536000000) + '年前'
    }
  }
)
//处理显示板块的文字
Vue.filter('tabFormatter',function (post) {
  if(post.good == true){
    return '精华'
  }else if(post.top == true){
    return '置顶'
  }else if(post.tab == 'ask'){
    return '问答'
  }else if(post.tab == 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})


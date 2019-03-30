// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'     //先安装axios，再引入（由于很多地方要用到，所以放在main.js里全局引入）


Vue.prototype.$http = Axios;     //第三步，将Axios挂载到vue原型上（之后就可以用 this.$http发送请求了）
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('formatDate', function (str) {      //关于最终回复时间的过滤器
    if (!str) return ''
    var date = new Date(str)   //格式化时间？？？？？？
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


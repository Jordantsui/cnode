<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <!--slidebar组件的css规定 float:right，因此该组件应在main组件的上面？？？？-->
      <!--只有一个路由中有名为slidebar的组件，因此只有在跳转到这个路由时，这个router-view才起作用-->
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import PostList from './components/PostList.vue'
  //感觉引入 PostList 没什么用啊？？？？
export default {
  name: 'App',
  components:{
    Header,PostList
  }
}
</script>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
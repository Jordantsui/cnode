<template>
    <div class="header">
      <router-link  :to="{name:'root'}">
        <img src="../assets/cnodejs_light.svg" alt="">
      </router-link>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>       <!--scoped表示style仅对当前组件有效，若不加，对全局有效-->
.header{
  background-color:#5a5555 ;
  height: 50px;
}
img{
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
  ul{
    list-style: none;         /*去掉列表的点*/
    float: right;         
    margin: 4px;
  }
  li{
    display: inline-block;            /*一开始是竖排，block；加上之后，变成横排*/
    padding: 10px 15px;
  }
  a{
    text-decoration: none;             /*去掉a标签的默认样式*/
    color: #ccc;
    font-size: 14px;
    text-shadow: nonr;              /*?????*/
  }
</style>

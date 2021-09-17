<template>
  <div id="index">
    <img src="../../assets/logo.png" style="height: 300px">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'ArtWorks'}">作品展示</router-link>&nbsp;&nbsp;|&nbsp;
    <router-link :to="{name:'Project'}">项目介绍</router-link>&nbsp;&nbsp;|&nbsp;
    <router-link :to="{name:'Package'}">套餐价格</router-link>&nbsp;&nbsp;|&nbsp;
    <router-link :to="{name:'Login'}">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Lan Xin Ya Ge'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

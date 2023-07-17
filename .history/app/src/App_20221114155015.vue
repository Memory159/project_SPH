<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在 Home、Search 显示，在登录、注册隐藏 -->
    <Footer v-show="$router."></Footer>
  </div>
</template>

<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

</style>
<template>
    <div>
      <Header></Header>
      我是根组件
      <Footer></Footer>
    </div>
</template>

<script>
// 引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
<template>
    <div>
      <Header></Header>
      我是根组件
    </div>
</template>

<script>
// 引入
import Header from './components/Header'
export default {
  name:'App',
  components:{
    Header
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
export default {
    name:"",
    components:{
      ListContainer,
      Recommend,
    }
}
</script>

<style>

</style>
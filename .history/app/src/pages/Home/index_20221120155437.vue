<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
export default {
    name:"",
    comments:{
      ListContainer,
    }
}
</script>

<style>

</style>
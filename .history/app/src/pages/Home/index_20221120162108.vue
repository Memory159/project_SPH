<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
export default {
    name:"",
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
    }
}
</script>

<style>

</style>
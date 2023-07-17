<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import { mapState } from 'vuex';
export default {
    name:"",
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
    },
    mounted() {
      // 派发action，获取floor组件的数据
      this.$store.dispatch('getFloorList');
      // 当home挂载完毕，就向服务器发请求，获取用户数据，在home组件展示
      this.$store.dispatch('get');
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>
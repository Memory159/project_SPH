import Vue from 'vue';
import App from './App.vue';
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
// 全局组件轮播图
import Carsousel from '@/components/Carousel';
// 全局组件分页器
import Pagination from '@/components/Pagination';
// 按需引入element-ui
import { Button, MessageBox } from 'element-ui';
// 第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
// 注册成全局组件
Vue.component(Button.name, Button);
// Element-ui 注册组件的时候还有一种写法，那就是挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';
// 引入MockServer.js ----- mock数据
import '@/mock/mockServe';
// 引入swiper样式
import "swiper/css/swiper.css";
// import VueRouter from 'vue-router';

// 统一接收api文件夹里面全部请求函数
import * as API from '@/api';
// 引入插件

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 全局事件总线$bus的配置
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    // 注册路由：低下的写法是KV一致省略V【router是小写的】
    // 注册路由信息：当这里书写router的时候，组件身上都拥有 $route,@router属性
    router,
    // 注册仓库：阿组件实例的身上会多一个属性  $store 属性
    store
}).$mount('#app')
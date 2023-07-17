// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// 使用插件
Vue.use(VueRouter);
// 引入store
import store from '@/store';

// 先把 VueRouter 原型对象的 push 保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写 push|replace 
// 第一个参数：告诉原来push方法，你往你那里跳转（传递哪些参数）
// 第二个参数：成功的回调
// 第三个回调：失败的回调
// call||apply 区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call 与 apply 传递参数：call传递参数用逗号隔开，apply 方法执行、传递数组
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
};

VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
};
// 配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    }
})

// 全局守卫，前置守卫(在路由跳转之前进行判断)
router.beforeEach(async(to, from, next) => {
    // to: 可以获取到你要跳转到哪个路由的信息
    // from：可以获取到你从哪个路由而来的信息
    // next: 放行函数
    // 用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token;
    // 用户信息，只有有用户信息，才能进行接下来的操作
    let name = store.state.user.userInfo.name
        // 用户已登录
    if (token) {
        // 用户已经登录，但是不能再跳回到login
        if (to.path == '/login' || to.path == '/register') {
            next('/home');
        } else {
            // 登录了，但是去的不是login【可能会去home|search|detail|shopcart】
            // 如果用户名已有，放行
            if (name) {
                next();
            } else {
                // 如果没有用户信息，派发action获取用户信息，再放行
                try {
                    // 获取用户信息成功，再放行
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // token失效了,获取不到用户信息，需要重新登录
                    // 清除token
                    await store.dispatch('userLogout');
                    // 跳转到登录页面
                    next('/login');
                }
            }
        }
    } else {
        // 未登录：不能去交易相关、不能去支付相关的【pay/paySuccess】、不能去个人中心
        // 如果未登录去上面这些路由，跳转到登录页面
        let toPath = to.path;
        if (toPath.indexOf) {

        }
    }

})

export default router;
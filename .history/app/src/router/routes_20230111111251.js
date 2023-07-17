// 引入一级路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder';
import GroupOrder from '@/pages/Center/groupOrder';

/**
 * 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高校了
 */

// 路由配置信息
export default [{
        path: "/center",
        component: Center,
        meta: { show: true },
        // 子路由组件
        children: [{
                path: "myorder",
                component: MyOrder,
            },
            {
                path: "grouporder",
                component: GroupOrder,
            },
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true },
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车页面而来
            if (from.path == "/shopcart") {
                next();
            } else {
                // 其他的路由组件而来，停留在当前页面
                next(false);
            }
        }
    },
    {
        name: 'addcartsuccess',
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        name: "search"
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '*',
        redirect: "/home"
    }

]
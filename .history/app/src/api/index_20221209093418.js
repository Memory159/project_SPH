//当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax';

// 三级联动接口

export const reqCategoryList = () => {
    // 发请求:axios 发请求返回结果为 Promise 对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据  地址：/api/list  请求：post  参数：需要带参数
// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => {
    return requests({ url: "/list", method: "post", data: params });
}

// 获取产品详情信息的接口  URL：/api/item/{skuId}  请求方式：get
export const reqGoodInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{skuId}/{skuNum}  请求方式：POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取购物车列表数据接口
// URL：/api/cart/cartList  method:get
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

// 删除购物车产品的接口
// URL:/api/cart/deleteCart/{skuId}  method:DELETE
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

// 修改商品的选中状态
// URL：/api/cart/checkCart/{skuId}/{isChecked}  method:get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 获取验证码
// URL：api/user/passport/sendCode/{phone}  method：get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

//注册
// URL:/api/user/passport/register  method:post 
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data, method: 'post' });

// 登录
// URL:/api/user/passport/login  method:post 
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data, method: 'post' });

// 获取用户信息【需要带着用户的token向服务器要用户信息】
// URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' });

// 退出登录
// URL:/api/user/passport/logout  method:get
export const reqLogout = () => requests({ url: `/user/passport/logout`, method: 'get' });

// 获取用户地址信息
// URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' });

// 获取商品清单
// URL:/api/order/auth/trade  method:get
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: 'get' });

// 提交订单的接口
// URL:api/order/auth/submitOrder?tradeNo={tradNo}  method:post
export const reqSubmitOrder = (tradeNo, data) => ({ url: `/order/auth/submitOrder?tradeNo=${tradNo}` });
import { reqGoodInfo, reqAddOrUpdateShopCart } from "@/api"
const state = {
    goodInfo: {}
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    // 加入购物车||修改某一个产品的个数
    addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // 发请求
        reqAddOrUpdateShopCart(skuId, skuNum)
    }
};
// 简化数据而生
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // 比如：state.goodInfo初始状态为空对象，空对象的caregoryView属性值为undefined
        // 当前计算出的 dcaregoryView 属性值至少是一个空对象，假的报错就不会有了
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }

};
export default {
    state,
    actions,
    mutations,
    getters
};
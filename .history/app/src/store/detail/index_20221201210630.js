import { reqGoodInfo } from "@/api"
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}
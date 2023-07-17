import { reqGoodInfo } from "@/api"
const state = {}
const mutations = {}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        await reqGoodInfo(skuId)
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}
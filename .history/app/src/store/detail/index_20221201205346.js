import { reqGoodInfo } from "@/api"
const state = {}
const mutations = {}
const actions = {
    // 获取产品信息的action
    getGoodInfo() {
        await reqGoodInfo
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}
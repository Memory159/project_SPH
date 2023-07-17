import { reqAddressInfo } from "@/api";
const state = {

};
const mutations = {

};
const actions = {
    // 获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
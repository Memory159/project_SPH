import { reqAddressInfo } from "@/api";
const state = {
    address: [],
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address;
    }
};
const actions = {
    // 获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETUSERADDRESS');
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
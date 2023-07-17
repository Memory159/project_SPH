import { reqAddressInfo, reqOrderInfo } from "@/api";
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
            commit('GETUSERADDRESS', result.data);
        }
    },
    // 获取商品清单信息
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        console.log(result);
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
import { reqGetCode } from "@/api";
// 登录与注册的模块
const state = {};
const mutations = {};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        // 获取验证码的这个接口，把验证码返回，但是正常情况，后台把验证码发到用户的手机上
        let result = await reqGetCode(phone);
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}
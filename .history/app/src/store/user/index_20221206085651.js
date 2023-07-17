import { reqGetCode, reqUserRegister, reqUserLogin } from "@/api";
// 登录与注册的模块
const state = {
    code: '',
};
const mutations = {
    GETDATE(state, code) {
        state.code = code;
    }
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        // 获取验证码的这个接口，把验证码返回，但是正常情况，后台把验证码发到用户的手机上
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETDATE', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 登录业务 【token】
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
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
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api";
// 登录与注册的模块
const state = {
    code: '',
    token: '',
};
const mutations = {
    GETDATE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
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
        // 服务器下发token，用户唯一标识符（uuid）
        // 将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('falie'));
        }
    },
    // 获取用户信息
    getUserInfo({ commit }) {
        reqUserInfo();
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}
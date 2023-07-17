//vee-validate插件：表单验证区域
import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同`
    },
    attributes: {
        phone: '手机号',
        code: password: password1: isCheck:
    }
})
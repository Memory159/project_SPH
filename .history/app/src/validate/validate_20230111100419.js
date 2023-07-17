//vee-validate插件：表单验证区域
import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from "vee-validate/dist/loc";
Vue.use(VeeValidate);

// 表单验证
VeeValidate.Validator.localize('zh_CN',{
    messages:{
        
    }
})


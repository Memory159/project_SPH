// 对于 axios 进行二次封装
import axios from 'axios'

// 1、利用 axios 对象的方法 create ，去创建一个 axios 实例
// 2、 request 就是 axios，只不过稍微配置一下
const request = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现api 
    baseURL:
})





// 对外暴露
export default axios;
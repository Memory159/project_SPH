// 存储token
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token);
}

// 获取token
export const getToken = () => {
    return localStorage.geTiTEM('TOKEN');
}
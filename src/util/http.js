import axios from "axios";
const request = axios.create({
    baseURL: ' https://www.escook.cn'
    // timeout: timeout
    // headers: headers
})
export default request
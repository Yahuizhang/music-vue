import axios from 'axios'
import qs from "qs"



// 对axios进行封装
const axiosConfig = {
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
    },
    //发送数据格式化
    // transformRequest: [function(data) {
    //     return JSON.stringify(data);
    // }]
}





const _http = axios.create(axiosConfig);
export default _http;
import axios from 'axios '
import qs from "qs"
// 对axios进行封装
const axiosConfig = {
    timeout: 1000,
    //发送数据格式化
    transformRequest: [function(data) {
        return JSON.stringify(data);
    }]
}






// 对data进行处理
function param(data) {
    let url = '';
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += `&${key}=${encodeURIComponent(value)}`; // 拼接url
        return url ? url.substring(1) : ''
    }
}
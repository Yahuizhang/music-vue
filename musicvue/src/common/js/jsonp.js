import axios from 'axios '
// 对原来的jsonp进行重封装
export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}
// axios进行重封装
// export default function axios(url,data,option){

// }


// 对data进行处理
function param(data) {
    let url = '';
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += `&${key}=${encodeURIComponent(value)}`; // 拼接url
        return url ? url.substring(1) : ''
    }
}
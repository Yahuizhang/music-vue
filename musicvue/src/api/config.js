export const commonParams = {
        g_tk: 1928093487,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'json'
    }
    // export const options = {
    //     param: 'jsonpCallback'
    // }
    // 对data进行处理
export function paramConncet(data) {
    let url = '';
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += `&${key}=${encodeURIComponent(value)}`; // 拼接url
        return url ? url.substring(1) : ''
    }
}
export const ERR_OK = 0
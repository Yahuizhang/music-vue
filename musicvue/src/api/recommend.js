// import jsonp from 'common/js/jsonp'
// import _http from 'common/js/axios'
// import { commonParams, paramConncet } from './config'

// 获取recommend的方法
export function getRecommoned() {
    const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    console.log("get数据")
    console.log(data)
        // const data='';
    let getData;
    // _http.get(`${url}?${data}`).then(function(res) {
    //     console.log(res);
    //     getData = res;
    //     return getData;

    // }).catch(function(error) {
    //     console.log(error);
    //     getData = error;
    //     return getData;
    // })

    // return new

}
<template>
  <div class="recommend">

  </div>
</template>
<script>
import Slider from 'base/slider/slider'
// import {getRecommoned} from 'api/recommend.js'
// import {ERR_OK} from 'api/config'
export default {
  components: {
    Slider
  },
  data () {
    return {
      qqURL:`/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1534914071566`,
    }
  },
  created () {
    let _this=this;
    _this.$http.get(_this.qqURL,{
      params:{
        g_tk: 5381,
        uin: 0,
        format: "json",
        inCharset: "utf-8",
        outCharset:"utf-8",
        notice: 0,
        platform: "h5",
        needNewCode: 1
      }
    }).then(function(res){
      console.log(res);
    }).catch(function(error){
      console.log(error);
    })

  },
  methods: {


  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="recommend">

  </div>
</template>
<script>
import {getRecommoned} from 'api/recommend.js'
import {ERR_OK} from 'api/config'
export default {
  data () {
    return {

    }
  },
  created () {
    this.__getRecommend();
  },
  methods: {
    __getRecommend(){
      // getRecommoned.then((res)=>{
      //   console.log(res)
      //   if(res.code===ERR_OK){
      //     console.log(res.data.slider)
      //   }
      // }).catch(function(error){
      //   console.log(error)
      // })
      // getRecommoned
      var content=getRecommoned;
      console.log("获取数据");
      console.log(content);
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

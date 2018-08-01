<template>
  <div class="recommend">

  </div>
</template>
<script>
import {getRecommoned} from 'api/recommend'
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
      getRecommoned.then((res)=>{
        if(res.code===ERR_OK){
          console.log(res.data.slider)
        }
      })
    }
  }
}
</script>
<style lang="stylus">

</style>

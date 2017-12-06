<template>
  <div class="home-container" @click="testUtil">
    {{msg}}
    <NotFound/>
  </div>
</template>

<script>
import NotFound from '@/components/NotFound'
import Util from '@/common/util'

export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'HOME HOME'
    }
  },
  methods: {
    testUtil () {
      console.log(Util)
      let a = Util.urlParams()
      console.log(a)
      console.log(a.get('a'))
      console.log(a.get('b'))
      // a.set({'da': 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', a: 9})
    }
  },
  components: {
    NotFound
  }
}
</script>

<style scoped>

</style>

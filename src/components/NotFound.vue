<template>
  <div class="zj">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ZJ',
  data () {
    return {
      msg: '我是个组件'
    }
  }
}
</script>

<style scoped lang="scss">
.zj {
  color: darkolivegreen;
}
</style>

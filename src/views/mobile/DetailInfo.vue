<template>
    <section>555555555555
      <el-button type="primary" @click="toList">小区列表</el-button>
    </section>
</template>
<script>
    export default{
        name: 'ComtList',
        data(){
            return {}
        },
      methods: {
        toList(){
          this.$router.push({name: 'ComtList'})
        },
      }
    }
</script>
<style lang="less" scoped>
</style>

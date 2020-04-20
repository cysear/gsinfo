<template>
  <div class="container">
    <el-row class="row" :gutter="20">
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <Device></Device>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple-light">

        </div>
      </el-col>
    </el-row>
    <div class="row2">
        <div class="grid-content bg-purple-dark" style="height: 100%">

        </div>
    </div>
  </div>
</template>

<script>
  import Device from './components/devices'

  export default {
    name: 'Home',
    components: {
      Device,
      Admin,
      HomeMap
    },
    data() {
      return {
        // sysData: {}//当前系统基本信息
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .container {
    /*background-color: #F1F1F5;*/
    padding: 20px 40px;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
  }
  .row{
    margin-bottom: 20px;
  }
  .row2 {height: calc(100% - 195px)}
</style>

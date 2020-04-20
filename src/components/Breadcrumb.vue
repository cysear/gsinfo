<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.title'>
        <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      devName: {
        type: String,
        default: ''
      },
      devType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        levelList: null
      }
    },
    created() {
      // debugger
      this.$message.warning('Breadcrumb'+this.devName)
      this.getBreadcrumb()
    },
    watch: {
      devName(){
        this.getBreadcrumb();
      }
    },
    created(){
//        console.log('devName:'+this.devName)
//        console.log('devType:'+this.devType)
      this.getBreadcrumb()
    },
    mounted(){
        this.$nextTick(()=>{
//          this.getBreadcrumb()
        })
    },
    methods: {
      getBreadcrumb() {
        let devTypeDes = '';

    }
  }
  }
</script>
<style scoped>

</style>

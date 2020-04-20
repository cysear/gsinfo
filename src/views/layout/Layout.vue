<template>
  <div class="app-wrapper">
    <div class="head-container">
      <ComHeader  ></ComHeader>
    </div>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import  ComHeader from './components/ComHeader'
import  AppMain from './components/AppMain'
export default {
  name: 'layout',
  components: {
    ComHeader,
    AppMain,
  },
  data(){
      return{


      }
  },
  computed: {

  },
  methods: {

  }
}
</script>

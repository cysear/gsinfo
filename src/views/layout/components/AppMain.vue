<template>
  <section class="app-main" style="min-height: 100%">app-main
    <!--<transition name="slide-left" mode="out-in">-->
    <!--<keep-alive :include="cachedViews">-->
    <router-view  ></router-view>
    <!--</keep-alive>-->
    <!--</transition>-->
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
      data(){
        return {}
      },
     methods:{

     }
 }
</script>

<template>
  <div id="app">
    <!--<img src="./assets/login_logo.png">-->
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isRouterAlive: true

    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  created(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      console.log('手机端');
      //isWindow=false;
      sessionStorage.setItem('userAgent','isPhone');
    }else{
      sessionStorage.setItem('userAgent','isWindow');
    }
  },
  destroyed(){
    sessionStorage.removeItem('userAgent');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html , body ,#app{ height: 100%; overflow-x: hidden; padding: 0; margin: 0;background-color: #F5F5F5}
  h1,h2,h3,h4,h5,h6,ul,li,ol{ padding: 0; margin: 0;}
  ul,li,ol{ list-style: none;}
</style>

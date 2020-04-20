import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  // sx
  ak:'Ey7YFEZz9VIHxwXgjmKgUOk9AaEZHpoe',//map-ak
  isCollapse: false,//导航展开与收起
  route:null,
  app:{

},
  vux:{
    demoScrollTop:0,
      isLoading:false,
      direction:'forward'
  }
};
const mutations = {
  setIsCollapse(state, flag) {
    state.isCollapse = flag;
  },

};

const getters = {
  getIsCollapse:state => {
    return state.isCollapse;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters
})

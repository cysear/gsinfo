/**
 * Created by admin on 2020/4/20.
 */
import  route from 'vue-router'
const base = {
  state : {
    isLoading: false,
    direction: 'forward',
    route: route
  },
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  }
};
export default base

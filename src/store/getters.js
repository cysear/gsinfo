const getters = {

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userName: state => state.user.userName,
  loginDate: state => state.user.loginDate,
  name: state => state.user.name,
  userId: state => state.user.userId,
  demoScrollTop: state => state.vux.demoScrollTop,
  isLoading: state => state.vux.isLoading,
  direction: state => state.vux.direction,
  route:state => state.route.route,
}
export default getters

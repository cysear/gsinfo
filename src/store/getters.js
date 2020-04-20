const getters = {

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userName: state => state.user.userName,
  loginDate: state => state.user.loginDate,
  name: state => state.user.name,
  userId: state => state.user.userId,
  isLoading: state => state.base.isLoading,
  direction: state => state.base.direction,
  route:state => state.base.route,
}
export default getters

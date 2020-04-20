import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    userId: '',
    loginName: 'admin',
    userName: '1',
    avatar: '2',
    loginDate: '3',
    roles: [],
  },

  mutations: {
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_LOGINNAME: (state, name) => {
      state.loginName = name
    },
    SET_USERNAME: (state, name) => {
      state.userName = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_LOGINDATE: (state, loginDate) => {
      state.loginDate = loginDate
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {

        loginByUsername(userInfo).then(response => {
          const {data } = response;
          /* // debugger
          sessionStorage.setItem('role',JSON.stringify(data.roles));
          // commit('SET_ROLES', [data.roles[0].roleKey]);*/
          let tempObj = {
             username:userInfo.username,
          };
          localStorage.setItem('qcsToken',JSON.stringify(tempObj));
          if(userInfo.rememberMe){
            localStorage.setItem('qcsInfo',JSON.stringify({username:userInfo.username,password:userInfo.password}));
          }
          setToken(userInfo.username)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      // debugger
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {

// debugger
          console.log(response);
          const data = response.data.userInfo;
          if(data){
            localStorage.setItem("qcsUserInfo",JSON.stringify(data))
            commit('SET_USERID', data.userId);
            commit('SET_LOGINNAME', data.loginName);
            commit('SET_USERNAME', data.userName);
            commit('SET_AVATAR', data.avatar);
            commit('SET_LOGINDATE', data.loginDate);

            commit('SET_ROLES', [data.roles[0].roleKey])
            resolve({'roles':[data.roles.roleKey],limits:response.data.limits})
          }else{
            reject();
          }
        }).catch(error => {
          reject(error)
        })


        })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_ROLES', [])
          removeToken();
          localStorage.clear();
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        resolve()
      })
    },


  }
}

export default user

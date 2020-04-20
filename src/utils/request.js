import axios from 'axios'
// import { Message} from 'element-ui'
import router from '@/router'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '@/store'
import qs from 'qs';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
axios.defaults.withCredentials = true;
const service = axios.create({
  baseURL: "",//process.env.BASE_API, // api的base_url
  timeout: 150000 // request timeout
});


service.interceptors.request.use(config => {
  config.method === 'post'
    ? config.data = qs.stringify({...config.data})
    : config.params = {...config.params};
  // console.log(config);
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})


service.interceptors.response.use(
  // response => response,

  response => {
    // console.log("拦截器res",response);
    // console.log("拦截器responseType",response.config.responseType );
    // if (response.config.responseType === "blob") {
    //   return response
    // }
    // const res = response.data
    // if (res.status !== 200) {
    //   // 400 :登陆失败; 401 无权限;
    //   if(res.status===400){//登陆失败
    //     Message({
    //       message: res.msg,
    //       type: 'error',
    //       duration: 5 * 1000
    //     });
    //   }
    //   else if (res.status === 401  ) {
    //     // 请自行在引入 MessageBox
    //     // import { Message, MessageBox } from 'element-ui'
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   else if (res.status === -1  ) {
    //     Message({
    //       message: res.msg,
    //       type: 'error',
    //       duration: 5 * 1000
    //     });
    //   }
    //   return Promise.reject(res)
    // } else {
    const res = response.data;
    if(response.data.code===500&& response.data.msg=== "未登录或登录超时。请重新登录"){
      store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      });
      return Promise.reject(res);
    }else
      return response
    // }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
  );

export default service

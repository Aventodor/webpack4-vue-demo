import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data)
  return data
}
/* 添加请求拦截器 */
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
/* 响应拦截器 */
axios.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      // 自定义返回code
    }
    return response.data
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400: err.message = '请求错误(400)'
          break
        case 401: err.message = '未授权，请重新登录(401)'
          break
        case 403: err.message = '拒绝访问(403)'
          break
        case 404: err.message = '请求出错(404)'
          break
        case 408: err.message = '请求超时(408)'
          break
        case 500: err.message = '系统开小差了，请重新提交一下！'
          break
        case 501: err.message = '服务未实现(501)'
          break
        case 502: err.message = '网络错误(502)'
          break
        case 503: err.message = '服务不可用(503)'
          break
        case 504: err.message = '网络超时(504)'
          break
        case 505: err.message = 'HTTP版本不受支持(505)'
          break
        default: err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务器失败!'
    }
    console.log(err.message)
    return Promise.reject(err)
  }
)
export default axios

import axios from 'axios'
import Router from '@/router/index'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const axios1 = axios.create()

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  console.log('开发模式')
  axios1.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'test') {
  console.log('测试模式')
  axios1.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  console.log('生产模式')
  axios1.defaults.baseURL = ''
}
axios1.defaults.timeout = 10000
axios1.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'

// 请求拦截器
axios1.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    token && (config.headers.token = token)
    return config
  },
  (error) => {
    return Promise.error(error)
  }
)

// 响应拦截器 code只是案例 具体code结合后端来定
axios1.interceptors.response.use(
  (response) => {
    console.log('响应拦截器拦截的数据', response)
    // 网络层200
    if (response.status === 200) {
      switch (response.data.code) {
        // 成功
        case 0:
          return Promise.resolve(response)

        // 账号或密码错误
        case 500:
          return Promise.reject(response.data.msg)

        // 登录过期对用户进行提示
        // 清除本地token
        // 跳转登录页面
        case 401:
          MessageBox.confirm('登录过期, 请重新登录?', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          }).then(() => {
            // 清除所有缓存 重新登录
            localStorage.clear()
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            setTimeout(() => {
              Router.replace({
                path: '/login',
                query: {
                  // console.log(this.$router.currentRoute === this.$route) // true
                  // 此时的Router和挂载到Vue原型上的this.$router是一样的
                  redirect: Router.currentRoute.fullPath // 当前所处的页面的path
                }
              })
            }, 1000)
          })
          return Promise.reject(response.data.msg)

        // 其他非0状态
        default:
          if (response.data.code) {
            return Promise.reject(response.data.msg)
          }
      }
    }
  },
  // 网络层状态码不是200的情况
  (error) => {
    if (error.response.status) {
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求 query
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getQuery(url, params) {
  return new Promise((resolve, reject) => {
    axios1
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err = '网络出错') => {
        Message({
          message: err,
          type: 'error',
          duration: 1000
        })
        reject(err)
      })
  })
}

/**
 * get方法，对应get请求 params
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getParams(url, params) {
  const { id } = params
  return new Promise((resolve, reject) => {
    axios1
      .get(`${url}/${id}`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err = '网络出错') => {
        Message({
          message: err,
          type: 'error',
          duration: 1000
        })
        reject(err)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios1
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err = '网络出错') => {
        Message({
          message: err,
          type: 'error',
          duration: 1000
        })
        reject(err)
      })
  })
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios1
      .put(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err = '网络出错') => {
        Message({
          message: err,
          type: 'error',
          duration: 1000
        })
        reject(err)
      })
  })
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function remove(url, params) {
  return new Promise((resolve, reject) => {
    axios1
      .delete(url, {
        params
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err = '网络出错') => {
        Message({
          message: err,
          type: 'error',
          duration: 1000
        })
        reject(err)
      })
  })
}

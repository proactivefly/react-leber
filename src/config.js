import axios from 'axios'
import {Toast} from 'antd-mobile'


/**
 * 请求拦截器
 */
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Toast.loading('加载中',0)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

/**
 * 响应拦截器
 */
axios.interceptors.response.use(function (response) {
    // Do something with response data
    Toast.hide()
    return response; //成功后返回response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

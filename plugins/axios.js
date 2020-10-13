/*
 * @Author: vinc
 * @LastEditTime: 2020-09-29 11:05:55
 */
// import Mint from 'mint-ui';
import {Message} from 'element-ui'
export default function ({ $axios, redirect ,store }) {
  $axios.defaults.timeout = 30000;
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })
  $axios.onResponse(response=>{
    // response.data = data;
    if(response.data.errno) {
      if(response.data.errno == 40202) {
        redirect('/login')
      }
      Message({ message: '请求异常', type: 'warning' })
      // Mint.Toast(response.data.errmsg)
    }
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}

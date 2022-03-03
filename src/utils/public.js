import { Message } from 'element-ui'

import { Base64 } from 'js-base64'

// message
export function myMessage(obj) {
  Message({
    message: obj.message,
    type: obj.type,
    center: true,
    offset: 80,
    duration: obj.duration || 1000
  })
}

// 冻结数据
export function myFreeze(data) {
  return Object.freeze(data)
}

// base64(加密)
export function myBase64(data, isEncode = '加密') {
  if (isEncode === '加密') {
    // 加密
    return Base64.encode(data)
  } else {
    // 解密
    return Base64.decode(data)
  }
}

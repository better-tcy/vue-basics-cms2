import {
  Message
} from 'element-ui';

import {
  Base64
} from "js-base64";

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
    return Base64.encode(data);
  } else {
    // 解密
    return Base64.decode(data);
  }
}


// 判断是否为真图片
export function myImageSecurity(file) {
  let reader = new FileReader();
  reader.readAsText(file);

  let imageStartStr = ''

  let imageIsTrue = true

  let imageFormat = ['PNG', 'JPG', 'JFIF']

  return new Promise((resolve) => {
    reader.onload = function () {
      imageStartStr = this.result.substring(0, 20)

      for (let item of imageFormat) {
        if (imageStartStr.indexOf(item) !== -1) {
          imageIsTrue = true
          break
        } else {
          imageIsTrue = false
        }
      }

      //读取完毕后输出结果
      resolve(imageIsTrue);
    }
  })
}

// 按钮权限
export function myHasBtnPermission(permission) {
  let getBtnPermissionArr = JSON.parse(localStorage.getItem('btnPermission'));
  return getBtnPermissionArr.indexOf(permission) !== -1;
}
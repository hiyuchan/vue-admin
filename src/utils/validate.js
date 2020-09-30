
export function validatePhone(value){
    let regexPhone = /^1([38][0-9]|4[5-9]|5[0-3,5-9]|66|7[0-8]|9[89])[0-9]{8}$/
    return regexPhone.test(value)
}
export function validatePassword(value){
    let regexPass = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{7,17}$/
    return regexPass.test(value)
}

export function validateEmail(value){
    let regexEmail = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return regexEmail.test(value)
}

import { MessageBox } from 'element-ui'
export function $comfirm1(params){
    MessageBox.confirm(params.content, params.tip || "提示", {
        confirmButtonText: "确定",
        cancelButtonText: '取消',
        type: params.type || "warning",
        center: true
    }).then(() => {
        params.fn && params.fn(params.id)
    }).catch(() => {
        
    });
}
import service from 'utils/request'

/**
* 获取验证码
*/
export function getSms(data){
    return service.request({
        method: 'POST',
        url: '/getSms/',
        data
    })
}
/**
 * 登录
 */
export function Login(data){
    return service.request({
        method: 'post',
        url: '/login/',
        data: data
    })
}

/**
 * 注册
 */
export function Register(data){
    return service.request({
        method: 'post',
        url: '/register/',
        data: data
    })
}
// export {getCode}
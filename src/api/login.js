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

// export {getCode}
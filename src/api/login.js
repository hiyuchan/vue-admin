import service from 'utils/request'

/**
* 获取验证码
*/
export function GetCode(data){
    service .request({
        method: 'post',
        url: '/getSms',
        data
    })
    
}

// export {getCode}
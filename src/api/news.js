import service from 'utils/request'
/**
 * 添加一级分类
 */

export function AddFirstCategory(data){
    return service.request({
        method:"post",
        url: "/news/addFirstCategory/",
        data: data
    })
}
/**
 * 获取分类列表·
 */

 export function GetCategoryAll(data){
     return service.request({
         method: 'post',
         url: '/news/getCategoryAll/',
         data
     })
 }
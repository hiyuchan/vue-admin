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

export function AddSecondCategory(data){
    return service.request({
        method: 'post',
        url: '/news/addChildrenCategory/',
        data
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
/**
 * 删除分类
 */
export function DeleteCategory(data){
    return service.request({
        method: 'post',
        url: '/news/deleteCategory/',
        data
    })
}
/**
 * 编辑分类
 */
export function EditCategory(data){
    return service.request({
        method: 'post',
        url: '/news/editCategory/',
        data
    })
}
/**
 * 调用公用数据的接口：
 * 例如: 分类名称，须在多个页面使用
 *
 */

 import { reactive } from '@vue/composition-api'
import { GetCategoryAll } from './news.js'

 export function common(){
    const categoryInfo = reactive({
        item:[]
    })
    const getCategoryInfo = ()=>{
        GetCategoryAll().then((res)=>{
            let data = res.data.data;
            categoryInfo.item = data;
        }).catch((err)=>{
            console.log(err)
        })
    }

    return{
        categoryInfo,
        getCategoryInfo,
    }
 }
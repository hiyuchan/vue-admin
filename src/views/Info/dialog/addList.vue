<template>
    <el-dialog title="新增" :visible.sync="dialogTableVisible" width="530px" @close="close">
        <el-form label-position="right" label-width="80px" :model="listForm">
            <el-form-item label="标题">
                <el-input v-model="listForm.title"></el-input>
            </el-form-item>
            <el-form-item label="类型"> 
                <el-select v-model="cate" placeholder="请选择" style="width: 100%">
                    <el-option v-for="item in cateOption" 
                    :key="item.value" 
                    :label="item.label" 
                    :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="日期">
                <el-input v-model="listForm.date"></el-input>
            </el-form-item>
            <el-form-item label="管理员">
                <el-input v-model="listForm.user"></el-input>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
import { reactive, ref, watch } from '@vue/composition-api'
export default {
    name: "AddList",
    props:{
        flag:{
            type: Boolean,
            defauls: false
        }
    },
    setup(props, {root, emit}){
        /**
         * data
         */
        const dialogTableVisible = ref(false)
        const listForm = reactive({
            title:'',
            cate:'',
            date: '',
            user: ''
        })
        const cate = ref('')
        const cateOption = reactive([
            {value: 1, label: '国际信息1'},
            {value: 2, label: '国际信息2'},
            {value: 3, label: '国际信息3'},
        ])

        const close = ()=>{
            dialogTableVisible.value = false;
            emit("update:flag", false)
        }
        /**
         * watch
         */
        watch(()=> dialogTableVisible.value = props.flag)
        return{
            dialogTableVisible, listForm, cate, cateOption,

            close
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
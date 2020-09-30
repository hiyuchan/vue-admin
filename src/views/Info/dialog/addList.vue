<template>
    <el-dialog title="新增" :visible.sync="dialogTableVisible" width="580px" @close="close">
        <el-form label-position="right" label-width="60px" :model="listForm">
            <el-form-item label="类型"> 
                <el-select v-model="listForm.cate" placeholder="请选择" style="width: 50%">
                    <el-option v-for="item in cateOption" 
                    :key="item.value" 
                    :label="item.label" 
                    :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="listForm.title"></el-input>
            </el-form-item>
             <el-form-item label="概况">
                <el-input type="textarea" size="middle" resize="none" rows="4" v-model="listForm.content"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
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
            user: '',
            content: ''
        })
        // const cate = ref('')
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
        watch(()=>{
            dialogTableVisible.value = props.flag
            
        },(dialogTableVisible,predialogTableVisible)=>{
            console.log(dialogTableVisible),
            console.log(predialogTableVisible)
        })

        
        // watch(()=> {return dialogTableVisible.value = props.flag})
        return{
            //ref 
            dialogTableVisible,
            //ractive
            listForm, cateOption,
            //methods
            close
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
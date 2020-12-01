<template>
    <div id="main-wrap">
        <el-row :gutter="16">
            <el-col :span="4">
                <div class="label-warp category">
                    <label>分类</label>
                    <div class="label-content">
                        <el-select v-model="cate" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in cateOption.category" 
                            :key="item.id" 
                            :label="item.category_name" 
                            :value="item.id"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="label-warp date">
                    <label>日期：&nbsp;&nbsp; </label>
                    <div class="label-content">
                        <el-date-picker
                            style="width: 100%"
                            v-model="time"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份">
                            </el-date-picker>
                    </div>
                </div>
            </el-col>

            <el-col :span="4">
                    <div class="label-warp keyword">
                    <label>关键字：</label>
                    <div class="label-content">
                        <el-select v-model="key_word" placeholder="请选择" style="width: 80%">
                            <el-option v-for="item in keyOption"
                            :key="item.value"
                            :label="item.label" 
                            :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>

            <el-col :span="3">
                    <el-input v-model="key_content" placeholder="请输入内容" style="width: 100%"></el-input>
            </el-col>
            <el-col :span="2">
                    <el-button type="danger" style="width: 100%">搜索</el-button>
            </el-col>
            <el-col :span="2">
                &nbsp;
            </el-col>
            <el-col :span="2" class="pull-right" >
                    <el-button type="success" style="width: 100%" @click="openDialog">新增</el-button>
            </el-col>
        </el-row>

        <div class="block-space-30"></div>
        <!--表格-->
        <el-table :data="tableData" border @selection-change="handleSelectionChange" style="width: 100%; text-align: center ;" >
             <el-table-column type="selection"  width="55"> </el-table-column>
            <el-table-column prop="title" label="标题" width="530"> </el-table-column>
            <el-table-column prop="cate" label="类型" width="130"> </el-table-column>
            <el-table-column prop="date" label="日期" width="200"> </el-table-column>
            <el-table-column prop="user" label="管理员" width="115"> </el-table-column>
            <el-table-column label="操作">
                <div>
                    <el-button type="success" size="mini">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteItem">删除</el-button>
                </div>
            </el-table-column>
        </el-table>
        <div class="block-space-30"></div>
        <!-- 底部 -->
        <div>
            <el-row>
                <el-col :span="8"> <el-button type="danger" size="middle" @click="deleteAll">批量删除</el-button>
                <!-- <el-button type="danger" size="mini" @click="deleteAll1">批量删除</el-button>
                <el-button type="danger" size="mini" @click="checkglobal">删除111</el-button>
                <el-button type="danger" size="mini" @click="checkglobal1">删除222</el-button> -->
                </el-col>
                <el-col :span="16">
                    <el-pagination
                        class="pull-right"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5,10, 20]"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="100">count
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <!--dialog-->
        <add-list :flag.sync="dialogTableVisible" :category="cateOption.category"/>
    </div>
</template>

<script>
import AddList from "./dialog/addList"
import { $confirm1 } from "../../utils/validate.js"
import { global } from "../../utils/global3.0.js"
import { common } from "api/common" //获取分类
import { AddInfo } from "api/news"
import { reactive, ref, isRef, onMounted, watch } from "@vue/composition-api";
export default {
    components:{
        AddList
    },
    setup(props,{root}){
        /**
         * data
         */
        const {str: aaa, confirm: bbb} = global();
        const {str: ccc, confirm: ddd} = global();
        const {categoryInfo, getCategoryInfo } = common();

        const cate = ref('')
        const cateOption = reactive({
            category:[]
        })
        const key_word = ref('ID')
        const key_content = ref('')
        const keyOption = reactive([
            {value: 1, label: 'ID'},
            {value: 2, label: '标签'}
        ])
        const time = ref('')
        const tableData = reactive([
            {
                title:'广州市天河区',
                cate: '国内信息',
                date: '2020-09-18',
                user: '管理员',
            },
            {
                title:'广州市天河区',
                cate: '国内信息',
                date: '2020-09-18',
                user: '管理员',
            },
            {
                title:'广州市天河区',
                cate: '国内信息',
                date: '2020-09-18',
                user: '管理员',
            },
        ])

        const dialogTableVisible = ref(false)
        const currentPage = ref(1)

       /**
        * methods
        */

       const handleSelectionChange = (val)=> {
            console.log(val)
        }
       const handleSizeChange = (val)=>{
           console.log(val)
        }
        const handleCurrentChange = (val)=>{
            console.log(val)
        }
        const openDialog = ()=>{
            dialogTableVisible.value = true;
        }
        const deleteItem = (()=>{
            root.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                root.$message({
                type: 'success',
                message: '删除成功!'
                });
            }).catch(() => {
                root.$message({
                type: 'info',
                message: '已取消删除'
                });
            });
        })
        /**
         * 测试全局方法
         */
        const deleteAll = (()=>{
            root.$confirm({
                content:'是否删除当前信息？',
                tip: "提示",
                type: 'warning',
                id:'1111',
                fn: confirmdelete
            })
        })
        /**
         * 测试单独调用
         */
        const deleteAll1 = (()=>{
            root.$confirm({
                content:'是否删除当前信息？',
                tip: "提示",
                type: 'warning',
                // id:'1111',
                fn: confirmdelete
            })
        })

        /**
         * 测试3.0的全局
         */
        // watch(()=> console.log(aaa.value),(aaa,preaaa)=>{
        //     // console.log(aaa)
        // });
        // watch(()=> console.log(ccc.value));
        // const checkglobal = ()=>{
        //      bbb({
        //         content:'是否删除当前信息？',
        //         tip: "提示",
        //         type: 'warning',
        //         id:'1111',
        //         fn: confirmdelete
        //     });
        // }
        // const checkglobal1 = ()=>{
        //      ddd({
        //         content:'是否删除当前信息？',
        //         tip: "提示",
        //         type: 'warning',
        //         id:'222',
        //         fn: confirmdelete
        //     });
        // }

        // const confirmdelete = ((value)=>{
        //     console.log(`已删除${value}`)
        // })

        onMounted(()=>{
            getCategoryInfo()
        })

        /**
         * watch
         */
        watch(()=>categoryInfo.item,(value)=>{
            cateOption.category = value
        })
        return{
            //data
            cate,  time, key_word, currentPage, dialogTableVisible,key_content,
            //reactive
            cateOption,  keyOption, tableData,
            //methods
            handleSelectionChange, handleSizeChange, handleCurrentChange, openDialog,deleteItem, deleteAll
        }  
    }
}
</script>

<style lang="scss" scoped>
    .label-warp{
        &.category{ @include labelDom(left, 50, 40) }
        &.date{ 
            @include labelDom(right, 93, 40)
        }
        &.keyword{
            @include labelDom(right, 80, 40)
        }
    }

   
</style>
<template>
    <div id="main-wrap">
        <el-row :gutter="16">
            <el-col :span="4">
                <div class="label-warp category">
                    <label>类型：</label>
                    <div class="label-content">
                        <el-select v-model="cate" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in cateOption" 
                            :key="item.value" 
                            :label="item.label" 
                            :value="item.value"></el-option>
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
                        <el-select v-model="key_word" placeholder="请选择" style="width: 100%">
                            <el-option v-for="item in keyOption"
                            :key="item.value"
                            :label="item.label" 
                            :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>

            <el-col :span="3">
                    <el-input v-model="key_word" placeholder="请输入内容" style="width: 100%"></el-input>
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
                    <el-button type="danger" size="mini">删除</el-button>
                </div>
            </el-table-column>
        </el-table>
        <div class="block-space-30"></div>
        <!-- 底部 -->
        <div>
            <el-row>
                <el-col :span="8"> <el-button type="danger" size="middle">批量删除</el-button></el-col>
                <el-col :span="16">
                    <el-pagination
                        class="pull-right"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5,10, 20]"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="100">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <!--dialog-->
        <add-list :flag.sync="dialogTableVisible"/>
    </div>
</template>

<script>
import AddList from "./dialog/addList"
import { reactive, ref, isRef, onMounted } from "@vue/composition-api";
export default {
    components:{
        AddList
    },
    setup(){
        /**
         * data
         */
        const cate = ref('')
        const cateOption = reactive([
            {value: 1, label: '国际信息1'},
            {value: 2, label: '国际信息2'},
            {value: 3, label: '国际信息3'},
        ])
        const key_word = ref('ID')
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
            // {
            //     title:'广州市天河区',
            //     cate: '国内信息',
            //     date: '2020-09-18',
            //     user: '管理员',
            // },
            // {
            //     title:'广州市天河区',
            //     cate: '国内信息',
            //     date: '2020-09-18',
            //     user: '管理员',
            // },
            // {
            //     title:'广州市天河区',
            //     cate: '国内信息',
            //     date: '2020-09-18',
            //     user: '管理员',
            // }
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
        return{
            //data
            cate, cateOption, time, key_word, keyOption, tableData, currentPage, dialogTableVisible,
            // dialogTableVisible,
            // formLabelAlign,
            //methods
            handleSelectionChange, handleSizeChange, handleCurrentChange, openDialog
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
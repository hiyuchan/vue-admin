<template>
  <div id="category">
    <el-button type="danger" @click="addFirstHandle">添加一级按钮</el-button>
    <hr
      style="margin: 30px -30px;height: 2px; background-color: #e9e9e9; border:none"
    />
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-wrap">
            <div
              class="category"
              v-for="firstItem in category.item"
              :key="firstItem.id"
            >
              <h4>
                <svg-icon iconName="plus" />
                {{ firstItem.category_name }}
                <div class="button-group">
                  <el-button type="success" size="mini" round>编辑</el-button>
                  <el-button type="primary" size="mini" round @click="addSecondHandle(firstItem)"
                    >添加子级</el-button
                  >
                  <el-button
                    type="danger"
                    size="mini"
                    round
                    @click="deleteCategory(firstItem.id)"
                    >删除</el-button
                  >
                </div>
              </h4>
              <ul v-if="firstItem.children">
                <li v-for="child in firstItem.children" :key="child.id">
                  {{ child.category_name }}
                  <div class="button-group">
                    <el-button type="success" size="mini" round>编辑</el-button>
                    <el-button type="danger" size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="category">
                            
                            <h4>
                                <svg-icon iconName="minu" />
                                新闻
                                <div class="button-group">
                                    <el-button type="success" size="mini" round>编辑</el-button>
                                    <el-button type="primary" size="mini" round>添加子级</el-button>
                                    <el-button type="danger" size="mini" round>删除</el-button>
                                </div>
                            </h4>
                            <ul>
                                <li>
                                    国内
                                    <div class="button-group">
                                        <el-button type="success" size="mini" round>编辑</el-button>
                                        <el-button type="danger" size="mini" round>删除</el-button>
                                    </div>    
                                <li>
                                    国内
                                    <div class="button-group">
                                        <el-button type="success" size="mini" round>编辑</el-button>
                                        <el-button type="danger" size="mini" round>删除</el-button>
                                    </div>    
                                </li>
                                <li>
                                    国内
                                    <div class="button-group">
                                        <el-button type="success" size="mini" round>编辑</el-button>
                                        <el-button type="danger" size="mini" round>删除</el-button>
                                    </div>    
                                </li>
                                <li>
                                    国内
                                    <div class="button-group">
                                        <el-button type="success" size="mini" round>编辑</el-button>
                                        <el-button type="danger" size="mini" round>删除</el-button>
                                    </div>    
                                </li>
                            </ul>
                        </div> -->
          </div>
        </el-col>
        <el-col :span="16">
          <h4>一级分类编辑</h4>

          <el-form
            label-width="120px"
            class="form-wrap"
            :model="formData"
            ref="submitForm"
          >
            <el-form-item label="一级分类名称" v-if="addFirst">
              <el-input
                placeholder="请输入一级分类名称"
                v-model="formData.first"
                :disabled="firstDisable"
              ></el-input>
            </el-form-item>
            <el-form-item label="二级分类名称" v-if="addSecond">
              <el-input
                placeholder="请输入二级分类名称"
                v-model="formData.second"
                :disabled="secondDisable"
              ></el-input>
            </el-form-item>
            <el-form-item
              ><el-button
                type="danger"
                @click="submit"
                :loading="submit_loading"
                :disabled="submitDisable"
                >确定</el-button
              ></el-form-item
            >
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch, onMounted } from "@vue/composition-api";
import {
  AddFirstCategory,
  AddSecondCategory,
  GetCategoryAll,
  DeleteCategory,
  EditCategory, 
} from "api/news";
import { global } from "../../utils/global3.0.js";
export default {
  setup(prop, { refs, root }) {
    const { confirm } = global();
    const formData = reactive({
      first: "",
      second: ""
    });
    const addFirst = ref(true);
    const addSecond = ref(true);
    const submit_loading = ref(false);
    const submit_button_type = ref('');
    const category = reactive({
      item: [],
      currentItem: []
    });
    const firstDisable = ref(true);
    const secondDisable = ref(true);
    const submitDisable = ref(true);
    /**
     * methods
     */
    const addFirstHandle = () => {
      addFirst.value = true;
      addSecond.value = false;
      firstDisable.value = false;
      submitDisable.value = false;
      submit_button_type.value = 'add_first'
    };
    const addSecondHandle = (item)=>{
        addSecond.value = true;
        formData.first = item.category_name;
        firstDisable.value = true;
        secondDisable.value = false;
        submitDisable.value = false;
        submit_button_type.value = 'add_second';
        category.currentItem = item;
    }
    const submit = () => {
        if(submit_button_type.value == 'add_first'){
            submitAddFirst();
        }
        if(submit_button_type.value == 'add_second'){
            submitAddSecond(category.currentItem)
        }
    };
    //提交添加一级分类
    const submitAddFirst = ()=>{
        if (formData.first === "") {
        root.$message({
            message: "分类名不能为空",
            type: "error"
            });
            return;
        }
        submit_loading.value = true;
        AddFirstCategory({
            categoryName: formData.first
         })
        .then(res => {
          let data = res.data;
          root.$message({
            message: data.message,
            type: "success"
          });
          category.item.push(data.data);
          submit_loading.value = false;
          formData.first = "";
        })
        .catch(err => {
          submit_loading.value = false;
          console.log(err);
        });
    }
    //提交添加二级分类
    const submitAddSecond = (item)=>{
        if (formData.second === "") {
            root.$message({
                message: "分类名不能为空",
                type: "error"
            });
            return;
        }
        submit_loading.value = true;
        AddSecondCategory({
            categoryName: formData.second,
            parentId: item.id
         })
        .then(res => {
          let data = res.data;
          root.$message({
            message: data.message,
            type: "success"
          });
        //   category.item.unshift(data.data);
        let index = category.item.findIndex((el)=>el.id == item.id);
        category.item[index].children = data.data
        
        submit_loading.value = false;
        formData.second = "";
        })
        .catch(err => {
          submit_loading.value = false;
          console.log(err);
        });
    }
    const GetCategory = () => {
      GetCategoryAll().then(res => {
        category.item = res.data.data;
      });
    };

    const deleteCategory = id => {
      confirm({
        content: "是否删除该分类？",
        tip: "提示",
        type: "warning",
        id: id,
        fn: deleteConfirm
      });
    };

    const deleteConfirm = id => {
      DeleteCategory({ categoryId: id })
        .then(res => {
          let index = category.item.findIndex(item => item.id == id);
          category.item.splice(index, 1);
          let msg = res.data.message;
          root.$message({
            message: msg,
            type: "success"
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
    /**
     * onMounted
     */
    onMounted(() => {
      GetCategory();
    });
    return {
      /** ref */
      addFirst,
      addSecond,
      submit_loading,
      firstDisable,
      secondDisable,
      submitDisable,
      /** ractive */
      formData,
      category,
      /** methods */
      submit, 
      addFirstHandle, addSecondHandle,
      deleteCategory
    };
  }
};
</script>

<style lang="scss" scoped>
.category-wrap {
  // height: 100%;
  .category {
    position: relative;
    &:first-child {
      &:before {
        top: 26px;
      }
    }
    &:last-child {
      &:before {
        bottom: 21px;
      }
    }
    &:before {
      position: absolute;
      content: "";
      left: 20px;
      top: 0;
      bottom: 0;
      width: 32px;
      border-left: 1px dotted #000;
    }
    svg {
      position: absolute;
      font-size: 14px;
      left: 14px;
      padding-right: 0px;
      top: 14px;
      background-color: #fff;
    }
  }
}
h4 {
  position: relative;
  padding-left: 40px;
}
li {
  position: relative;
  padding-left: 40px;
  margin-left: 20px;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 22px;
    width: 32px;
    border-bottom: 1px dotted #000;
  }
}

h4,
li {
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .button-group {
    padding-right: 10px;
    display: none;
    button {
      font-size: 12px;
      padding: 5px 10px;
    }
  }
  &:hover {
    @include webkit(transition, 0.5s ease 0);
    background-color: #f3f3f3;
    .button-group {
      @include webkit(transition, 0.5s ease 0);
      display: block;
    }
  }
}
.form-wrap {
  width: 410px;
  margin-top: 20px;
}
</style>
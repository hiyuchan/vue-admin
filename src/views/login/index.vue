<template>
  <div class="login-page">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="(item, index) in menuTab"
          :key="index"
          :class="{'current-tab': currentTab == item.value}"
          @click="toggleTab(item)"
        >{{item.text}}</li>
      </ul>

      <!--登录表单-->
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginRules"
        ref="loginForm"
        class="login-form"
        size="medium "
      >
        <el-form-item prop="email" class="item-form">
          <label for="username">邮箱</label>
          <el-input id="username" v-model="loginForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass" class="item-form">
          <label for="password">密码</label>
          <el-input id="password" type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="item-form" v-show="currentTab==1">
          <label for="checkPass">确认密码</label>
          <el-input id="checkPass" type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="item-form" prop="code">
          <label for="code">验证码</label>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input id="code" v-model.number="loginForm.code"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success" class="get-code" @click="getCode()">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" :disabled = 'loginButtonStatus' class="submit" @click="submitForm('loginForm')">{{currentTab==0?'登录':'注册'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {getSms} from 'api/login'
import { validatePassword, validateEmail } from "utils/validate";
import { reactive, ref, isRef, onMounted } from "@vue/composition-api";
export default {
  setup(props, {refs, root}) {
    /**
     * console.log(context)
     * attrs: Object ==this.$attrs
     *emit: ƒ () ==this.$emit
      isServer: false == this.$isServer
      listeners: Object == this.$listeners
      parent: VueComponent == this.parent
      refs: Object == this.refs
      root: Vue == this
      slots: {}
     */
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱地址"));
      } else if (!validateEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!validatePassword(value)) {
        callback(new Error("密码格式为8-18位的数字和字母或_,至少包含两项"));
      } else {
        callback();
      }
    }
    let validateCode = (rule, value, callback) => {
      let regex = /^[a-z0-9]{6}$/;
      if (!value) {
        callback(new Error("请输入验证码"));
      } else if (!regex.test(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    }
    let validateCheckPass = (rule, value, callback) => {
      if (currentTab.value === 0) {
        //当前为登录表时，直接通过
        callback();
      } else {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== loginForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      }
    }

    //data数据
    const menuTab = reactive([{ text: "登录", value: 'login' }, { text: "注册", value: 'register' }]);
    const loginButtonStatus = ref(true);  //登录按钮状态
    const codeButtonStatus = ref(false); //获取验证码按钮状态
    const currentTab = ref('login');
    const loginForm = reactive({
        email: "",
        pass: "",
        checkPass: "",
        code: ""
      })
    const loginRules = reactive({
        email: [{ validator: validateUsername, trigger: 'blur'}],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      })
    
    
    //methods

    const toggleTab = (item) => {
      refs['loginForm'].resetFields();
      currentTab.value = item.value;
      
    }
    /**
     * 获取验证码
     */
    const getCode = (()=>{
      if(!loginForm.email){
        root.$message({
          showClose: true,
          message: '邮箱不能为空',
          type: 'error'
        });
        return false
      }
      if (!validateEmail(loginForm.email)){
        root.$message({
          showClose: true,
          message: '请输入正确的邮箱格式',
          type: 'error'
        });
        return false
      }
      getSms({username: loginForm.email,module: currentTab.value})
      .then(res =>{
        let data = res.data;
        root.$message({
          message: data.message,
          type: 'success'
        })
      }).catch(err=>{
        console.log(err)
      });
    })
    /**
     * 提交表单
     */
    const submitForm = (formName => {


      axios.post('/user',{
        firstName: "hiyu",
        lastName: "chen"
      })
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    })

    //onMounted
    onMounted(() => {
      //判断环境
      console.log(process.env.VUE_APP_ABC)
    });

    return {
      menuTab,
      loginButtonStatus,
      currentTab,
      loginRules,
      loginForm,

      toggleTab,
      getCode,
      submitForm

    };
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  background-color: $theme-color;
  height: 100vh;
  .login-wrap {
    width: 330px;
    margin: 0 auto;
    padding-top: 100px;
    // position: relative;
    // top: 50%;
    // transform: translateY(-50%);
    .menu-tab {
      text-align: center;
      li {
        display: inline-block;
        width: 88px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 6px;
        cursor: pointer;
        &.current-tab {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  .login-form {
    margin-top: 30px;
    .item-form {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
      }
    }
    .get-code {
      display: block;
      width: 100%;
      height: 36px;
    }
    .submit {
      display: block;
      width: 100%;
      height: 38px;
      margin-top: 30px;
    }
  }
}
</style>
<template>
  <div class="login-page">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{'current-tab': currentTab==index}"
          v-for="(item, index) in menuTab"
          :key="index"
          @click="toggleTab(index)"
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
          <label>邮箱</label>
          <el-input v-model="loginForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass" class="item-form">
          <label>密码</label>
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="item-form" v-show="currentTab==1">
          <label>确认密码</label>
          <el-input type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="item-form" prop="code">
          <label>验证码</label>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input v-model.number="loginForm.code"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success" class="get-code" @click="getCode1()">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="submit" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {GetCode} from 'api/login'
import { validatePassword } from "utils/validate";
import { reactive, ref, isRef, onMounted } from "@vue/composition-api";
export default {
  setup(props, context) {

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
      let regex = /^[0-9]{6}$/;
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
    const menuTab = reactive([{ text: "登录" }, { text: "注册" }]);
    const currentTab = ref(0);
    
    const loginForm = reactive({
        email: "",
        pass: "",
        checkPass: "",
        code: ""
      })
    const loginRules = reactive({
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: ["blur", "change"] }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      })
    
    
    //methods

    const toggleTab = (index) => {
      currentTab.value = index;
    }
    /**
     * 获取验证码
     */
    const getCode1 = (()=>{
      GetCode({username:'1289911921@qq.com'});
    })
    /**
     * 提交表单
     */
    const submitForm = (formName => {
      // axios.get('/user?id=12345')
      // .then(res=>{
      //   console.log(res)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })

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
      // context.refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    })

    //onMounted
    onMounted(() => {
      //判断环境
      console.log(process.env.VUE_APP_ABC)
    });

    return {
      menuTab,
      currentTab,
      loginRules,
      loginForm,

      toggleTab,
      getCode1,
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
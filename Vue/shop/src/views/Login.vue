<template>
  <div class="login">
    <!-- <h1>login page</h1> -->
    <!-- header -->
    <s-header :name="type == 'login' ? '登陆' : '注册'"></s-header>
    <!-- 写死时直接name="登陆"。不写死就v-bind 或:name= -->
    <img
      class="logo"
      src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      alt=""
    />
    <!-- 登陆 -->
    <div v-if="type == 'login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <vue-img-verify ref="verifyRef"/>
          </template>
        </van-field>

        <div style="margin: 16px">
          <div class="link-register" @click="changePage">立即注册</div>
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>

    <!-- 注册 -->
    <div v-if="type == 'register'" class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <vue-img-verify ref="verifyRef"/>
          </template>
        </van-field>

        <div style="margin: 16px">
          <div class="link-register" @click="changePage">已有登录账号</div>
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader.vue";
import vueImgVerify from "@/components/VueImgVerify";
import { reactive, toRefs,ref } from "vue";
import {register,login} from '@/service/user'
import {Toast} from 'vant'
import md5 from 'js-md5'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router=useRouter();
    const verifyRef=ref(null)
    const state = reactive({
      username: "",
      password: "",
      username1: "",
      password1: "",
      verify: "",
      type: "login",
    });
    function changePage(){
      // console.log(state.type);
      state.type=(state.type=="register"?"login":"register");
      // console.log(state.type);
    };
    //登陆注册
    const onSubmit=async()=>{
      console.log(verifyRef.value.imgCode);//通过ref.value可以取到组件内setup函数的返回值,即验证码的值
      //接着判断验证码对不对，通过 v-model="verify" 获得输入值
      if(state.verify.toLowerCase()!==verifyRef.value.imgCode.toLowerCase()){
        Toast.fail('验证码有误')
        return //然面终止，不运行
      }
      if(state.type=='login'){
         const {data} =await login({//后端会返回一个token
          'loginName':state.username,
          'passwordMd5':md5(state.password)//使用md5加密 密码
        }) 
        Toast.success('登陆成功')
        // console.log(data,"登陆成功");//看看返回值
        //将token存入localStorage
        localStorage.setItem('token',data);
        router.push({path:'/Home'});
      }else{
        await register({//这个register只是发送请求给后端的
          'loginName':state.username1,//key名是后端固定的
          'password':state.password1
        })
        Toast.success('注册成功');
        state.type='login';
      }
    }

    return {
      ...toRefs(state),
      changePage,
      onSubmit,
      verifyRef
    };
  },
  components: {
    sHeader,
    vueImgVerify,
  },
};
</script>

<style lang="less">
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>

<template>
  <div class="main">
    <div class="loginBg">
      <img src="./../../assets/login-bg.png" alt=""></div>
    <div class="loginMain">
      <img class="login-title" src="./../../assets/login-title.png" alt="">
      <div class="login-form">
        <el-form ref="form" :model="loginForm" :rules="rules" style="width: 100%; padding-top: 10px;">
          <el-form-item label="" prop="username">
            <el-input size="medium"  class="login-input" v-model="loginForm.username" autofocus clearable placeholder="用户名"  prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label=""  prop="password">
            <el-input size="medium"  class="login-input" type="password" v-model="loginForm.password" clearable placeholder="密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="">
            <div class="tip">{{tipMsg}}</div>
            <el-button :loading="loading"  class="btn-login" @click="doLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginForm:{
          username:'',
          password:'',
        },
        tipMsg:'',
        loading: false,
        rules:{
          username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
    },
    created(){
    },
    methods:{
      doLogin(){
        let reqData = this.$qs.stringify(this.loginForm);
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.loading = true;
            if(this.browserRedirect()){
              this.$message.info('电脑');

              this.$router.push('/pHome/a')
            }else{
              this.$message.info('手机');
              this.$router.push('/mHome/ComtList')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  .main {width: 100%;height: 100%;position: relative;}
  .loginBg {display: block;width: 100%;height:100%;}
  .loginBg img {width: 100%;height: 100%;display: block;}
  .loginMain {position: absolute;left:0;width: 100%;top: 20%;
    .login-title{ width: 70%; margin: auto; display: block; max-width: 400px;}
    .login-form {display: flex;justify-content: space-between;width: 90%; max-width:460px;
      margin: 15px auto 0;
      padding:20px 20px;box-sizing: border-box;border-radius: 28px;background-color: #fff;box-shadow: 1px 1px 15px rgba(134, 134, 134, 0.19);

      .login-input{
        width: 100%;}
      .btn-login{width:100%;height:40px;padding:0 20px;line-height:40px;border:1px solid #cedaec;border-radius:40px;outline:none;box-sizing:border-box;}
      .btn-login{margin-top:20px;background:#3950D9;color:#fff;cursor:pointer;font-size: 24px;letter-spacing: 8px;}
      .btn-login:hover {background:#3950D9;}
      .tip {position: absolute;top:-10px;left:0;width: 100%;text-align: center;color:red;}

    }
  }

  @media (min-device-width:800px) {
          .login-form{  padding:20px 60px!important;}
  }
</style>
<style>
  .login-form .el-input__inner {height:40px;line-height:40px; background: #fff!important; border: none!important; border-bottom: 1px solid #ddd!important;}
  .login-form .el-input__prefix {font-size: 25px;}
</style>

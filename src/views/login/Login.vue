<template>
  <div class="main">
    <div class="loginBg"> </div>
    <div class="loginMain">

      <div class="loginForm">

        <div class="rightForm">
          <el-form ref="form" :model="loginForm" :rules="rules">
            <el-form-item label="" prop="username">
              <el-input size="medium"  class="login-input" v-model="loginForm.username" autofocus clearable placeholder="用户名"  suffix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item label=""  prop="password">
              <el-input size="medium" class="login-input" type="password" v-model="loginForm.password" clearable placeholder="密码" suffix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item label="">
              <div class="tip">{{tipMsg}}</div>
              <el-button :loading="loading"  class="login" @click="doLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <p class="copyright"> 版权所有：上海众毅工业控制技术有限公司 <br/> <br/>地址：上海市制造局路210号2楼 邮政编码：200020 <span style="margin:0 10px;"></span>Shanghai ZhongYi Industrial Controls CO.,LTD <br/></p>
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


<style scoped>
  .main {width: 100%;height: 100%;position: relative;}
  .loginBg {display: block;width: 100%;height:630px;}
  .loginBg img {width: 100%;height: 100%;display: block;}
  .loginMain {position: absolute;left:0;width: 100%;top: 330px;}
  .loginLogo {display: block;margin: 0 auto;height: 80px;}
  .loginForm {display: flex;justify-content: space-between;width: 1100px;height: 270px;margin: 15px auto 0;padding:0 130px;box-sizing: border-box;border-radius: 18px;background-color: #fff;box-shadow: 1px 1px 15px rgba(80, 109, 123, 0.19);}
  .leftImg {display: block;margin: 10px 0;}
  .rightForm {margin-right: 20px;width: 320px;padding-top: 45px;}
  .login{width:100%;height:40px;padding:0 20px;line-height:40px;border:1px solid #cedaec;border-radius:40px;outline:none;box-sizing:border-box;}
  .login{margin-top:20px;background:#347bbb;color:#fff;cursor:pointer;font-size: 24px;letter-spacing: 8px;}
  .login:hover {background:#4493db;}
  .copyright{ width:100%; text-align:center; color:#c0c0c0; font-size:14px; position:absolute; bottom:9%;}
  .tip {position: absolute;top:-10px;left:0;width: 100%;text-align: center;color:red;}
  @media (max-device-height:1000px) {
    .loginBg{height: 500px;}
    .loginMain {top:260px;}
    .loginLogo {height: 70px;}
    .copyright {bottom:6%;}
  }

  @media (max-device-height:900px) {
    .loginBg{height: 480px;}
    .loginMain {top:250px;}
    .loginLogo {height: 70px;}
    .copyright {bottom:5%;}
  }

  @media (max-device-height:800px) {
    .loginBg{height: 350px;}
    .loginMain {top:180px;}
    .loginLogo {height: 60px;}
    .copyright {bottom:3%;}
  }
</style>
<style>
  .rightForm .el-input__inner {height:40px;line-height:40px;border-radius:40px;}
  .rightForm .el-input__suffix {font-size: 20px;}
</style>
